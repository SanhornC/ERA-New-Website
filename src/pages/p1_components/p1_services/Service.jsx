import React, { useState } from 'react';
import Modal from 'react-modal';
import './Service.css'

Modal.setAppElement('#root');

const Service = () => {
  
  const services = [
    { name: "合約諮詢", 
        info: ["1. 各式英文合約之撰擬、審閱、談判 Supplier Agreement",
                    " - Distribution Agreement", 
                    " - Equipment Purchase Terms and Conditions",
                    " - Non-Disclosure Agreement",
                    " - Employee Stock Option Plan",
                    " - Employee Incentive Plan Review",
                    " - Investment Agreement",
                    " - Share Purchase Agreement",  
                "2. 各式中文合約之撰擬、審閱、談判合約談判策略",
                    " - 保密合約(NDA)",
                    " - 投資契約",
                    " - 服務合約",
                    " - 代理合約／經銷合約",
                    " - 採購合約",
                    " - 租賃合約",
                    " - 僱傭契約/勞動契約",
                    " - 委任契約",
                    " - 顧問合約",
                    " - 智慧財產權歸屬約定暨保密約定",
                    " - 競業禁止約定合約",
                "3. 合約風險分析",
                "4. 合約談判策略",
                "5. 合約文字修改協助" ] 
            },
    { name: "國內外新創公司法律服務", info: [
        "1. 設立規劃",
        "2. 合資安排",
        "3. 技術股安排",
        "4. 中英文合約撰擬、修改",
            " - 合資協議書",
            " - 投資協議書",
            " - 股份認購協議書",
            " - 股東協議書",
            " - 投資人權益協議書",
            " - ESOP",
            " - 員工認股相關文件",
        "5. 募資談判",
        "6. 撰寫及修改章程(包含境外公司之章程)"
    ] },
    { name: "企業營運法規諮詢", info: [
        "1. 公司設立登記、解散、清算、重整及破產程序",
        "2. 公司法、證券交易法、公平交易法規諮詢",
        "3. 向主管機關申請函釋",
        "4. 上市櫃法規諮詢",
        "5. 公司內部規章審閱及諮詢",
        "6. 股東會、董事會、審計委員會及薪酬委員會之運作",
        "7. 企業法律課程教育訓練"
    ] },
    { name: "經營權相關法律問題", info: [
        "1. 公司法",
        "2. 證券交易法",
        "3. 董監席次規劃",
        "4. 選任及解任董事長",
        "5. 召開股東會改選",
        "6. 鞏固經營權"
    ] },
    { name: "智慧財產權之取得及保護", info: [
        "1. 商標檢索",
        "2. 商標申請",
        "3. 商標異議、評定及廢止之申請及答辯",
        "4. 專利檢索",
        "5. 專利申請",
        "6. 專利舉發",
        "7. 著作權保護法規諮詢",
        "8. 智慧財產權移轉、授權登記",
        "9. 智慧財產權授權合約撰擬、審閱及談判",
        "10. 智慧財產權授權及侵權紛爭",
        "11. 智慧財產權侵權訴訟"
    ] },
    { name: "國內併購投資商務諮詢", info: [
        "1. 併購投資方式之選擇",
        "2. 被投資之因應策略",
        "3. 合併、合資等合約文件撰擬、審閱、談判",
        "4. 資產或股權買賣合約、意向書、備忘錄之撰擬及審閱",
        "5. 協助對被併購公司進行法律實地審查(Due Diligence, DD)",
        "6. 撰寫法律實地審查報告",
        "7. 相關核准之取得",
        "8. 異議股東股份收買請求權之因應"
    ] },
    { name: "營業秘密之保護", info: [
        "1. 營業秘密保護法規諮詢",
        "2. 營業秘密侵害紛爭解決",
        "3. 營業秘密侵害救濟",
            " - 假扣押",
            " - 假處分",
            " - 秘密保持令",
        "7. 營業秘密相關訴訟"
    ] },
    { name: "美國出口管制法規(EAR)", info: [
        "1. 協助了解美國出口管制法規(EAR)",
        "2. 協助詢問美國政府相關監管機關",
        "3. 協助詢問美國事務所"
    ] },
    { name: "跨國法律問題諮詢", info: [
        "1. 協助尋找適任之國外律師(開曼、美國及日本等)",
        "2. 居中聯繫以控制相關費用之花費",
        "3. 協助確保公司最佳權益",
        "4. 外資來台投資",
        "5. 陸資來台投資",
        "6. 台商至大陸投資",
        "7. 境外控股公司規劃",
        "8. 台商對外投資"
    ] },
    { name: "勞資法規諮詢及爭議解決", info: [
        "1. 勞資法規諮詢",
        "2. 勞資爭議之協調",
        "3. 勞資訴訟",
        "4. 競業禁止爭議解決",
        "5. 競業禁止訴訟"
    ] },
    { name: "信託及遺產規劃", info: [
        "1.遺產、繼承、信託相關法規之諮詢",
        "2.生前信託規劃",
        "3.遺囑信託規劃",
        "4.遺囑諮詢及協助",
        "5.遺產稅申報"
    ] },
    { name: "一般民刑事案件", info: [
        "1. 律師函撰寫及發函",
        "2. 存證信函撰寫及發函",
        "3. 聲請支付命令",
        "4. 出具法律意見書",
        "5. 爭議處理及和解談判",
        "6. 訴訟、仲裁、強制執行、資產保全",
        "7. 刑事偵查、告訴、起訴"
    ] }
  ];
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="services-container">
            <ul className="services-list">
                {services.map((service, index) => (
                    <li key={index}>
                        <a onClick={() => openModal(service)}>{service.name}</a>
                    </li>
                ))}
            </ul>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Service Information" className="Modal" overlayClassName="Overlay">
                <h2>{selectedService?.name}</h2>
                <br></br>
                <ul>
                    {selectedService?.info.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))}
                </ul>
                <button className='popup_btn' onClick={closeModal}>關閉瀏覽</button>
            </Modal>
        </div>
  )
}

export default Service
