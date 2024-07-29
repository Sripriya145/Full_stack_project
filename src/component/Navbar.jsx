import React from 'react'
import logo from  "../Picture/logo1.png";
import '../Assert/NavBar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar-section">
        <div className="navbar-content">
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className="each-naviteam">
                <ul>
                    <li className='nav-item'><Link to={'/'} className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to={'/contact'} className='nav-link'>Contact</Link></li>
                    <li className='nav-item'><Link to={'/card'} className='nav-link'>Cart</Link></li>
                    <li className='nav-item'><Link to={'/booking'} className='nav-link'>Booking</Link></li>
                    <li className='nav-item'><Link to={'/login'} className='nav-link'>Login</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar