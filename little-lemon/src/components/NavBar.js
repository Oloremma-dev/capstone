import React from 'react'
import logo from '../images/Logo.png'
import { Link } from 'react'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <img src={logo} alt="logo" />
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/BookingPage" className="nav-item">Reservations</Link>
            <Link to="/online-order" className="nav-item">Online Order</Link>
            <Link to="/login" className="nav-item">LOGIN</Link>
        </nav>
    )
}

export default NavBar