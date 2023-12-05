import React from 'react';
import './Footer.css';
import whatsapp from '../Assets/whatsapp_icon.png';
import pintrest from '../Assets/pintester_icon.png';
import instagram from '../Assets/instagram_icon.png';
import logofooter from '../Assets/logo_big.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerlogo">
                <img src={logofooter} />
                <p>Shoppers</p>
            </div>
            <ul className='footer-link'>
                <li>Coampney</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footersocial-icon">
                <div className="footericoncontainer">
                    <img src={instagram} />
                    <img src={whatsapp} />
                    <img src={pintrest} />
                </div>
            </div>
            <div className="fottercopyright">
                <hr />
                <p>@2023 All copyright reserved by Shoppers.inc</p>
            </div>

        </div>
    )
}

export default Footer
