import React, { useEffect, useState } from 'react'
import Vimeo from '@u-wave/react-vimeo';
import H1 from '../../components/Fonts/H1/H1';
import H2 from '../../components/Fonts/H2/H2';
import P from '../../components/Fonts/P/P';
import './home.scss'
import logo from '../../assets/rtl_logo.svg'
import project from '../../assets/project.png'
import contact from '../../assets/contact.png'
import Slider from '../../components/Slider/Slider';
import { Fetcher } from '../../helpers/api/Fetcher';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ContactCard from '../../components/ContactCard/ContactCard';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    Fetcher({isLoading, setIsLoading, data, setData})
  
  }, [])

  return (
    <div>
      <div id='hero'>
        <div className='video'>
            <Vimeo video="766978136" autoplay controls={false}/>
        </div>
        <div id='hero-text'>
          <H2 text='mi vagyunk a' />
          <H1 text='Scripted Productions' />
          <P classes='bold' text='Magyarország legfiatalabb és legdinamikusabban fejlődő televíziós műsorgyártó cége, egy olyan kreatív műhely, amely kifejezetten a fikciós televíziós sorozatgyártásra specializálódott. A cég alapítója, Hámori Barbara, a hazai televíziózás szakembere, a műsorgyártás területén eltöltött több, mint 20 év után alapította meg régi álmát, egy saját filmgyártó céget.'/>
        </div>
      </div>
      <div id='productions'>
        <H2 text='Produkcióink' className='mb-2' />
        <div className='logos'>
            <img src={logo} alt='rtl'/>
            <img src={logo} alt='rtl'/>
            <img src={logo} alt='rtl'/>
            <img src={logo} alt='rtl'/>
            <img src={logo} alt='rtl'/>
        </div>
      </div>
      <div className='slider'>
        <Slider />
      </div>
        <ProjectCard title='Title' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis massa metus. Nunc a auctor sem. Mauris ullamcorper sed mi et tincidunt. Donec non mauris nec nulla lacinia mollis id eget mi. Integer turpis nisi, fringilla eu consectetur non, feugiat sit amet lacus. Praesent mollis sem vel purus euismod fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum iaculis rhoncus lorem. Quisque mauris leo, fermentum in luctus sed, pulvinar vitae nibh.' img={project} />
        <ContactCard title='Agocs Vince' desc='Lorem ipsum dolor sit amet' img={contact} />
    </div>
  )
}

export default Home