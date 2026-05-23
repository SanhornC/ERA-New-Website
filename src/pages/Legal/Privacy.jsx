import React from 'react'
import { Helmet } from 'react-helmet-async'
import PageHero from '../PageHero/PageHero'
import './Legal.css'

const Privacy = () => (
  <>
    <Helmet>
      <title>隱私權政策 | 怡睿國際法律事務所</title>
      <meta name="description" content="怡睿國際法律事務所隱私權政策說明。" />
    </Helmet>
    <PageHero
      title="隱私權政策"
      subtitle="Privacy Policy"
      breadcrumbs={[{ to: '/', label: '首頁' }, { label: '隱私權政策' }]}
    />
    <section className="legal section">
      <div className="container legal__inner">
        <h2 className="legal__h2">一、適用範圍</h2>
        <p>本隱私權政策適用於您於本網站 (https://eralaw.web.app) 之瀏覽及與本所之互動。本所重視並依循中華民國個人資料保護法之規範保護您的個人資料。</p>

        <h2 className="legal__h2">二、蒐集之資料類別</h2>
        <p>當您透過本網站之聯絡表單與本所聯繫時，本所將蒐集您所提供之姓名、聯絡電話、電子郵件地址及您所敘述之諮詢事項。</p>

        <h2 className="legal__h2">三、蒐集目的與使用方式</h2>
        <p>所蒐集之個人資料僅用於：回覆您的諮詢、提供本所之法律服務、以及維持與您之必要聯繫。本所不會將您的個人資料提供、揭露或販售予任何第三方，但依法令規定或經您同意者除外。</p>

        <h2 className="legal__h2">四、資料保存與安全</h2>
        <p>本所對所蒐集之個人資料採取合理之安全保護措施，並僅於完成蒐集目的所必要之期間內保存。</p>

        <h2 className="legal__h2">五、您的權利</h2>
        <p>依個人資料保護法，您就本所所保有之您的個人資料，得行使查詢、閱覽、製給複製本、補充更正、停止蒐集處理利用或請求刪除等權利。如欲行使前開權利，請來信 <a href="mailto:attorneys@eralawfirm.com">attorneys@eralawfirm.com</a>。</p>

        <h2 className="legal__h2">六、Cookie 之使用</h2>
        <p>本網站可能使用 Cookie 以提升瀏覽體驗。您可於瀏覽器設定中拒絕 Cookie，惟可能影響部分功能之使用。</p>

        <h2 className="legal__h2">七、政策更新</h2>
        <p>本隱私權政策得隨時修訂，修訂後將公告於本網站，請定期瀏覽以瞭解最新內容。</p>
      </div>
    </section>
  </>
)

export default Privacy
