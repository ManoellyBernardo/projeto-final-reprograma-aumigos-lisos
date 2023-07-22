import { useState } from 'react'

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
    <main>
      <h2>Ajude com + informações</h2>
      <p>Conhece alguma clinica, veterinario, petshop, lugar etc que tenha haver com a proposta do website e poderia estar facilmente presente nas nossas postagem ? </p>
      <p>Então ajuda, bença e preenche o formulario, por favor.</p>
      <form onSubmit={handleSubmit}>
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
          placeholder='Digite seu nome'
          onChange={handleInputMensagem}
          value={mensagem}
        />
        <button
          type="submit">Enviar Mensagem
        </button>
      </form>
    </main>
  )
}

export default Contribua