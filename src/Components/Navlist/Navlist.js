import React from 'react';
import "./Navlist.css"
import {useTranslation} from "react-i18next";
// import {Link} from "react-scroll";
import {HashLink as Link} from 'react-router-hash-link';
// import smoothscroll from 'smoothscroll-polyfill';






function NavList() {
    const {t, i18n} = useTranslation();

    function changeLanguage() {
        const lg = document.getElementById('lang').value;
        i18n.changeLanguage(lg);

    }

    function changeLanguageBtn(lang) {
        i18n.changeLanguage(lang);
    }


    // const scrolledY = window.scrollY;
    // if (scrolledY){
    //     window.scroll(0, scrolledY - 80);
    //     console.log("elo")
    // }


    return (

            <div className="nav">
                <ul>
                    <li>
                        <Link smooth to="/#home" scroll={el => el.scrollIntoView({behavior: 'smooth'})} > {t("link1.1")}</Link>
                    </li>
                    <li>
                        <Link smooth to="/#about" scroll={el => el.scrollIntoView({behavior: 'smooth'})}  >{t("link3.1")}</Link>
                    </li>
                    <li>
                        {/*<Link activeClass="a" to="/#team" spy={true} smooth={true} offset={-80}*/}
                        {/*      duration={500}>{t("link5.1")}</Link>*/}
                        <Link smooth to="/#team" scroll={el => el.scrollIntoView({behavior: 'smooth'})} >{t("link5.1")}</Link>
                    </li>
                    <li>
                        <Link smooth to="/#roadmap" scroll={el => el.scrollIntoView({behavior: 'smooth'})} >{t("link2.1")}</Link>
                    </li>
                    <li>
                        <Link smooth to="/#footer" scroll={el => el.scrollIntoView({behavior: 'smooth'})} >{t("link4.1")}</Link>
                    </li>
                    <li>
                        <Link smooth to={'/faq/#faq'} scroll={el => el.scrollIntoView({behavior: 'smooth'})}  top="0">FAQ</Link>
                    </li>

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

