import React, { createContext } from "react";
import { data } from "../components/Data";
import UseContext2 from "./UseContext2";
import PageTitle from "../components/PageTitle";
import SectionTitle from "../components/SectionTitle";

export const MeuContexto2 = createContext();

function CreateContext2() {
  return (
    <>
      <PageTitle title="CreateContext2" subtitle="" />
      <SectionTitle title="Exemplo" />
      <div className="center">
        <MeuContexto2.Provider value={data}>
          <UseContext2 />
        </MeuContexto2.Provider>
      </div>
    </>
  );
}

export default CreateContext2;
