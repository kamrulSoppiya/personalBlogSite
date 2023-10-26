import Button from '../../button/Button';
import SocialIcon from '../socialIcon/SocialIcon';
import style from './footer_content.module.scss';
export default function FooterContent() {
  return (
    <div className={style.pg_footer}>
        <footer className={style.footer}>
            <svg className={style.footer_wave_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                <path className={style.footer_wave_path} d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
            </svg>
            <div className="container">
                <div className={style.footer_content}> 
                    <div className={style.footer_top}>
                        <div className="item">
                            <ul style={{textAlign:'center'}}>
                                <li>
                                    <h1>Dasten.blog</h1>
                                </li>
                                <li style={{marginTop:'6px'}}><p>Digital Dastin by Arat</p></li>
                            </ul>
                        </div>
                        <div className="item">
                            <ul>
                                <p className='p1' style={{color:'white', textTransform: 'uppercase'}}>Category</p>
                                <li><a href="">CSS</a></li>
                                <li><a href="">Javascript</a></li>
                                <li><a href="">Tailwind</a></li>
                                <li><a href="">React Js</a></li>
                                <li><a href="">More Category</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <ul>
                                <p className='p1' style={{color:'white', textTransform: 'uppercase'}}>About Me</p>  
                                <li><a href="">About Me</a></li>
                                <li><a href="">Projects</a></li>
                                <li><a href="">Achievement</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <ul>
                                <p className='p1' style={{color:'white', textTransform: 'uppercase'}}>lets Chat</p>  
                                <li><p>Have a support question?</p></li>
                                <li><Button type="button" children='GET IN TOUCH' className={style.footer_btn}/></li>
                                <li style={{color:'white', textTransform: 'uppercase'}}><p className='p3'>You call us</p></li>
                                <li><a href="">+88019-69545000</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.footer_bottom}>
                        <SocialIcon />
                    </div>
                </div>
            </div>
        </footer>
    </div>
    
  )
}
