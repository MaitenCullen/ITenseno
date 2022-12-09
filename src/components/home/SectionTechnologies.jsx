import React, { useEffect, useState } from 'react'
import { getTechnologies } from '../../utilities/servicies'
import { LinkTechnologie } from '../LinkTechnologie'


// const data = [
//     {
//         id: 1,
//         name: "Tecnologia 1"
//     },
//     {
//         id: 2,
//         name: "Tecnologia 2"
//     },
//     {
//         id: 3,
//         name: "Tecnologia 3"
//     },
//     {
//         id: 4,
//         name: "Tecnologia 4"
//     },
//     {
//         id: 5,
//         name: "Tecnologia 5"
//     },
//     {
//         id: 6,
//         name: "Tecnologia 6"
//     },
//     {
//         id: 7,
//         name: "Tecnologia 7"
//     },
//     {
//         id: 8,
//         name: "Tecnologia 8"
//     },
//     {
//         id: 9,
//         name: "Tecnologia 9"
//     },
//     {
//         id: 10,
//         name: "Tecnologia 10"
//     }
// ]


export const SectionTechnologies = () => {
    const [technologie, setTechnologie] = useState([])
    
    useEffect (() => {
        getTechnologies()
        .then((resp) => {
            console.log(resp, "soy la tecnologia")
            setTechnologie(resp);

         })
    },[]);

  return (
    <div className="section-technologies">
        <div className="section-technologies__title">
            <h3>Elige las tecnologías que quieras aprender</h3>
            <div className='border'></div>
        </div>
        
        <div className="section-technologies__list">
            {technologie?.map((item, index) => (<LinkTechnologie key={index} title={item.name}/>))}
        </div>
    </div>
  )
}
