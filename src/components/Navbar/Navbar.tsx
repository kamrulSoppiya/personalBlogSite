import { NavLink } from "react-router-dom";
import style from './navbar.module.css';
import Button from "../button/Button";
import { MenuItem } from './Navbar.Model';
import { useState } from 'react';
import useModal from '../modal/hook/useModal.jsx';
// import Modal from "../modal/Modal.js";

export default function Navbar({isOpen}) {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const { toggle } = useModal();

  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Category',
      to: '/category',
      options: [{ key: 'Option A', value: ['dropDown1', 'dropDown2', 'dropDown3'] }],
    },
    {
      label: 'About',
      to: '/about',
      options: [{ key: 'Option A', value: ['dropDown1', 'dropDown2', 'dropDown3'] }],
    },
    {
      label: 'Search',
      to: '/search'
    },
  ];

  const onMenuItemClick = (menuItemLabel) => {
    if (selectedMenuItem === menuItemLabel) {
      setSelectedMenuItem(null);
    } else {
      setSelectedMenuItem(menuItemLabel);
    }
  }

  return (
    <>
      {isOpen? (<div className={style.row}>
      {menuItems.map((menuItem, index) => {
        return (
          <>
            <div className={`${style.menu_item} ${selectedMenuItem === menuItem.label ? 'active' : 'dim'}`} onClick={() => onMenuItemClick(menuItem.label)}>
            
            <div className="">
              <NavLink className={style.linkDesing} to={menuItem.to}>
                <div key={index} className="container" >
                  {menuItem.label}
                </div>
              </NavLink>
            </div>
        </div>
        <div>
           {selectedMenuItem === menuItem.label && menuItem.options ? (
              <div className={`${style.menu_item} ${selectedMenuItem === menuItem.label ? 'active' : 'dim'}`} onClick={() => onMenuItemClick(menuItem.label)}>
                {menuItem.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    {option.value?.map((value, valueIndex) => (
                        <NavLink className={style.linkDesing} to="">
                            <div key={index} className="container" >{value}</div>
                        </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            ) : ''}
        </div>
          </>

        )
      })}
      <div className="container">
        <Button type="button" children="Buy Me A Coffee" onClick={toggle} className={style.btn} />
      </div>
      </div>):'' }
    </>
      
  )}

