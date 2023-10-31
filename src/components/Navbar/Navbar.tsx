import { NavLink } from "react-router-dom";
import style from './navbar.module.css';
import Button from "../button/Button";
import { MenuItem } from './Navbar.Model';
import { useState } from 'react';
import useModal from '../modal/hook/useModal.jsx';
// import Modal from "../modal/Modal.js";

export default function Navbar() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const { toggle } = useModal();

  const menuItems: MenuItem[] = [
    {
      label: 'Home',
      to: '/'
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
  const collapseNavbar = () =>{
    setIsOpen(!isOpen);
  }
  const onMenuItemClick = (menuItemLabel) => {
    if (selectedMenuItem === menuItemLabel) {
      setSelectedMenuItem(null);
    } else {
      setSelectedMenuItem(menuItemLabel);
    }
  }

  return (
    <>
      <div className="" onClick={collapseNavbar}>
        <i className={`${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <div className={style.row}>
        {menuItems.map((menuItem, index) => {
          return (
            <div key={index} className={style.dropDownBtn} style={{display:'none'}}>
              <div>
                <NavLink
                  style={{ textDecoration: 'none', fontSize: '17px', color: 'black'}}
                  className={`${selectedMenuItem === menuItem.label ? style.active : style.dim}`}
                  onClick={() => onMenuItemClick(menuItem.label)}
                  to={menuItem.to}
                >
                  {menuItem.label}
                </NavLink>
              </div>
              {selectedMenuItem === menuItem.label && menuItem.options ? (
                <div className={style.dropDown_content}>
                  {menuItem.options.map((option, optionIndex) => (
                    <div key={optionIndex} style={{}}>
                      {option.value?.map((value, valueIndex) => (
                        <ul className={style.dropDownUl} key={valueIndex}>
                          <li><a href="">{value}</a></li>
                        </ul>
                      ))}
                    </div>
                  ))}
                </div>
              ) : ''}
            </div>
          )
        })}
        <Button type="button" children="Buy Me A Coffee" onClick={toggle} className={style.btn} />
        {/* <Modal isOpen={isOpen} toggle={toggle}>
            <div>Yaay!!! Our Modal is rendered Properly.</div>
        </Modal> */}
    </div> 
    </>
  )
}
