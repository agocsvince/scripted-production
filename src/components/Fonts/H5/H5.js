import React from 'react'
import './H5.scss'

const H5 = ({text, bold = false}) => {
    const className = `footer${bold ? ' bold' : ''}`;
  return (
    <div className={className}>{text}</div>
  )
}

export default H5