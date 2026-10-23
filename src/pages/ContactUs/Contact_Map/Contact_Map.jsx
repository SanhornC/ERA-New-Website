import { firm, fullAddress, mapEmbedUrl, mapUrl } from '../../../data/firm'
import './Contact_Map.css'

const Contact_Map = () => (
  <div className="contact-map">
    <div className="contact-map__body">
      <span className="section-label" lang="en">Location</span>
      <h2 className="section-title">事務所位置</h2>
      <div className="section-divider" />
      <dl className="contact-map__list">
        <div>
          <dt>地址</dt>
          <dd>{fullAddress}<br />（{firm.address.building}）</dd>
        </div>
        <div>
          <dt>電話</dt>
          <dd><a href={firm.phoneHref} lang="en">{firm.phone}</a></dd>
        </div>
        <div>
          <dt>傳真</dt>
          <dd lang="en">{firm.fax}</dd>
        </div>
        <div>
          <dt>信箱</dt>
          <dd><a href={`mailto:${firm.email}`} lang="en">{firm.email}</a></dd>
        </div>
      </dl>
      <a className="btn btn-secondary" href={mapUrl} target="_blank" rel="noopener noreferrer">
        在 Google 地圖開啟
      </a>
    </div>

    <div className="contact-map__frame">
      <iframe
        title={`${firm.name}位置地圖`}
        src={mapEmbedUrl}
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  </div>
)

export default Contact_Map
