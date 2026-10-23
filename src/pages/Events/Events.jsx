import PageHero from '../PageHero/PageHero'
import Title from '../p1_components/Title/Title'
import './Events.css'
import Events_list from './Events_components/Events_list'
import Event_photo from './Events_components/Event_photo'

const Events = () => {
  return (
    <>
      <PageHero
        title="活動資訊"
        subtitle="Speaking & Events"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '活動資訊' }]}
      />
      <section className="section">
        <div className="container">
          <Events_list />
        </div>
      </section>
      <section className="section section--compact events-photos">
        <div className="container">
          <Title label="Gallery" subTitle="怡睿活動合集" />
        </div>
        <Event_photo />
      </section>
    </>
  )
}

export default Events
