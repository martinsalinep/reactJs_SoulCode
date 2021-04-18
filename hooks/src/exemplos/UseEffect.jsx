import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle'

function UseEffect() {

  const [texto, setTexto] = useState('Inicial');
  const [count, setCount] = useState(1);
  const [verifica, setVerifica] = useState('Me chamou renderizou')
  const [status, setStatus] = useState('ímpar')

  useEffect(
    () => {
      setVerifica(`Renderizou ${count} vezes`)
    }, [count]
  );

  useEffect(
    () => {
      // o resto da divisão é 0? se for, ele é par senão ele é ímpar
      setStatus(count % 2 === 0 ? 'Par' : 'Impar')
    }, [count]
  )

  return (
    <>
      <PageTitle title="UseEffect" subtitle="Executa efeitos colaterais nos componentes" />
      <SectionTitle title="Exemplo 01" />

      <div className="center">
        <p>Texto: {texto}</p>
        <p>Render quantas vezes: {count}</p>
        <button onClick={
          () => {
            setTexto('Trocou');
            setCount(count + 1)
          }
        }>Troca</button>
        <p>Status Verifica: {verifica}</p>
        <p>Status de count: {status}</p>

      </div>
    </>
  )
}

export default UseEffect;