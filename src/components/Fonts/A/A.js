import React from 'react'
import { Link } from "react-router-dom"
import arrow from '../../../assets/arrow-right-long.svg'
import './A.scss'

const A = ({title, url, classes='', shouldArrow=false }) => {
  classes = `link ${classes}`
  return (
    <Link to={url} className={classes} >{title}{shouldArrow && <img src={arrow} alt='arrow' />}</Link>
  )
}

export default A