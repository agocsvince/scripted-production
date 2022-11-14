import React from 'react'
import './P.scss'

const P = ({text, classes}) => {
  return (
    <p className={classes}>{text}</p>
  )
}

export default P