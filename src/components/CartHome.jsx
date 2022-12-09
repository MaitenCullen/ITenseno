import React from 'react'


export const CartHome = () => {
  return (
    <div className='cartHome'>
      <div className='divPHome'>
      <div className='headerHome'>Bienvenid@s!</div>
        <p>Creemos en el aprendizaje continuo y en acompañarnos. Acá encontrarás los mejores compañeros de estudio y muchas personas con ganas de enseñar y aprender sobre el mundo IT. </p>
      <div className='divButton'>
        <button className='buttonHome'>Quiero enseñar</button>
        <button className='buttonHome'>Quiero aprender</button>
      </div>
      </div> 
      <div className='imgHome'>
      <img src='/img/Home1.png'/>
      </div>
    </div>
  )
}
