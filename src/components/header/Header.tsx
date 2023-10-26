import style from './header.module.css';
// import {HeaderProps} from './Header.Model';
import Navbar from '../Navbar/Navbar';
import {useState} from 'react';
import logo from '../../assets/img/Logo.png';
import Modal from '../modal/Modal';
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };
  
  const closeModal = () => {
      setIsModalOpen(false);
  };

  // <Modal children="items" isOpen={isModalOpen} isClose = {closeModal} />

  // <Navbar  openModal={openModal}/>
  //     <Modal isOpen={isModalOpen} isClose={closeModal}>
  //         <h2>Modal</h2>
  //         <p>This is a simple modal example.</p>
  //     </Modal>
  return (
    <div className="container">
        <div className={style.row}>
            <div className={style.logo}>
                <img src={logo} alt="website logo" />
            </div>
            <Navbar openModal={openModal}/>
            {/* <Modal isOpen={isModalOpen} isClose={closeModal}>
                <h2>Modal</h2>
                <p>This is a simple modal example.</p>
            </Modal> */}
        </div>
    </div>
  )
}
