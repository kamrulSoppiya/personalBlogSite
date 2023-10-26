import style from './banner.module.css';
import bannerImg from '../../assets/img/Group.png';
import dot from '../../assets/img/Dot.png';
import Subsribe from '../subScription/Subsribe';
export default function Banner() {
  return (
    <div className={style.row}>
        <div style={{position:'relative'}}>
            <div className={style.container_bg_Img}>
                <img src={dot} alt="dot image bg" />
            </div>
            {/* <div className="container">
                <div className={style.bannerDiv}>
                  <div className={style.left}>
                    <h1>Hi, I'm Dasteen <br /> Front End Dev</h1>

                    <p className='p3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

                    <Subsribe />
                  </div>

                  <div className={style.right}>
                      <img src={bannerImg} alt="banner image" height="387" width="470" />
                  </div>
                </div>
            </div> */}
          </div>
    </div>
  )
}
