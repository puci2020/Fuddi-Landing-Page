import React, {Component} from 'react';
import styled from 'styled-components'

import white from './../../img/white3.png';
import Header from "../Header/Header";
import app from "../../img/app2.png"
import {Parallax} from "react-scroll-parallax/cjs";
import Grid from '@material-ui/core/Grid';
import background from '../../img/strawberry.jpeg'

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow: hidden;

  .layer{
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -80px;
  
  ${({theme}) => theme.media.tablet}{
  bottom: 0;
  }
  }
  
  .caption{
  padding-left: 10%;
  padding-top: 35vh;
  display: flex;
  //align-items: center;
  justify-content: center;
  
  ${({theme}) => theme.media.tablet}{
    padding-top: 50%;
    padding-right: 10%;
  }
  }
  
  .phone{
  width: 300px;
  height: 2000px;
  overflow: hidden;
  @media(max-width: 1367px){
    
    width:200px
    
  }
  img{
  width: 100%;
  height: 100%;
  }
  
  
  ${({theme}) => theme.media.tablet}{
  display: none;
  }
  }
`;


class Home extends Component {

    render() {

        return (
            <HomeWrapper id="home">
                {/*<Parallax className="layer first_layer" y={[-10, 10]} tagOuter="figure">*/}
                {/*    <img src={field}/>*/}
                {/*</Parallax>*/}
                {/*<Parallax className="layer secound_layer" y={[70, -10]} tagOuter="figure">*/}
                {/*    <img className="white" src={white}/>*/}
                {/*</Parallax>*/}
                <Grid container>
                    <Grid item className="caption" xs={12} md={12}>
                        <Header/>
                    </Grid>
                    {/*<Grid item className="caption" xs={12} md={6}>*/}
                    {/*    <Parallax className="phone" y={[40, -90]} tagOuter="figure">*/}
                    {/*        <div className="item">*/}
                    {/*            <img src={app} alt="Fuddi app screen"/>*/}
                    {/*        </div>*/}
                    {/*    </Parallax>*/}
                    {/*</Grid>*/}
                </Grid>

                {/*< img*/}
                {/*    className="layer white"*/}
                {/*    src={white} alt="White mountains"*/}
                {/*/>*/}

            </HomeWrapper>
        );
    }
}

export default Home;
