import React, { createContext } from 'react';
import {data} from '../components/Data';
import UseContext from './UseContext';
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export const MeuContexto = createContext();

function CreateContext(){
  return(
    <>
    <PageTitle title="CreateContext" subtitle="" />
      <SectionTitle title="Exemplo" />
      <div className="center">
        <MeuContexto.Provider value={data}>
          <UseContext />
        </MeuContexto.Provider>
      </div>
    </>
  )
}

export default CreateContext;