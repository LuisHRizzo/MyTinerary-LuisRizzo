import React from 'react';
import './navbar.css';
import { Link as Anchor, NavLink } from 'react-router-dom';




const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-light bg-light ">
        <div className="d-flex flex-row navbarLogo">
          <span className="navbar-brand mb-0 h1  ">MyTinerary</span>
        </div>
        <div className='navButtons' >
          <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" :  
                    isActive ? "active" : ""}
            to="/">HOME</NavLink>
  </div> 
        <div className='navButtons'>
          <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" :  
                    isActive ? "active" : "pending"} 
                    to="/cities">CITIES</NavLink></div>
        <div><button type="button" class="btn btn-primary navButtons">LogIn</button></div>        
      </nav>
    </>
  )
}

export default Navbar