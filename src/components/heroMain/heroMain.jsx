import React from 'react'
import './heroMain.css'


const HeroMain = () => {
  return (
    <div className='bannerHero'>
      <div className='boxHeroContenedor'>
      <div className='boxHero'>
        <h1>MyTinerary</h1>
          <h3>Find your perfect trip, designed by insiders who know and love their cities!. </h3>
        <div className='callToAction'><button type="button" className="btn btn-primary callToAction">View More</button></div>
      </div>
      </div>
    </div>
  )
}

export default HeroMain