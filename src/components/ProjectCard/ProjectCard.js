import React from 'react'
import Button from '../Button/Button'
import H3 from '../Fonts/H3/H3'
import P from '../Fonts/P/P'
import './projectCard.scss'

const ProjectCard = ({img, title, desc, url}) => {
    return (
      <div className='project-card'>
          <div className='poster' style={{backgroundImage: `url(${img})`}}></div>
          {/* <img className='poster' src={img} alt='project-card'/> */}
          <div className='text'>
              <H3 text={title} />
              <P text={desc} />
              <Button title='Tovább' url={url}/>
          </div>
      </div>
    )
  }

export default ProjectCard