import PageHero from '../PageHero/PageHero'
import './Advantage.css'
import Adv_about from './Advantage_components/Adv_about'
import Adv_record from './Advantage_components/Adv_record'
import Adv_special from './Advantage_components/Adv_special'

const Advantage = () => {
  return (
    <>
      <PageHero
        title="本所優勢"
        subtitle="Firm Advantages"
        breadcrumbs={[{ to: '/', label: '首頁' }, { label: '本所優勢' }]}
      />
      <Adv_special />
      <Adv_about />
      <Adv_record />
    </>
  )
}

export default Advantage
