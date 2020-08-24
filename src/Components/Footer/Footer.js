import React from 'react';
import "./Footer.css"
import logo from "../../img/logo.png";
import facebook from '../../img/social_icons/facebook.png'
import instagram from '../../img/social_icons/instagram.png'
import linkedin from '../../img/social_icons/linkedin.png'

function Footer() {

    return (

        <footer>
            <div className="logo_item">
                <img src={logo}/>
            </div>
            <div className="logo_title_footer">Fuddi</div>
            <div className="social">
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={linkedin}/>
            </div>
            <div className="copyright">© 2020 Adam Pucicki. All rights reserved</div>

        </footer>
    );
}

export default Footer;
