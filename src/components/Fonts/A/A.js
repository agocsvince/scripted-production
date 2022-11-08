import React from 'react'
import { Link } from "react-router-dom"
import './A.scss'

const A = ({title, url}) => {
  return (
    <Link to={url} className='link'>{title}</Link>
  )
}

export default A