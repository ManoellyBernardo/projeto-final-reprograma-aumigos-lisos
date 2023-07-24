import styles from "../styles/components/cardindicationpark.module.css"

const CardIndicationPark = ({ nomeParque, imagemParque, descricaoImagem, linkMaps }) => {
  return (
    <div className={styles.cardIndicationParkContainer}>
      <h4>{nomeParque}</h4>
      <img className={styles.imagePark} src={imagemParque} alt={descricaoImagem} />
      <p>Localização: </p>
      <iframe src={linkMaps}></iframe>
    </div>
  )
}

export default CardIndicationPark