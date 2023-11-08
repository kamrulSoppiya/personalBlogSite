import style from './test.module.css';
import img from '../../assets/img/programming.jpg';
import img1 from '../../assets/img/dev.jpg';
import animation from '../../assets/img/cycling.gif'
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react';
export default function Test() {
    const [menuOpen, setmenuOpen] = useState(false);

    const collapseNavbar = () =>{
        setmenuOpen(!menuOpen);
    }

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
                                <li className={style.menuItem}>
                                    <a href="">Category</a>
                                    <ul className={`${style.megaMenu} ${style.dropable_items}`}>
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
                                    </ul> 
                                </li>
                                <li>
                                    <a href="">About</a>
                                    <ul className={`${style.drop_downItems} ${style.dropable_items}`} style={{display:'none'}}>
                                        <li><a href="">Programming</a></li>
                                        <li><a href="">Development</a></li>
                                        <li><a href="">Competetive Task</a></li>
                                    </ul>
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
                    <li><a href="">Home</a></li>
                    <li className={style.menuItem}>
                        <a href="">Category</a>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <a href="">About</a>
                        <ul className={`${style.drop_downItems} ${style.dropable_items}`} style={{display:'none'}}>
                            <li><a href="">Programming</a></li>
                            <li><a href="">Development</a></li>
                            <li><a href="">Competetive Task</a></li>
                        </ul>
                    </li>
                    <li><a href="">Contact</a></li>
                    <li><button>Buy Me A Coffee</button></li>
                    <li>
                        <img src={animation} className={style.animation} alt="" />
                    </li>
                </ul>
            </div>}
            
        </nav>
    )
}
