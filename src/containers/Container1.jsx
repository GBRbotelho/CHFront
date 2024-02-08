import styles from "./Container1.module.css";

function Container1() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <h2 className={styles.h2}>
            BUREAU
            <br />
            <span>DE IMPRESSÃO</span>
          </h2>
          <p className={styles.p}>
            7 anos no mercado entregando com rapidez e qualidade.
            <br /> Com estrutura para realizar impressões em grandes formatos.
            {/* <span className={styles.caneta}> grandes formatos.</span> */}
          </p>
          <a href="https://wa.me/19974026227?text=Gostaria%20de%20fazer%20um%20orçamento">
            <button>Entre em contato</button>
          </a>
        </div>
        {/* <div className={styles.divImage}></div> */}
      </div>
    </div>
  );
}

export default Container1;
