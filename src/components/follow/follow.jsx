import React from 'react'
import './follow.css'

export function FollowTheme(props) {
  return(
    <>
      <div>
      <p className='card__follow-number'>{props.number}</p>
      <p className='card__follow-description'>{props.description}</p>
      </div>
    </>
  )
}