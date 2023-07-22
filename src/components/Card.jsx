import styles from "../styles/components/card.module.css"

const Card = ({ image, desc, text }) => {
  return (
    <section className={styles.cardContent}>
      <img src={image} alt={desc} />
      <p>{text}</p>
    </section>
  )
}

export default Card