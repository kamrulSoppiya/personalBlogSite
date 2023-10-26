import { useState } from "react";
import Modal from "./Modal";

export default function MainModel() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isModalOpen} isClose={closeModal}>
                <h2>Modal</h2>
                <p>This is a simple modal example.</p>
            </Modal>
        </div>
    )
}
