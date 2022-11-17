import React from 'react'


export const CartHome = () => {
  return (
    <div className='cartHome'>
      <div className='divPHome'>
      <text className='headerHome'>ENCABEZADO</text>
        <p>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className='divButton'>
        <button className='buttonHome'>Quiero enseñar</button>
        <button className='buttonHome'>Quiero aprender</button>
      </div>
      </div> 
      <div className='imgHome'>
      <img src='./public/img/home1.png'/>
      </div>
    </div>
  )
}
