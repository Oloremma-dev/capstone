import React from 'react'
import '../App.css';
// import restaurant from '../images/restaurant.png'
import Chef from '../images/restaurant chef B.png'
function Chicago() {
    return (
        <section className='about-section'>
            <img src={Chef} alt='image3' width="400px"/>
                <summary className="about-summary" > 
                <h1>Little Lemon</h1>
                <div className='underline'></div>
                <p className='about-city'>Chicago</p>
                <p>Lorem ipsum dolor sit amet consectetur. Nunc eros amet ut risus blandit urna neque morbi quis.
                    Tincidunt maecenas sed ornare hendrerit posuere interdum amet nunc. Facilisis bibendum nunc
                    erat sem. Sed euismod sed varius ac et feugiat. Nibh pretium purus facilisis pellentesque
                    facilisi dignissim sit in arcu.</p>
                </summary>

            </section>
    )
}

export default Chicago