import { ReactNode } from "react";
import styles from "./modal.module.scss";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export const Modal = ({ children, closeModal }: ModalProps) => {
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.modal}>
        <button className={styles.modalCloseButton} onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal") as HTMLElement,
  );
};
