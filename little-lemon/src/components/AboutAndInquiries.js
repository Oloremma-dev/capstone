import React from 'react'
import '../App.css'
import SocialLinks from './SocialLinks'

function AboutAndInquiries() {
    return (
        <div className='about-and-inquiries'>
            <div className='inquiries-page'>
                <div className='flex-container'>
                        <div className=' res-bottom-list'>
                            <ul>About Us</ul>
                            <li><a href="/">Our Story</a></li>
                            <li><a href="/">Sustainability</a></li>
                            <li><a href="/">Newsroom</a></li>
                            <li><a href="/">Careers</a></li>
                        </div>
                        <div className=' res-bottom-list'>
                            <ul>FIND</ul>
                            <li><a href="/">Menu</a></li>
                            <li><a href="/">Nutritional Guide</a></li>
                            <li><a href="/">Locations</a></li>
                            <li><a href='/'>Little Lemon</a></li>
                        </div>
                        <div className=' res-bottom-list'>
                            <ul>ORDER & RESERVE</ul>
                            <li><a href="/">Dine-In Reservation</a></li>
                            <li><a href="/">Gift Card</a></li>
                            <li><a href="/">Group & Private Dining</a></li>
                            <li><a href="/">Catering & TO-GO</a></li>
                        </div>
                        <div className=' res-bottom-list'>
                            <ul>INQUIRIES</ul>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Global Development</a></li>
                            <li><a href="/">Donation Requests</a></li>
                            <li><a href="/">FAQs</a></li>
                        </div>
                </div>
                    <div className='privacy-section'>
                        <div className='row'>
                        <div className='col'><a href="/">Privacy Policy</a></div>
                            |
                        <div className='col'><a href="/">Notice of Right to Opt-Out</a></div>
                            |
                        <div className='col'><a href="/">CCPA Privacy Policy</a></div>
                            |
                        <div className='col'><a href="/">Accessibility</a></div>
                            |
                            <div className='col'><a href="/">Terms of Use</a></div>
                        </div>
                    </div>
            </div>
            <SocialLinks />
        </div>
    )
}

export default AboutAndInquiries