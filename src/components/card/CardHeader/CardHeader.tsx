import imges from '../../../assets/img/Article_Image.png';
import { CardBodyProps } from '../CardBody/CardBody.Model';
export default function CardHeader({children}:CardBodyProps) {
  return (
    <div className="">
      <img src={imges} alt="article Images" />
      {children}
    </div>
  )
}
