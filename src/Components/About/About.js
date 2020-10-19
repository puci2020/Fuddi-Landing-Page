import React from 'react';
import styled from 'styled-components'
import shoppingcart from '../../img/icons/shopping-cart.svg'
import vegetable from '../../img/icons/vegetable.svg'
import user from '../../img/icons/user.svg'
import farmer from '../../img/icons/farmer.svg'
import delivery from '../../img/icons/delivery.svg'
import {useTranslation} from "react-i18next";
import back from '../../img/vege.jpg'

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
    //padding-bottom: 20px;
    font-size: ${({theme}) => theme.font.size.s};
    //@media (max-width: 960px){
    // .about{
    //    height: auto;
    //  }
    //}
    .shadow{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,50%);
  }

`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 25vh 20px 40px 10%;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  //text-shadow: .2rem .2rem .1rem black;
  
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
  //border-radius: 20px;
  //background-color: ${({theme}) => theme.colors.box};
  width: 100%;
  height: ${({first, sec}) => first ? '320px' : sec ? '340px' : 'auto'};
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
  width: ${(props) => props.small ? '80%' : 'auto'};
  height: ${(props) => props.small ? '60%' : 'auto'};
  padding: 10px 20px 10px 10px;
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
            {/*<H2>{t('benefits.headers.header1')}</H2>*/}
            <H2>Wartości jakie cenimy</H2>
            <Row>
                <div className="one">
                    <Box first>
                        {/*<Icon top>*/}
                        {/*    <img src={shoppingcart} alt="Shopping cart"/>*/}
                        {/*</Icon>*/}
                        {/*<Text>{t('benefits.lgBox.box1')}*/}
                        {/*</Text>*/}
                        <Text>Oferowane produkty będą najwyższej jakości w przystępnej cenie. Zależy nam na pokazaniu że wyroby wytyarzane przy użyciu rąk są nie tlko samczaniejsze ale mają w sobie cząśtę swojego twórcy lub w przypdaku owoców i warzyw akcent osoby która o nich dbała.
                        </Text>
                    </Box>
                </div>
                <div className="two">
                    <Box first>
                        {/*<Icon top>*/}
                        {/*    <img src={vegetable} alt="Vegetables"/>*/}
                        {/*</Icon>*/}
                        {/*<Text>{t('benefits.lgBox.box2')}*/}
                        {/*</Text>*/}
                        <Text>Każdy rolnik i producent będzię mogł współtworzyć razem z nami platformę poprzez sprzedaż produktów, którę bedą nosiły miano premium.
                            Dzięki temu posiłki podawane w restauracjach jak i te w domowym zaciszu będą jeszcze smaczniejsze i zdrowsze.
                        </Text>
                    </Box>
                </div>
            </Row>
            {/*<H2>{t('benefits.headers.header2')}</H2>*/}
            {/*<Row>*/}
            {/*    <div className="three">*/}
            {/*        <Box sec>*/}
            {/*            <Icon bottom>*/}
            {/*                <img src={user} alt="User icon"/>*/}
            {/*            </Icon>*/}
            {/*            <Text small>*/}
            {/*                <h4>{t('benefits.smBox.box1.header')}</h4>*/}
            {/*                <p>{t('benefits.smBox.box1.content')}</p>*/}
            {/*            </Text>*/}
            {/*        </Box>*/}
            {/*    </div>*/}
            {/*    <div className="four">*/}
            {/*        <Box sec>*/}
            {/*            <Icon bottom>*/}
            {/*                <img src={farmer} alt="Farmer icon"/>*/}
            {/*            </Icon>*/}
            {/*            <Text small>*/}
            {/*                <h4>{t('benefits.smBox.box2.header')}</h4>*/}
            {/*                <p>{t('benefits.smBox.box2.content')}</p>*/}
            {/*            </Text>*/}
            {/*        </Box>*/}
            {/*    </div>*/}
            {/*    <div className="five">*/}
            {/*        <Box sec>*/}
            {/*            <Icon bottom>*/}
            {/*                <img src={delivery} alt="Truck icon"/>*/}
            {/*            </Icon>*/}
            {/*            <Text small>*/}
            {/*                <h4>{t('benefits.smBox.box3.header')}</h4>*/}
            {/*                <p>{t('benefits.smBox.box3.content')}</p>*/}
            {/*            </Text>*/}
            {/*        </Box>*/}
            {/*    </div>*/}
            {/*</Row>*/}
            </div>
        </Wrapper>
    );
};

export default About;
