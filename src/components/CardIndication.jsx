import styles from "../styles/components/cardindication.module.css"

const CardIndication = ({ nome, descrição, contato, linkMaps }) => {
  return (
    <section className={styles.cardIndicationContainer}>
      <h4>{nome}</h4>
      <p className={styles.cardIndicationContainerSubTitle}>{descrição}</p>
      <p className={styles.cardIndicationContainerInfos}>Contato: {contato}</p>
      <p className={styles.cardIndicationContainerInfos}>Localização:</p>
      <iframe className={styles.maps} src={linkMaps}></iframe>
    </section>
  )
}

export default CardIndication