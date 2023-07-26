import { useState } from 'react'

import database from "../service/firebase"
import { ref, push, set } from "firebase/database"

import hug from "../assets/imgs/pages/contribua/hug.png"

import styles from "../styles/pages/contribua.module.css"

const Contribua = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const messageListRef = ref(database, 'mensagens');
    const newMessageRef = push(messageListRef);
    set(newMessageRef, {
      nome: nome,
      email: email,
      text: mensagem
    });

    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <main className={styles.contribuaContainer}>

      <section className={styles.headerContribuaContainer}>
        <img src={hug} alt="Tutor abraçando seu gatinho." />
        <h2>Ajude com + informações</h2>
      </section>

      <section className={styles.formContribuaContainer}>
        <p>Conhece alguma clínica, veterinário, pet shop, lugar, etc., que tenha a ver com a proposta do website e poderia estar facilmente presente nas nossas postagens? </p>

        <p>Então, nos ajude e preencha o formulário, por favor.</p>

        <form className={styles.formContainer} onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder='Digite seu nome'
            onChange={handleInputNome}
            value={nome}
          />
          <input
            type="email"
            placeholder='Digite seu email'
            onChange={handleInputEmail}
            value={email}
          />
          <textarea
            type="text"
            placeholder='Digite sua mensagem'
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button
            type="submit">Enviar Mensagem
          </button>
          
        </form>

      </section>

    </main>
  )
}

export default Contribua