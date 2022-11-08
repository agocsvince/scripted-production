import React from 'react'
import './H4.scss'

const H4 = ({text, bold = false}) => {
    const className = `footer${bold ? ' bold' : ''}`;
  return (
    <div className={className}>{text}</div>
  )
}

export default H4