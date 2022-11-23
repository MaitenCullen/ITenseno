import React from 'react'

export const CardClass = ({name, level, description}) => {
  return (
    <div className='card-class'>
        <h3>{name} - {level}</h3>
        <p>{description}</p>
    </div>
  )
}
