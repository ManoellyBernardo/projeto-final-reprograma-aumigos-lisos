import styles from "../styles/components/cardinstagram.module.css"

const CardInstragram = ({ nomeOng, contato, localização, linkPostInstagram }) => {
  return (
    <div className={styles.cardInstragramContent}>
      <h4>{nomeOng}</h4>
      <p>Contato: {contato}</p>
      <p>Localização: {localização}</p>
      <iframe
        src={linkPostInstagram}
        frameborder="0"
        allowfullscreen= "false"
        width="540"
        height="609"
      ></iframe>
    </div >
  )
}

export default CardInstragram