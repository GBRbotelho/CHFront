import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <nav className={styles.nav}>
      <div>Logo</div>
      <div className={styles.div}>
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Serviços</li>
          <li>Clientes</li>
          <li>Contatos</li>
        </ul>
        <button>Fazer um orçamento</button>
      </div>
    </nav>
  );
}

export default Navbar;
