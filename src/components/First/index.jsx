import styles from './First.module.css'

export function First() {
    return(
        <div className={styles.container}>
            <div className={styles.emoji}>
                <span>🔥 Condição exclusiva no Grupo VIP 🔥</span>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.imgContainer}></div>
                <div className={styles.txtContainer}>
                    <div className={styles.title}></div>
                    <div className={styles.texts}>
                        <h2>Transforme os seus planos em realidade através de pilares que te permitem desenvolver a autoconsciência, romper crenças que te limitam e viver com equilibro sua rotina.</h2>
                        <br/>
                        <h2>Mesmo que você esteja frustrada, se sentindo estagnada, querendo deixar mais uma vez para depois e se veja vivendo os mesmos ciclos sem fim.</h2>
                        <br/>
                        <button className={styles.btnFirst}>
                            <a href='https://chat.whatsapp.com/G3pbsdeoH37HyMj8Tq2tCZ'>QUERO ENTRAR NO GRUPO VIP</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
