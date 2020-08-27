import React from 'react';
import "./About.css"
import shoppingcart from '../../img/icons/shoppingcart.svg'
import vegetable from '../../img/icons/vegetable.svg'
import user from '../../img/icons/user.png'
import farmer from '../../img/icons/farmer.png'
import delivery from '../../img/icons/delivery.png'
import {useTranslation} from "react-i18next";


const About = () => {

    const {t} = useTranslation();

    return (

        <div className="about" id="about">
            <div className="background">
                <h2>{t('benefits.headers.header1')}</h2>
                <div className="row">
                    <div className="item one">
                        <div className="box first">
                            <div className="icon top">
                                <img src={shoppingcart} alt="Shopping cart"/>
                            </div>
                            <div className="text">{t('benefits.lgBox.box1')}
                            </div>
                        </div>
                    </div>
                    <div className="item two">
                        <div className="box first">
                            <div className="icon top">
                                <img src={vegetable} alt="Shopping cart"/>
                            </div>
                            <div className="text">{t('benefits.lgBox.box2')}
                            </div>
                        </div>
                    </div>
                </div>
                <h2>{t('benefits.headers.header2')}</h2>
                <div className="row">
                    <div className="item three">
                        <div className="box sec">
                            <div className="icon bottom">
                                <img src={user} alt="Shopping cart"/>
                            </div>
                            <div className="text small">
                                <h4>{t('benefits.smBox.box1.header')}</h4>
                                <p>{t('benefits.smBox.box1.content')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="item four">
                        <div className="box sec">
                            <div className="icon bottom">
                                <img src={farmer} alt="Shopping cart"/>
                            </div>
                            <div className="text small">
                                <h4>{t('benefits.smBox.box2.header')}</h4>
                                <p>{t('benefits.smBox.box2.content')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="item five">
                        <div className="box sec">
                            <div className="icon bottom">
                                <img src={delivery} alt="Shopping cart"/>
                            </div>
                            <div className="text small">
                                <h4>{t('benefits.smBox.box3.header')}</h4>
                                <p>{t('benefits.smBox.box3.content')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
