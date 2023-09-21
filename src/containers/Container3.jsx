import styles from "./Container3.module.css";
import Marca from "../images/Marca.svg"

function Container3() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content1}>
            <div className={styles.div1}>
              <h2>O QUE<br/>OS<br/><span>CLIENTES</span><br/>DIZEM</h2>
            </div>
            <div className={styles.div2}>
              <section ></section>
            </div>
        </div>
        <div className={styles.content2}>
            <ul>
                <li>
                    <img src={Marca}/>
                </li>
                <li>
                    <img src={Marca}/>
                </li>
                <li>
                    <img src={Marca}/>
                </li>
                <li>
                    <img src={Marca}/>
                </li>
                <li>
                    <img src={Marca}/>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Container3;
