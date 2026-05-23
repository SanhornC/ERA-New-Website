import React from 'react'
import './Related_links.css'

const links = [
  { href: 'https://laws.mol.gov.tw', label: '勞動法律查詢系統' },
  { href: 'https://www.sfb.gov.tw/ch/', label: '證券期貨局' },
  { href: 'https://gcis.nat.gov.tw/mainNew/index.jsp', label: '全國商工行政服務入口網' },
  { href: 'https://www.selaw.com.tw/Home', label: '證券暨期貨法令判解查詢系統' },
  { href: 'https://law.moj.gov.tw/', label: '全國法規資料庫' },
  { href: 'https://www.judicial.gov.tw/tw/mp-1.html', label: '司法院全球資訊網' },
  { href: 'https://mops.twse.com.tw/mops/web/index', label: '公開資訊觀測站' },
  { href: 'https://news.google.com/home?hl=zh-TW&gl=TW&ceid=TW:zh-Hant', label: 'Google 新聞' },
  { href: 'https://www.businessweekly.com.tw/', label: '商業週刊' },
]

const Related_links = () => {
  return (
    <section className="related-links" aria-labelledby="related-links-heading">
      <div className="section-head--center">
        <span className="section-label">Resources</span>
        <h2 className="section-title" id="related-links-heading">相關連結</h2>
        <div className="section-divider section-divider--center" />
      </div>
      <ul className="related-links__list">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="related-links__label">{link.label}</span>
              <span className="related-links__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Related_links
