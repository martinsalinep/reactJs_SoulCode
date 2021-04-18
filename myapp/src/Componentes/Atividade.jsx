import React from 'react';

class Atividade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     texto:"Clique para ver"

    };

    this.revelar = this.revelar.bind(this)
  }

  revelar(){
    this.setState({
      texto:`A marca é ${this.props.marca}, o modelo ${this.props.modelo} e o ano ${this.props.ano}`
      
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.texto}</h1>
        <h2>{this.state.texto2}</h2>
        <button onClick={this.revelar}>Clique aqui</button>        
      </>
    )
  }
}

export default Atividade;