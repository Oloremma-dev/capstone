import React from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function CustomersSay() {
    return (
        <div className="testimonials">
            <div className="sub-heading">
                <h1>Testimonials</h1>
                <div className="border"></div>
            </div>
            <section>
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU" alt="customer" />
                    <div className='review-star'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <figcaption>
                        <strong>First Last</strong>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis lectus leo tincidunt tincidunt elit aenean. Massa in congue quis id...</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU" alt="customer" />
                    <div className='review-star'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <figcaption>
                        <strong>First Last</strong>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis lectus leo tincidunt tincidunt elit aenean. Massa in congue quis id...</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRxfERFlApLKpIifup2oj0wda4S4g_wmb_g&usqp=CAU" alt="customer" />
                    <div className='review-star'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <figcaption>
                        <strong>First Last</strong>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis lectus leo tincidunt tincidunt elit aenean. Massa in congue quis id...</p>
                    </figcaption>
                </figure>
            </section>

        </div>
    )
}

export default CustomersSay