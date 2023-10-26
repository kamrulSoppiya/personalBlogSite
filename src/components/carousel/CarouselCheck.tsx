import { useEffect, useState } from 'react';
import style from '../category/CategoryCard/category.module.scss';
import CategoryCard from '../category/CategoryCard/CategoryCard'; 

const CategoryCarousel = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoReplay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryData.length);
    }, 100);

    return () => {
      clearInterval(autoReplay);
    };
  }, [categoryData.length]);

  return (
    <div className="category-carousel">
        <div className={style.categoryItem}>
            <div className={style.container}>
                {categoryData.map((category, index) => (
                    <div key={index} className={`carousel-card ${index === currentIndex ? 'active' : ''}`}>
                        <CategoryCard cardName={category.cardName} cardTitle={category.cardTitle} cardInfo={category.cardInfo} cardBtn={category.cardBtn}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default CategoryCarousel;
