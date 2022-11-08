import React from 'react'
import './A.scss'

const A = ({title, url}) => {
  return (
    <a href={url} className='link'>{title}</a>
  )
}

export default A