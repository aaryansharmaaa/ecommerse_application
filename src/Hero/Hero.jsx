import React from 'react'
import './Hero.css';
import heroIamge from '../Assets/hero_image.png';
import hand from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>new arival only</h2>
                <div className="hand-container">
                    <p>new</p>
                    <img src={hand} />
                </div>
                <h1>collection</h1>
                <h1>for everyone</h1>
                <div className="arrow-container">
                    <p>Check Now</p>
                    <img src={arrow} />
                </div>
            </div>
            <div className="hero-right">
                <img src={heroIamge} />
            </div>
        </div>
    )
}

export default Hero
