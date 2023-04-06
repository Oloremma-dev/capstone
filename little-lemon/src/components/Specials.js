import React from 'react'
import '../App.css';
import greeksalad from '../images/greek salad.png'
import burchetta from '../images/Vector.png'
import lemondessert from '../images/lemon dessert.png'
//import { Card, CardBody, CardFooter } from '@chakra-ui/react'
//import { Stack, Image, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'


function Specials() {
    return (
        <div className="specials">
            <section className="sub-heading-2">
                <h1>This weeks specials! </h1>
                <Link to="/online-order" className='online-order-btn'>Order Online</Link>
            </section>
            <div className='container'>
                <div className='row'>
                    <figure className='col card'>
                        <img src={greeksalad} alt="greek-salad" />
                        <figcaption className="card-body">
                            <h4>Greek Salad <small>$12.99</small></h4>
                            <p>This famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <a className='order-delivery' href="/">
                                Order a Delivery
                                <span> <FontAwesomeIcon icon={faCar} /></span>
                            </a>
                        </figcaption>
                    </figure>
                    <figure className='col card'>
                        <img src={burchetta} alt="burchetta" />
                        <figcaption className='card-body'>
                            <h4>Burchetta <small>$5.99</small></h4>
                            <p>This famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <a className='order-delivery' href="/">
                                Order a Delivery
                                <span> <FontAwesomeIcon icon={faCar} /></span>
                            </a>
                        </figcaption>
                    </figure>
                    <figure className='col card'>
                        <img src={lemondessert} alt="lemon-dessert" />
                        <figcaption className='card-body'>
                            <h4>Lemon Dessert <small>$5.00</small></h4>
                            <p>This famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <a className='order-delivery' href="/">
                                Order a Delivery
                                <span> <FontAwesomeIcon icon={faCar} /></span>
                            </a>

                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Specials;
