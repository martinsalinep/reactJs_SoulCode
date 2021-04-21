import React, {useContext} from 'react';
import {MeuContexto2} from './CreateContext2';

function FilhoDoUseContext2(){
  const dadosF = useContext(MeuContexto2)
  return(
    <>
    <h1>Filho do useContext</h1>
    <p>{dadosF.nome}</p>
    <p>{dadosF.memoria}</p>
    </>
  )
}

export default FilhoDoUseContext2;