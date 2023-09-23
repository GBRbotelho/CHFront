import styles from "./Container4.module.css";


function Container4() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.contentMain}>
                <div className={styles.title}>
                    <h2> <span> PROJETOS </span> RECENTES</h2>
                </div>
                <div className={styles.image}>

                </div>
            </div>
            <div className={styles.options}>
                <div className={styles.styleOptions}>
                    <h1>______________</h1>
                    <h2>NOME DO PROJETO - CLIENTE -<br/>CIDADE</h2>
                </div>
                <div className={styles.styleOptions}>
                    <h1>______________</h1>
                    <h2>NOME DO PROJETO - CLIENTE -<br/>CIDADE</h2>
                </div>
                <div className={styles.styleOptions}>
                    <h1>______________</h1>
                    <h2>NOME DO PROJETO - CLIENTE -<br/>CIDADE</h2>
                </div>
                <div className={styles.styleOptions}>
                    <h1>______________</h1>
                    <h2>NOME DO PROJETO - CLIENTE -<br/>CIDADE</h2>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Container4;
