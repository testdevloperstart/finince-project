import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {

    

    return (
        <nav className="bg-yellow-500 p-4 font-sans fixed w-full">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <NavLink to="/">
                        <div className="flex justify-center align-center space-x-5 "> 
                        <img src={logo} alt="Logo" className="h-10 w-auto rounded-3xl" />
                        <p className="pt-2 text-lg "  style={{ fontFamily: 'Pacifico, sans-serif' }}>Basavajyoti Finance & leasing(R)</p>
                        </div>
                        
                    </NavLink>
                </div>
                {/* Navigation Links */}
                <div className="flex space-x-12 text-lg text">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-gray-500" : "text-black hover:text-white"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-gray-500" : "text-black hover:text-white"
                        }
                    >
                        About
                    </NavLink>


                    <button className="border bg-white p-1 rounded-xl">
                        <NavLink
                            to="/create-account"
                            className={({ isActive }) =>
                                isActive ? "text-gray-500" : "text-black hover:text-yellow-700"
                            }
                        >
                            Create Account
                        </NavLink>
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;