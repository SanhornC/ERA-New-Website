import PropTypes from 'prop-types'
import { firm, fullAddress } from '../../../data/firm'
import './ContactList.css'

// 24×24 line icons drawn with currentColor so they inherit the text colour.
const ICONS = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6 8.5 7 8.5-7" /></>,
  phone: <path d="M6.6 3.5h2.8l1.4 4.2-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4.2 1.4v2.8a1.6 1.6 0 0 1-1.7 1.6A16.5 16.5 0 0 1 5 5.2a1.6 1.6 0 0 1 1.6-1.7Z" />,
  fax: <><path d="M7 9V3.5h10V9" /><rect x="3.5" y="9" width="17" height="8" rx="1.5" /><path d="M7 14.5h10v6H7z" /></>,
  skype: <><rect x="3" y="6" width="13" height="12" rx="1.5" /><path d="m16 10.5 5-3v9l-5-3" /></>,
  location: <><path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.8" r="2.3" /></>,
}

const Icon = ({ name }) => (
  <svg
    className="contact-list__icon"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {ICONS[name]}
  </svg>
)

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ICONS)).isRequired,
}

const ContactList = () => (
  <address className="contact-list">
    <ul>
      <li>
        <Icon name="mail" />
        <span>電子信箱：<a href={`mailto:${firm.email}`} lang="en">{firm.email}</a></span>
      </li>
      <li>
        <Icon name="mail" />
        <span>備用聯絡信箱：<a href={`mailto:${firm.backupEmail}`} lang="en">{firm.backupEmail}</a></span>
      </li>
      <li>
        <Icon name="phone" />
        <span>聯絡電話：<a href={firm.phoneHref} lang="en">{firm.phone}</a></span>
      </li>
      <li>
        <Icon name="fax" />
        <span>公司傳真：<span lang="en">{firm.fax}</span></span>
      </li>
      <li>
        <Icon name="skype" />
        <span><span lang="en">Skype</span> 網路電話：<span lang="en">{firm.skype}</span></span>
      </li>
      <li>
        <Icon name="location" />
        <span>公司地址：{fullAddress}（{firm.address.building}）</span>
      </li>
    </ul>
  </address>
)

export default ContactList
