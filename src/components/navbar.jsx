import React from 'react'
import"../App"
import './navbar.css'
import logo from './logo.png';
const Navbar =()=>{

    return <div className="menu">
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="mlist">
                <ul>
                    <li><a href='./isletme.js' className="nav-link">İşletme </a></li>
                    <li><a href='' className="nav-link">Eğlence</a></li>
                    <li className='active'><a href='' className="nav-link ">Spor Dalları </a></li>
                    <li><a href='' className="nav-link"> Sağlık </a></li>
                    <li><a href='' className="nav-link">Teknoloji</a></li>
                    <li><a href='' className="nav-link">Bilim </a></li>
                </ul>
            </div>
        </nav>
   
        </div>;
};

export default Navbar;