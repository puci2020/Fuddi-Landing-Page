import React from 'react';
import styled from 'styled-components'
import facebook from '../../img/social_icons/facebook2.png'
import linkedin from '../../img/social_icons/linkedin2.png'
import github from '../../img/social_icons/github.png'
import {useTranslation} from "react-i18next";

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
  @media (max-width: 960px){
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 10px;
      }
  @media (max-width: 767px){
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      grid-gap: 10px;
      }
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
  max-width: 160px;
  img{
  height: 25px;
  width: auto;
  }
  //background-color: #18611c;
`;


const Team = () => {
    const {t} = useTranslation();
    return (
        <StyledWrapper id="team">
            <h2>{t("team.header")}</h2>
            <StyledGrid>
                <GridItem>
                    <div className="photo"></div>
                    <div className="desc">
                        <h4>John Doe</h4>
                        <h5>CEO</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"></div>
                    <div className="desc">
                        <h4>John Doe</h4>
                        <h5>COO</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"></div>
                    <div className="desc">
                        <h4>John Doe</h4>
                        <h5>UX/UI Designer</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"></div>
                    <div className="desc">
                        <h4>John Doe</h4>
                        <h5>Android Developer</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"></div>
                    <div className="desc">
                        <h4>John Doe</h4>
                        <h5>Frontend Developer</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"></div>
                    <div className="desc">
                        <h4>John Doe</h4>
                        <h5>Backend Developer</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
            </StyledGrid>
        </StyledWrapper>
    );
};

export default Team;
