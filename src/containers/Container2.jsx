import styles from "./Container2.module.css";
import Truck from "../images/truck.svg";
import Banner from "../images/banner.svg";
import Megaphone from "../images/megaphone.svg";
import Adesivos from "../images/1.webp";
import ImgBanner from "../images/2.webp";
import ImgGrandesFormatos from "../images/4.webp";

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
              <img
                src={ImgGrandesFormatos}
                className={styles.cardImg}
                alt="Imagem Grandes Formatos"
              ></img>
              <div className={styles.cardContainer}>
                <div className={styles.line}></div>
                <div className={styles.cardText}>
                  <img src={Megaphone} alt="Icone Mega-Fone"></img>
                  <h2>GRANDES FORMATOS</h2>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <img
                src={ImgBanner}
                className={styles.cardImg}
                alt="Imagem Adesivos, Envelopamento"
              ></img>
              <div className={styles.cardContainer}>
                <div className={styles.line}></div>
                <div className={styles.cardText}>
                  <img src={Banner} alt="Icone Banner"></img>
                  <h2>LONAS, BANNER´S</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <section className={styles.card}>
              <img
                src={Adesivos}
                className={styles.cardImg}
                alt="Imagem Lonas, Banner's"
              ></img>
              <div className={styles.cardContainer}>
                <div className={styles.line}></div>
                <div className={styles.cardText}>
                  <img src={Truck} alt="Icone Caminhão"></img>
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
              <a href="https://wa.me/19974026227?text=Gostaria%20de%20fazer%20um%20orçamento">
                <button>CHAMAR WHATSAPP</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container2;
