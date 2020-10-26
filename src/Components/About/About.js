import React from 'react';
import styled from 'styled-components'
import {useTranslation} from "react-i18next";
import background from '../../img/vegetables.jpeg'
import backgroundTablet from '../../img/vegetables-tablet.jpeg'
import backgroundPhone from '../../img/vegetables-phone.jpeg'

const Wrapper = styled.div`
    width: 100vw;
    height: auto;
    position: relative;
    overflow: hidden;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    background-attachment: fixed;
    
    font-size: ${({theme}) => theme.font.size.s};

    .shadow{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,50%);
  }
  
  ${({theme}) => theme.media.tablet}{
     background-image: url(${backgroundTablet});
  }
  ${({theme}) => theme.media.phone}{
     background-image: url(${backgroundPhone});
  }
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 25vh 20px 40px 10%;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  
  ${({theme}) => theme.media.tablet}{
    margin-top: 140px;
  }
  ${({theme}) => theme.media.phone}{
    margin-top: 60px;
  }
`;

const Row = styled.div`
    display: grid;
    grid-gap: 60px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
    margin: 0;
    padding: 0 10%;
    justify-content: center;
    
    
    .one{
      grid-column: 1/4;
      grid-row: 1;
    }
    .two{
      grid-column: 4/7;
      grid-row: 1;}
      
      @media (max-width: 960px){
      grid-template-rows: 5fr;
      grid-gap: 10px;
      
      .one{
        grid-row: 1;
        grid-column: 1/7;
}
      .two{
        grid-row: 2;
        grid-column: 1/7;
      }
`;

const Box = styled.div`
  width: 100%;
  height: ${({first, sec}) => first ? '320px' : sec ? '340px' : 'auto'};
  display: flex;
  align-items: center;
  flex-direction: ${({sec}) => sec ? 'column' : 'row'};
`;


const Text = styled.div`
  width: ${(props) => props.small ? '80%' : 'auto'};
  height: ${(props) => props.small ? '60%' : 'auto'};
  padding: 10px 20px 10px 0;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  
  overflow: hidden;
  font-size: ${({theme}) => theme.font.size.m};
  text-align: ${(props) => props.small ? 'center' : 'left'};
  line-height: 30px;
  h4{
  padding: ${(props) => props.small ? '10px 0 20px' : 'auto'};
  }
  
  ${({theme}) => theme.media.tablet}{
    font-size: ${({theme}) => theme.font.size.s};
  }
  ${({theme}) => theme.media.phone}{
    font-size: ${({theme}) => theme.font.size.xxs};
    padding: 5px;
  }
`;

const About = () => {

    const {t} = useTranslation();

    return (

        <Wrapper id="about">
            <div className="shadow">
            <H2>{t('benefits.headers.header1')}</H2>
            <Row>
                <div className="one">
                    <Box first>
                        <Text>{t('benefits.lgBox.box1')}</Text>
                    </Box>
                </div>
                <div className="two">
                    <Box first>
                        <Text>{t('benefits.lgBox.box2')}</Text>
                    </Box>
                </div>
            </Row>
            </div>
        </Wrapper>
    );
};

export default About;
