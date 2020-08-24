import React, {Component} from 'react';
import "./Home.css"
import white from './../../img/white3.png';
import Header from "../Header/Header";
import app from "../../img/app.png"
import {Parallax} from "react-scroll-parallax/cjs";
import Grid from '@material-ui/core/Grid';

class Home extends Component {

    render() {

        return (
            <div className="home" id="home">
                {/*<Parallax className="layer first_layer" y={[-10, 10]} tagOuter="figure">*/}
                {/*    <img src={field}/>*/}
                {/*</Parallax>*/}
                {/*<Parallax className="layer secound_layer" y={[70, -10]} tagOuter="figure">*/}
                {/*    <img className="white" src={white}/>*/}
                {/*</Parallax>*/}
                <Grid container>
                    <Grid item className="caption" xs={12} md={6}>
                        <Header/>
                    </Grid>
                    <Grid item className="caption" xs={12} md={6}>
                        <Parallax className="phone" y={[160, -30]} tagOuter="figure">
                            <div className="item">
                                <img src={app}/>
                            </div>
                        </Parallax>
                    </Grid>
                </Grid>

                < img
                    className="layer white"
                    src={white}
                />

            </div>
        );
    }
}

export default Home;
