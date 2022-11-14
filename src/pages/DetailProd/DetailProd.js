import React from 'react'
import { useParams } from "react-router-dom"
import { PageTitle } from '../../components/PageTitle/PageTitle'
import keresztanyu from '../../assets/img3.svg'
import './detailProd.scss'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import P from '../../components/Fonts/P/P'
import H5 from '../../components/Fonts/H5/H5'

const DetailProd = () => {
    const { id } = useParams();

    return (
        <div className='production-details'>
            <PageTitle title='keresztanyu' />
            <div className='poster-grid'>
                <div className='poster' style={{backgroundImage: `url(${keresztanyu})`}}/>
                <div className='poster-grid column'>
                    <div className='poster' style={{backgroundImage: `url(${keresztanyu})`}}/>
                    <div className='poster' style={{backgroundImage: `url(${keresztanyu})`}}/>
                </div>
            </div>
            <SectionTitle title='sztori'/>
            <div className='description'>
                <P text='A Keresztanyu című filmsorozat az ukrán-magyar határra kalauzolja a televízió nézőit egy Makkosszállás nevű kis községbe, ahol semmi sem az, aminek elsőnek látszik. Makkosszállás látszólag nyugodt életét a határon keresztül játszmázó furfangos csempészek, az ellenük elszántan harcoló rendőrök és határőrök, valamint nemzetközi érdekellentétek kavarják fel. A történet elején Róza mama, a helyi csempész maffia vezetője, a „Keresztanyu” 69. születésnapján elhatározza, hogy egy éven belül visszavonul, és annak adja a hálózat irányítását, akit egy év múlva megválasztanak Makkosszállás polgármesterének.'/>
                <P text='A családtagok, a község, sőt még az ukrán oldal lakói is azon kezdenek el ügyködni, hogy megkaparintsák a polgármesteri címet, melynek tétje idővel nem csak a hálózat vezetése, hanem egy másik, hatalmas üzleti lehetőség is lesz. A szálak egyre jobban bonyolódnak be, családtagok fordulnak egymás ellen, barátból ellenség válik, és ember legyen a talpán, aki ezek között a mostoha viszonyok között még átlátja, kiben bízhat meg. Az akció-és krimi elemeket vegyítő komédia humoros betétekkel, vicces és változatos karakterekkel és sok-sok izgalommal bilincseli nap mint nap a képernyő elé a nézőket. És még hol a vége? Készült az RTL Magyarország megbízásából.'/>
            </div>
            <SectionTitle title='stáb'/>
            <div className='staff'>
                <ul>
                    <li><strong>Showrunner:</strong> Hámori Barbara</li>
                    <li><strong>Producer:</strong> Hámori Barbara</li>
                    <li><strong>Kreatív producer:</strong> Zsingor Dániel</li>
                    <li><strong>Rendező:</strong> Hámori Barbara</li>
                    <li><strong>Író:</strong> Hámori Barbara</li>
                </ul>
                    <H5 text='Szereplők:' bold={true} />
                <ul>
                    <li>Viki - Kiss Katalin</li>
                    <li>Tibi - Nagy Ádám</li>
                    <li>Jenő - Kincses Dániel</li>
                    <li>Viki - Kiss Katalin</li>
                    <li>Tibi - Nagy Ádám</li>
                    <li>Jenő - Kincses Dániel</li>
                    <li>Viki - Kiss Katalin</li>
                    <li>Tibi - Nagy Ádám</li>
                    <li>Jenő - Kincses Dániel</li>
                    <li>Viki - Kiss Katalin</li>
                    <li>Tibi - Nagy Ádám</li>
                    <li>Jenő - Kincses Dániel</li>
                </ul>
                <P text='Készült az RTL Klub megbízásából 2021-ben.' />
            </div>
            <SectionTitle title='videók'/>
            <SectionTitle title='elismerések'/>
        </div>
    )
}

export default DetailProd