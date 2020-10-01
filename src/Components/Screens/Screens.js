import React from 'react';
import styled from 'styled-components'
import {Parallax} from "react-scroll-parallax/cjs";
import screen1 from '../../img/screens/screen7.jpeg'
import screen2 from '../../img/screens/screen2.jpeg'
import screen3 from '../../img/screens/screen5.jpeg'
import screen4 from '../../img/screens/screen3.jpeg'

const ScreensWrapper = styled.div`
  width: 100vw;
  height: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  
  .screen{
      overflow: hidden;
      height: 100%;
      width: auto;
      margin-right: 20px;
      
      img{
      width: 100%;
      height: auto;
      }
  }
`

const Screens = () => {

    return (
        <ScreensWrapper>
            <Parallax className="screen" y={[100, -30]} tagOuter="figure">
                <div className="screen_item1">
                    <img src={screen1} alt="Fuddi app screen"/>
                </div>
            </Parallax>
            <Parallax className="screen" y={[200, -90]} tagOuter="figure">
                <div className="screen_item2">
                    <img src={screen2} alt="Fuddi app screen"/>
                </div>
            </Parallax>
            <Parallax className="screen" y={[100, -30]} tagOuter="figure">
                <div className="screen_item3">
                    <img src={screen3} alt="Fuddi app screen"/>
                </div>
            </Parallax>
            <Parallax className="screen" y={[200, -90]} tagOuter="figure">
                <div className="screen_item4">
                    <img src={screen4} alt="Fuddi app screen"/>
                </div>
            </Parallax>

        </ScreensWrapper>
    );
};

export default Screens;
