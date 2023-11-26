import React from "react";
import styles from "./Container6.module.css";

function Container6() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <section />
          <h2>
            FAZER UM <span>ORÇAMENTO</span>
          </h2>
          <p>
            Entre em contato conosco para que possamos realizar
            <br /> um orçamento ou uma consulta sobre seu próximo
            <br /> projeto
          </p>
          <button>Entrar em contato</button>
        </div>
        <div className={styles.content2}>
          <section />
          <h2>
            FAÇA PARCERIA <span>CONOSCO</span>
          </h2>
          <p>
            Terceirizando você economiza tempo e energia <br /> podendo ter mais
            tempo para atender seus clientes
            <br /> da melhor forma
          </p>
          <button>Entrar em contato</button>
        </div>
      </div>
    </div>
  );
}

export default Container6;
