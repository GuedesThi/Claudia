import styles from './About.module.css'

export function About() {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>O Que É</h1>
                <div className={styles.juntar}>
                    <div className={styles.logo}></div>
                </div>

                <div className={styles.txt}>
                    <p>O DCC vai muito além de ser apenas um desafio. Tornou-se um verdadeiro estilo de vida, pois ao perceber os resultados em sua rotina, a pessoa não deseja voltar mais para seus hábitos anteriores.</p>
                    <p>É um ambiente transformador, onde você encontrará conhecimento, suporte, ferramentas e a chave que você precisa para transformar seus desejos em realidade.</p>
                </div>

                <div className={styles.boxContainer}>
                    <div className={styles.box}>
                        <span>Dentro do desafio você terá acesso ao método secreto</span>
                    </div>
                    <div className={styles.box}>
                        <span>Aulas exclusivas para te trazer o que está inconsciente em você para fora</span>
                    </div>
                    <div className={styles.box}>
                        <span>Tarefas práticas para aplicar a metodologia ao final de cada aula</span>
                    </div>
                    <div className={styles.box}>
                        <span>Troca riquíssima com mulheres com os mesmos objetivos e propósitos que os seus</span>
                    </div>
                    <div className={styles.box}>
                        <span>Ferramentas estratégicas para prosseguir de forma independente com o método a longo prazo</span>
                    </div>
                </div>
            </div>
            <div className={styles.right}></div>
        </div>
    )
}