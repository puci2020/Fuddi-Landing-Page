import React from "react";
import "./Header.css";
import {useTranslation} from "react-i18next";

function Header() {

    const {t} = useTranslation();

    return(
        <div className="title">
            <h1>{t('home.header1')}</h1>
            <h1>{t('home.header2')}</h1>
            {/*<h3>{t('home.header3')}</h3>*/}
            <a href="#about"><button>{t('home.button')}</button></a>
        </div>
    );

};

export default Header;
