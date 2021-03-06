import React, {useState, useRef} from 'react';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle'

function UseRef() {
  const [texto, setTexto] = useState('Inicial');
  const refTexto = useRef(texto);

  const inputRef = useRef();

  function foco() {
    inputRef.current.focus();
  }
  
  return(
    <>
      <PageTitle title='UseRef' subtitle='Guarda elemento com referência até o fim do ciclo' />
      <SectionTitle title='Exemplo 01'/>
      <div className="center">
        <input onChange={
          e => setTexto(e.target.value)
        } />
        <p>Texto: {texto}</p>
        <p>Valor de refTexto: {refTexto.current}</p>
      </div>

      <SectionTitle title='Exemplo 02' />
      <div className="center">
        <input name='nome' ref={inputRef} />
        <button onClick={foco} >Clica</button>
      </div>
    </>
  );
}

export default UseRef;