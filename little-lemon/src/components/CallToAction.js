import React from 'react'
import '../App.css';
import image1 from '../images/restauranfood.png'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="hero-section">
      <summary className="intro">
        <h1>Little Lemon</h1>
        <p className="city">Chicago</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur. Convallis lectus leo tincidunt tincidunt elit aenean. Massa in congue quis id leo tincidunt tincidunt elit aenean.</p>
        <Link to="/Booking">Reserve a Table</Link>
      </summary>
      <img src={image1} alt="image1" />
    </section>
  )
}

export default CallToAction