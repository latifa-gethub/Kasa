import React from 'react'

export const Host = (props) => {
  return (
    <div className='host'>
        {props.nameHost}
        <img src={props.pictureHost} className='img-host'/>
        </div>
  )
}
