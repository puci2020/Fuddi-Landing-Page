import React from 'react';
import styled from 'styled-components'
import {useTranslation} from "react-i18next";
import deliver from '../../img/box-z-logo-fuddi.jpg'

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    position: relative;
    overflow: hidden;
    background-color: white;
    font-size: ${({theme}) => theme.font.size.s};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100vh;
    grid-gap: 100px;
    padding: 0 10%;
   
    .one{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
 
    }
 .two{
 display: flex;
 align-items: center;
 justify-content: center;
 img{
 height: auto;
 width: 100%;
 max-width: 600px;
 
 }
 }
 ${({theme}) => theme.media.phone}{
    grid-template-columns: 1fr;
    .two{
    display: none;
    }
    }
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  color: black;
  letter-spacing: ${({theme}) => theme.font.space.s};
  
  ${({theme}) => theme.media.tablet}{
    margin-top: 140px;
  }
  ${({theme}) => theme.media.phone}{
    margin-top: 60px;
  }
`;


const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const Text = styled.div`
  width: 100%;
  height: auto;
  padding: 60px 20px 60px 0;
  color: black;
  letter-spacing: ${({theme}) => theme.font.space.s};
  
  overflow: hidden;
  font-size: ${({theme}) => theme.font.size.m};
  text-align: left;
  line-height: 30px;

  
  ${({theme}) => theme.media.tablet}{
    font-size: ${({theme}) => theme.font.size.s};
    padding: 20px 20px 20px 0;
  }
  ${({theme}) => theme.media.phone}{
    font-size: ${({theme}) => theme.font.size.xxs};
    padding: 5px;
  }
`;

const About2 = () => {

    const {t} = useTranslation();

    return (

        <Wrapper id="about">
                {/*<H2>{t('benefits.headers.header1')}</H2>*/}


                    <div className="one">
                        <H2>Zamów i wesprzyj <br/>Polskiego producenta</H2>
                        <Box>

                            <Text>Wybierając produkt w naszej aplikacji uruchamiasz ogromną machinę, która sprawi, że zamówienie dostaniesz na czas i nie straci ono na jakości.</Text>
                            <Text>Producent przygotuje dla Ciebie najlepsze produkty, dostawca je odbierze i dostaczy prosto pod Twoje drzwi.</Text>
                        </Box>
                    </div>
                    <div className="two">

                            <img src={deliver} alt="Delivery Fuddi"/>

                    </div>


        </Wrapper>
    );
};

export default About2;
