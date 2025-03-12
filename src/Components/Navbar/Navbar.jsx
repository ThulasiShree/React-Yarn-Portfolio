import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Thulasi</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li><a href="intro">Home</a></li>
                    <li><a href="services">Services</a></li>
                    <li><a href="experience">Experience</a></li>
                    <li><a href="portfolio">Portfolio</a></li>
                    <li><a href="testimonials">Testimonials</a></li>
                </ul>
            </div>
            <button className='button n-button'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar