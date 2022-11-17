import React from 'react'

export const CardFind = ({description, image}) => {
  return (
    <div className='card-find'>
        <img src={image}/>
        <p>{description}</p>
    </div>
  )
}
