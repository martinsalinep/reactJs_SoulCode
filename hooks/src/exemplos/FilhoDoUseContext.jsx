import React, {useContext} from 'react';
import {MeuContexto} from './CreateContext';


function FilhoDoUSeContext(){
  const filho = useContext(MeuContexto);

  return(
    <>
    <p>cor: {filho.cor}</p>
    <p>memoria: {filho.memoria}</p>

    </>
  )
}

export default FilhoDoUSeContext;