import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./ModalPopUp.module.css";
import popup from "../images/popup.jpg";
import popupMobile from "../images/popupMobile.png";

export default function ModalPopUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  //Estilos
  const modalStyles = {
    content: {
      zIndex: 9999, // Ajuste o valor conforme necessário (use um valor maior)
      width: "min-content",
      height: "min-content",
      margin: "auto",
      padding: "10px",
      borderRadius: "20px",
      border: 0,
      overflow: "hidden",
      backgroundColor: "#003070",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999800000, // Adicione zIndex ao overlay se necessário
    },
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);

    // Abre o modal após 2 segundos
    const timeoutId = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    // Limpa o timeout e remove o ouvinte de evento quando o componente é desmontado
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const whatsappText = encodeURIComponent("Quero aproveitar a promoção");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Promoção"
      style={modalStyles}
    >
      <div className={styles.content}>
        <img src={windowWidth > 830 ? popup : popupMobile} />
        <button className={styles.close} onClick={() => setIsModalOpen(false)}>
          <i class="ri-close-fill"></i>
        </button>
        <div className={styles.buttonDiv}>
          <a
            href={`https://wa.me/19974026227?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>Aproveitar agora</button>
          </a>
          <p onClick={() => setIsModalOpen(false)}>não quero economizar</p>
        </div>
      </div>
    </Modal>
  );
}
