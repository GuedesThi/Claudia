import { ssrDynamicImportKey } from 'vite/runtime'
import styles from './Garantia.module.css'

export function Garantia() {
    return(
        <div className={styles.allContainer}>
            <div className={styles.garantiaContainer}>
                <div className={styles.leftImg}></div>
                <div className={styles.rightGarantia}>
                    <p>Você tem o período de 7 dias para assistir aos conteúdos e decidir se o treinamento é ou não para você.</p>
                    <p>Caso acredite que não, basta pedir o seu dinheiro de volta que devolverei cada centavo investido.</p>
                </div>
            </div>
            <div className={styles.mentoraContainer}>
                <div className={styles.leftMentora}>
                    <h1>Quem será</h1>
                    <div className={styles.juntarWords}>
                        <h1>sua</h1>
                        <h1 className={styles.mentora}>Mentora?</h1>
                    </div>
                    <div className={styles.txtMentora}>
                        <p><strong>Claudia Ximenes</strong> é Psicóloga, e pós-graduada em <strong>Terapia de Família</strong>, <strong>Psiconutrição</strong> e <strong>Comportamento Alimentar</strong> 
                            <br/><br/>
                            Além disso, conta com especialização em: <strong>Manejo dos Transtornos de Ansiedade</strong>, <strong>Regulação Emocional</strong>, <strong>Comportamento Alimentar</strong>, <strong>Alimentação e Saúde Mental</strong>, <strong>Comportamento Alimentar na Prática</strong>.
                            <br/>
                            Também trabalha com treinamentos voltados à <strong>Ansiedade</strong> e <strong>Relacionamentos Abusivos</strong>
                            <br/><br/>
                            Atua há + de 17 anos auxiliando e transformando a vida de mulheres adultas que buscam equilíbrio emocional
                            <br/><br/>
                            Criadora do desafio <strong>Escrita Terapêutica</strong>
                            <br/>
                            E do livro <strong>“A ansiedade não me domina”</strong>
                        </p>
                    </div>
                    <button className={styles.btnGarantia}>
                        <a href='https://chat.whatsapp.com/G3pbsdeoH37HyMj8Tq2tCZ'>QUERO ENTRAR NO GRUPO VIP</a>
                    </button>
                </div>
                <div className={styles.rightImg}></div>
            </div>
        </div>
    )
}