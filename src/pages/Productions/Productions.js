import React from 'react'
import H1 from '../../components/Fonts/H1/H1'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import project from '../../assets/project.png'
import './productions.scss'
import { PageTitle } from '../../components/PageTitle/PageTitle'

const Productions = () => {
  return (
    <div className='productions'>
        <PageTitle title='produkciók' />
        <div className='project-cards'>
            <ProjectCard title='Title' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis massa metus. Nunc a auctor sem. Mauris ullamcorper sed mi et tincidunt. Donec non mauris nec nulla lacinia mollis id eget mi. Integer turpis nisi, fringilla eu consectetur non, feugiat sit amet lacus. Praesent mollis sem vel purus euismod fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum iaculis rhoncus lorem. Quisque mauris leo, fermentum in luctus sed, pulvinar vitae nibh.' img={project} />
            <ProjectCard title='Title' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis massa metus. Nunc a auctor sem. Mauris ullamcorper sed mi et tincidunt. Donec non mauris nec nulla lacinia mollis id eget mi. Integer turpis nisi, fringilla eu consectetur non, feugiat sit amet lacus. Praesent mollis sem vel purus euismod fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum iaculis rhoncus lorem. Quisque mauris leo, fermentum in luctus sed, pulvinar vitae nibh.' img={project} />
            <ProjectCard title='Title' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis massa metus. Nunc a auctor sem. Mauris ullamcorper sed mi et tincidunt. Donec non mauris nec nulla lacinia mollis id eget mi. Integer turpis nisi, fringilla eu consectetur non, feugiat sit amet lacus. Praesent mollis sem vel purus euismod fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum iaculis rhoncus lorem. Quisque mauris leo, fermentum in luctus sed, pulvinar vitae nibh.' img={project} />
            <ProjectCard title='Title' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis massa metus. Nunc a auctor sem. Mauris ullamcorper sed mi et tincidunt. Donec non mauris nec nulla lacinia mollis id eget mi. Integer turpis nisi, fringilla eu consectetur non, feugiat sit amet lacus. Praesent mollis sem vel purus euismod fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum iaculis rhoncus lorem. Quisque mauris leo, fermentum in luctus sed, pulvinar vitae nibh.' img={project} />
        </div>
    </div>
  )
}

export default Productions