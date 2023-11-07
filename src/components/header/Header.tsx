import style from '../header/header.module.css';
// import {HeaderProps} from './Header.Model';
// import logo from '../../assets/img/Logo.png';
// import Modal from '../modal/Modal';
// import useModal from '../modal/hook/useModal';
import { Spin as Hamburger } from 'hamburger-react'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import Logo from '../Navbar/Logo';
export default function Header() {
    const [menuOpen, setmenuOpen] = useState(false);

    const collapseNavbar = () =>{
        setmenuOpen(!menuOpen);
    }
    return (
        <div className={style.wrapper}>
            <div className={style.row}>
                <div className="container">
                    <div className={style.headerItems}>
                        <Logo />
                        <Hamburger direction="right" onToggle={collapseNavbar} />
                    </div>
                </div>
            </div>
            <Navbar isOpen = {menuOpen}/>
        </div>
    )
}



