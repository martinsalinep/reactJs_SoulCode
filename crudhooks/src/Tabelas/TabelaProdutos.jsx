import React from "react";

function TabelaProdutos(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Nome do Produto</td>
            <td>Preço</td>
            <td>Ações</td>
          </tr>
        </thead>

        <tbody>
          {
            //SE produtos for maior do que 0, ele vai mapear e criar os produtos do array
            props.produtos.length > 0 ? (
              props.produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.nomeProduto}</td>
                  <td>{produto.preco}</td>
                  <td>
                    <button>Editar</button>
                    <button onClick={() => props.deletarProduto(produto.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              // se não tiver produtos, ele vai mostrar a linha abaixo
              <tr>
                <td>Sem produtos</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default TabelaProdutos;
