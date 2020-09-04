import React from 'react';
import styled from 'styled-components'
import shoppingcart from '../../img/icons/shoppingcart.svg'
import vegetable from '../../img/icons/vegetable.svg'
import user from '../../img/icons/user.png'
import farmer from '../../img/icons/farmer.png'
import delivery from '../../img/icons/delivery.png'
import {useTranslation} from "react-i18next";
import back from '../../img/aboutBG.jpeg'

const Wrapper = styled.div`
    width: 100vw;
    height: auto;
    position: relative;
    overflow: hidden;
    background-image: url(${back});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    background-attachment: fixed;
    padding-bottom: 20px;
    font-size: ${({theme}) => theme.font.size.m};
    //@media (max-width: 960px){
    // .about{
    //    height: auto;
    //  }
    //}
    
    h2{
    font-size: ${({theme}) => theme.font.size.l};
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

    .three
     { grid-column: 1/3;
      grid-row: 1;}

    .four{
      grid-column: 3/5;
      grid-row: 1;}

    .five{
      grid-column: 5/7;
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
      .three{
        grid-row: 3;
        grid-column: 1/7;
}
      .four{
        grid-row: 4;
        grid-column: 1/7;
}
      .five{
        grid-row: 5;
        grid-column: 1/7;
        margin-bottom: 10px;
      }
      }
`;

const Box = styled.div`
  border-radius: 20px;
  background-color: rgba(43, 57, 71, 85%);
  width: 100%;
  height: ${({first,  sec}) => first ? '320px' : sec ? '340px' : 'auto'};
  display: flex;
  align-items: center;
  flex-direction: ${({sec}) => sec ? 'column' : 'row'};
`;

const Icon = styled.div`
      background-color: rgba(24, 97, 28, 70%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: ${(props) => props.top ? '168px' : props.bottom ? '100px' : 'auto'};
      height: ${(props) => props.top ? '168px' : props.bottom ? '100px' : 'auto'};
      margin: ${(props) => props.top ? 'auto 20px' : props.bottom ? '5% 0 0 0' : 'auto'};
      img{
      height: auto;
      width: ${(props) => props.top ? '70%' : props.bottom ? '60%' : 'default'};
      }
      @media (max-width: 960px){
        width: 100px;
        height: 100px;
      }
`;

const Text = styled.div`
  width: ${(props) => props.small ? '80%' : '60%'};
  height: ${(props) => props.small ? '60%' : 'auto'};
  padding: 10px 20px 10px 10px;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  
  overflow: hidden;
  text-align: ${(props) => props.small ? 'center' : 'left'};
  h4{
  padding: ${(props) => props.small ? '10px 0 20px' : 'auto'};
  }
  
  ${({theme}) => theme.media.tablet}{
    font-size: ${({theme}) => theme.font.size.s};
  }
  ${({theme}) => theme.media.phone}{
    font-size: ${({theme}) => theme.font.size.xs};
    padding: 5px;
  }
`;

const About = () => {

    const {t} = useTranslation();

    return (

        <Wrapper id="about">
                <h2>{t('benefits.headers.header1')}</h2>
                <Row>
                    <div className="one">
                        <Box first>
                            <Icon top>
                                <img src={shoppingcart} alt="Shopping cart"/>
                            </Icon>
                            <Text>{t('benefits.lgBox.box1')}
                            </Text>
                        </Box>
                    </div>
                    <div className="two">
                        <Box first>
                            <Icon top>
                                <img src={vegetable} alt="Vegetables"/>
                            </Icon>
                            <Text>{t('benefits.lgBox.box2')}
                            </Text>
                        </Box>
                    </div>
                </Row>
                <h2>{t('benefits.headers.header2')}</h2>
                <Row>
                    <div className="three">
                        <Box sec>
                            <Icon bottom>
                                <img src={user} alt="User icon"/>
                            </Icon>
                            <Text small>
                                <h4>{t('benefits.smBox.box1.header')}</h4>
                                <p>{t('benefits.smBox.box1.content')}</p>
                            </Text>
                        </Box>
                    </div>
                    <div className="four">
                        <Box sec>
                            <Icon bottom>
                                <img src={farmer} alt="Farmer icon"/>
                            </Icon>
                            <Text small>
                                <h4>{t('benefits.smBox.box2.header')}</h4>
                                <p>{t('benefits.smBox.box2.content')}</p>
                            </Text>
                        </Box>
                    </div>
                    <div className="five">
                        <Box sec>
                            <Icon bottom>
                                <img src={delivery} alt="Truck icon"/>
                            </Icon>
                            <Text small>
                                <h4>{t('benefits.smBox.box3.header')}</h4>
                                <p>{t('benefits.smBox.box3.content')}</p>
                            </Text>
                        </Box>
                    </div>
                </Row>
        </Wrapper>
    );
};

export default About;
