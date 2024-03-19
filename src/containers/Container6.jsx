import React from "react";
import styles from "./Container6.module.css";
import Lupa from "../images/lupa.png";
import Maos from "../images/maos.png";

function Container6() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <section>
            <img src={Lupa} alt="Imagem Lupa"></img>
          </section>
          <h2>
            FAZER UM <span>ORÇAMENTO</span>
          </h2>
          <p>
            Entre em contato conosco para que possamos realizar
            <br /> um orçamento ou uma consulta sobre seu próximo
            <br /> projeto
          </p>
          <a href="https://wa.me/19974026227?text=Gostaria%20de%20fazer%20um%20orçamento">
            <button>Entrar em contato</button>
          </a>
        </div>
        <div className={styles.content2}>
          <section>
            <img src={Maos} alt="Imagem Mãos"></img>
          </section>
          <h2>
            FAÇA PARCERIA <span>CONOSCO</span>
          </h2>
          <p>
            Terceirizando você economiza tempo e energia <br /> podendo ter mais
            tempo para atender seus clientes
            <br /> da melhor forma
          </p>
          <a href="https://wa.me/19974026227?text=Gostaria%20de%20fazer%20um%20orçamento">
            <button>Entrar em contato</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Container6;
