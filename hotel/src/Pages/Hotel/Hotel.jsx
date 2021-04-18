import React from 'react';
import './Hotel.css'
import ac1 from '../../img/ac1.jpg'
import ac2 from '../../img/ac2.jpg'
import ac3 from '../../img/ac3.jpg'
import ac4 from '../../img/ac4.jpg'

//css em const

const img1 = {
  backgroundImage: `url('${ac1}')`
}

const img2 = {
  backgroundImage: `url('${ac2}')`
}

const img3 = {
  backgroundImage: `url('${ac3}')`
}

const img4 = {
  backgroundImage: `url('${ac4}')`
}

function Hotel() {
  return (

    <section class="hotel">
      <h3>Conheçao o Hotel</h3>
      <p>Feche os olhos e imagine o paraíso da Terra.
      Sobral terra onde cada pessoa possui um Sol individual.</p>
      <hr />

      <ul class="grid">
        <li class="small" style={img1}></li>
        <li class="large" style={img2}></li>
        <li class="large" style={img3}></li>
        <li class="small" style={img4}></li>
      </ul>

      <ul class="grid">
        <li class="small" style={img1}></li>
        <li class="large" style={img2}></li>
        <li class="large" style={img3}></li>
        <li class="small" style={img4}></li>
      </ul>
    </section>

  )
}

export default Hotel;