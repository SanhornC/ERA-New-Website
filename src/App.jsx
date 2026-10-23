import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Advantage from './pages/Advantage/Advantage'
import ContactUs from './pages/ContactUs/ContactUs'
import Events from './pages/Events/Events'
import EventDetail from './pages/Events/Events_components/EventDetail'
import Footer from './pages/Footer/Footer'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar'
import Related from './pages/Related/Related'
import ServiceArea from './pages/ServiceArea/ServiceArea'
import Lawyer_Huang from './pages/Team/Lawyer/Lawyer_Huang'
import Lawyer_Wang from './pages/Team/Lawyer/Lawyer_Wang'
import Team from './pages/Team/Team'
import MLawyer from './pages/Team/team_components/MLawyer'
import NotFound from './pages/NotFound/NotFound'
import Privacy from './pages/Legal/Privacy'
import Terms from './pages/Legal/Terms'
import ServiceDetail from './pages/ServiceArea/ServiceDetail'
import { ScrollRestoration, ScrollToTopButton } from './pages/ScrollToTop'
import { eventPages, eventPath } from './data/events'
import { servicePath, services } from './data/services'
import RouteSeo from './seo/RouteSeo'
import { INDEXABLE_ROUTES } from './seo/routes'

const APP_ROUTES = [
  { path: '/', component: Home },
  { path: '/about', component: Advantage },
  { path: '/services', component: ServiceArea },
  ...services.map(({ slug }) => ({
    path: servicePath(slug),
    element: <ServiceDetail slug={slug} />,
  })),
  { path: '/team', component: Team },
  { path: '/lawyer/1', component: MLawyer },
  { path: '/lawyer/2', component: Lawyer_Wang },
  { path: '/lawyer/3', component: Lawyer_Huang },
  { path: '/related', component: Related },
  { path: '/events', component: Events },
  ...eventPages.map((event) => ({
    path: eventPath(event.id),
    element: <EventDetail event={event} />,
  })),
  { path: '/contactus', component: ContactUs },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
]

const appRoutePaths = APP_ROUTES.map(({ path }) => path)
const duplicateAppRoutes = appRoutePaths.filter((path, index) => appRoutePaths.indexOf(path) !== index)
const missingSeoRoutes = appRoutePaths.filter((path) => !INDEXABLE_ROUTES.includes(path))
const missingAppRoutes = INDEXABLE_ROUTES.filter((path) => !appRoutePaths.includes(path))

if (duplicateAppRoutes.length > 0 || missingSeoRoutes.length > 0 || missingAppRoutes.length > 0) {
  throw new Error(
    `App/SEO route mismatch: duplicate App [${duplicateAppRoutes.join(', ')}]; missing SEO [${missingSeoRoutes.join(', ')}]; missing App [${missingAppRoutes.join(', ')}]`,
  )
}

export const AppContent = () => (
  <>
    <ScrollRestoration />
    <Navbar />
    <main id="main-content">
      <Routes>
        {APP_ROUTES.map(({ path, component: Component, element }) => (
          <Route key={path} path={path} element={element ?? <Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <RouteSeo />
    </main>
    <Footer />
    <ScrollToTopButton />
  </>
)

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
