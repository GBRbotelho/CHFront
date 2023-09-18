import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/Logo.png";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <nav className={styles.nav}>
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
