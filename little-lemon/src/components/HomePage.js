import React from 'react'
import CallToAction from './CallToAction'
import Chicago from './Chicago'
import CustomersSay from './CustomersSay'
import Specials from './Specials'
import Footer from './Footer'
import '../App.css';

function HomePage() {
  return (
    <div>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
        <Footer />
    </div>
  )
}

export default HomePage