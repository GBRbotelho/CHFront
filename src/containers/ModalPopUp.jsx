import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./ModalPopUp.module.css";
import popup from "../images/popup.png";
import popupMobile from "../images/popupMobile.png";

export default function ModalPopUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Estilos
  const modalStyles = {
    content: {
      zIndex: 9999,
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
      zIndex: 999800000,
    },
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    // Pode iniciar o carregamento da imagem imediatamente
    const image = new Image();
    image.src = windowWidth > 830 ? popup : popupMobile;
    image.onload = () => {
      setImageLoaded(true);
      setIsModalOpen(true);
    };

    // Limpa o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  const whatsappText = encodeURIComponent("Quero aproveitar a promoção");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Promoção"
      style={modalStyles}
    >
      <div className={styles.content}>
        {imageLoaded && (
          <>
            <img
              src={windowWidth > 830 ? popup : popupMobile}
              onLoad={handleImageLoad}
              alt="Promoção"
            />
            <button
              className={styles.close}
              onClick={() => setIsModalOpen(false)}
            >
              <i className="ri-close-fill"></i>
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
          </>
        )}
      </div>
    </Modal>
  );
}
