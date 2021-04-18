import React, { useReducer } from "react";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

function UseReducer() {
  const valorInicial = 0;

  function reducer(state, action) {
    switch (action) {
      case "add":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return 0;
    }
  }

  const [state, dispatch] = useReducer(reducer, valorInicial);

  const produto = {
    nome: "Nintendo Switch",
    preco: 3000,
  };

  function descontos(state, action) {
    switch (action) {
      case "10":
        return { ...state, preco: state.preco - state.preco * 0.1 };
      case "25":
        return { ...state, preco: state.preco - state.preco * 0.25 };
      default:
        return { ...state, preco: 3000 };
    }
  }

  const [desconto, dispatch2] = useReducer(descontos, produto);

  return (
    <>
      <PageTitle title="UseReducer" subtitle="" />
      <SectionTitle title="Exemplo 01" />
      <div className="center">
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch("add")}>add</button>

          <button onClick={() => dispatch("dec")}>dec</button>

          <button onClick={() => dispatch("clear")}>clear</button>
        </div>
      </div>
      <br />
      <SectionTitle title="Exemplo 02" />
      <div className="center">
        <p>Produto: {desconto.nome}</p>
        <p>Valor final: {desconto.preco}</p>
        <div>
          <button onClick={() => dispatch2("10")}>Desconto 10%</button>
          <button onClick={() => dispatch2("25")}>Desconto 25%</button>
          <button onClick={() => dispatch2("clear")}>clear</button>
        </div>
      </div>
    </>
  );
}

export default UseReducer;
