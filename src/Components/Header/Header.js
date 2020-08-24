import React from "react";
import "./Header.css";
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";

function Header() {

    const {t} = useTranslation();

    return(
        <div className="title">
            <h1>{t('home.header1')}</h1>
            <h1>{t('home.header2')}</h1>
            {/*<h3>{t('home.header3')}</h3>*/}
            <Link activeClass="a" to="about" spy={true} smooth={true} offset={-100}
                  duration={500}><button>{t('home.button')}</button></Link>
        </div>
    );

};

export default Header;
