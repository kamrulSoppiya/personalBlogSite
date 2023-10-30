import Slider from "react-slick";
import CategoryCard from "../category/CategoryCard/CategoryCard";

export default function Carousel(){
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
      <div style={{background:'#004658'}}>
        <div className="container">
          <Slider {...settings}>
            {categoryData.map((category, index) => (
              <CategoryCard key={index} cardName={category.cardName} cardTitle={category.cardTitle} cardInfo={category.cardInfo} cardBtn={category.cardBtn}/>
            ))}
          </Slider>
        </div>
        
      </div>
    );
  
}