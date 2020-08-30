import React from 'react';
import styled from 'styled-components'
import linkedin from '../../img/social_icons/linkedin.png'

const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
  padding-bottom: 20px;
  
  
  h2{
  color: black;
  text-shadow: none;
  }
`;

const StyledGrid = styled.div`
width: 100%;
//height: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 100px;
  padding: 0 10%;
`;

const GridItem = styled.div`
  width: 100%;
  height: 350px;
  //background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  
  .photo{
  width: 168px;
  height: 168px;
  background-color: #18611c;
  border-radius: 50%;
  }
  .desc{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 50%;
  //background-color: #FDFF00;
  font-size: 1.1rem;
  color: #636363;
    h4{
      font-weight: 600;
    }
    h5{
    font-weight: 450;
    }
  }
`;
const Social = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  img{
  height: 25px;
  width: auto;
  }
  //background-color: #18611c;
`;


const Team = () => {
    return (
        <StyledWrapper>
            <h2>Team</h2>
            <StyledGrid>
<GridItem>
    <div className="photo"></div>
    <div className="desc">
        <h4>John Doe</h4>
        <h5>CEO</h5>
        <Social>
            <img src={linkedin} alt="Linkedin icon"/>
            <img src={linkedin} alt="Linkedin icon"/>
            <img src={linkedin} alt="Linkedin icon"/>
        </Social>
    </div>
</GridItem>
<GridItem/>
<GridItem/>
<GridItem/>
<GridItem/>
<GridItem/>
            </StyledGrid>
        </StyledWrapper>
    );
};

export default Team;
