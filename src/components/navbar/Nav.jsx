import React, { useState } from 'react'
import './Nav.css'
import logo from './nav-img/logo.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div className='nav-main'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <div className="label" onClick={toggleMenu}>
                {isOpen ? (
                    // Close icon (an "X")
                    <i class="fa-solid fa-x" id='cancel'></i>
                ) : (
                    // Hamburger icon (three bars)
                    <i class="fa-solid fa-bars" id='btn'></i>
                )}
            </div>
            <div className={`pages ${isOpen ? 'open' : ''}`}>
                <i class="fa-solid fa-x" id='cancel' onClick={toggleMenu}></i>
                <p><span><i class="fa-solid fa-house"></i></span> <span>Home</span> </p>
                <p> <span><i class="fa-solid fa-user"></i></span> <span>About Me</span> </p>
                <p> <span><i class="fa-brands fa-buffer"></i></span> <span>Portfolio</span> </p>
                <p> <span><i class="fa-solid fa-comment"></i></span> <span>Contact</span> </p>
            </div>
        </div>
    )
}

export default Nav