import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header className='bg-slate-900 sticky top-0 z-20' style={{ boxShadow: "0 2px 2px 2px rgba(15, 23, 42, 0.25)" }}>
            <nav className="h-[60px] w-full flex items-center relative py-2 px-0 text-slate-100">
                <a href="/" className="text-3xl font-semibold lg:mx-28 md:mx-12 mx-6">
                    <span>Rocky</span> <span className='text-primary'>Dey</span>
                </a>
                <button onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} className="border-0 w-12 h-10 p-2 text-center rounded-full btn absolute top-[6px] md:right-12 right-6 lg:hidden block bg-primary hover:bg-rose-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-8"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className={isNavExpanded ? "ml-auto navigation-menu expanded z-20" : "ml-auto navigation-menu"}>
                    <ul className='lg:flex items-center p-0 hidden lg:mx-28'>
                        <li className='mx-5'>
                            <Link className='block w-full text-lg' to="/home">Home</Link>
                        </li>
                        <li className='mx-5'>
                            <a className='block w-full text-lg' href="#about">About</a>
                        </li>
                        <li className='mx-5'>
                            <a className='block w-full text-lg' href="#myskill">My Skills</a>
                        </li>
                        <li className='mx-5'>
                            <a className='block w-full text-lg' href="#myproject">My Projects</a>
                        </li>
                        <li className='mx-5'>
                            <Link className='block w-full text-lg' to="/blogs">Blogs</Link>
                        </li>
                        <li className='mx-5'>
                            <a className='block w-full text-lg' href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;