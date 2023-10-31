import { ReactNode } from "react";
import style from './modal.module.scss';
interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal({isOpen, children, toggle }: ModalType) {
  return (
    <>
      {isOpen && (
        <div className={style.modal_overlay} onClick={toggle} >
          <div onClick={(e) => e.stopPropagation()} className={style.modal_box}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
