import React from 'react'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import popcorn from '../../assets/popcorn.svg'
import almoshegy from '../../assets/almoshegy.svg'
import konteo from '../../assets/konteo.svg'
import missCasanova from '../../assets/miss-casanova.svg'
import uvegfal from '../../assets/uvegfal.svg'
import vadkelet from '../../assets/vadkelet.svg'
import './ownDeveloped.scss'

const OwnDeveloped = () => {
  return (
    <div className='sajat-fejlesztesek'>
        <PageTitle title='saját fejlesztések' />
        <div className='image-grid'>
            <img alt='poster' src={popcorn} />
            <img alt='poster' src={konteo} />
            <img alt='poster' src={missCasanova} />
            <img alt='poster' src={almoshegy} />
            <img alt='poster' src={uvegfal} />
            <img alt='poster' src={vadkelet} />
        </div>
    </div>
  )
}

export default OwnDeveloped