import React from 'react'
import './footer.scss'
import H4 from '../Fonts/H4/H4'

const Footer = () => {
  return (
    <div className='footer'>
        <div id='info'>
            <div id='left'>
                <H4 text='Scripted Productions Kft.' bold={true}/>
                <H4 text='1061 Budapest, Liszt Ferenc tér 10.' />
            </div>
            <div id='right'>
                <H4 text='hello@scriptedprouctions.hu' bold={true}/>
                <H4 text='+36 30 123 4567' />
            </div>
        </div>
        <div id='copyright'>Copyright © 2022 Scripted Productions. Minden jog fenntartva.</div>
    </div>
    
  )
}

export default Footer;