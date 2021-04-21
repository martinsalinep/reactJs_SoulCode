import React, { useState } from 'react';
import FormAddProduto from './Formularios/FormAddProduto';
import TabelaProdutos from './Tabelas/TabelaProdutos';

function App() {
  //simulação de mini banco de dados fixo
  const dadosProdutos = [
    { id: 1, nomeProduto: 'Xbox', preco: 5000 },
    { id: 2, nomeProduto: 'Monitor', preco: 2000 },
    { id: 3, nomeProduto: 'AirFryer', preco: 800 },
    { id: 4, nomeProduto: 'Uno - game', preco: 10 }
  ];

  const [produtos, setProdutos] = useState(dadosProdutos);

  // função de adicionar
  const addProduto = (produto) => {
    produto.id = produtos.length + 1;
    setProdutos([...produtos, produto])
  }

  //função de deletar
  const deletarProduto = (id) => {
    setProdutos(
      produtos.filter(
        (produto) => produto.id !== id
      )
    )
  }

  return (
    <>
      <div className="container">
        <h1>Produtos</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            <h1>Adicionar Produto</h1>
            <FormAddProduto addProduto={addProduto}/>
          </div>
          <div className='flex-large'>
            <h1>Lista de Produto</h1>
            <TabelaProdutos produtos={produtos} deletarProduto={deletarProduto}/> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;