import style from './category.module.scss';
import { CategoryCardProps } from './CategoryCard.Model';
export default function CategoryCard({cardName,cardTitle, cardInfo, cardBtn}:CategoryCardProps) {
  return (
    <div>
        <div className={style.card}>
            <div className={style.box}>
                <div className={style.content}>
                <h2>{cardName}</h2>
                <h3>{cardTitle}</h3>
                <p>{cardInfo}</p>
                <a href="#">{cardBtn}</a>
                </div>
            </div>
        </div>  
    </div>
  )
}
