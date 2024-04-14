import styles from './Depoimento.module.css'

export function Depoimento() {
    return(
        <div className={styles.container}>
            <h1>A metodologia do <strong>DCC</strong> já gerou dezenas de depoimentos como estes:</h1>
            
            <div className={styles.depoContainer}>
                <div className={styles.depo}></div>
                <div className={styles.depo2}></div>
                <div className={styles.depo3}></div>
            </div>

            <div className={styles.final}></div>
        </div>
    )
}