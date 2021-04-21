import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle'


function UseState() {
  // cria estado [nomeEstado, setNomeEstado]
  // CRIE UM ESTADO QUE TENHA MARCA, MODELO, E COR COM VALORES ALEATÓRIOS
  // MOSTRE OS VALORES DO ESTADO E CRIE UM BOTAO QUE AO CLICAR NELE
  // TROQUE OS VALORES ALEATORIAMENTE

  const [count, setCount] = useState(0);

  const [dados, setDados] = useState({
    nome: 'Romero',
    idade: 80
  })

  const [carro, setCarro] = useState({
    marca: 'Fiat',
    modelo: 'Uno',
    cor: 'verde'
  })

  function altera() {
    setCarro({
      marca: 'Chevrolet',
      modelo: 'Não lembro',
      cor: 'azul'
    })
  }

  /*   function trocaIdade() {
      setDados({
        //impede que os dados que não foram alterados se percam
        ...dados,
        idade: 29
      })
    } */

  function trocaTudo() {
    setDados({
      nome: 'Aline',
      idade: 30
    })
  }

  function add() {
    setCount(count + 1)
  }

  return (
    <>
      <PageTitle title="UseState" subtitle="Cria estados na função" />
      <SectionTitle title="Exemplo 01" />

      <div className="center">
        <button onClick={add}>+1</button>
        <p>Contador: {count}</p>
        <button onClick={
          () => setCount(count - 1)
        }>-1</button>
      </div>
      <SectionTitle title="Exemplo 02" />
      <div className="center">
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade} anos</p>
        <button onClick={trocaTudo}>Trocar</button>
      </div>
      <SectionTitle title="Atividade" />
      <div className="center">
        <p>Marca: {carro.marca}</p>
        <p>Modelo: {carro.modelo}</p>
        <p>Cor: {carro.cor}</p>
        <button onClick={altera}>Altera</button>
      </div>
      
    </>

  )
}

export default UseState;