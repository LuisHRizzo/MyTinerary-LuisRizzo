import React from 'react'
import HeroMain from '../../components/heroMain/heroMain'
import CarrouselHome from '../../components/carrouselHome/CarrouselHome'

const home = () => {
    return (
        <>
        <section className='HeroMain'>
            <HeroMain/>
        </section>
            
        <section className='carrouselHome'>
            <CarrouselHome/>
        </section>      
        

        </>
        )
}

export default home