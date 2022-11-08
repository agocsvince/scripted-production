import React from 'react'
import './H2.scss'

const H2 = ({text, className=''}) => {
    const classes = `h2 ${className}`;
  return (
    <div className={classes}>{text}</div>
  )
}

export default H2