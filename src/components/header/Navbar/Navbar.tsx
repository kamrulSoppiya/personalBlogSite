import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
            <NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">Category</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">About Me</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">Search</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive?"active":"dim"} to="/login">
                Buy Me A Coffee
            </NavLink>
        </li>
      </ul>
    </div>
  )
}
