import React, {Component} from 'react';
import "./Home.css"
import white from './../../img/white3.png';
import Header from "../Header/Header";
import app from "../../img/app.png"
import {Parallax} from "react-scroll-parallax/cjs";

class Home extends Component {

    render() {

        return (
            <div className="home">
                {/*<Parallax className="layer first_layer" y={[-10, 10]} tagOuter="figure">*/}
                {/*    <img src={field}/>*/}
                {/*</Parallax>*/}
                {/*<Parallax className="layer secound_layer" y={[70, -10]} tagOuter="figure">*/}
                {/*    <img className="white" src={white}/>*/}
                {/*</Parallax>*/}
                <Parallax className="phone" y={[40, -30]} tagOuter="figure">
                    <div className="item">
                        <img src={app}/>

                    </div>
                </Parallax>

                <Header/>

                <img className="layer white" src={white}/>
            </div>
        );
    }
}

export default Home;
