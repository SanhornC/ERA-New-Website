import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import './Legal.css'

const Terms = () => (
  <>
    <Helmet>
      <title>服務條款 | 怡睿國際法律事務所</title>
      <meta name="description" content="怡睿國際法律事務所網站使用條款。" />
    </Helmet>
    <PageHero
      title="服務條款"
      subtitle="Terms of Services"
      breadcrumbs={[{ to: '/', label: '首頁' }, { label: '服務條款' }]}
    />
    <section className="legal section">
      <div className="container legal__inner">
        <h2 className="legal__h2">一、網站使用</h2>
        <p>歡迎您瀏覽怡睿國際法律事務所網站 (https://eralaw.web.app)。當您使用本網站，即表示您同意遵守本服務條款。</p>

        <h2 className="legal__h2">二、資訊性質</h2>
        <p>本網站所提供之資訊僅供一般參考，並不構成具體之法律意見或律師委任關係。如需法律諮詢，請透過聯絡管道與本所聯繫，由本所評估後另行確認委任關係。</p>

        <h2 className="legal__h2">三、智慧財產權</h2>
        <p>本網站之文字、圖片、商標、標誌、原始碼及其他內容之相關著作權及智慧財產權均屬本所或合法權利人所有，未經本所書面同意，不得擅自重製、改作、散布或為其他任何商業利用。</p>

        <h2 className="legal__h2">四、責任限制</h2>
        <p>本所就本網站內容之正確性、即時性、完整性，不負任何明示或默示之擔保責任。對於因使用或無法使用本網站而產生之任何損害，本所不負賠償責任。</p>

        <h2 className="legal__h2">五、外部連結</h2>
        <p>本網站可能含有指向第三方網站之連結，該等連結僅為方便使用者查閱之用。本所對於第三方網站之內容、隱私權政策及運作概不負責。</p>

        <h2 className="legal__h2">六、條款修訂</h2>
        <p>本所得隨時修訂本服務條款，修訂後將公告於本網站，恕不另行通知。請定期瀏覽以瞭解最新內容。</p>
      </div>
    </section>
  </>
)

export default Terms
