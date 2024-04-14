import styles from './Pilar.module.css';

export function Pilar() {
    return(
        <div className={styles.container}>
            <h1>No <strong>DCC</strong> você vai aprender:</h1>

            <div className={styles.pilarContainer}>
                <div className={styles.pilar}>
                    <div className={styles.topo1}></div>
                    <div className={styles.resto}>
                        <div className={styles.name}>
                            <span>Pilar 1</span>
                        </div>
                        <div className={styles.titulo}>
                            <h1>Consciência</h1>
                        </div>
                        <div className={styles.texto}>
                            <p>Traga para fora tudo o que sua mente tenta esconder de você e entenda o que é seu.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.pilar}>
                    <div className={styles.topo2}></div>
                    <div className={styles.resto}>
                        <div className={styles.name}>
                            <span>Pilar 2</span>
                        </div>
                        <div className={styles.titulo}>
                            <h1>Relacionamentos</h1>
                        </div>
                        <div className={styles.texto}>
                            <p>Analise com estratégia os seus ciclos pessoais e interpessoais e desenhe a realidade que deseja viver.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.pilar}>
                    <div className={styles.topo3}></div>
                    <div className={styles.resto}>
                        <div className={styles.name}>
                            <span>Pilar 3</span>
                        </div>
                        <div className={styles.titulo}>
                            <h1>Alimentação</h1>
                        </div>
                        <div className={styles.texto}>
                            <p>Identifique o papel funcional da comida em sua vida e como ela pode deixar de ser a vilã e passar a ser sua aliada nessa jornada.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.pilarContainer}>
                <div className={styles.pilar}>
                    <div className={styles.topo4}></div>
                    <div className={styles.resto}>
                        <div className={styles.name}>
                            <span>Pilar 4</span>
                        </div>
                        <div className={styles.titulo}>
                            <h1>Compaixão</h1>
                        </div>
                        <div className={styles.texto}>
                            <p>Construa um relacionamento íntimo e de cuidado com a pessoa que faz a sua engrenagem girar.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.pilar}>
                    <div className={styles.topo5}></div>
                    <div className={styles.resto}>
                        <div className={styles.name}>
                            <span>Pilar 5</span>
                        </div>
                        <div className={styles.titulo}>
                            <h1>Crenças</h1>
                        </div>
                        <div className={styles.texto}>
                            <p>Entenda o que te paralisa, o que te desmotiva e a mentalidade ideal para a realidade que deseja.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.pilar}>
                    <div className={styles.topo6}></div>
                    <div className={styles.resto}>
                        <div className={styles.name}>
                            <span>Pilar 6</span>
                        </div>
                        <div className={styles.titulo}>
                            <h1>Você</h1>
                        </div>
                        <div className={styles.texto}>
                            <p>Destrave finalmente a pessoa que sempre desejou ser.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.final}></div>
        </div>
    )
}
