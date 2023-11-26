import styles from "./Container2.module.css";

function Container2() {
  return (
    <div className={styles.container} id="servicos">
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            PRONTO
            <br />
            PARA O QUE
          </h2>
          <h3>VOCÊ PRECISA</h3>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card1}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.card2}>
            <section></section>
            <div className={styles.text2}>
              <h2>
                PROCURANDO
                <br />
                ALGO{" "}
                <span>
                  PERSONALIZADO
                  <br />
                  OU ESPECÍFICO
                </span>
                ?
              </h2>
              <button>CHAMAR WHATSAPP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container2;
