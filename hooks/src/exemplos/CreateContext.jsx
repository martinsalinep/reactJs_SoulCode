import React, { createContext } from 'react';
import {data} from '../components/Data';
import UseContext from './UseContext';

export const MeuContexto = createContext();

function CreateContext(){
  return(
    <>
      <div className="center">
        <MeuContexto.Provider value={data}>
          <UseContext />
        </MeuContexto.Provider>
      </div>
    </>
  )
}

export default CreateContext;