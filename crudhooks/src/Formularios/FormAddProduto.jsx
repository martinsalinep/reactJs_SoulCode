import React, { useState } from "react";

function FormAddProduto(props) {

  const valorInicial = {
    id: null,
    nomeProduto: '',
    preco: 0,
  }

  const [produto, setProduto] = useState(valorInicial);

  const handleInputChange = (event) => {
    const{name, value} = event.target;
    setProduto({...produto, [name]:value}) // vai pegar o name do formulário e o valor que for passado
  }



  return (
    <>
      <form
        onSubmit={ // aciona função quando o botão for enviado
          event =>{
            event.preventDefault(); // para adicionarmos sem dar refresh na página e perder os dados
            if(!produto.nomeProduto || !produto.preco) return // se estiver vazio, não vai enviar

            props.addProduto(produto); // se os valores forem preenchidos, ele aciona a função que está em app.js
            setProduto(valorInicial) // retorna o forms para o valor inicial
          }
        }
      >
        <label>Nome do produto</label>
        <input 
          type="text" 
          name="nomeProduto" 
          value={produto.nomeProduto} 
          onChange={handleInputChange}
        />

        <label>Preço</label>
        <input 
          type="number" 
          name="preco" 
          value={produto.preco} 
          onChange={handleInputChange}
        />

        <button>Adicionar</button>
      </form>
    </>
  );
}

export default FormAddProduto;
