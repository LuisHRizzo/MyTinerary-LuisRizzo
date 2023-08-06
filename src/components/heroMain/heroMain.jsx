import React from 'react'
import './heroMain.css'


const HeroMain = () => {
  return (
    <div className='bannerHero'>
      <div className='boxHeroContenedor'>
      <div className='boxHero'>
        <h1>Find the perfect destination</h1>
          <h3>Our app will help you find the perfect path for your next trip, with an easy to use interfase and a host of itinerary options, 
            planning your next trip has never been easier</h3>
        <div className='callToAction'><button type="button" className="btn btn-primary callToAction">View More</button></div>
      </div>
      </div>
    </div>
  )
}

export default HeroMain