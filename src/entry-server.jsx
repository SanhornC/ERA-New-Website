import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom/server.js'
import { AppContent } from './App'
import { INDEXABLE_ROUTES } from './seo/routes'

export const routes = INDEXABLE_ROUTES

export const render = (url) => {
  const helmetContext = {}
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppContent />
      </StaticRouter>
    </HelmetProvider>,
  )

  return {
    appHtml,
    helmet: helmetContext.helmet,
  }
}
