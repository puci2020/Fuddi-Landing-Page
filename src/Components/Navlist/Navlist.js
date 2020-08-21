import React from 'react';
import "./Navlist.css"
import {useTranslation} from "react-i18next";



function NavList()
{
    const {t, i18n} = useTranslation();

    function changeLanguage() {
        const lg = document.getElementById('lang').value;
        i18n.changeLanguage(lg);

    }
      function changeLanguageBtn(lang){
        i18n.changeLanguage(lang);
    }

    return (
        <div className="nav">
            <ul>
                <li><a href="#">{t("link1.1")}</a></li>
                <li><a href="#">{t('link2.1')}</a></li>
                <li><a href="#">{t('link3.1')}</a></li>
                <li><a href="#">{t('link4.1')}</a></li>
                <li><select id="lang" onChange={()=>changeLanguage()}>
                    <option value={'pl'}>Polski</option>
                    <option value={'en'}>English</option>
                </select></li>
                <ul id="lang2">
                    <button onClick={()=>changeLanguageBtn('pl')}>Polski</button>
                    <button onClick={()=>changeLanguageBtn('en')}>English</button>
                </ul>
            </ul>


        </div>
    );

}

export default NavList;

