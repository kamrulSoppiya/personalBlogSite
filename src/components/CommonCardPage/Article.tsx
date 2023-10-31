import { Link } from 'react-router-dom';
import Card from '../card/Card';
import style from './commonCard.module.scss';

export default function Article({ categoryName }) {
  return (
    <div className="container">
      <div className={style.row}>
        <h3>{categoryName} -</h3>
        <Link to="#">See All Articles -</Link>
      </div>
      <div className={style.row}>
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  );
}


