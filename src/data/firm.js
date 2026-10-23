// Single source for the firm's name, address and contact details (NAP).
// Keep these identical to the Google Business Profile listing — local search
// ranking depends on the details matching everywhere they appear.
export const firm = {
  name: '怡睿國際法律事務所',
  englishName: 'ERA International Law Firm',
  foundingYear: '2013',
  phone: '03-551-5533',
  phoneHref: 'tel:+886-3-551-5533',
  phoneE164: '+886-3-551-5533',
  fax: '03-516-7034',
  faxE164: '+886-3-516-7034',
  email: 'attorneys@eralawfirm.com',
  backupEmail: 'eralawfirm0216@gmail.com',
  skype: 'joylinemba',
  address: {
    postalCode: '302',
    region: '新竹縣',
    locality: '竹北市',
    street: '惟馨街95號10-3樓',
    building: '凱峰世紀科技中心',
  },
  facebook: 'https://www.facebook.com/people/怡睿國際法律事務所/100064182153080/',
}

export const fullAddress = `${firm.address.postalCode} ${firm.address.region}${firm.address.locality}${firm.address.street}`

const mapQuery = encodeURIComponent(`${firm.address.region}${firm.address.locality}${firm.address.street} ${firm.name}`)

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`
