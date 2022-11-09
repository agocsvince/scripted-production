import React from 'react'
import { Link } from "react-router-dom"
import './A.scss'

const A = ({title, url, classes=''}) => {
  classes = `link ${classes}`
  return (
    <Link to={url} className={classes} >{title}</Link>
  )
}

export default A