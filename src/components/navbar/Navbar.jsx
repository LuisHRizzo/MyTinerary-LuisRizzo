import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-light bg-light ">
        <div className="d-flex flex-row navbarLogo">
          <span className="navbar-brand mb-0 h1  ">MyTinerary</span>
        </div>
        <div className='navButtons' ><a className="nav-link active" aria-current="page" href="#">HOME</a></div> 
        <div className='navButtons'> <a className="nav-link " aria-current="page" href="#">CITIES</a></div>
        <div><button type="button" class="btn btn-primary navButtons">LogIn</button></div>        
      </nav>
    </>
  )
}

export default Navbar