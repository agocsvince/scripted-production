import React from 'react'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import Vimeo from '@u-wave/react-vimeo';
import contact from '../../assets/team-member.svg'
import popcorn from '../../assets/popcorn.svg'
import almoshegy from '../../assets/almoshegy.svg'
import konteo from '../../assets/konteo.svg'
import missCasanova from '../../assets/miss-casanova.svg'
import uvegfal from '../../assets/uvegfal.svg'
import vadkelet from '../../assets/vadkelet.svg'
import './detailTeam.scss'


import SectionTitle from '../../components/SectionTitle/SectionTitle'
import P from '../../components/Fonts/P/P'

const DetailTeam = () => {
  return (
    <div className='team-member'>
        <PageTitle title='Dr. Horváth Antal' />
        <SectionTitle title='rólam' />
        <div className='about'>
            <img alt='portrait' src={contact}/>
            <div className='description'>
                <P classes='mb-2' text='A Keresztanyu című filmsorozat az ukrán-magyar határra kalauzolja a televízió nézőit egy Makkosszállás nevű kis községbe, ahol semmi sem az, aminek elsőnek látszik. Makkosszállás látszólag nyugodt életét a határon keresztül játszmázó furfangos csempészek, az ellenük elszántan harcoló rendőrök és határőrök, valamint nemzetközi érdekellentétek kavarják fel. A történet elején Róza mama, a helyi csempész maffia vezetője, a „Keresztanyu” 69. születésnapján elhatározza, hogy egy éven belül visszavonul, és annak adja a hálózat irányítását, akit egy év múlva megválasztanak Makkosszállás polgármesterének.'/>
                <P text='A családtagok, a község, sőt még az ukrán oldal lakói is azon kezdenek el ügyködni, hogy megkaparintsák a polgármesteri címet, melynek tétje idővel nem csak a hálózat vezetése, hanem egy másik, hatalmas üzleti lehetőség is lesz. A szálak egyre jobban bonyolódnak be, családtagok fordulnak egymás ellen, barátból ellenség válik, és ember legyen a talpán, aki ezek között a mostoha viszonyok között még átlátja, kiben bízhat meg. Az akció-és krimi elemeket vegyítő komédia humoros betétekkel, vicces és változatos karakterekkel és sok-sok izgalommal bilincseli nap mint nap a képernyő elé a nézőket. És még hol a vége? Készült az RTL Magyarország megbízásából.'/>
            </div>
        </div>
        <Vimeo video="766978136" autoplay className='video' height={500}/>
        <SectionTitle title='rodukcióm' />
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

export default DetailTeam