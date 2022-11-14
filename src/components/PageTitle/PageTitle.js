import React from 'react'
import H1 from '../Fonts/H1/H1'
import './pageTitle.scss'

export const PageTitle = ({title}) => {
  return (
    <div className='title'>
        <H1 text={title} />
    </div>
  )
}
