import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../assets/era-logo.png'
import menu from '../assets/menu-icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);
    useEffect( ()=>{
        window.addEventListener('scroll', ()=> {
            window.scrollY > 200 ? setSticky(true) : setSticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=> {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <Link to='/'><img src={logo} alt='' className='logo' /></Link>
        <ul className={mobileMenu ? '' : 'mobile-menu'}>
            <li><Link to='/about'>關於怡睿</Link></li>
            <li><Link to='/team'>專業團隊</Link></li>
            <li><Link to='/services'>服務領域</Link></li>
            <li><Link to='/related'>相關內容</Link></li>
            <li><Link to='/contactus'><button className='btn'>聯絡我們</button></Link></li>
        </ul>
        <img src={menu} className="menu-icon" onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
 