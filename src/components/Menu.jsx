import { Link } from "react-router-dom"

import pets from "../assets/imgs/components/pets.png"

import styles from "../styles/components/menu.module.css"

const Menu = () => {
  return (
    <nav className={styles.container}>
      <h1>
        <img className={styles.imageLogo} src={pets} alt="desenho de cão e gato lado a lado" />
      </h1>
      <ul className={styles.menuContainer}>
        <li>
          <Link className={styles.menuLink} to="/">Início</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/saude">Saúde</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/lazer">Lazer</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/dyes">Faça você mesmo</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/contribuicao">Add + informações</Link>
        </li>
        <li>
          <Link className={styles.menuLink} to="/quemsoueu">Quem sou eu ?</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu