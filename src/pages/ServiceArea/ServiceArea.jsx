import './ServiceArea.css'
import PageHero from '../PageHero/PageHero'
import Nav_Service from './ServiceArea_components/Nav_Service'

const ServiceArea = () => {
  return (
    <>
      <PageHero
        title="服務領域"
        subtitle="Practice Areas"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '服務領域' }]}
      />
      <section className="section">
        <div className="container">
          <Nav_Service />
        </div>
      </section>
    </>
  )
}

export default ServiceArea
