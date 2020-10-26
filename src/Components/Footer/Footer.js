import React from 'react';
import "./Footer.css"
import logo from "../../img/logo.png";
import facebook from '../../img/social_icons/facebook.png'
import linkedin from '../../img/social_icons/linkedin.png'
import google from '../../img/social_icons/google.png'
import mail from '../../img/social_icons/mail.png'


function Footer() {

    return (

        <footer id="footer">
            <div className="logo_container">
                <div className="logo_item">
                    <img src={logo} alt="Fuddi logo"/>
                </div>
            </div>
            <div className="social">

                <a target="_blank" rel="noopener noreferrer"
                   href="https://www.facebook.com/Fuddi-107367687746824"> <img src={facebook} alt="Facebook icon"/></a>
                <a target="_blank" rel="noopener noreferrer"
                   href="https://www.linkedin.com/company/fuddiplace/"> <img src={linkedin}
                                                                             alt="Linkedin icon"/></a>
            </div>
            <div className="google">
                <img src={google} alt="Google"/>
            </div>

            <div className="contact">
                <img src={mail} alt="Email"/>
                <a href={"mailto:fuddi.kontakt@gmail.com"}>fuddi.kontakt@gmail.com</a>
            </div>

            <div className="copyright">© 2020
                <a href="https://wombadi.pl/"> <u>Wombadi</u></a>
                . All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
