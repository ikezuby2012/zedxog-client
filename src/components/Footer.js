import React from 'react';
import {FaTwitter, FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <ul className="nav">
               <li>
                   <div className="nav__item"><a href="#" className="nav__link">home</a></div>
               </li>
                <li>
                    <div className="nav__item"><a href="#" className="nav__link">services</a></div>
                </li>
                <li>
                    <div className="nav__item"><a href="#" className="nav__link">our works</a></div>
                </li>
                <li>
                    <div className="nav__item"><a href="#" className="nav__link">our process</a></div>
                </li>
                <li>
                    <div className="nav__item"><a href="#" className="nav__link">contact us</a></div>
                </li>
           </ul>
           <div className="footer_social-media">
            <span className="footer_icon-box">
                <a href="https://twitter.com/@ikezuby2012" target="blank">
                    <FaTwitter className="footer_icon footer_icon-twitter"/>
                </a>
            </span>
            <span className="footer_icon-box">
                <a href="https://linkedin.com/in/nzubechi-nnubia-0a399b1bb" target="blank">
                    <FaLinkedin className="footer_icon footer_icon-ln"/>
                </a>
            </span>
            <span className="footer_icon-box">
                <a href="https://wa.me/qr/CL5ND34F75SFG1" target="blank">
                    <FaWhatsapp className="footer_icon footer_icon-wa"/>
                </a>
            </span>
            <span className="footer_icon-box">
                <a href="https://instagram.com/zuby_pure?r=nametag" target="blank">
                    <FaInstagram className="footer_icon footer_icon-lnsta"/>
                </a>
            </span>
            <span className="footer_icon-box">
                <a href="https://facebook/nnubia_nzube" target="blank">
                    <FaFacebook className="footer_icon footer_icon-fb"/>
                </a>
            </span>
           </div>
           <p className="footer-p">
                in our 5 years of experience, we've only had successful projects. our secrets? hard and passionate works. 
           </p>
           <p className="footer-copyright"> 
            &copy;{year} all right reserved by zedx | made with <span style={{color: 'red'}} role="img">💓</span> from zedx
           </p>
        </>
    );
}

export default Footer;
