import styles from "../styles/components/cardinstagram.module.css"

const CardInstragram = ({ nomeOng, contato, localização, linkPostInstagram }) => {
  return (
    <div className={styles.cardInstragramContent}>
      <h4>{nomeOng}</h4>
      <p>Contato: {contato}</p>
      <p>Localização: {localização}</p>
    </div >
  )
}

export default CardInstragram