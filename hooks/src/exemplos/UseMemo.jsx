import React, { useState, useMemo } from 'react';
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'


// criar um formulário com: nome, email, senha1, senha2
function UseMemo() {

  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha1: '',
    senha2: ''

  });

  const handleInputChange = (event) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value
    })
  }

  console.log(dados)

  function ValidaSenha({ senha }) {
    if (senha === '') {
      return 'Preencha o campo'
    }
    if (senha.length <= 5) {
      return 'Senha com no mínimo 6 caracteres'
    }
    return 'Senha Válida'
  }

  const validaSenha = useMemo(
    () =>
      <ValidaSenha senha={dados.senha1} />, [dados.senha1]
  )

  function ComparaSenha({ senha1, senha2 }) {
    if (senha2 === '') {
      return ''
    }
    if (senha2 === senha1) {
      return 'Senhas Conferem'
    }
    return 'As senhas não são iguais'
  }

  const comparaSenha = useMemo(
    () =>
      <ComparaSenha senha1={dados.senha1} senha2={dados.senha2} />, [dados.senha1, dados.senha2]
  )


  return (
    <>
      <PageTitle title="UseMemo" subtitle="Exemplo de uso " />
      <SectionTitle title="Exemplo 01" />

      <div className="center">
        <form>
          <input
            type="text"
            name='nome'
            placeholder='nome'
            onChange={handleInputChange}
            value={dados.nome} />
          <input
            type="email"
            name='email'
            placeholder='email'
            onChange={handleInputChange}
            value={dados.email}
          />
          <input
            type="password"
            name='senha1'
            placeholder='senha 1'
            onChange={handleInputChange}
            value={dados.senha1}
          />

          <br />

          <span>{validaSenha}</span>

          <br />

          <input
            type="password"
            name='senha2'
            placeholder='senha 2'
            onChange={handleInputChange}
            value={dados.senha2}
          />
          <br />

          <span>{comparaSenha}</span>

          <br />

          <button type='submit'>Enviar</button>
        </form>

      </div>
    </>
  )
}

export default UseMemo;