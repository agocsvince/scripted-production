import React from 'react'
import './H5.scss'

const H5 = ({text, bold = false}) => {
    const className = `footer${bold ? ' bold' : ''}`;
  return (
    <h5 className={className}>{text}</h5>
  )
}

export default H5