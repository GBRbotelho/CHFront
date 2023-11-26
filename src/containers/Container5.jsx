import styles from "./Container5.module.css";
import IconMap from "../images/iconemap.svg";
import IconMail from "../images/iconmail.svg";
import IconPhone from "../images/iconphone.svg";

function Container5() {
  return (
    <div className={styles.container} id="contatos">
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.text}>
          <div className={styles.textContent}>
            <img src={IconMap} alt="" />
            <div>
              <h2>ENDEREÇO</h2>
              <p>
                Rua Argemiro Piva,330 - Vila Jose Paulino Nogueira, Paulínia -
                <br />
                SP13140-426
              </p>
            </div>
          </div>
          <div className={styles.textContent2}>
            <img src={IconMail} alt="" />
            <div>
              <h2>EMAIL</h2>
              <p>Chcomunição@gmail.com</p>
            </div>
          </div>
          <div className={styles.textContent3}>
            <img src={IconPhone} alt="" />
            <div>
              <h2>CONTATO</h2>
              <p>
                (XX)XXXXX-XXXX
                <br />
                (XX)XXXXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container5;
