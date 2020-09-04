import React from 'react';
import styled from 'styled-components'
// import "./Roadmap.css"
import roadmap from '../../img/roadmap.jpeg';

const RoadWrapper = styled.div`
  background: linear-gradient(#1d1d37, #3f3362);
  width: 100vw;
  height: auto;
`;

const Map = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
      img{
      width: 70%;
      height: auto;
      
          ${({theme}) => theme.media.tablet}{
            width: 100%;
          }
      }
  }
`;

const H2 = styled.h2`
  color: ${({theme}) => theme.colors.white};
  text-shadow: .2rem .2rem .1rem black;
  margin: 40px 20px 40px 10%;
`;

function Roadmap() {
    return (
        <RoadWrapper id="roadmap">
            {/*<div className="space"></div>*/}
            <H2> Road Map</H2>
            <Map>
                <img src={roadmap} alt="Road Map"/>
            </Map>
        </RoadWrapper>
    );
}

export default Roadmap;
