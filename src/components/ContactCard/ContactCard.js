import React from 'react'
import { Link } from "react-router-dom"
import H4 from '../Fonts/H4/H4'
import P from '../Fonts/P/P'
import './contactCard.scss'

const ContactCard = ({img, title, desc, url}) => {
    return (
        <div className='contact-card'>
            <Link to={url}>
                <div className='poster' style={{backgroundImage: `url(${img})`}}></div>
                {/* <img className='poster' src={img} alt='project-card'/> */}
                <div className='text'>
                    <H4 text={title} />
                    <P text={desc} />
                </div>
            </Link>
        </div>
    )
  }

export default ContactCard