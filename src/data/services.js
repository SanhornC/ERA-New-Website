// Practice areas. Each entry renders as a card on the home page, a section on
// /services and its own page at /services/<slug>.
//   items   — the service checklist; `details` lists example documents/remedies
//   intro   — paragraphs for the service page; every statement must come from
//             content already on the site (service items, attorney bios, the
//             本所優勢 track record) — no new claims
//   seo     — <title> / meta description for /services/<slug>
//   related — slugs of related practice areas, for internal links
export const services = [
  {
    slug: 'contract-consulting',
    name: '合約諮詢',
    englishName: 'Contract Advisory',
    tagline: '中英文合約撰擬、審閱與談判',
    intro: [
      '怡睿國際法律事務所提供各式中英文合約之撰擬、審閱與談判，涵蓋保密合約（NDA）、投資、服務、代理及經銷、採購、租賃、僱傭、委任、顧問及競業禁止約定等合約，並協助進行合約風險分析、規劃合約談判策略及合約文字修改。',
      '主持律師林秀怡律師於國際性法律事務所服務長達十五年，對於處理英文合約暨與外商交涉經驗豐富；本所曾審閱修改數以千計的英文合約，並協助跨國談判。',
    ],
    items: [
      {
        text: '各式英文合約之撰擬、審閱、談判',
        details: ['Supplier Agreement', 'Distribution Agreement', 'Equipment Purchase Terms and Conditions', 'Non-Disclosure Agreement', 'Employee Stock Option Plan', 'Employee Incentive Plan Review', 'Investment Agreement', 'Share Purchase Agreement'],
      },
      {
        text: '各式中文合約之撰擬、審閱、談判',
        details: ['保密合約（NDA）', '投資契約', '服務合約', '代理合約／經銷合約', '採購合約', '租賃合約', '僱傭契約／勞動契約', '委任契約', '顧問合約', '智慧財產權歸屬約定暨保密約定', '競業禁止約定合約'],
      },
      { text: '合約風險分析' },
      { text: '合約談判策略' },
      { text: '合約文字修改協助' },
    ],
    seo: {
      title: '合約審閱與中英文合約撰擬｜新竹竹北律師',
      description: '怡睿國際法律事務所提供中英文合約撰擬、審閱與談判，涵蓋 NDA 保密合約、投資、經銷代理、採購、僱傭及競業禁止約定等合約。主持律師於國際性法律事務所服務十五年，審閱修改英文合約數以千計。',
    },
    related: ['trade-secrets', 'mergers-acquisitions', 'cross-border-legal'],
  },
  {
    slug: 'startup-legal-services',
    name: '國內外新創公司法律服務',
    englishName: 'Startup Legal Services',
    tagline: '設立規劃、募資談判與 ESOP',
    intro: [
      '本所提供國內外新創公司之設立規劃、合資安排、技術股安排及募資談判，並撰擬、修改合資協議書、投資協議書、股份認購協議書、股東協議書、投資人權益協議書、ESOP 等中英文文件，以及撰寫及修改章程（包含境外公司之章程）。',
      '林秀怡律師自2013年起協助多家新創公司進行境外股權規劃、修改章程、募資（A輪、B輪、C輪）、股份轉換及 DD；本所曾協助數十家新創公司處理新創事務及募資相關合約，並協助十家以上開曼公司修改章程及相關特別股投資協議。',
    ],
    items: [
      { text: '設立規劃' },
      { text: '合資安排' },
      { text: '技術股安排' },
      {
        text: '中英文合約撰擬、修改',
        details: ['合資協議書', '投資協議書', '股份認購協議書', '股東協議書', '投資人權益協議書', 'ESOP', '員工認股相關文件'],
      },
      { text: '募資談判' },
      { text: '撰寫及修改章程（包含境外公司之章程）' },
    ],
    seo: {
      title: '新創公司法律服務｜募資、ESOP、開曼章程｜新竹律師',
      description: '怡睿國際法律事務所協助新創公司處理設立規劃、技術股與合資安排、募資談判、股東協議、ESOP 員工認股及開曼等境外公司章程，已協助數十家新創公司。',
    },
    related: ['contract-consulting', 'intellectual-property', 'cross-border-legal'],
  },
  {
    slug: 'corporate-compliance',
    name: '企業營運法規諮詢',
    englishName: 'Corporate & Securities Compliance',
    tagline: '上市櫃法規諮詢與公司治理',
    intro: [
      '本所長期提供公司事務之顧問服務，熟稔科技公司之內部運作，提供公司法、證券交易法、公平交易法及上市櫃法規之諮詢、公司內部規章之審閱，並協助公司設立登記、解散、清算、重整及破產程序，以及向主管機關申請函釋。',
      '本所曾協助數百家科技公司進行股東會、董事會相關事宜，並提供數家科技公司上市櫃法律意見及現金增資法律意見。林秀怡律師亦常受邀主講公司法、證券交易法、薪酬委員會、股東會、公司治理及董監事責任等講座。',
    ],
    items: [
      { text: '公司設立登記、解散、清算、重整及破產程序' },
      { text: '公司法、證券交易法、公平交易法規諮詢' },
      { text: '向主管機關申請函釋' },
      { text: '上市櫃法規諮詢' },
      { text: '公司內部規章審閱及諮詢' },
      { text: '股東會、董事會、審計委員會及薪酬委員會之運作' },
      { text: '企業法律課程教育訓練' },
    ],
    seo: {
      title: '上市櫃公司法規諮詢與公司治理｜新竹竹北企業法律顧問',
      description: '怡睿國際法律事務所為上市櫃公司及科技公司提供公司法、證券交易法諮詢、上市櫃法律意見、股東會與董事會運作及審計、薪酬委員會等公司治理服務，位於新竹竹北。',
    },
    related: ['corporate-control', 'mergers-acquisitions', 'labor-employment'],
  },
  {
    slug: 'corporate-control',
    name: '經營權相關法律問題',
    englishName: 'Corporate Control',
    tagline: '董監席次規劃與股東會改選',
    intro: [
      '針對經營權相關法律問題，本所依公司法及證券交易法，協助客戶進行董監席次規劃、選任及解任董事長、召開股東會改選，以鞏固經營權。',
      '本所曾協助數百家科技公司進行股東會、董事會相關事宜。',
    ],
    items: [
      { text: '公司法' },
      { text: '證券交易法' },
      { text: '董監席次規劃' },
      { text: '選任及解任董事長' },
      { text: '召開股東會改選' },
      { text: '鞏固經營權' },
    ],
    seo: {
      title: '經營權爭議與董監改選法律諮詢｜新竹竹北律師',
      description: '怡睿國際法律事務所依公司法及證券交易法，協助客戶處理經營權相關法律問題，包括董監席次規劃、選任及解任董事長、召開股東會改選及鞏固經營權。',
    },
    related: ['corporate-compliance', 'mergers-acquisitions', 'civil-criminal-litigation'],
  },
  {
    slug: 'intellectual-property',
    name: '智慧財產權之取得及保護',
    englishName: 'Intellectual Property',
    tagline: '專利、商標、著作權之申請、授權與訴訟',
    intro: [
      '本所提供商標及專利之檢索、申請、異議、評定、廢止與舉發，著作權保護法規諮詢，以及智慧財產權之移轉、授權登記與授權合約之撰擬、審閱及談判；遇有授權或侵權紛爭時，並協助處理智慧財產權侵權訴訟。',
      '本所團隊包含智權資深顧問及智權顧問；林秀怡律師之專長領域亦包含專利及著作權。',
    ],
    items: [
      { text: '商標檢索' },
      { text: '商標申請' },
      { text: '商標異議、評定及廢止之申請及答辯' },
      { text: '專利檢索' },
      { text: '專利申請' },
      { text: '專利舉發' },
      { text: '著作權保護法規諮詢' },
      { text: '智慧財產權移轉、授權登記' },
      { text: '智慧財產權授權合約撰擬、審閱及談判' },
      { text: '智慧財產權授權及侵權紛爭' },
      { text: '智慧財產權侵權訴訟' },
    ],
    seo: {
      title: '智慧財產權律師｜專利、商標申請與侵權訴訟｜新竹竹北',
      description: '怡睿國際法律事務所提供專利與商標檢索、申請、異議、舉發，著作權法規諮詢，智慧財產權移轉、授權合約及侵權訴訟服務，團隊包含智權資深顧問及智權顧問。',
    },
    related: ['trade-secrets', 'contract-consulting', 'startup-legal-services'],
  },
  {
    slug: 'mergers-acquisitions',
    name: '國內併購投資商務諮詢',
    englishName: 'Mergers & Acquisitions',
    tagline: '併購方式選擇、實地審查與交易文件',
    intro: [
      '林秀怡律師自2005年起於新竹科學園區協助處理多件跨國合併、股份轉換、出售營運資產廠房、投資及合資案件；本所審閱過數以百計的跨國併購、投資及股份出售合約。',
      '本所協助客戶選擇併購投資方式、擬定被投資之因應策略、對被併購公司進行法律實地審查（Due Diligence）並撰寫審查報告、撰擬及談判交易文件，以及取得相關核准；並曾處理併購案件之異議股東股份收買請求權案件，創下司法紀錄。',
    ],
    items: [
      { text: '併購投資方式之選擇' },
      { text: '被投資之因應策略' },
      { text: '合併、合資等合約文件撰擬、審閱、談判' },
      { text: '資產或股權買賣合約、意向書、備忘錄之撰擬及審閱' },
      { text: '協助對被併購公司進行法律實地審查（Due Diligence, DD）' },
      { text: '撰寫法律實地審查報告' },
      { text: '相關核准之取得' },
      { text: '異議股東股份收買請求權之因應' },
    ],
    seo: {
      title: '企業併購律師｜法律實地審查 DD 與投資合約｜新竹竹北',
      description: '怡睿國際法律事務所提供企業併購與投資法律服務：併購投資方式選擇、法律實地審查（DD）、股權及資產買賣合約、合資協議與異議股東股份收買請求權，具新竹科學園區跨國併購經驗。',
    },
    related: ['corporate-compliance', 'contract-consulting', 'cross-border-legal'],
  },
  {
    slug: 'trade-secrets',
    name: '營業秘密之保護',
    englishName: 'Trade Secrets',
    tagline: '法規諮詢、侵害救濟與營業秘密訴訟',
    intro: [
      '本所提供營業秘密保護法規之諮詢，並於營業秘密遭受侵害時，協助進行紛爭解決、聲請假扣押、假處分、秘密保持令等救濟，以及營業秘密相關訴訟。',
      '本所之合約諮詢服務亦涵蓋保密合約（NDA）、智慧財產權歸屬約定暨保密約定及競業禁止約定合約之撰擬與審閱。',
    ],
    items: [
      { text: '營業秘密保護法規諮詢' },
      { text: '營業秘密侵害紛爭解決' },
      { text: '營業秘密侵害救濟', details: ['假扣押', '假處分', '秘密保持令'] },
      { text: '營業秘密相關訴訟' },
    ],
    seo: {
      title: '營業秘密保護與侵害訴訟｜科技公司律師｜新竹竹北',
      description: '怡睿國際法律事務所提供營業秘密保護法規諮詢，並於營業秘密遭侵害時協助紛爭解決，聲請假扣押、假處分、秘密保持令等救濟及進行營業秘密訴訟。',
    },
    related: ['intellectual-property', 'labor-employment', 'contract-consulting'],
  },
  {
    slug: 'us-export-controls',
    name: '美國出口管制法規（EAR）',
    englishName: 'U.S. Export Controls (EAR)',
    tagline: '美國出口管制法規諮詢',
    intro: [
      '林秀怡律師常協助客戶遵循美國出口管制法規，並曾陪同違反美國出口管制法規之台灣公司及台灣人，至英國與美國與檢察官進行認罪協商。',
      '本所可協助客戶了解美國出口管制法規（EAR）、詢問美國政府相關監管機關，並協助詢問美國事務所。',
    ],
    items: [
      { text: '協助了解美國出口管制法規（EAR）' },
      { text: '協助詢問美國政府相關監管機關' },
      { text: '協助詢問美國事務所' },
    ],
    seo: {
      title: '美國出口管制 EAR 法規遵循｜半導體科技業律師｜新竹',
      description: '怡睿國際法律事務所協助企業了解美國出口管制法規（EAR）、詢問美國政府監管機關並協助詢問美國事務所；林秀怡律師常協助客戶遵循美國出口管制法規。',
    },
    related: ['cross-border-legal', 'corporate-compliance', 'contract-consulting'],
  },
  {
    slug: 'cross-border-legal',
    name: '跨國法律問題諮詢',
    englishName: 'Cross-Border Legal Matters',
    tagline: '外國律師協調、外資來台及台商對外投資',
    intro: [
      '本所擁有長期合作的國內外專業團隊及人脈，能針對不同個案需求，彈性機動啟用資源，並具豐富的中英文法律服務經驗，可協助客戶處理跨國商業事宜。',
      '本所可協助尋找適任之國外律師（開曼、美國及日本等），居中聯繫以控制相關費用之花費，並提供外資及陸資來台投資、台商至大陸投資、台商對外投資及境外控股公司規劃等諮詢。',
    ],
    items: [
      { text: '協助尋找適任之國外律師（開曼、美國及日本等）' },
      { text: '居中聯繫以控制相關費用之花費' },
      { text: '協助確保公司最佳權益' },
      { text: '外資來台投資' },
      { text: '陸資來台投資' },
      { text: '台商至大陸投資' },
      { text: '境外控股公司規劃' },
      { text: '台商對外投資' },
    ],
    seo: {
      title: '跨國法律諮詢｜外資來台投資與境外控股規劃｜新竹律師',
      description: '怡睿國際法律事務所提供跨國法律問題諮詢：協助尋找開曼、美國、日本等地律師並控制費用，以及外資、陸資來台投資、台商對外投資與境外控股公司規劃。',
    },
    related: ['us-export-controls', 'mergers-acquisitions', 'startup-legal-services'],
  },
  {
    slug: 'labor-employment',
    name: '勞資法規諮詢及爭議解決',
    englishName: 'Labor & Employment',
    tagline: '勞動法規、勞資爭議與競業禁止',
    intro: [
      '本所提供勞資法規諮詢、勞資爭議之協調及勞資訴訟，並處理競業禁止爭議之解決及競業禁止訴訟。',
      '林秀怡律師之專長領域包含勞工法令，並常受邀主講人力資源相關講座。',
    ],
    items: [
      { text: '勞資法規諮詢' },
      { text: '勞資爭議之協調' },
      { text: '勞資訴訟' },
      { text: '競業禁止爭議解決' },
      { text: '競業禁止訴訟' },
    ],
    seo: {
      title: '勞資爭議與競業禁止律師｜勞動法規諮詢｜新竹竹北',
      description: '怡睿國際法律事務所提供勞資法規諮詢、勞資爭議協調與勞資訴訟，以及競業禁止爭議解決與競業禁止訴訟。',
    },
    related: ['trade-secrets', 'contract-consulting', 'corporate-compliance'],
  },
  {
    slug: 'trusts-estates',
    name: '信託及遺產規劃',
    englishName: 'Trusts & Estates',
    tagline: '生前信託、遺囑信託與遺產稅申報',
    intro: [
      '本所提供遺產、繼承及信託相關法規之諮詢，協助客戶進行生前信託及遺囑信託之規劃、遺囑之諮詢與協助，以及遺產稅申報。',
      '本所並曾協助數家科技公司進行員工股份信託之相關建置安排。',
    ],
    items: [
      { text: '遺產、繼承、信託相關法規之諮詢' },
      { text: '生前信託規劃' },
      { text: '遺囑信託規劃' },
      { text: '遺囑諮詢及協助' },
      { text: '遺產稅申報' },
    ],
    seo: {
      title: '信託及遺產規劃律師｜遺囑、繼承與遺產稅｜新竹竹北',
      description: '怡睿國際法律事務所提供遺產、繼承與信託法規諮詢，協助生前信託、遺囑信託規劃、遺囑諮詢及遺產稅申報。',
    },
    related: ['civil-criminal-litigation', 'corporate-control', 'contract-consulting'],
  },
  {
    slug: 'civil-criminal-litigation',
    name: '一般民刑事案件',
    englishName: 'Civil & Criminal Matters',
    tagline: '律師函、訴訟、仲裁與強制執行',
    intro: [
      '除企業法律服務外，本所亦處理一般民刑事案件，包括律師函及存證信函之撰寫及發函、聲請支付命令、出具法律意見書、爭議處理及和解談判、訴訟、仲裁、強制執行、資產保全，以及刑事偵查、告訴、起訴。',
      '本所合作律師黃炫中律師曾任臺灣高等法院法官3年、臺灣臺中地方法院法官13年。',
    ],
    items: [
      { text: '律師函撰寫及發函' },
      { text: '存證信函撰寫及發函' },
      { text: '聲請支付命令' },
      { text: '出具法律意見書' },
      { text: '爭議處理及和解談判' },
      { text: '訴訟、仲裁、強制執行、資產保全' },
      { text: '刑事偵查、告訴、起訴' },
    ],
    seo: {
      title: '民事刑事訴訟律師｜律師函、仲裁、強制執行｜新竹竹北',
      description: '怡睿國際法律事務所處理一般民刑事案件：律師函與存證信函、支付命令、法律意見書、和解談判、訴訟、仲裁、強制執行、資產保全及刑事告訴，合作律師曾任法官。',
    },
    related: ['labor-employment', 'trusts-estates', 'corporate-control'],
  },
]

export const servicePath = (slug) => `/services/${slug}`

export const getService = (slug) => services.find((service) => service.slug === slug)
