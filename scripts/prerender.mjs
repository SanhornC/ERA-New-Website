import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import process from 'node:process'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDirectory = resolve(projectRoot, 'dist')
const serverEntry = resolve(projectRoot, 'dist-ssr', 'entry-server.js')

const titlePattern = /[ \t]*<title>[\s\S]*?<\/title>\r?\n?/i
const rootElement = '<div id="root"></div>'
const siteOrigin = 'https://eralaw.web.app'

const elementsMatching = (document, tagName) => (
  document.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || []
)

const attributeValue = (element, attributeName) => {
  const match = element.match(new RegExp(`\\b${attributeName}=(['"])(.*?)\\1`, 'i'))
  return match?.[2]
}

const elementsWithAttribute = (document, tagName, attributeName, expectedValue) => (
  elementsMatching(document, tagName).filter((element) => (
    attributeValue(element, attributeName)?.toLowerCase() === expectedValue.toLowerCase()
  ))
)

const hasNonEmptyElement = (document, tagName, attribute = '') => {
  const match = document.match(
    new RegExp(`<${tagName}\\b${attribute}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'),
  )
  return Boolean(match?.[1].replace(/<[^>]+>/g, '').trim())
}

const validateIndexableDocument = (document, route) => {
  const titles = elementsMatching(document, 'title')
  const descriptions = elementsWithAttribute(document, 'meta', 'name', 'description')
  const robots = elementsWithAttribute(document, 'meta', 'name', 'robots')
  const canonicals = elementsWithAttribute(document, 'link', 'rel', 'canonical')
  const expectedCanonical = `${siteOrigin}${route === '/' ? '/' : route}`
  const robotDirectives = attributeValue(robots[0] || '', 'content')
    ?.toLowerCase()
    .split(',')
    .map((directive) => directive.trim())

  const failures = [
    titles.length !== 1 && `expected one title, found ${titles.length}`,
    !hasNonEmptyElement(document, 'title') && 'title is empty',
    descriptions.length !== 1 && `expected one description, found ${descriptions.length}`,
    descriptions.length === 1
      && !attributeValue(descriptions[0], 'content')?.trim()
      && 'description is empty',
    canonicals.length !== 1 && `expected one canonical, found ${canonicals.length}`,
    canonicals.length === 1
      && attributeValue(canonicals[0], 'href') !== expectedCanonical
      && `canonical is not self-referencing (${attributeValue(canonicals[0], 'href')})`,
    robots.length !== 1 && `expected one robots tag, found ${robots.length}`,
    robots.length === 1
      && (
        !robotDirectives?.includes('index')
        || !robotDirectives.includes('follow')
        || robotDirectives.includes('noindex')
        || robotDirectives.includes('nofollow')
      )
      && `robots tag is not index, follow (${attributeValue(robots[0], 'content')})`,
    document.includes('class="notfound"') && 'rendered NotFound content for an indexable route',
    !hasNonEmptyElement(document, 'h1') && 'h1 is missing or empty',
    !hasNonEmptyElement(document, 'div', "(?=[^>]*\\bid=['\"]root['\"])") && 'root content is empty',
  ].filter(Boolean)

  if (failures.length > 0) {
    throw new Error(`SEO invariant failed for ${route}: ${failures.join('; ')}`)
  }
}

const validateNotFoundDocument = (document) => {
  const robots = elementsWithAttribute(document, 'meta', 'name', 'robots')
  const canonicals = elementsWithAttribute(document, 'link', 'rel', 'canonical')
  const directives = attributeValue(robots[0] || '', 'content')
    ?.toLowerCase()
    .split(',')
    .map((directive) => directive.trim())
  const failures = [
    robots.length !== 1 && `expected one robots tag, found ${robots.length}`,
    robots.length === 1 && !directives?.includes('noindex') && 'robots tag is missing noindex',
    canonicals.length !== 0 && `expected no canonical, found ${canonicals.length}`,
    !hasNonEmptyElement(document, 'h1') && 'h1 is missing or empty',
    !hasNonEmptyElement(document, 'div', "(?=[^>]*\\bid=['\"]root['\"])") && 'root content is empty',
  ].filter(Boolean)

  if (failures.length > 0) {
    throw new Error(`SEO invariant failed for 404.html: ${failures.join('; ')}`)
  }
}

// The sitemap is generated from the same route list that is prerendered, so a
// new page can never be missing from it.
const writeSitemap = async (routes) => {
  const urls = routes.map((route) => {
    const loc = `${siteOrigin}${route === '/' ? '/' : route}`
    const depth = route === '/' ? 0 : route.split('/').length - 1
    const priority = route === '/' ? '1.0' : depth === 1 ? '0.8' : '0.6'
    return `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`
  })

  if (new Set(urls).size !== urls.length) {
    throw new Error('Sitemap invariant failed: duplicate routes')
  }

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n')

  await writeFile(resolve(distDirectory, 'sitemap.xml'), sitemap, 'utf8')
}

const helmetHead = (helmet) => [
  helmet.title.toString(),
  helmet.meta.toString(),
  helmet.link.toString(),
  helmet.style.toString(),
  helmet.script.toString(),
  helmet.noscript.toString(),
].filter(Boolean).join('\n    ')

const outputFileForRoute = (route) => {
  if (route === '/') return resolve(distDirectory, 'index.html')

  const relativeRoute = route.replace(/^\/+/, '')
  if (!/^[a-z0-9/-]+$/.test(relativeRoute)) {
    throw new Error(`Unsafe prerender route: ${route}`)
  }

  return resolve(distDirectory, `${relativeRoute}.html`)
}

const renderDocument = (template, render, route, validate) => {
  const { appHtml, helmet } = render(route)
  const head = helmetHead(helmet)

  if (!appHtml || !head) {
    throw new Error(`Prerender produced incomplete output for ${route}`)
  }

  const withoutBaselineTitle = template.replace(titlePattern, '')
  const withHead = withoutBaselineTitle.replace('</head>', `    ${head}\n  </head>`)
  const document = withHead.replace(rootElement, `<div id="root">${appHtml}</div>`)

  if (document === withHead) {
    throw new Error('Could not find the root element placeholder in dist/index.html')
  }

  const completeDocument = `<!doctype html>${document.split(/<!doctype html>/i).pop()}`
  validate(completeDocument, route)
  return completeDocument
}

export const prerender = async () => {
  process.env.NODE_ENV = 'production'

  const template = await readFile(resolve(distDirectory, 'index.html'), 'utf8')
  const serverModule = await import(pathToFileURL(serverEntry).href)
  const { render, routes } = serverModule

  if (typeof render !== 'function' || !Array.isArray(routes) || routes.length === 0) {
    throw new Error('The server entry must export render() and a non-empty routes array')
  }

  await writeSitemap(routes)

  await Promise.all(routes.map(async (route) => {
    const outputFile = outputFileForRoute(route)
    await mkdir(dirname(outputFile), { recursive: true })
    try {
      await writeFile(
        outputFile,
        renderDocument(template, render, route, validateIndexableDocument),
        'utf8',
      )
    } catch (error) {
      throw new Error(`Failed to prerender ${route}`, { cause: error })
    }
  }))

  const notFoundFile = resolve(distDirectory, '404.html')
  await writeFile(
    notFoundFile,
    renderDocument(template, render, '/404-not-found', validateNotFoundDocument),
    'utf8',
  )

  return { routeCount: routes.length, notFoundFile }
}
