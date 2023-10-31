import style from './banner.module.css';
import bannerImg from '../../assets/img/Group.png';
import Subsribe from '../subScription/Subsribe';
export default function Banner() {
  return (
    <div className={style.row}>
      <div className="container">
        <div className={style.content}>
          <div className={style.leftContent}>
            <h1 style={{fontSize:'3.2vw'}}>Hi, I'm Dasteen <br /> Front End Dev</h1>
            <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc <br />
              Make sure you subscribe to get the latest updates</p>
            <Subsribe/>  
          </div>
          <div className={style.rightContent}>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

