import styles from "./Container1.module.css";

function Container1() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.h2}>BUREAU<br/>
        <span>DE IMPRESSÃO</span></h2>
        <p className={styles.p}>
          7 anos no mercado entregando com rapidez e qualidade, grandes
          <br />
          produções.Com a estrutura para realizar{" "}
          <span className={styles.caneta}>qualquer projeto</span>
        </p>
        <button>Entre em contato</button>
      </div>
      <div className={styles.divImage}></div>
    </div>
  );
}

export default Container1;
