import socialImage from '../assets/PIC/era-office/凱峰辦公室招牌(正拍).jpg'
import { firm, mapUrl } from '../data/firm'
import { eventPages, eventPath } from '../data/events'
import { servicePath, services } from '../data/services'

export const SITE_NAME = firm.name
export const SITE_ORIGIN = 'https://eralaw.web.app'
export const LEGAL_SERVICE_ID = `${SITE_ORIGIN}/#legal-service`
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`
export const DEFAULT_IMAGE = new URL(socialImage, `${SITE_ORIGIN}/`).href
export const DEFAULT_IMAGE_WIDTH = 994
export const DEFAULT_IMAGE_HEIGHT = 561

const absoluteUrl = (path) => `${SITE_ORIGIN}${path === '/' ? '/' : path}`
const personId = (path) => `${absoluteUrl(path)}#person`

const AREA_SERVED = [
  { '@type': 'City', name: '竹北市' },
  { '@type': 'City', name: '新竹市' },
  { '@type': 'AdministrativeArea', name: '新竹縣' },
  { '@type': 'AdministrativeArea', name: '苗栗縣' },
  { '@type': 'Country', name: '台灣' },
]

// Attorneys with their own profile page, keyed by route.
const ATTORNEYS = {
  '/lawyer/1': {
    name: '林秀怡',
    alternateName: 'Joy Lin',
    jobTitle: '主持律師',
    alumniOf: ['國立臺灣大學', 'University of Illinois Urbana-Champaign', '國立交通大學'],
    memberOf: ['台北律師公會', '新竹律師公會'],
    knowsAbout: ['企業併購', '上市櫃法令', '公司法', '證券交易法', '英文合約審閱', '新創公司募資', '美國出口管制法規'],
  },
  '/lawyer/2': {
    name: '王承舜',
    jobTitle: '合作美國加州律師',
    alumniOf: ['國立政治大學', 'University of Illinois Urbana-Champaign'],
  },
  '/lawyer/3': {
    name: '黃炫中',
    jobTitle: '合作律師',
    alumniOf: ['國立台灣大學', '國立中興大學'],
  },
}

export const LEGAL_SERVICE_STRUCTURED_DATA = {
  '@type': 'LegalService',
  '@id': LEGAL_SERVICE_ID,
  name: SITE_NAME,
  alternateName: [firm.englishName, '怡睿法律事務所'],
  url: `${SITE_ORIGIN}/`,
  logo: `${SITE_ORIGIN}/logo.png`,
  image: DEFAULT_IMAGE,
  description: '怡睿國際法律事務所位於新竹縣竹北市，由林秀怡律師於2013年創立，為上市櫃公司、科技與半導體產業及新創公司提供合約審閱、企業併購、上市櫃法規、智慧財產權、營業秘密、美國出口管制等國際商業法律服務。',
  foundingDate: firm.foundingYear,
  telephone: firm.phoneE164,
  faxNumber: firm.faxE164,
  email: firm.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${firm.address.street}（${firm.address.building}）`,
    addressLocality: firm.address.locality,
    addressRegion: firm.address.region,
    postalCode: firm.address.postalCode,
    addressCountry: 'TW',
  },
  hasMap: mapUrl,
  founder: { '@id': personId('/lawyer/1') },
  employee: Object.keys(ATTORNEYS).map((path) => ({ '@id': personId(path) })),
  areaServed: AREA_SERVED,
  knowsLanguage: ['zh-Hant-TW', 'en'],
  knowsAbout: services.map((service) => service.name),
  sameAs: [firm.facebook, 'https://www.eralawfirm.com/'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '服務領域',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${absoluteUrl(servicePath(service.slug))}#service`,
        name: service.name,
        url: absoluteUrl(servicePath(service.slug)),
      },
    })),
  },
}

