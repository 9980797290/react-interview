import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>
      <nav className='nav-bar'>


      <div className="navbar-nav" >
        <Link className="link" aria-current="page" to="/home">Home</Link>
        <Link className="link2" to="/student">Student</Link>
        <Link className="link3" to="/contact">Contact</Link>
     
      </div>
      </nav>
    </div>









    
  )
}

export default Navbar