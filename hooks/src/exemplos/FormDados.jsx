import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';

function FormDados() {

  const [dados, setDados] = useState({
    nome: '',
    email: '',
    password: ''
  });

  const [confirm, setconfirm] = useState('')

  const handleInputChange = (event) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value
    })
  }

  function enviarDados(event) {
    setconfirm(`Dados enviados! Nome: ${dados.nome} Email: ${dados.email}`);
    event.preventDefault() //cancelar a ação do submit nesse momento para não recarregar a página
  }

  return (
    <>
      <PageTitle title="FormDados" subtitle="estado dinâmico" />
      <SectionTitle title="Exemplo 01" />

      <div className="center">
        <form onSubmit={enviarDados}>
          <input type="text" name='nome' placeholder='nome' onChange={handleInputChange} />
          <input type="email" name='email' placeholder='email' onChange={handleInputChange} />
          <input type="password" name='password' placeholder='password' onChange={handleInputChange} />
          <br />
          <button type='submit'>Enviar</button>
        </form>
        <p>{confirm}</p>

      </div>
    </>
  )
}

export default FormDados;