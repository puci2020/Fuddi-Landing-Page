import React from 'react';
import styled from 'styled-components'
import facebook from '../../img/social_icons/facebook2.png'
import linkedin from '../../img/social_icons/linkedin2.png'
import github from '../../img/social_icons/github.png'
import {useTranslation} from "react-i18next";
import face1 from '../../img/team/rafal_szuwalski.jpeg'
import face2 from '../../img/team/krystian_szwedo.jpeg'
import face3 from '../../img/team/szymon_mrozowski.jpeg'
import face4 from '../../img/team/adam_pucicki.jpeg'
import face5 from '../../img/team/paulina_talarowska.jpeg'


const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
  padding-bottom: 20px;
  

`;

const H2 = styled.h2`
  color: black;
  text-shadow: none;
  margin: 40px 20px 40px 10%;
`;


const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 100px;
  padding: 0 10%;
  
  .first{
  grid-column: 1/3;
  grid-row: 1;
  }
  
  .second{
  grid-column: 3/5;
  grid-row: 1;
  }
  
  .third{
  grid-column: 5/7;
  grid-row: 1;
  }
  
  .four{
    grid-column: 1/4;
    grid-row: 2;
  }
  
  .five{
  grid-column: 4/7;
  grid-row: 2;
  }
  
  ${({theme}) => theme.media.tablet}{
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-gap: 10px;
      
      .first{
  grid-column: 1/4;
  grid-row: 1;
  }
  
  .second{
  grid-column: 4/7;
  grid-row: 1;
  }
  
  .third{
  grid-column: 1/4;
  grid-row: 2;
  }
  .four{
    grid-column: 4/7;
    grid-row: 2;
  }
  
  .five{
  grid-column: 1/7;
  grid-row: 3;
  }
      
      }
   ${({theme}) => theme.media.phone}{
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
      grid-gap: 10px;
      
          .first{
  grid-column: 1/7;
  grid-row: 1;
  }
  
  .second{
  grid-column: 1/7;
  grid-row: 2;
  }
  
  .third{
  grid-column: 1/7;
  grid-row: 3;
  }
  .four{
    grid-column: 1/7;
    grid-row: 4;
  }
  
  .five{
  grid-column: 1/7;
  grid-row: 5;
  }
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
  overflow: hidden;
  
  
  .photo{
  width: 168px;
  height: 168px;
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
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.colors.grayLight};
    h4{
      font-weight:  ${({theme}) => theme.font.weight.plusRegular};
    }
    h5{
    font-weight: ${({theme}) => theme.font.weight.regular};
    font-size: ${({theme}) => theme.font.size.xs};
    text-align: center;
    }
  }
  
  
`;
const Social = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
            <H2>{t("team.header")}</H2>
            <StyledGrid>
                <GridItem className="first" data-aos="flip-left">
                    <div className="photo">
                        <img src={face1} alt="Radał Szuwalski"/>
                    </div>
                    <div className="desc">
                        <h4>Rafał Szuwalski</h4>
                        <h5>CEO & Co-founder</h5>
                        <Social>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/rafal-szuwalski/"> <img src={linkedin}
                                                                                         alt="Linkedin icon"/></a>
                        </Social>
                    </div>
                </GridItem>
                <GridItem className="second" data-aos="flip-left">
                    <div className="photo"><img src={face2} alt="Krystian Szwedo"/></div>
                    <div className="desc">
                        <h4>Krystian Szwedo</h4>
                        <h5>CTO & Co-founder</h5>
                        <Social>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/krystian-szwedo"> <img src={linkedin}
                                                                                        alt="Linkedin icon"/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/S7f3dz14g1"><img
                                src={github} alt="Github icon"/></a>
                        </Social>
                    </div>
                </GridItem>
                <GridItem className="third" data-aos="flip-left">
                    <div className="photo"><img src={face3} alt="Szymon Mrozowski"/></div>
                    <div className="desc">
                        <h4>Szymon Mrozowski</h4>
                        <h5>COO & Co-founder</h5>
                        <Social>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/szymon-mrozowski"> <img src={linkedin}
                                                                                         alt="Linkedin icon"/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mrozowski"><img
                                src={github} alt="Github icon"/></a>
                        </Social>
                    </div>
                </GridItem>

                {/*<GridRow>*/}
                <GridItem className="four" data-aos="flip-left">
                    <div className="photo"><img src={face4} alt="Adam Pucicki"/></div>
                    <div className="desc">
                        <h4>Adam Pucicki</h4>
                        <h5>Frontend Specialist<br/>
                            & Co-founder</h5>
                        <Social>
                            <a target="_blank" rel="noopener noreferrer" href="http://linkedin.com/in/adampucicki">
                                <img src={linkedin} alt="Linkedin icon"/></a>
                            <a target="_blank" rel="noopener noreferrer" href="http://github.com/puci2020"><img
                                src={github} alt="Github icon"/></a>
                        </Social>
                    </div>
                </GridItem>
                {/*<GridItem>*/}
                {/*    <div className="photo"><img src={face6} alt="Face1"/></div>*/}
                {/*    <div className="desc">*/}
                {/*        <h4>John Doe</h4>*/}
                {/*        <h5>Frontend Developer</h5>*/}
                {/*        <Social>*/}
                {/*            <img src={facebook} alt="Facebook icon"/>*/}
                {/*            <img src={linkedin} alt="Linkedin icon"/>*/}
                {/*            <img src={github} alt="Github icon"/>*/}
                {/*        </Social>*/}
                {/*    </div>*/}
                {/*</GridItem>*/}
                <GridItem className="five" data-aos="flip-left">
                    <div className="photo"><img src={face5} alt="Paulina Talarowska"/></div>
                    <div className="desc">
                        <h4>Paulina Talarowska</h4>
                        <h5>KAM</h5>
                        <Social>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/paulina.talarowska.12">
                                <img src={facebook} alt="Facebook icon"/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paulina-talarowska/">
                                <img src={linkedin} alt="Linkedin icon"/></a>
                        </Social>
                    </div>
                </GridItem>
                {/*</GridRow>*/}
            </StyledGrid>
        </StyledWrapper>
    );
};

export default Team;
