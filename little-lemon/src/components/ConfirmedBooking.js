import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmedBooking() {
  return (
    <div className="confirmed-page">
      <section>
        <h1>Little Lemon</h1>
      </section>
      <div className='confirmed-message'>
        <h2>
          Your Reservation have been confirmed!
        </h2>

        <h5>A confirmation message has been sent to your email.</h5>
        <h4>Thanks for dining with us!</h4>
      </div>
      <div className="redirect-buttons">
        <div>
          <Link
            className="redirect-button"
            to="/menu"
          >
            Browse Menu
          </Link>
        </div>
        <div>
          <Link className="redirect-button" to="/online-order">
            Order TakeOut
          </Link>
        </div>
        <div>
          <Link className="redirect-button" to="/">
            Home Page
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConfirmedBooking