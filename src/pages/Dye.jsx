import shelter from "../assets/imgs/pages/dye/shelter.png"

import styles from "../styles/pages/dye.module.css"
import CardVideo from "../components/CardVideo"

const Dye = () => {
  return (
    <main className={styles.dyeContainer}>

      <section className={styles.headerDyeContainer}>

        <img src={shelter} alt="Tutor com seu gato dentro de uma caixa" />
        <h2>Briquedos e petiscos para pets são o olho da cara, né ? <br /> Mas aqui a gente vai economizar e fazer o nosso!</h2>

      </section>

      <section className={styles.snacks}>

        <h3>Petiscos</h3>

        <h4>Para au-aus:</h4>

        <div>
          <h5>Petiscos naturais de frutas:</h5>

          <ul>
            <li>Banana: boas opções são a banana prata e a banana maçã, por terem menos açúcar. E nunca ofereça banana ainda verde;</li>
            <li>Maçã: pode ser oferecida crua ou desidratada. Lembre de nunca dar a ele a maçã com sementes;</li>
            <li>Manga: crua ou desidratada, esta é outra fruta que pode ser dada como petisco, sempre sem casca e em pequenas porções;</li>
            <li>Pera: a pera pode ser dada ao cachorro como petisco natural com casca.</li>
          </ul>
        </div>

        <div>
          <h5>Petiscos naturais de legumes:</h5>

          <ul>
            <li>Abóbora: deve ser dada cozida em água e sal e sem casca;</li>
            <li>Brócolis;</li>
            <li>Batata-doce: basta oferecê-la desidratada;</li>
            <li>Cenoura;</li>
            <li>Inhame: é possível comprar desidratado ou também é possível cozinhá-lo e oferecer ao cachorro sem a casca.</li>
          </ul>
        </div>

        <h4>Para gatinhos:</h4>

        <div>
          <h5>Petiscos naturais de frutas:</h5>

          <ul>
            <li>Banana;</li>
            <li>Maça: antes de oferecê-la ao seu gatinho, não esqueça de remover as sementes da maçã;</li>
            <li>Melancia;</li>
            <li>Melão: para inseri-la na alimentação do seu animal, não esqueça de retirar as sementes e a casca do melão.;</li>
            <li>Pera: é importante sempre remover todas as sementes do alimento antes de oferecer aos gatinhos.</li>
          </ul>
        </div>

        <div>
          <h5>Petiscos naturais de legumes:</h5>

          <ul>
            <li>Abóbora: deve ser oferecida sempre cozida e sem a casca e sementes;</li>
            <li>Batata-doce: ofereça cozida na água ou no vapor;</li>
            <li>Brócolis: cozinhe antes de dar ao seu gatinho.;</li>
            <li>Cenoura;</li>
            <li>Ervilhas: Sempre ofereça o alimento fervido.</li>
          </ul>
        </div>

      </section>

      <section className={styles.toysContainer}>

        <h3>Brinquedos</h3>

        <h4>Para au-aus:</h4>

        <div className={styles.toysDogsContainer}>

          <CardVideo
            tituloVideo="BRINQUEDO DE GARRAFA PET - COMO FAZER - DIY 🔨 ✂️ 📏"
            linkVideo="https://www.youtube.com/embed/WI6rrPF3NIQ"
          />
          <CardVideo
            tituloVideo="Como fazer brinquedo caseiro para cachorro | Amigo Pug"
            linkVideo="https://www.youtube.com/embed/RsV0Ng6uK6A"
          />
          <CardVideo
            tituloVideo="Brinquedo caseiro para cachorro"
            linkVideo="https://www.youtube.com/embed/FAK01sAeUCM"
          />

        </div>

        <h4>Para gatinhos:</h4>

        <div className={styles.toysCatsContainer}>

          <CardVideo
            tituloVideo="2 Brinquedos caseiros para Gatos - Quatro Patas Mão na Massa!"
            linkVideo="https://www.youtube.com/embed/5R5Bby4SKio"
          />
          <CardVideo
            tituloVideo="Arranhador para Gato com Papelão - 2 modelos | aprenda como fazer esse DIY para seu gato"
            linkVideo="https://www.youtube.com/embed/N9Apjyc5Lfc"
          />
          <CardVideo
            tituloVideo="4 brinquedos para gatos com rolos de papel"
            linkVideo="https://www.youtube.com/embed/5xBvhwl-sz8"
          />

        </div>
      </section>

    </main >
  )
}

export default Dye