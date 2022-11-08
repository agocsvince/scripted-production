import React from 'react'
import Vimeo from '@u-wave/react-vimeo';
import H1 from '../components/Fonts/H1';
import H2 from '../components/Fonts/H2';
import P from '../components/Fonts/P';
import './home.scss'
import logo from '../assets/rtl_logo.png'
import Slider from '../components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <div id='hero'>
        <div className='video'>
            <Vimeo video="766978136" autoplay controls={false}/>
        </div>
        <div id='hero-text'>
          <H2 text='mi vagyunk a' />
          <H1 text='Scripted Productions' />
          <P text='Magyarország legfiatalabb és legdinamikusabban fejlődő televíziós műsorgyártó cége, egy olyan kreatív műhely, amely kifejezetten a fikciós televíziós sorozatgyártásra specializálódott. A cég alapítója, Hámori Barbara, a hazai televíziózás szakembere, a műsorgyártás területén eltöltött több, mint 20 év után alapította meg régi álmát, egy saját filmgyártó céget.'/>
        </div>
      </div>
      <div id='productions'>
        <H2 text='Produkcióink' className='mb-2' />
        <div class='logos'>
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
    </div>
  )
}

export default Home