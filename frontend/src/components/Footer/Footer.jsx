import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <h1>bookattic</h1> */}
                <img src={assets.logo} id='logo' alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum tenetur consequatur repellat corporis doloremque placeat necessitatibus, dolorum cupiditate alias illum porro ullam perferendis, voluptates quisquam eveniet eius, autem aut!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-342-2343</li>
                    <li>contact@bookattic.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © BookAttic.com - ALl Right Reserved</p>
    </div>
  )
}

export default Footer