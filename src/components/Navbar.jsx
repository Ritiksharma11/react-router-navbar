import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="logo"><Link to='/'>Logo</Link> </div>
                <div className="links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className="start-btn">Get Started</div>
                <div className="mobile-nav-icons">
                    {
                        isOpen ? <MdOutlineClose className='close' onClick={() => setisOpen(!isOpen)} /> :
                            <FaBars onClick={() => setisOpen(!isOpen)} />
                    }
                </div>
                {
                    isOpen && (
                        <div className={`mobileNav ${isOpen ? 'active' : ''} `}>
                            <div className="mob-links">
                                <Link onClick={() => setisOpen(false)} to='/'>Home</Link>
                                <Link onClick={() => setisOpen(false)} to='/about'>About</Link>
                                <Link onClick={() => setisOpen(false)} to='/projects'>Projects</Link>
                                <Link onClick={() => setisOpen(false)} to='/contact'>Contact</Link>
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}

export default Navbar