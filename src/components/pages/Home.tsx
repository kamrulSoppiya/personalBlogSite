import style from '../../assets/css/module/home.module.scss';
import Article from "../CommonCardPage/Article";
import Banner from "../banner/Banner";
import Button from "../button/Button";
import Carousel from '../carousel/Carousel';
import postBoximg from '../../assets/img/image 2.png';
import Subsribe from '../subScription/Subsribe';
export default function Home() {
  return (
    <div>
        <Banner />
        <Carousel />
        <Article categoryName="Featured Aarticle"/>
        <Article categoryName="CSS"/>
        <Article categoryName="Javascript"/>
        <Article categoryName="React JS"/>
        <div className="" style={{display:'flex', justifyContent:'center', padding:'10px'}}>
            <Button type='button' className={style.showMoreBtn} children='Show More'/>
        </div>
        <div className="container">
          <div className={style.subscribeLatestUpdate}>
            <div className={style.itemFlex}>
              <img src={postBoximg} alt="" />
              <h2>Subscribe For The Latest Updates</h2>
              <p>Subscribe to newsletter and never miss the new post every week.</p>
              <Subsribe/>
            </div>
          </div>
        </div>
    </div>
  )
}
