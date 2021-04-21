import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';
import Home from '../exemplos/Home';
import UseState from '../exemplos/UseState';
import UseEffect from '../exemplos/UseEffect'
import UseRef from '../exemplos/useRef';
import FormDados from '../exemplos/FormDados';
import UseMemo from '../exemplos/UseMemo';
import CreateContext from '../exemplos/CreateContext';
import UseReducer from '../exemplos/UseReducer';
import CreateContext2 from '../exemplos/CreateContext2';
import UseReducer2 from '../exemplos/UseReducer2';


function Content() {
  return (
    <main className='Content'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/useState' component={UseState} />
        <Route path='/useEffect' component={UseEffect} />
        <Route path='/useRef' component={UseRef} />
        <Route path='/formDados' component={FormDados} />
        <Route path='/useMemo' component={UseMemo} />
        <Route path='/CreateContext' component={CreateContext} />
        <Route path='/CreateContext2' component={CreateContext2} />
        <Route path='/UseReducer'component={UseReducer} />
        <Route path='/UseReducer2'component={UseReducer2} />        
      </Switch>
    </main>
  )
}

export default Content;