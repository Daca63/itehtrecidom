import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className={`card ${props.clickable ? 'clickable' : ''} ${props.selected ? 'selected' : ''} ${props.className}`} onClick={props.onClick}>
      { props.children }
    </div >
  )
}
