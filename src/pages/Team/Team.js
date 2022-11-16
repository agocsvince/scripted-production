import React from 'react'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import contact from '../../assets/contact.png'
import './team.scss'
import ContactCard from '../../components/ContactCard/ContactCard'

const Team = () => {
  return (
    <div className='csapat'>
        <PageTitle title='csapat' />
        <div className='image-grid'>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal' url='/csapat/1'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
        </div>
        <hr />
        <div className='image-grid'>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
            <ContactCard img={contact} title='Dr. Horváth Antal' desc='Head of Legal'/>
        </div>
    </div>
  )
}

export default Team