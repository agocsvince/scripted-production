import React from 'react'
import A from '../Fonts/A/A'
import './button.scss'

const Button = ({title, url, shouldArrow}) => {
  return (
    <A classes='button' url={url} title={title} shouldArrow={shouldArrow} />
  )
}

export default Button