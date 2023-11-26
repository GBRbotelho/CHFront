import styles from "./Container2.module.css";
import Truck from "../images/truck.svg";
import Banner from "../images/banner.svg";
import Megaphone from "../images/megaphone.svg";

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
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <div className={styles.line}></div>
                <div className={styles.cardText}>
                  <img src={Megaphone}></img>
                  <h2>GRANDES FORMATOS</h2>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardContainer}>
                <div className={styles.line}></div>
                <div className={styles.cardText}>
                  <img src={Banner}></img>
                  <h2>LONAS, BANNER´S</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <section className={styles.card}>
              <div className={styles.cardContainer}>
                <div className={styles.line}></div>
                <div className={styles.cardText}>
                  <img src={Truck}></img>
                  <h2>ADESIVOS, ENVELOPAMENTO</h2>
                </div>
              </div>
            </section>
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
