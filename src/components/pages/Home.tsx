// import Header from "../header/Header";
// import style from '../../assets/css/module/home.module.scss';
// import CategoryItem from "../category/CategoryCard/CategoryItems";
// import Category from "./Category";

// import Banner from "../banner/Banner";
import Carousel from '../carousel/Carousel';
import CategoryCarousel from '../carousel/CarouselCheck';
import CategoryItems from '../category/CategoryCard/CategoryItems';

export default function Home() {

  return (
    <div>
         {/* <Banner />
          <div className={style.category}>
            <CategoryItem />
         </div> */}
          {/* <Carousel slides={<CategoryItems />} /> */}
         <CategoryCarousel/>
        
        
    </div>
  )
}
