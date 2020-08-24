import React from 'react';
import "./Navlist.css"
import {useTranslation} from "react-i18next";
import {Link} from 'react-scroll';


function NavList() {
    const {t, i18n} = useTranslation();

    function changeLanguage() {
        const lg = document.getElementById('lang').value;
        i18n.changeLanguage(lg);

    }

    function changeLanguageBtn(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <div className="nav">
            <ul>
                <li>
                    <Link activeClass="a" to="home" spy={true} smooth={true} offset={-70}
                          duration={500}>{t("link1.1")}</Link>
                </li>
                <li>
                    <Link activeClass="a" to="about" spy={true} smooth={true} offset={-80}
                          duration={500}>{t("link3.1")}</Link>
                </li>
                <li>
                    <Link activeClass="a" to="roadmap" spy={true} smooth={true} offset={-80}
                          duration={500}>{t("link2.1")}</Link>
                </li>
                <li>
                    <Link activeClass="a" to="footer" spy={true} smooth={true} offset={0}
                          duration={500}>{t("link4.1")}</Link>
                </li>
                {/*<li><a href="#home">{t("link1.1")}</a></li>*/}
                {/*<li><a href="#about">{t('link3.1')}</a></li>*/}
                {/*<li><a href="#roadmap">{t('link2.1')}</a></li>*/}
                {/*<li><a href="#">{t('link4.1')}</a></li>*/}
                <li><select id="lang" onChange={() => changeLanguage()}>
                    <option value={'pl'}>PL</option>
                    <option value={'en'}>EN</option>
                </select></li>
                <ul id="lang2">
                    <button onClick={() => changeLanguageBtn('pl')}>PL</button>
                    <button onClick={() => changeLanguageBtn('en')}>EN</button>
                </ul>
            </ul>


        </div>
    );

}

export default NavList;

