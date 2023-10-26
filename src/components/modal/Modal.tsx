export default function Modal({children, isOpen, isClose}) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="modal-overlay">
            <div className="modal">
            <button className="modal-close-button" onClick={isClose}>
                Close
            </button>
            {children}
            </div>
        </div>
    );
}
