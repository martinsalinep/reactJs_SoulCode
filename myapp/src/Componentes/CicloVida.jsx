import React, { Component } from 'react';

class CicloVida extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valor: 0
    }
  }

  render() {
    return (
      <>
        <h1>Ciclo sem fiiiiiim, que nos guiará... </h1>
        <p>{this.state.valor}</p>
        <button onClick={() => this.setState({
          valor: 15
        })}>Clica</button>
      </>
    )
  }

}

export default CicloVida;