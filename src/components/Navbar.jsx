import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/Logo.png";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Limita o desaparecimento da barra de navegação após rolar 120px
    const scrollThreshold = 55;

    if (currentScrollPos < scrollThreshold) {
      setVisible(true); // Mantém a barra de navegação visível
    } else {
      const visible = prevScrollPos > currentScrollPos;
      setVisible(visible);
    }

    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.divLogo}>
        <img src={Logo} alt="Descrição da imagem" />
      </div>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Serviços</li>
        <li>Clientes</li>
        <li>Contatos</li>
      </ul>
      <div className={styles.div}>
        <button>Fazer um orçamento</button>
      </div>
    </nav>
  );
}

export default Navbar;
