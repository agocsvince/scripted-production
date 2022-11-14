import React from 'react'
import H1 from '../Fonts/H1/H1'
import './sectionTitle.scss'

const SectionTitle = ({title}) => {
  return (
    <div className='section-title'>
        <H1 text={title}/>
    </div>
  )
}

export default SectionTitle