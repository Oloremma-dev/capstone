import React from 'react'
import '../App.css'
import footerImage from '../images/footer-logo.png'
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <div className='footer-section'>
            <img src={footerImage} alt='footer-img' />
            <div className="list">
                <ul>Doormat Nagivation</ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href='/'>Reservation</a></li>
                <li><a href="/">Online Order</a></li>
                <li><a href="/">LogIn</a></li>
            </div>
            <div className="list">
                <ul>Contact</ul>
                <li>Address</li>
                <li>xxx-xxx-xxxx</li>
                <li>Location</li>
            </div>
            <div className="social-media-list">
                <ul>Social Media </ul>
                <SocialIcon className="icons" network="twitter" style={{ height: 30, width: 30}} />
                <SocialIcon className="icons" network="instagram" style={{ height: 30, width: 30 }} />
                <SocialIcon className="icons" network="facebook" style={{ height: 30, width: 30 }} />
            </div>
        </div>
    )
}

export default Footer