import React from 'react'
import './Sidebar.css'
import logo from './images/my.jpg'

const Sidebar = () => {
    return (
        <div className='sidebar-main'>
            <div className="scrolling">
                <div className="sidebar-logo">
                    <div className="logo-border">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="sidebar-contents">
                    <div className="contents">
                        <p><span><i class="fa-solid fa-house"></i></span> <span>Home</span> </p>
                        <p> <span><i class="fa-solid fa-user"></i></span> <span>About Me</span> </p>
                        <p> <span><i class="fa-brands fa-buffer"></i></span> <span>Portfolio</span> </p>
                        <p> <span><i class="fa-solid fa-comment"></i></span> <span>Contact</span> </p>
                    </div>
                </div>
                <div className="line-main">
                    <div className="line">
                    </div>
                </div>
                <div className="social">
                    <div className="find">
                        <h3>FIND WITH ME</h3>
                    </div>
                    <div className="social-icons">
                        <a href='' class="icon"><i class="fa-brands fa-github"></i></a>
                        <a href='' class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href='' class="icon"><i class="fa-brands fa-instagram"></i></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar