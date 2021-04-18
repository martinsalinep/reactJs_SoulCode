import React from 'react';

class AlteraState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: "Quem é esse pokemon?",
      texto2: ""
    };

    this.revelar = this.revelar.bind(this)
  }

  revelar(){
    this.setState({
      texto:"É o " + this.props.nome,
      texto2: "Olaaaar " + this.props.nome
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.texto}</h1>
        <h2>{this.state.texto2}</h2>
        <button onClick={this.revelar}>Aperta aí</button>        
      </>
    )
  }
}

export default AlteraState;