import style from './category.module.scss';
import CategoryCard from './CategoryCard';
// Use backgroud Color #0C6075;
export default function CategoryItems() {
  
  return (
    <div className={style.categoryItem}>
        <div className={style.container}>
            {/* Mapping all Category Item in Home Page */}
            <CategoryCard cardName="CSS" cardTitle="Cart Title" cardInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit." cardBtn="Read More"/>
            <CategoryCard cardName="JS" cardTitle="Cart Title" cardInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit." cardBtn="Read More"/>
            <CategoryCard cardName="HTML" cardTitle="Cart Title" cardInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit." cardBtn="Read More"/>
          </div>   
      </div>
  )
}
