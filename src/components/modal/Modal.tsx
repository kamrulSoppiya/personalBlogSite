import { ReactNode } from "react";
import style from './modal.module.scss';
interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className={style.modal_overlay} onClick={props.toggle} >
          <div onClick={(e) => e.stopPropagation()} className={style.modal_box}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
