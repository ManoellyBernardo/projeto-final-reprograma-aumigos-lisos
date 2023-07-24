import Card from "../components/Card"
import CardInstragram from "../components/CardInstragram"

import pet_care from "../assets/imgs/pages/inicio/pet-care.png"
import play_pet from "../assets/imgs/pages/inicio/play-with-pet.png"
import play_pet1 from "../assets/imgs/pages/inicio/play-with-pet1.png"
import play_pet2 from "../assets/imgs/pages/inicio/play-with-pet2.png"
import pet_sad from "../assets/imgs/pages/inicio/dog.png"
import pet_sad1 from "../assets/imgs/pages/inicio/kitty.png"
import pet_sad2 from "../assets/imgs/pages/inicio/sad.png"

import styles from "../styles/pages/inicio.module.css"

const Inicio = () => {
  return (
    <main>
      <section className={styles.introductionContainer}>
        <div>
          <img src={pet_care} alt="Tutor dando amor ao seu cachorro" />
        </div>
        <div className={styles.textIntroductionContainer}>
          <h2>Lisos sim, mas ricos de amor para dar.</h2>
          <br />
          <p>Se você ama seu pet com todo coração, mas é um assalariado, cola comigo que vou te ajudar a dar a ele a vida de rei/rainha que ele tanto merece. </p>
          <br />
          <p>Fique à vontade e navegue pelo website onde você encontrará dicas sobre como encontrar suporte para seu bichinho caso ele fique doente de uma maneira que não pese tanto no seu bolso na sessão "Saúde", você também encontrará dicas de lugares para levar seu best em Recife e na Região Metropolitana do Recife - (RMR) em "Lazer", além disso, descobrirá como economizar e se divertir com ele no "Faça você mesmo" e vai poder contribuir o enriquecer o conteúdo da página no "Add + informações".</p>
        </div>
      </section>
      <section className={styles.adoptionContainer}>
        <h3>Abrindo um adendo</h3>
        <p><strong>Amigo não se compra!</strong></p>
        <p>Aqui somos 100% a favor da adoção e 100% contra a compra de pets e ainda te dizemos o porquê.</p>
        <h4>Por que adotar:</h4>
        <div className={styles.cardsContent}>
          < Card image={play_pet} desc="" text="Atualmente, no Brasil, milhares de cães e gatos são abandonados por dia. Ao adotar um animal, que muitas vezes foi maltratado ou abandonado, você está dando ao pet um recomeço e uma oportunidade para ele ser amado. " />
          < Card image={play_pet1} desc="" text="Adotar é um ato de amor. Os pets também têm sentimentos assim como nós, seres humanos. Eles sentem dor, tristeza, solidão e alegria. " />
          < Card image={play_pet2} desc="" text="Se você pode mudar o destino de um animal de rua, por que não faria isso? " />
        </div>
        <h4>Por que não comprar:</h4>
        <div className={styles.cardsContent}>
          < Card image={pet_sad} desc="" text="A compra pets você geralmente está apoiando e financiando um comércio cruel e desumano. Muitos criadores não são regularizados, não têm veterinários responsáveis e não se preocupam com a saúde e o bem-estar dos animais." />
          < Card image={pet_sad1} desc="" text="Muitas fêmeas são submetidas a uma vida de exploração em canis minúsculos, sendo constantemente prenhas para gerar filhotes, e são descartadas cruelmente quando ficam idosas ou doentes." />
          < Card image={pet_sad2} text="A cada filhote nascido em criadores comerciais, um animal que espera adoção em um abrigo perde a chance de encontrar um lar. Optar por comprar em vez de adotar impede que esses animais tenham a oportunidade de fazer parte de uma família. " />
        </div>
      </section>
      <section className={styles.whereAdoptionContainer}>
        <h3>"E onde eu posso encontrar meu futuro amigo ?"</h3>
        <p>Aqui ó:</p>
        <div className={styles.cardsIntagramContainer}>
          < CardInstragram
            nome="Lar Bola de Pêlos"
            contato="(apenas WhatsApp) Talita (81) 99990.3645"
            localizacao="Candeias, Jaboatão dos Guararapes"
            linkPostInstagram="https://www.instagram.com/p/Cuw-QbbLT9b/embed/"
            id="cardinstagram0"
          />
          < CardInstragram
            nome="Abrigo de Seu Alberto"
            contato="(apenas WhatsApp): Talita (81) 99990.3645"
            localizacao="Recife"
            linkPostInstagram="https://www.instagram.com/p/CsPVx_ROWP0/embed/"
            id="cardinstagram1"
          />
          < CardInstragram
            nome="Abrigo Eu Amo Animais"
            contato="Não informado"
            localizacao="Prado, Zona Oeste do Recife"
            linkPostInstagram="https://www.instagram.com/p/CsrCRj-rw-R/embed/"
            id="cardinstagram2"
          />
          < CardInstragram
            nome="Adota um Felino"
            contato="Flávia Castro (81) 97908-4149"
            localizacao="Casa Forte, Zona Norte do Recife"
            linkPostInstagram="https://www.instagram.com/p/Csw6EEZrKyQ/embed/"
            id="cardinstagram3"
          />
        </div>
      </section>
    </main>
  )
}

export default Inicio