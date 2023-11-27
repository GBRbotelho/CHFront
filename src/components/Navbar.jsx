import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/LOGONAV.png";
import MenuHamburger from "../images/menuHamburger.svg";
import Close from "../images/close.svg";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false); // Fechar o dropdown após clicar em um item
    }
  };

  return (
    <nav
      className={`${styles.nav} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.divLogo}>
        <img src={Logo} alt="Descrição da imagem" />
      </div>
      <ul className={styles.menu}>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("servicos")}>Serviços</li>
        <li onClick={() => scrollToSection("clientes")}>Clientes</li>
        <li onClick={() => scrollToSection("contatos")}>Contatos</li>
      </ul>

      <div className={styles.div}>
        <a href="https://wa.me/19992263352?text=Gostaria%20de%20fazer%20um%20orçamento">
          <button>Fazer um orçamento</button>
        </a>
      </div>
      <div onClick={toggleDropdown} className={styles.hamburger}>
        <img src={isDropdownOpen ? Close : MenuHamburger}></img>
      </div>
      <div
        className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ""}`}
      >
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("servicos")}>Serviços</li>
          <li onClick={() => scrollToSection("clientes")}>Clientes</li>
          <li onClick={() => scrollToSection("contatos")}>Contatos</li>
          <a href="https://wa.me/19992263352?text=Gostaria%20de%20fazer%20um%20orçamento">
            <button>Fazer um orçamento</button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
