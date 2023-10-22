import { NavLink } from "react-router-dom";
import style from './navbar.module.css';
export default function Navbar() {
  return (
    <div className={style.row}>
      <ul >
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black', padding:'3px 0'}} className={({isActive})=> isActive?"active":"dim"} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black', padding:'3px 0'}} className={({isActive})=> isActive?"active":"dim"} to="/category">Category</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black', padding:'3px 0'}} className={({isActive})=> isActive?"active":"dim"} to="/aboutMe">About Me</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black', padding:'3px 0'}} className={({isActive})=> isActive?"active":"dim"} to="/search">Search</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black', padding:'3px 0'}} className={({isActive})=> isActive?"active":"dim"} to="/coffee">
                Buy Me A Coffee
            </NavLink>
        </li>
      </ul>
    </div>
  )
}
