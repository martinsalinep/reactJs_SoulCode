import React from 'react';

class Content extends React.Component {
  // eslint-disable-next-line no-useless-constructor 
  constructor(props) {
    super(props);
    this.nome = props.pessoa.nome
    this.idade = props.pessoa.idade 
    this.formacao = props.pessoa.formacao
    this.status = props.pessoa.status
  }
  render() {
    return (
      <section className="content">
        <>
          <h2>Dados de {this.nome}</h2>
          <br />
          <p>Idade: {this.idade}</p>
          <p>Formação: {this.formacao}</p>
          <p>Status: {this.status}</p>
        </>
      </section>
    );
  }
}

/* 
function Content(props) {
  return (

    <section className="content">
      <>
        <h2>Dados de {props.pessoa.nome}</h2>
        <br />
        <p>Idade: {props.pessoa.idade}</p>
        <p>Formação: {props.pessoa.formacao}</p>
        <p>Status: {props.pessoa.status}</p>
      </>
    </section>

  );
} 
*/

export default Content;