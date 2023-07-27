import Iframe from 'react-iframe'

import styles from "../styles/components/cardinstagram.module.css"

const CardInstragram = ({ nome, contato, localizacao, linkPostInstagram, id }) => {
  return (
    <section className={styles.cardInstragramContent} style={{ paddingRight: 10 }}>
      <h4>{nome}</h4>
      <div className={styles.cardInstragramContentText}>
        <p>Contato: {contato}</p>
        <p>Localização: {localizacao}</p>
      </div>
      <Iframe url={linkPostInstagram}
        id={id}
        overflow="hidden"
        scrolling="no"
        display="block"
        position="relative"
      />
    </section>
  )
}

export default CardInstragram