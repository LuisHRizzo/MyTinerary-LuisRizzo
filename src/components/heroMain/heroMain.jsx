import React from 'react'
import './heroMain.css'
import { Link as Anchor, NavLink } from 'react-router-dom';


const HeroMain = () => {
  return (
    <div className='bannerHero'>
      <div className='boxHeroContenedor'>
      <div className='boxHero'>
        <h1>MyTinerary</h1>
          <h3>Find your perfect trip, designed by insiders who know and love their cities!. </h3>
        <div className='callToAction'>
          <Anchor to="/cities"> <button type="button" className="btn btn-primary callToAction">View More</button></Anchor>
          </div>
      </div>
      </div>
    </div>
  )
}

export default HeroMain