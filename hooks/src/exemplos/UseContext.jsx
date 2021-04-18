import React, { useContext } from "react";
import { MeuContexto } from "./CreateContext";
import FilhosDoUseContext from "./FilhoDoUseContext";

function UseContext() {
  const data = useContext(MeuContexto);
  return (
    <>
      <h2>useContext</h2>
      <p>Nome: {data.nome}</p>
      <p>Preço: {data.preco}</p>
      <p>Cor: {data.cor}</p>
      <p>Memória: {data.memoria}</p>
      <FilhosDoUseContext />
    </>
  );
}

export default UseContext;
