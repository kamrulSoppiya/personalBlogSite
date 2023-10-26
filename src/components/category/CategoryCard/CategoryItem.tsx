import style from './category.module.scss';
// Use backgroud Color #0C6075;
export default function CategoryItem() {
  return (
    <div className={style.CategoryItem}>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.box}>
            <div className={style.content}>
              <h2>CSS</h2>
              <h3>Cart Title</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
