import React from 'react'
import logo from '../../assets/logo.svg'
import A from '../Fonts/A'
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div id='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div id='pages'>
            <A title="Főoldal" url="localhost:3000/" />
            <A title="Produkciók" url="localhost:3000/produkciok" />
            <A title="Saját fejlesztések" url="localhost:3000/sajat-fejlesztesek" />
            <A title="Csapat" url="localhost:3000/csapat" />
            <A title="Kapcsolat" url="localhost:3000/kapcsolat" />
            <A title="en|hu" />
        </div>
    </div>
  )
}

export default Header;