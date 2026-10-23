import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  createRouteStructuredData,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_WIDTH,
  ROUTE_SEO,
  SITE_NAME,
  SITE_ORIGIN,
} from './routes'

const normalizePathname = (pathname) => {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '')
  return normalized || '/'
}

const RouteSeo = () => {
  const { pathname } = useLocation()
  const normalizedPathname = normalizePathname(pathname)
  const seo = ROUTE_SEO[normalizedPathname]

  if (!seo) {
    return (
      <Helmet>
        <title>{`找不到此頁面 | ${SITE_NAME}`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    )
  }

  const canonicalUrl = `${SITE_ORIGIN}${normalizedPathname === '/' ? '/' : normalizedPathname}`
  const structuredData = createRouteStructuredData(normalizedPathname, seo, canonicalUrl)

  return (
    <Helmet>
      <html lang="zh-Hant-TW" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:alt" content={`${SITE_NAME}辦公室招牌`} />
      <meta property="og:image:width" content={String(DEFAULT_IMAGE_WIDTH)} />
      <meta property="og:image:height" content={String(DEFAULT_IMAGE_HEIGHT)} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content={`${SITE_NAME}辦公室招牌`} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default RouteSeo
