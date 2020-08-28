import React from 'react';
import './Screens.css';
import {Parallax} from "react-scroll-parallax/cjs";
import screen1 from '../../img/screens/screen1.png'
import screen2 from '../../img/screens/screen2.png'
import screen3 from '../../img/screens/screen3.png'
import screen4 from '../../img/screens/screen4.png'



const Screens = () => {

    return (
        <div className="screens">
            <Parallax className="screen" y={[80, -50]} tagOuter="figure">
                <div className="screen_item1">
                    <img src={screen1} alt="Fuddi app screen"/>
                </div>
            </Parallax>
            <Parallax className="screen" y={[180, -130]} tagOuter="figure">
                <div className="screen_item2">
                    <img src={screen2} alt="Fuddi app screen"/>
                </div>
            </Parallax>
            <Parallax className="screen" y={[80, -50]} tagOuter="figure">
                <div className="screen_item3">
                    <img src={screen3} alt="Fuddi app screen"/>
                </div>
            </Parallax>
            <Parallax className="screen" y={[180, -130]} tagOuter="figure">
                <div className="screen_item4">
                    <img src={screen4} alt="Fuddi app screen"/>
                </div>
            </Parallax>

        </div>
    );
};

export default Screens;
