import styles from './Faq.module.css'

export function Faq() {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        })
    })

    return(
        <div className={styles.containerFaq}>
            <div className={styles.liTop}></div>

            <div className={styles.sidesFaq}>
                <div className={styles.leftFaq}>
                    <h1>Perguntas Frequentes</h1>
                </div>
                <div className={styles.rightFaq}>
                    <div className={styles.faq}>
                        <div className={styles.question}>
                            <h3>Para quem é o desafio?</h3>
                        </div>
                        <div className={styles.answer}>
                            <p>Para mulheres que queiram tirar seus planos do papel e desenvolver uma rotina com mais equilíbrio, ao ter consciência dos seus processos.</p>
                        </div>
                    </div>

                    <div className={styles.faq}>
                        <div className={styles.question}>
                            <h3>Como saber se o desafio é para mim?</h3>
                        </div>
                        <div className={styles.answer}>
                            <p>Se você se sente sem tempo, frustrada, estagnada, irritada e não consegue tirar seus planos do papel, olhar para si mesma, pois se vê andando em círculos e presa às circunstâncias.</p>
                        </div>
                    </div>

                    <div className={styles.faq}>
                        <div className={styles.question}>
                            <h3>Os módulos serão liberados todos juntos?</h3>
                        </div>
                        <div className={styles.answer}>
                            <p>Assim que realizar a compra terá acesso liberado ao módulo 1 e a todos os bônus dentro do Kiwify. Os módulos dos desafios serão liberados a cada 2 dias, para que você absorva o conteúdo de forma consciente, tenha tempo para colocar o desafio em prática e esteja pronta para avançar para a próxima etapa.</p>
                        </div>
                    </div>

                    <div className={styles.faq}>
                        <div className={styles.question}>
                            <h3>Por quanto tempo terei acesso?</h3>
                        </div>
                        <div className={styles.answer}>
                            <p>O desafio pode ser assistido quantas vezes você desejar por 4 meses.</p>
                        </div>
                    </div>

                    <div className={styles.faq}>
                        <div className={styles.question}>
                            <h3>Como funciona a garantia ou o reembolso?</h3>
                        </div>
                        <div className={styles.answer}>
                            <p>Você tem até 7 dias após a sua inscrição no desafio para ver e rever quantas vezes quiser, e se sentir que não é para você, você pode cancelar por qualquer motivo, e devolverei TODO o valor pago.</p>
                        </div>
                    </div>

                    <div className={styles.faq}>
                        <div className={styles.question}>
                            <h3>Como receberei o meu acesso?</h3>
                        </div>
                        <div className={styles.answer}>
                            <p>Imediatamente após a confirmação da sua compra você receberá um e-mail com seu acesso ao curso. Verifique sempre o spam ou lixeira eletrônica também.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}