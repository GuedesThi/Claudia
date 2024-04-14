import styles from './Bonus.module.css'

export function Bonus() {
    return(
        <div className={styles.container}>
            <h1 className={styles.first}>E ainda não acabou...</h1>
            <h1 className={styles.second}>Além de todo conteúdo, você vai ter acesso a bônus exclusivos:</h1>

            <div className={styles.cardContainer}>
                <div className={styles.top}>
                    <h2>BÔNUS ESPECIAL</h2>
                </div>
                <div className={styles.rest}>
                    <div className={styles.img}></div>
                    <h3>Rastreador de Hábitos</h3>
                    <div className={styles.contTxt}>
                        <p className={styles.txtBonus}>Desenhe sua rotina e analise os hábitos que têm te impulsionado a cumprir suas metas e os que têm te travado.</p>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.price}>
                        <h3>De:</h3>
                        <h3 className={styles.red}>R$ 57,00</h3>
                        <h3>| Por:</h3>
                        <h3 className={styles.green}>GRÁTIS</h3>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.top}>
                    <h2>BÔNUS ESPECIAL</h2>
                </div>
                <div className={styles.rest}>
                    <div className={styles.img2}></div>
                    <h3>Playlist do Equilíbrio</h3>
                    <div className={styles.contTxt}>
                        <p className={styles.txtBonus}>Nutra a sua mente com letras e melodias que te permitem construir um novo cenário de possibilidades.</p>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.price}>
                        <h3>De:</h3>
                        <h3 className={styles.red}>R$ 24,00</h3>
                        <h3>| Por:</h3>
                        <h3 className={styles.green}>GRÁTIS</h3>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.top}>
                    <h2>BÔNUS ESPECIAL</h2>
                </div>
                <div className={styles.rest}>
                    <div className={styles.img3}></div>
                    <h3>Lista de Livros</h3>
                    <div className={styles.contTxt}>
                        <p className={styles.txtBonus}>Para enriquecer a sua jornada de autoconsciência e permitir que amplie sua mente para atingir metas reais.</p>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.price}>
                        <h3>De:</h3>
                        <h3 className={styles.red}>R$ 67,00</h3>
                        <h3>| Por:</h3>
                        <h3 className={styles.green}>GRÁTIS</h3>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.top}>
                    <h2>BÔNUS ESPECIAL</h2>
                </div>
                <div className={styles.rest}>
                    <div className={styles.img4}></div>
                    <h3>Exercícios Aqui & Agora</h3>
                    <div className={styles.contTxt}>
                        <p className={styles.txtBonus}>Tenha acesso a 3 exercícios que te trazem para o momento presente, aliviando crises de ansiedade e trazendo equilíbrio para a sua rotina.</p>
                    </div>
                </div>
                <div className={styles.down}>
                    <div className={styles.price}>
                        <h3>De:</h3>
                        <h3 className={styles.red}>R$ 67,00</h3>
                        <h3>| Por:</h3>
                        <h3 className={styles.green}>GRÁTIS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}