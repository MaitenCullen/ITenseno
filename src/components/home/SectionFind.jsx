import React from 'react'
import { CardFind } from '../CardFind'

const data = [
    {
        id: 1,
        image: "https://miro.medium.com/max/1024/1*vxjAHkrXbGG6gOiPZgjeZA.jpeg",
        description: "Clases personalizadas según niveles y tecnologías. Podes tomar todas las que necesites y en los horarios que te sean más cómodos, contarás con el seguimiento personalizado de quien de esa clase."
    },
    {
        id: 2,
        image: "https://www.ikusi.com/wp-content/uploads/2022/06/post_thumbnail-4efabca9bd56b38edc0058c4ba006481.jpeg",
        description: "Variedad de tecnologías. sabemos que el mundo IT está en constante cambio, ¡acá encontrarás personas que saben sobre lo último que está sucediendo!."
    },
    {
        id: 3,
        image: "https://en-red.mx/wp-content/uploads/2019/12/5_grandes_mitos-1080x675.jpg",
        description: "Aprendizaje constante. Apostamos a que puedan dar acompañamiento y seguimiento a otras personas que se encuentran aprendiendo en el mundo IT."
    },
]

export const SectionFind = () => {
  return (
    <div className="section-find">
        <div className="section-find__title">
            <h3>¿Qué encontrarás en ITenseño?</h3>
            <div className='border'></div>
        </div>
        <div className="section-find__list">
            {data.map(item => (<CardFind key={item.id} description={item.description} image={item.image}/>))}
        </div>
    </div>
  )
}
