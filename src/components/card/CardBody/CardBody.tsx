import { CardBodyProps } from "./CardBody.Model";
import style from './card_body.module.css';
export default function CardBody({ children, className, onClick }:CardBodyProps) {
  return (
    <div className="" onClick={onClick}>
      {children}
    </div>
  )
}
