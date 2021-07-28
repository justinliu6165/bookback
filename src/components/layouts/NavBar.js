import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__nav-items">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/booking">Booking</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar