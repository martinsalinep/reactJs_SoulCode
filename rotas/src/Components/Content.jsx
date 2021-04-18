import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Produtos from '../Pages/Produtos';
import SobreEmpresa from '../Pages/SobreEmpresa';
import NotFound from '../Pages/NotFound';

function Content() {
  return (
    <section className='content'>
      <div className='ajuste'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produto" component={Produtos} />
          <Route path="/sobre" component={SobreEmpresa} />
          <Route component={NotFound} />
          {/* path='*' tb pode usar o NotFound assim*/}
        </Switch>
      </div>
    </section>
  )
}

export default Content;