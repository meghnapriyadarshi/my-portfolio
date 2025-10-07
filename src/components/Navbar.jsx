import React from "react";
import {Router, Routes, Route } from 'react-router-dom'

function Navbar (){
    return(
        <>
        <nav>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/skills" className="hover:text-yellow-400">Services</Link>            
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </nav>
        </>
    )
}

export default Navbar;