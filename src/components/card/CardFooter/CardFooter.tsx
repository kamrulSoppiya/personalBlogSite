import style from './card_footer.module.css';
import writterImg from '../../../assets/img/Ellipse 80.png';
export default function CardFooter() {
  return (
        <div className={style.footer}>
           <div className={style.publisherInfo}>
                <img src={writterImg} alt="" />
                <div className={style.publisher_name}>
                    <p className='p1'>Dasteen</p>
                    <p className='p_small'>Jan 10,2023</p>
                </div>
           </div>
            <p className='p2'>3 Min Read</p>
        </div>
    )
}
