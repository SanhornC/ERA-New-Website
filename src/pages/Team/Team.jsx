import PageHero from '../PageHero/PageHero'
import Lawyer_list from './team_components/Lawyer_list'

const Team = () => {
  return (
    <>
      <PageHero
        title="專業團隊"
        subtitle="Our People"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '專業團隊' }]}
      />
      <section className="section">
        <div className="container">
          <Lawyer_list />
        </div>
      </section>
    </>
  )
}

export default Team
