import styles from './Recapitulando.module.css'

export function Recapitulando() {
    return(
        <div className={styles.container}>
            <div className={styles.initialFrase}>
                <h1 className={styles.gold}>Recapitulando...</h1>
                <h1>Você sairá desse desafio, sabendo:</h1>
            </div>

            <div className={styles.boxContainer}>
                <div className={styles.box}>
                    <div className={styles.txt}>
                        <h2 className={styles.texto}>Rastrear os hábitos que tem te feito procrastinar</h2>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.txt}>
                        <h2 className={styles.texto}>Entender a vida e o processo que precisa percorrer para alcançá-la</h2>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.txt}>
                        <h2 className={styles.texto}>Como estipular metas reais e possíveis</h2>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.txt}>
                        <h2 className={styles.texto}>Se posicionar dentro das suas relações</h2>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.txt}>
                        <h2 className={styles.texto}>Transformar a sua mentalidade</h2>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.txt}>
                        <h2 className={styles.texto}>Desenvolver uma rotina leve, funcional e equilibrada</h2>
                    </div>
                </div>
            </div>

            <div className={styles.contBtn}>
                <button className={styles.btnReca}>
                    <a href='https://chat.whatsapp.com/G3pbsdeoH37HyMj8Tq2tCZ'>QUERO ENTRAR NO GRUPO VIP</a>
                </button>
            </div>
        </div>
    )
}