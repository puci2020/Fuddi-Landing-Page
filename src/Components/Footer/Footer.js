import React from 'react';
import "./Footer.css"
import logo from "../../img/logo.png";
import facebook from '../../img/social_icons/facebook.png'
import instagram from '../../img/social_icons/instagram.png'
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
                {/*<div className="logo_title_footer">Fuddi</div>*/}
            </div>
            <div className="social">
                <img src={facebook} alt="Facebook"/>
                <img src={instagram} alt="Instagram"/>
                <img src={linkedin} alt="Linkedin"/>
            </div>
            <div className="google">
                <img src={google} alt="Google"/>
            </div>

            <div className="contact">
                <img src={mail} alt="Email"/>
                <a href={"mailto:fuddi@gmail.com"}>fuddi@gmail.com</a>
            </div>

            <div className="copyright">© 2020
                <a href="https://wombadi.pl/"> <u>Wombadi</u></a>
                . All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
