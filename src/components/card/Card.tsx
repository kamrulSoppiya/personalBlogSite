import style from "./card.module.css";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';

const Card = () => {
  return <div className={style.card_structure} style={{width:"300px", margin:'30px 0'}}>
    <CardHeader>
      <CardBody>
        <h3 className="h3" style={{textAlign:"center", fontWeight:'800', marginTop:'25px'}}><a style={{textDecoration:"none"}} href="">Fundamental Of JavaScript</a></h3>
      </CardBody>
    </CardHeader>
    <CardFooter />
  </div>;
};


export default Card;