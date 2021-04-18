import React, { useReducer } from 'react';

function UseReducer() {
  const valorInicial = 0;

  function reducer(state, action) {
    switch (action) {
      case 'add': return state + 1;
      case 'dec': return state - 1;
      default: return 0
    }
  }

  const [state, dispatch] = useReducer(reducer, valorInicial);

  const produto = {
    nome: 'Nintendo Switch',
    preco: 3000
  }

  function descontos(state, action) {
    switch (action) {
      case '10': return { ...state, preco: (state.preco - (state.preco * 0.1)) };
      case '25': return { ...state, preco: (state.preco - (state.preco * 0.25)) };
      default: return { ...state, preco: 3000 }
    }
  }

  const [desconto, dispatch2] = useReducer(descontos, produto)

  return (
    <>
        <p>{state}</p>
        <button
          onClick={
            () => dispatch('add')
          }>add</button>

        <button
          onClick={
            () => dispatch('dec')
          }>dec</button>

        <button
          onClick={
            () => dispatch('clear')
          }>clear</button>

        <br />
        <h2>Exemplo 2</h2>
        <p>{desconto.nome}</p>
        <p>{desconto.preco}</p>
        <button
          onclick={
            () => dispatch2('10')
          }>Desconto 10%</button>
        <button onclick={
          () => dispatch2('25')
        }>Desconto 25%</button>
         <button
          onClick={
            () => dispatch2('clear')
          }>clear</button>

    </>
  )
}

export default UseReducer;