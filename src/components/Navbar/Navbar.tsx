import { NavLink } from "react-router-dom";
import style from './navbar.module.css';
import Button from "../button/Button";
import Search from "../pages/Search";
export default function Navbar() {
  const onCoffeeModal = ()=>{
    alert('Buy Coffee');
  }
  return (
    <div className={style.row}>
      <ul >  
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black'}} className={({isActive})=> isActive?style.active:style.dim} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black'}} className={({isActive})=> isActive?style.active:style.dim} to="/category">Category</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black'}} className={({isActive})=> isActive?style.active:style.dim} to="/aboutMe">About Me</NavLink>
        </li>
        <li>
            <NavLink style={{textDecoration:'none', fontSize: '20px',color: 'black'}} className={({isActive})=> isActive?style.active:style.dim} to="/search">Search</NavLink>
            <Search />
        </li>
        <li>
            <Button type="button" children="Buy Me A Coffee" className={style.btn} onClick={onCoffeeModal}/>
        </li>
      </ul>
    </div>
  )
}
