import React from 'react'
import logo from '../../assets/logo.svg'
import A from '../Fonts/A/A'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div id='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div id='pages'>
            <A title="Főoldal" url="/" />
            <A title="Produkciók" url="/produkciok" />
            <A title="Saját fejlesztések" url="/sajat-fejlesztesek" />
            <A title="Csapat" url="/csapat" />
            <A title="Kapcsolat" url="/kapcsolat" />
            <A title="en | hu"/>
        </div>
    </div>
  )
}

export default Header;