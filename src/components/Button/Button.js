import React from 'react'
import A from '../Fonts/A/A'
import './button.scss'

const Button = ({title, url}) => {
  return (
    <A classes='button' url={url} title={title} />
  )
}

export default Button