import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav >
            <NavLink to='/game' className={(navData) => navData.isActive ? 'active' : ''}>Play a game</NavLink>
            <NavLink to='/results' className={(navData) => navData.isActive ? 'active' : ''}>Result history</NavLink>
        </nav>
    )
}
