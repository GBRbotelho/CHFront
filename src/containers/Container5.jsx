import styles from "./Container5.module.css";
import IconMap from "../images/iconemap.svg";
import IconMail from "../images/iconmail.svg";
import IconPhone from "../images/iconphone.svg";

function Container5() {
  return (
    <div className={styles.container} id="contatos">
      <div className={styles.content}>
        <div className={`${styles.image} ${styles.map_responsive}`}>
          <iframe
            title="GoogleMaps Localização"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14715.420333948996!2d-47.1639861!3d-22.7707587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8953c29ff552d%3A0x179d704a4fc4b936!2sCH%20Comunica%C3%A7%C3%A3o%20Visual!5e0!3m2!1spt-BR!2sbr!4v1701006407217!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.text}>
          <div className={styles.textContent}>
            <img src={IconMap} alt="" />
            <div>
              <h2>ENDEREÇO</h2>
              <p>
                Rua Argemiro Piva,395 - Vila Jose Paulino Nogueira, Paulínia -
                <br />
                SP13140-426
              </p>
            </div>
          </div>
          <div className={styles.textContent2}>
            <img src={IconMail} alt="" />
            <div>
              <h2>EMAIL</h2>
              <p>chimpressao@gmail.com</p>
            </div>
          </div>
          <div className={styles.textContent3}>
            <img src={IconPhone} alt="" />
            <div>
              <h2>CONTATO</h2>
              <p>(19) 97402-6227</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container5;
