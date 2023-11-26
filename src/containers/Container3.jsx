import styles from "./Container3.module.css";
import Marca from "../images/Logo.png";
import Star from "../images/starticon.svg";

function Container3() {
  return (
    <div className={styles.container} id="clientes">
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.div1}>
            <h2>
              O QUE
              <br />
              OS
              <br />
              <span>CLIENTES</span>
              <br />
              DIZEM
            </h2>
          </div>
          <div className={styles.div2}>
            <div className={styles.coment}>
              <div className={styles.line}></div>
              <div className={styles.comentDetails}>
                <div className={styles.logo}></div>
                <div className={styles.comentName}>
                  <h2>FAZENDINHA</h2>
                  <ul>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                    <li>
                      <img src={Star} alt="" />
                    </li>
                  </ul>
                  <span>11 de setembro 2023</span>
                </div>
              </div>
              <div className={styles.comentText}>
                <p>
                  "Melhor serviço que eu poderia ter contratado, sinto cada dia
                  mais que tenho autonomia e segurança que uma empresa como a CH
                  esta cuidando das impressões que eu preciso."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.content2}>
          <ul>
            <li>
              <img src={Marca} />
            </li>
            <li>
              <img src={Marca} />
            </li>
            <li>
              <img src={Marca} />
            </li>
            <li>
              <img src={Marca} />
            </li>
            <li>
              <img src={Marca} />
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Container3;
