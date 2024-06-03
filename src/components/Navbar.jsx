import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/contact", link: "Contact" },
        { path: "/services", link: "Services" },
        { path: "/blogs", link: "Blog" },
    ]
    return (

        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'>
                <a href='/' className='text-xl font-bolt text-orange-600'>Analytica</a>
                <ul className='md:flex text-lg gap-12 hidden'>
                    {
                        navItems.map(({ path, link }) => <li className='text-white' key={path}>
                            <NavLink className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                } to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href='/' className='hover:text-orange-600'><FaFacebook /></a>
                    <a href='/' className='hover:text-orange-600'><FaTwitter /></a>
                    <a href='/' className='hover:text-orange-600'><FaDribbble /></a>
                    <a href='/' className='hover:text-orange-600'><FaInstagram /></a>
                    <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
                  hover:text-orange-500'>Login</button>
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                   
                    </button>
                </div>
            </nav>
            <div>
                <ul className={`md:hidden text-lg gap-12 block space-y-4 px-4 py-6 mt-14 bg-white
                ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navItems.map(({ path, link }) => <li className='text-black' key={path}>
                            <NavLink to={path}>{link}</NavLink>
                        </li>

                        )
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar