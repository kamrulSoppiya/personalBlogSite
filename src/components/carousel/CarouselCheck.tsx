import style from '../category/CategoryCard/category.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryCard from '../category/CategoryCard/CategoryCard'; 

const CategoryCarousel = (props) => {

  const categoryData = [
    {
      cardName: "CSS",
      cardTitle: "Card Title 1",
      cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cardBtn: "Read More",
    },
    {
      cardName: "JS",
      cardTitle: "Card Title 2",
      cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cardBtn: "Read More",
    },
    {
      cardName: "HTML",
      cardTitle: "Card Title 3",
      cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cardBtn: "Read More",
    },
    {
        cardName: "CSS",
        cardTitle: "Card Title 1",
        cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        cardBtn: "Read More",
      },
      {
        cardName: "JS",
        cardTitle: "Card Title 2",
        cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        cardBtn: "Read More",
      },
      {
        cardName: "HTML",
        cardTitle: "Card Title 3",
        cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        cardBtn: "Read More",
      },
      {
        cardName: "CSS",
        cardTitle: "Card Title 1",
        cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        cardBtn: "Read More",
      },
      {
        cardName: "JS",
        cardTitle: "Card Title 2",
        cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        cardBtn: "Read More",
      },
      {
        cardName: "HTML",
        cardTitle: "Card Title 3",
        cardInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        cardBtn: "Read More",
      },

  ];


  return (

    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={3000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {categoryData.map((category, index) => (
                <CategoryCard key={index} cardName={category.cardName} cardTitle={category.cardTitle} cardInfo={category.cardInfo} cardBtn={category.cardBtn}/>
          ))}
    {/* <div className={style.category_carousel}>
      <div className={style.categoryItem}>
        <div className={style.container}>
          {categoryData.map((category, index) => (
                <CategoryCard key={index} cardName={category.cardName} cardTitle={category.cardTitle} cardInfo={category.cardInfo} cardBtn={category.cardBtn}/>
          ))}
        </div>
      </div>
    </div>   */}
    </Carousel> 
  );
}

export default CategoryCarousel;
