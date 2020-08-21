import React from 'react';
import "./Home.css"
// import mountain from './../../img/par1_komp.png';
import first_hill from './../../img/par2_komp.png';
import secound_hill from './../../img/par3_komp.png';
import {Parallax} from "react-scroll-parallax";

function Home() {

    return (
        <div className="home">
            {/*<Parallax className="layer first_layer" y={[10, -10]} tagOuter="figure">*/}
            {/*    <img src={mountain}/>*/}
            {/*</Parallax>*/}
            <Parallax className="layer secound_layer" y={[60, -10]} tagOuter="figure">
                <img src={first_hill}/>
            </Parallax>
            <Parallax className="layer secound_layer" y={[70, -20]} tagOuter="figure">
                <img src={secound_hill}/>
            </Parallax>
        </div>
    );
}

export default Home;
