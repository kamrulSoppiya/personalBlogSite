import style from './header.module.css';
// import {HeaderProps} from './Header.Model';
// import logo from '../../assets/img/Logo.png';
// import Modal from '../modal/Modal';
// import useModal from '../modal/hook/useModal';

import Navbar from '../Navbar/Navbar';
export default function Header() {
    return (
        <div className="container">
            <div className={style.row}>
                <div className={style.logo}>
                    <h2 style={{display:'flex', fontSize:'30px', alignItems:'center'}}>Dasteen. <span style={{color:'#004658', fontSize:'32px'}}>Blog</span></h2>
                </div>
                <Navbar/>
            </div>
        </div>
    )
}
