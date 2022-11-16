import React from 'react'
import H1 from '../Fonts/H1/H1'
import './sectionTitle.scss'

const SectionTitle = ({title, classNames=''}) => {
  const classes = `section-title ${classNames}`

  return (
    <div className={classes}>
        <H1 text={title}/>
    </div>
  )
}

export default SectionTitle