import style from './banner.module.css';
import dot from '../../assets/img/Dot.png';
export default function Banner() {
  return (
    <div className={style.row}>
        <div className="container" style={{position:'relative'}}>
            <div className={style.container_bg_Img}>
                <img src={dot} alt="dot image bg" />
            </div>
        </div>
    </div>
  )
}
