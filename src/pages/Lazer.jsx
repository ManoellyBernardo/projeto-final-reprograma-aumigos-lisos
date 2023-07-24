import CardInstragram from "../components/CardInstragram"
import CardIndicationPark from "../components/CardIndicationPark"

import walk from "../assets/imgs/pages/lazer/walk.png"
import parcao_santana from "../assets/imgs/pages/lazer/parcao_santana.jpg"
import parcao_souto_filho from "../assets/imgs/pages/lazer/parcao_souto_filho.jpg"
import parcao_dona_lindu from "../assets/imgs/pages/lazer/parcao_dona_lindu.jpg"
import parcao_santos_dummont from "../assets/imgs/pages/lazer/parcao_santos_dummont.jpg"
import parcao_lagoa_araca from "../assets/imgs/pages/lazer/parcao_lagoa_araca.jpg"
import parcao_shopping_recife from "../assets/imgs/pages/lazer/parcao_shopping_recife.png"
import parcao_bairro_novo from "../assets/imgs/pages/lazer/parcao_bairro_novo.jpeg"
import play_with_pet3 from "../assets/imgs/pages/lazer/play-with-pet3.png"

import styles from "../styles/pages/lazer.module.css"

const Lazer = () => {
  return (
    <main className={styles.leisureContainer}>

      <section className={styles.headerLeisureContainer}>
        <h2>Bença, teu best também quer conhecer o mundo, sai com ele!</h2>
        <img src={walk} alt="" />
      </section>

      <section className={styles.parks}>

        <h3>Aqui vai uma lista de ParCães para fazer teu cachorro gastar toda energia que ele tem :</h3>

        <div className={styles.cardIndicationParkContainer}>
          < CardIndicationPark
            nomeParque="Parque Santana"
            imagemParque={parcao_santana}
            descricaoImagem="Foto do ParCão instalado no Parque Santana."
            linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.333362143843!2d-34.9168434!3d-8.0418196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1905788e3d5d%3A0xa07d379190589f40!2sParque%20Santana%20-%20Ariano%20Suassuna!5e0!3m2!1spt-BR!2sbr!4v1689984495065!5m2!1spt-BR!2sbr"
          />
          < CardIndicationPark
            nomeParque="Praça Souto Filho (Parque dos Cachorros)"
            imagemParque={parcao_souto_filho}
            descricaoImagem="Foto do ParCão instalado na Praça Souto Filho."
            linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.550550896218!2d-34.9032174!3d-8.036244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18ff7d638d65%3A0x8cbd43a9dfa0087!2sPra%C3%A7a%20Souto%20filho%20(Pra%C3%A7a%20do%20Cachorro)!5e0!3m2!1spt-BR!2sbr!4v1690037314884!5m2!1spt-BR!2sbr"
          />
          < CardIndicationPark
            nomeParque="Parque Dona Lindu"
            imagemParque={parcao_dona_lindu}
            descricaoImagem="Foto do ParCão instalado no Parque Dona Lindu."
            linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15798.433434705652!2d-34.9041136!3d-8.1412917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fbb126b6c8f%3A0x9428b8c3b9bb5afb!2sDona%20Lindu!5e0!3m2!1spt-BR!2sbr!4v1690037732824!5m2!1spt-BR!2sbr"
          />
          < CardIndicationPark
            nomeParque="Centro Esportivo Alberto Santos Dumont"
            imagemParque={parcao_santos_dummont}
            descricaoImagem="Foto do ParCão instalado no Centro Esportivo Alberto Santos Dumont."
            linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15798.433434705652!2d-34.9041136!3d-8.1412917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1fbb126b6c8f%3A0x9428b8c3b9bb5afb!2sDona%20Lindu!5e0!3m2!1spt-BR!2sbr!4v1690037732824!5m2!1spt-BR!2sbr"
          />
          < CardIndicationPark
            nomeParque="Lagoa do Araçá"
            imagemParque={parcao_lagoa_araca}
            descricaoImagem="Foto do ParCão instalado na Lagoa do Araçá."
            linkMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.0346666555015!2d-34.9150363!3d-8.094412299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ee6f53af3b3%3A0x35f9062b3bb23124!2zTGFnb2EgZG8gQXJhw6fDoQ!5e0!3m2!1spt-BR!2sbr!4v1690038607722!5m2!1spt-BR!2sbr"
          />
          < CardIndicationPark
            nomeParque="Shopping Recife"
            imagemParque={parcao_shopping_recife}
            descricaoImagem="Foto do ParCão instalado na área externa do Shopping Recife."
            linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15799.319577702341!2d-34.9071111!3d-8.1187959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f2eb5b22e73%3A0x5e028dbaa04beedd!2sParc%C3%A3o%20Shopping%20Recife!5e0!3m2!1spt-BR!2sbr!4v1690038834274!5m2!1spt-BR!2sbr"
          />
          < CardIndicationPark
            nomeParque="Praça Vitoriano Regueira"
            imagemParque={parcao_bairro_novo}
            descricaoImagem="Foto do ParCão instalado na Praça Vitoriano Regueira."
            linkMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.977563668808!2d-34.8429141!3d-8.0012504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d4a2db2928f%3A0x645aeab0d2f72814!2sPra%C3%A7a%20Dr.%20Vit%C3%B3riano%20Regueira%20-%20Bairro%20Novo%2C%20Olinda%20-%20PE%2C%2053030-220!5e0!3m2!1spt-BR!2sbr!4v1690043630853!5m2!1spt-BR!2sbr"
          />
        </div>
      </section>

      <section className={styles.shoppings}>

        <h3>Se seu bichinho é metido e quer ir ao shopping, ele tá mais que certo, leva ele nesses aqui, ó:</h3>

        <div>

          <ul>
            <li>Shopping Recife;</li>
            <li>Shopping RioMar;</li>
            <li>Shopping Guararapes;</li>
            <li>Camará Shopping;</li>
            <li>Shopping Costa Dourada.</li>
          </ul>

        </div>

      </section>

      <section className={styles.uberPet}>

        <h3>"Não tenho carro e meu parceiro é grandão e agora ?"</h3>

        <p>Fique tranquilo, que aqui vai dica de uber pet.</p>

        <div className={styles.cardsIntagramContainer}>
          <img src={play_with_pet3} alt="Tutor acompanhado de um cachorro grande." />
          < CardInstragram
            nome={"Uber Pet"}
            contato={"(WhatsApp) 99874-7214"}
            localizacao={"Boa Viagem, Pina, Piedade, Candeias e ZN"}
            linkPostInstagram={"https://www.instagram.com/p/CuUS5clOn4L/embed/"}
          />
          < CardInstragram
            nome={"Uber Pet Recife"}
            contato={"whatsa.me/5581995031323"}
            localizacao={"Recife"}
            linkPostInstagram={"https://www.instagram.com/p/CtekgGEOqNk/embed/"}
          />
        </div>

      </section>

    </main>
  )
}

export default Lazer