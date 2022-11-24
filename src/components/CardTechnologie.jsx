import React from 'react'

export const CardTechnologie = ({name, level}) => {
  return (
    <div className='card-technologie'>
      <h5>{name} ({level})</h5>
    </div>
  )
}
