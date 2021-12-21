import React from 'react'
import './Navbar.css'
import Images from './Images/kudinav.png'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="navimg">
                <img src= {Images} alt="" />
            </div>
            <div className="navtext">
                <a href="http://">Home</a>
                <a href="http://">About Us</a>
                <a href="http://">How It Works</a>
                <a href="http://">Affiliate</a>
                <a href="http://">Coupon Vendor</a>
                <a href="http://">FAQs</a>
                <a href="http://">Contact</a>
                    <button className='Started'>Get Started</button>
                    <button className='Login'>Login</button>
                    
                    
            </div>
            
        </div>
    )
}

export default Navbar
