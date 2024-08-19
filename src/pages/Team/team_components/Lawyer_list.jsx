import React from 'react'
import { Link } from 'react-router-dom'
import './Lawyer_list.css'
import lawyer_1 from './../../../assets/person/Joy.jpg'
import lawyer_2 from './../../../assets/person/黃炫中照片1.jpg'
import lawyer_3 from './../../../assets/person/Sherry.jpg'
import consultant_1 from './../../../assets/person/Henry.jpg'
import consultant_2 from './../../../assets/person/Anna.jpg'
import consultant_3 from './../../../assets/person/余昱辰照片.jpg'
import consultant_4 from './../../../assets/person/周庭卉照片.jpg'
import consultant_5 from './../../../assets/person/楊佩雯2.jpg'


const lawyers = [
    { id: 1, name: '林秀怡', level:'主持律師', img: lawyer_1},
    { id: 2, name: '王承舜', level:'合作美國加州律師', img: lawyer_3},
    { id: 3, name: '黃炫中', level:'合作律師', img: lawyer_2}, 
  ];

const consultants = [
    { id: 1, name: "余昱辰", level:'智權顧問', img: consultant_3},
    { id: 2, name: "徐弘光", level:'智權顧問', img: consultant_1},
    { id: 3, name: "許華珍", level:'智權顧問', img: consultant_2},
    
];

const finance_consultants = [
    { id: 1, name: "周庭卉", level:'財快顧問', img: consultant_4},
    { id: 2, name: "楊佩文", level: '顧問', img: consultant_5}
];

const Lawyer_list = () => {
  return (
    <div className='lawyers'>
      <h1>律師</h1>
      <div className="lawyers-grid">
        {lawyers.map((lawyer) => (
          <div key={lawyer.id} className="lawyer-card">
            <Link to={`/lawyer/${lawyer.id}`}>
              <img src={lawyer.img} alt={lawyer.name} />
              <div className="lawyer-info">
                <h2>{lawyer.name}</h2>
                <h3>{lawyer.level}</h3>
                <p>{lawyer.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <h1>智權顧問</h1>
      <div className="lawyers-grid">
            {consultants.map((consultant) => (
                <div key={consultant.id} className="lawyer-card">
                    <Link to={`/consultant/${consultant.id}`}>
                    <img src={consultant.img} alt={consultant.name} />
                    <div className="lawyer-info">
                        <h2>{consultant.name}</h2>
                        <h3>{consultant.level}</h3>
                        <p>{consultant.location}</p>
                    </div>
                    </Link>
                </div>
            ))}
      </div>
      <h1>顧問</h1>
      <div className="lawyers-grid">
            {finance_consultants.map((finance_consultant) => (
                <div key={finance_consultant.id} className="lawyer-card">
                    <Link to={`/f_consultant/${finance_consultant.id}`}>
                    <img src={finance_consultant.img} alt={finance_consultant.name} />
                    <div className="lawyer-info">
                        <h2>{finance_consultant.name}</h2>
                        <h3>{finance_consultant.level}</h3>
                        <p>{finance_consultant.location}</p>
                    </div>
                    </Link>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Lawyer_list
