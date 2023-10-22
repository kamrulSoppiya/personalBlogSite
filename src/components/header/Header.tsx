import style from './header.module.css';
// import {HeaderProps} from './Header.Model';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/img/Logo.png';
export default function Header() {
  return (
    <div className="container">
        <div className={style.row}>
            <div className={style.logo}>
                <img src={logo} alt="website logo" />
            </div>
            <Navbar/>
        </div>
    </div>
  )
}
