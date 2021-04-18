import React from 'react';
import './Assina.css';

function Assina() {
  return (
    <section class="assina">
      <h3>Novidades</h3>
      <p>Asssine nosso canal para receber ofertas e novidades do hotel</p>
      <hr />

      <form id="form1" name="form1" method="POST" onsubmit="return valida_form(this)">
        <input type="email" placeholder="Email" id="newsletter"/>
          <button>Cadastrar</button>
    </form>
  </section>
  )
}

export default Assina;