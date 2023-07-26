import play_with_pet4 from "../assets/imgs/pages/sobre/play-with-pet4.png"
import foto_manu from "../assets/imgs/pages/sobre/eu.jpeg"
import thor from "../assets/imgs/pages/sobre/thor.jpeg"
import zuko from "../assets/imgs/pages/sobre/zuko.jpeg"

import styles from "../styles/pages/sobre.module.css"

const Sobre = () => {
  return (
    <main className={styles.aboutContainer}>

      <section className={styles.headerAboutContainer}>

        <img src={play_with_pet4} alt="Tutor segundo gatinho." />
        <h2>Olá!</h2>

      </section>

      <section className={styles.aboutTextContainer}>

        <div className={styles.aboutPleasure}>
          <img src={foto_manu} alt="Foto da desenvolvedora da website." />
          <h3>Prazer, Manoelly!</h3>
        </div>

        <div className={styles.textFirstParagraph}>
          <p>Mais conhecida como Manu, sou nascida, criada e residente de Recife. Formada em Nutrição e atualmente cursando Análise e Desenvolvimento de Sistemas e aluna do curso de front end da Reprograma.</p>
        </div>

        <div className={styles.textSecondParagraph}>
          <p>Sou tutora de 2 gatos. Thor, um gato frajola enorme que atualmente tem quase 9 anos de idade e é meu bebezão, e Zuko, um sialata (mistura de vira-lata com siamês) que está comigo há quase dois anos. Ambos adotados.</p>
          <img src={thor} alt="Foto do gato Thor, que um gato preto e branco." />
        </div>

        <div className={styles.textThirdParagraph}>
          <img src={zuko} alt="Foto do gato Zuko, que é um gato sialata (mistura de siamês com vira-lata)." />
          <div>
            <p>Minha inspiração para fazer este website foi minha história com eles, e principalmente com Zuko. Ele, infelizmente, foi abandonado pela vizinha que se mudou e não o levou, então minha mãe e eu o acolhemos e, desde então, cuidamos dele.</p>
            <br />
            <p>No pouco tempo que passou conosco, percebemos que ele estava doente e precisamos levá-lo ao Hospital Veterinário do Recife, bem como a outros locais mencionados no website, além de utilizar também os serviços que listei no site.</p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Sobre