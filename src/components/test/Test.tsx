import style from './test.module.css';
import img from '../../assets/img/programming.jpg';
import img1 from '../../assets/img/dev.jpg';
import animation from '../../assets/img/cycling.gif';
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';
export default function Test() {
    const [menuOpen, setmenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState([
        { id: 1, item: false },
        { id: 2, item: false }
    ]);

    const [dropDownOpen, setDropDownOpen] = useState([
        {id:1, item: false, subItem:[
            {id:1, item:false, itemName:'DropDown1', subItemName:['Mobile','Computer','Tablet']}, 
            {id:2, item:false, itemName:'DropDown2', subItemName:['pot','Keyboard','Monitor']}, 
            {id:3, item:false, itemName:'DropDown3', subItemName:['Earphone','Mosue','Stand']}
        ]},
        {id:2, item: false, subItem:[
            {id:1, item:false, itemName:'DropDown21', subItemName:['Mug','City Bank','HeadPhone']}, 
            {id:2, item:false, itemName:'DropDown22', subItemName:['pot','Keyboard','Monitor']}, 
            {id:3, item:false, itemName:'DropDown23', subItemName:['Earphone','Mosue','Stand']}
        ]}
    ]);

    // Small Display Humburger Menu Open
    const collapseNavbar = () =>{
        setmenuOpen(!menuOpen); 
    }
    // Mega Menu Item Toggle
    const toggleMegaMenuItem = (itemId: number) => {
        setMegaMenuOpen((prevState) => {
          return prevState.map((item) => {
            if (item.id === itemId) {
              return { ...item, item: !item.item };
            }
            return item;
          });
        });
    };
    // DropDown Menu Item Toggle
    const toggleDropDownItem = (itemId: number) =>{
        setDropDownOpen((prevState)=>{
            return prevState.map((item)=>{
                if(item.id === itemId){
                    return { ...item, item: !item.item};
                }
                return {...item, item: false};
            })
            
        })
    }
    // toggle Dropdown SubItem  
    const dropDownSubItem = (parentId, subItemId) => {
        setDropDownOpen((prevState) => {
            return prevState.map((item) => {
                if (item.id === parentId) {
                    const updatedSubItems = item.subItem.map((subItem) => {
                        if (subItem.id === subItemId) {
                            return { ...subItem, item: !subItem.item };
                        }
                        return { ...subItem, item: false };
                    });
    
                    return { ...item, subItem: updatedSubItems };
                }
                return item;
            });
        });
    };

    return (
        <nav>    
            <div className={style.wrapper}>
                <div className="container">
                    <div className={style.nav_items}>
                        <div className={style.logo}>
                            <p>Company.<span>Logo</span></p>
                        </div>
                        <div className={style.humburgerIcon}>
                            <Hamburger color="#004658" direction="right" onToggle={collapseNavbar} />
                        </div>
                        
                        <div className={style.menu}>
                            <ul className={style.mainMenuList}>
                                <li><a href="">Home</a></li>
                                {/* DropDown Menu */}
                                <li className={style.drop_down_item}>
                                    <p onClick={()=>toggleDropDownItem(1)}>Flyout</p>
                                    {dropDownOpen[0].item && 
                                        <ul className={`${style.drop_down}`}>
                                        {dropDownOpen[0].subItem.map((subItem) => (
                                        <li className={style.drop_down_list} onClick={() => dropDownSubItem(1, subItem.id)} key={subItem.id}>
                                            <p>
                                                {subItem.itemName}
                                            </p>
                                            {subItem.item && (
                                                <ul className={style.drop_down_sub_item}>
                                                    {subItem.subItemName.map((itemName) => (
                                                        <li className={style.drop_down_list} key={itemName} onClick={(e) => e.stopPropagation()}>
                                                            <a href="">{itemName}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                        ))}
                                        </ul>
                                    }
                                </li>
                                <li className={style.menuItem}>
                                    <p onClick={() => toggleMegaMenuItem(1)}>Category</p>
                                    {megaMenuOpen[0].item && <ul className={`${style.megaMenu} ${style.dropable_items}`}>
                                        <li>
                                            <a href=""><h4>Programming</h4></a>
                                            <ul>
                                                <li>
                                                    <img src={img} alt="" />
                                                </li>
                                                <li><a href="">Programming</a></li>
                                                <li><a href="">Development</a></li>
                                                <li><a href="">Competetive</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href=""><h4>Development</h4></a>
                                            <ul>
                                                <li><a href="">Programming</a></li>
                                                <li><a href="">Development</a></li>
                                                <li><a href="">Competetive </a></li>
                                                <li>
                                                    <img src={img} className={style.big} alt="" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href=""><h4>Competetive</h4></a>
                                            <ul>
                                                <li>
                                                    <img src={img1} alt="" />
                                                </li>
                                                <li><a href="">Programming</a></li>
                                                <li><a href="">Development</a></li>
                                                <li><a href="">Competetive</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href=""><h4>Competetive</h4></a>
                                            <ul>
                                                <li><a href="">Programming</a></li>
                                                <li><a href="">Development</a></li>
                                                <li><a href="">Competetive</a></li>
                                                <li><a href="">Programming</a></li>
                                                <li><a href="">Development</a></li>
                                                <li><a href="">Competetive</a></li>
                                                <li><a href="">Programming</a></li>
                                                <li><a href="">Development</a></li>
                                                <li><a href="">Competetive</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <img src={animation} className={style.animation} alt="" />
                                        </li>
                                    </ul> }
                                    
                                </li>
                                <li>
                                    <p onClick={()=>toggleDropDownItem(2)}>About</p>
                                    {dropDownOpen[1].item && 
                                        <ul className={`${style.drop_down}`}>
                                        {dropDownOpen[1].subItem.map((subItem) => (
                                            <li className={style.drop_down_list} onClick={() => dropDownSubItem(2, subItem.id)} key={subItem.id}>
                                                <p>
                                                    {subItem.itemName}
                                                </p>
                                                {subItem.item && (
                                                    <ul className={style.drop_down_sub_item}>
                                                        {subItem.subItemName.map((itemName) => (
                                                            <li className={style.drop_down_list} key={itemName} onClick={(e) => e.stopPropagation()}>
                                                                <a href="">{itemName}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                        </ul>
                                    }
                                    
                                </li>
                                <li><a href="">Contact</a></li>
                                <li><button>Buy Me A Coffee</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
            {menuOpen && <div className='container'>
                <ul className={style.mainMenuList}>
                    <li className={`${style.menuList} ${style.menuList}`}><a href="">Home</a></li>
                    <li className={`${style.menuList} ${style.menuList}`}><p >Flyout</p></li>
                    <li className={`${style.menuItem} ${style.menuList} ${style.menuList}`} onClick={() => toggleMegaMenuItem(1)}>
                        <p>Category</p>
                    </li>
                    {/* DropDown for Flyout */}
                    
                    {/* Mega Menu for Category */}
                    {megaMenuOpen[0].item && 
                        <ul className={`${style.megaMenu} ${style.dropable_items}`}>
                            <li>
                                <img src={img} className={style.big} alt="" />
                                <a href=""><h4>Programming</h4></a>
                                <ul>
                                    <li><a href="">Programming</a></li>
                                    <li><a href="">Development</a></li>
                                    <li><a href="">Competetive</a></li>
                                </ul>
                            </li>
                            <li>
                                <img src={img} className={style.big} alt="" />
                                <a href=""><h4>Development</h4></a>
                                <ul>
                                    <li><a href="">Programming</a></li>
                                    <li><a href="">Development</a></li>
                                    <li><a href="">Competetive </a></li>
                                </ul>
                            </li>
                            <li>
                                <img src={img1} className={style.big} alt="" />
                                <a href=""><h4>Competetive</h4></a>
                                <ul>
                                    <li><a href="">Programming</a></li>
                                    <li><a href="">Development</a></li>
                                    <li><a href="">Competetive</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href=""><h4>Competetive</h4></a>
                                <ul>
                                    <li><a href="">Programming</a></li>
                                    <li><a href="">Development</a></li>
                                    <li><a href="">Competetive</a></li>
                                    <li><a href="">Programming</a></li>
                                    <li><a href="">Development</a></li>
                                    <li><a href="">Competetive</a></li>
                                    <li><a href="">Programming</a></li>
                                    <li><a href="">Development</a></li>
                                    <li><a href="">Competetive</a></li>
                                </ul>
                            </li>
                        </ul> 
                    }
                   
                    <li className={style.menuList}>
                    <p onClick={()=>toggleDropDownItem(2)}>About</p>
                    </li>
                    {dropDownOpen[1].item && 
                            <ul className={`${style.drop_down}`}>
                                {dropDownOpen[1].subItem.map((subItem) => (
                                    <li className={style.drop_down_list} onClick={() => dropDownSubItem(2, subItem.id)} key={subItem.id}>
                                        <p>
                                            {subItem.itemName}
                                        </p>
                                        {subItem.item && (
                                        <ul className={style.drop_down_sub_item}>
                                            {subItem.subItemName.map((itemName) => (
                                                <li className={style.drop_down_list} key={itemName} onClick={(e) => e.stopPropagation()}>
                                                    <a href="">{itemName}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    </li>
                                    
                                ))}
                            </ul>
                        }
                    <li className={style.menuList}><a href="">Contact</a></li>
                    <li><button>Buy Me A Coffee</button></li>
                    <li>
                        <img src={animation} className={style.animation} alt="" />
                    </li>
                </ul>
            </div>}
        </nav>
    )
}