const WEBSITE_STRUCTURED_DATA = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_ORIGIN}/`,
  name: SITE_NAME,
  alternateName: firm.englishName,
  inLanguage: 'zh-Hant-TW',
  publisher: { '@id': LEGAL_SERVICE_ID },
}

const pageTitle = (title) => `${title} | ${SITE_NAME}`

const SERVICE_ROUTE_SEO = Object.fromEntries(services.map((service) => [
  servicePath(service.slug),
  {
    title: pageTitle(service.seo.title),
    description: service.seo.description,
    breadcrumbLabel: service.name,
    breadcrumbParent: { label: '服務領域', path: '/services' },
    service,
  },
]))

const eventParent = { label: '活動資訊', path: '/events' }

const EVENT_ROUTE_SEO = Object.fromEntries(eventPages.map((event) => [
  eventPath(event.id),
  {
    title: pageTitle(event.shortTitle),
    description: event.description,
    breadcrumbLabel: event.shortTitle,
    breadcrumbParent: eventParent,
  },
]))
const teamParent = { label: '專業團隊', path: '/team' }

export const ROUTE_SEO = {
  '/': {
    title: `${SITE_NAME}｜新竹竹北律師事務所・上市櫃與科技公司法律顧問`,
    description: '怡睿國際法律事務所位於新竹竹北，由林秀怡律師於2013年創立，為上市櫃公司、科技與半導體產業及新創公司提供合約審閱、企業併購、上市櫃法規、智慧財產權及跨國法律服務。',
  },
  '/about': {
    title: pageTitle('本所優勢與實績｜新竹竹北律師事務所'),
    description: '怡睿國際法律事務所在新竹苗栗科技產業紮根近20年：主持律師親自參與每件案件，審閱英文合約逾二千份、協助數百家科技公司處理股東會與董事會事務，並提供上市櫃法律意見。',
    breadcrumbLabel: '本所優勢',
  },
  '/services': {
    title: pageTitle('服務領域｜合約、上市櫃法規、併購、智財'),
    description: '怡睿國際法律事務所服務領域：合約諮詢、新創公司、上市櫃與企業法規、經營權、智慧財產權、企業併購、營業秘密、美國出口管制、跨國法律、勞資、信託遺產及民刑事案件。',
    breadcrumbLabel: '服務領域',
  },
  ...SERVICE_ROUTE_SEO,
  '/team': {
    title: pageTitle('專業團隊｜新竹竹北律師與智權、財務顧問'),
    description: '怡睿國際法律事務所團隊由主持律師林秀怡律師領軍，結合曾任法官之合作律師、合作美國加州律師、智權顧問及財務顧問，為全台企業、新創公司及個人客戶提供完整的法律服務。',
    breadcrumbLabel: '專業團隊',
  },
  '/lawyer/1': {
    title: pageTitle('林秀怡律師｜主持律師・企業併購與上市櫃法令'),
    description: '林秀怡律師自1997年起執業，曾任職常在、理律法律事務所，專長公司海內外投資、企業併購、上市櫃法令、英文合約審閱及新創公司法律服務，為台北及新竹律師公會會員。',
    breadcrumbLabel: '林秀怡律師',
    breadcrumbParent: teamParent,
  },
  '/lawyer/2': {
    title: pageTitle('王承舜律師｜美國加州及紐約州律師'),
    description: '王承舜律師畢業於國立政治大學法律學系及美國伊利諾大學香檳分校法學碩士，具美國紐約州（2007）及加州（2015）律師資格，為怡睿國際法律事務所合作美國加州律師。',
    breadcrumbLabel: '王承舜律師',
    breadcrumbParent: teamParent,
  },
  '/lawyer/3': {
    title: pageTitle('黃炫中律師｜前臺灣高等法院法官・合作律師'),
    description: '黃炫中律師曾任臺灣高等法院法官3年、臺灣臺中地方法院法官13年，並曾參與司法院「商事事件審理法草案」研議，現為怡睿國際法律事務所合作律師。',
    breadcrumbLabel: '黃炫中律師',
    breadcrumbParent: teamParent,
  },
  '/related': {
    title: pageTitle('法律資源與相關連結'),
    description: '怡睿國際法律事務所整理之常用法律資源：全國法規資料庫、司法院、公開資訊觀測站、證券期貨局、勞動法令查詢等連結，以及事務所 Facebook 專頁。',
    breadcrumbLabel: '相關內容',
  },
  '/events': {
    title: pageTitle('演講與研討會｜林秀怡律師受邀講座'),
    description: '林秀怡律師歷年受邀於新竹科學園區、工研院、陽明交大校友會等單位，主講合約談判、企業併購、新創公司法律與專利佈局等講座之紀錄。',
    breadcrumbLabel: '活動資訊',
  },
  ...EVENT_ROUTE_SEO,
  '/contactus': {
    title: pageTitle('聯絡我們｜竹北律師事務所地址、電話與預約諮詢'),
    description: `怡睿國際法律事務所位於${firm.address.region}${firm.address.locality}${firm.address.street}（${firm.address.building}），電話 ${firm.phone}，電子信箱 ${firm.email}，歡迎來電或線上預約法律諮詢。`,
    breadcrumbLabel: '聯絡我們',
  },
  '/privacy': {
    title: pageTitle('隱私權政策'),
    description: '怡睿國際法律事務所網站隱私權政策：個人資料之蒐集目的、使用方式、保存與您的權利。',
    breadcrumbLabel: '隱私權政策',
  },
  '/terms': {
    title: pageTitle('服務條款'),
    description: '怡睿國際法律事務所網站使用條款：資訊性質、智慧財產權、責任限制及外部連結說明。',
    breadcrumbLabel: '服務條款',
  },
}

export const INDEXABLE_ROUTES = Object.freeze(Object.keys(ROUTE_SEO))

const breadcrumbList = (seo, canonicalUrl) => {
  const items = [{ name: '首頁', item: absoluteUrl('/') }]
  if (seo.breadcrumbParent) {
    items.push({ name: seo.breadcrumbParent.label, item: absoluteUrl(seo.breadcrumbParent.path) })
  }
  items.push({ name: seo.breadcrumbLabel, item: canonicalUrl })

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      ...item,
    })),
  }
}

const personStructuredData = (path, canonicalUrl, description) => {
  const attorney = ATTORNEYS[path]
  return {
    '@type': 'Person',
    '@id': personId(path),
    name: attorney.name,
    ...(attorney.alternateName && { alternateName: attorney.alternateName }),
    jobTitle: attorney.jobTitle,
    description,
    url: canonicalUrl,
    worksFor: { '@id': LEGAL_SERVICE_ID },
    alumniOf: attorney.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    ...(attorney.memberOf && {
      memberOf: attorney.memberOf.map((name) => ({ '@type': 'Organization', name })),
    }),
    ...(attorney.knowsAbout && { knowsAbout: attorney.knowsAbout }),
  }
}

const serviceStructuredData = (service, canonicalUrl, description) => ({
  '@type': 'Service',
  '@id': `${canonicalUrl}#service`,
  name: service.name,
  alternateName: service.englishName,
  serviceType: service.name,
  description,
  url: canonicalUrl,
  provider: { '@id': LEGAL_SERVICE_ID },
  areaServed: AREA_SERVED,
})

export const createRouteStructuredData = (path, seo, canonicalUrl) => {
  const graph = [LEGAL_SERVICE_STRUCTURED_DATA]

  if (path === '/') {
    graph.push(WEBSITE_STRUCTURED_DATA)
  } else {
    graph.push(breadcrumbList(seo, canonicalUrl))
  }

  if (ATTORNEYS[path]) {
    graph.push(personStructuredData(path, canonicalUrl, seo.description))
  }

  if (seo.service) {
    graph.push(serviceStructuredData(seo.service, canonicalUrl, seo.description))
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
