import React from "react";
import styles from "./Container7.module.css";
import Logo from "../images/Logo_ATUALIZADO.webp";
import IconInsta from "../images/iconinsta.svg";
import IconWhats from "../images/iconwhats.svg";

function Container7() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={Logo} alt="" />
        <div className={styles.text}>
          <div className={styles.text1}>
            <div className={styles.textContent1}>
              <h3>Horário de funcionamento</h3>
              <p>Seg a Sex - 08:00 às 18:00</p>
            </div>
            <div className={styles.textContent2}>
              <h3>Endereço</h3>
              <p>
                Rua Argemiro Piva, 395 - Vila Jose Paulino Nogueira, Paulínia -
                SP 13140-426
              </p>
            </div>
          </div>
          <div className={styles.text2}>
            <h3>Acompanhe nas redes sociais</h3>
            <div className={styles.icon}>
              <img src={IconInsta} alt="" />
              <p>@chcomunicacaovisual</p>
            </div>
            <div className={styles.icon1}>
              <img src={IconWhats} alt="" />
              <p>(19) 97402-6227</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container7;
