import React from 'react';
import styled from 'styled-components'
import facebook from '../../img/social_icons/facebook2.png'
import linkedin from '../../img/social_icons/linkedin2.png'
import github from '../../img/social_icons/github.png'
import {useTranslation} from "react-i18next";
import face1 from '../../img/team/1.jpg'
import face2 from '../../img/team/2.jpg'
import face3 from '../../img/team/3.jpg'
import face4 from '../../img/team/adam_pucicki.jpeg'
import face5 from '../../img/team/5.jpg'
import face6 from '../../img/team/6.jpg'

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
  overflow: hidden;
  img{
  width: 100%;
  height: auto;
  
  }
  }
  .desc{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 50%;
  font-size: 1.1rem;
  color: #636363;
    h4{
      font-weight: 600;
    }
    h5{
    font-weight: 400;
    text-align: center;
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
  height: 22px;
  width: auto;
  }
`;


const Team = () => {
    const {t} = useTranslation();
    return (
        <StyledWrapper id="team">
            <h2>{t("team.header")}</h2>
            <StyledGrid>
                <GridItem>
                    <div className="photo">
                        <img src={face1} alt="Face1"/>
                    </div>
                    <div className="desc">
                        <h4>Rafał Szuwalski</h4>
                        <h5>CEO & Co-founder</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"><img src={face2} alt="Face1"/></div>
                    <div className="desc">
                        <h4>Krystian Szwedo</h4>
                        <h5>CTO & Co-founder</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"><img src={face3} alt="Face1"/></div>
                    <div className="desc">
                        <h4>Szymon Mrozowski</h4>
                        <h5>COO & Co-founder</h5>
                        <Social>
                            <img src={facebook} alt="Facebook icon"/>
                            <img src={linkedin} alt="Linkedin icon"/>
                            <img src={github} alt="Github icon"/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"><img src={face4} alt="Adam Pucicki"/></div>
                    <div className="desc">
                        <h4>Adam Pucicki</h4>
                        <h5>Frontend Specialist<br/>
                        & Co-founder</h5>
                        <Social>
                            <p/>
                            <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/adampucicki"> <img src={linkedin} alt="Linkedin icon"/></a>
                            <a target="_blank" rel="noopener noreferrer" href="http://github.com/puci2020"><img src={github} alt="Github icon"/></a>
                            <p/>
                        </Social>
                    </div>
                </GridItem>
                <GridItem>
                    <div className="photo"><img src={face5} alt="Face1"/></div>
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
                    <div className="photo"><img src={face6} alt="Face1"/></div>
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