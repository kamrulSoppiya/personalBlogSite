import style from './header.module.css';
import {HeaderProps} from './Header.Model';
import Navbar from './Navbar/Navbar';
export default function Header() {
  return (
    <div className={style.row}>
      <div className="logo">

      </div>
      <Navbar/>
    </div>
  )
}
