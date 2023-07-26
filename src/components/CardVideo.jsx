import styles from "../styles/components/cardvideo.module.css"

const CardVideo = ({ tituloVideo, linkVideo }) => {
  return (
    <div className={styles.cardVideoContainer}>
      <p>{tituloVideo}</p>
      <iframe src={linkVideo}></iframe>
    </div>
  )
}

export default CardVideo