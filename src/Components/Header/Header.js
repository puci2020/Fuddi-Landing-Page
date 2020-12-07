import React from "react";
import styled from 'styled-components'
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";

const HeaderWrapper = styled.div`
  color: ${({theme}) => theme.colors.white};
  //text-shadow: .3rem .3rem .3rem black;
  width: 100%;
`;

const H1 = styled.h1`
  font-size: ${({theme}) => theme.font.size.xl};
  font-weight: ${({theme}) =>theme.font.weight.bold};
  letter-spacing: ${({theme}) => theme.font.space.m};
  padding-bottom: 15px;
  
  ${({theme}) => theme.media.phone}{
  font-size: ${({theme}) => theme.font.size.l};
  }
`;

const H3 = styled.h3`
  font-size: ${({theme}) => theme.font.size.m};
  font-weight: ${({theme}) =>theme.font.weight.regular};
  letter-spacing: ${({theme}) => theme.font.space.m};
  padding-bottom: 15px;
  
  ${({theme}) => theme.media.phone}{
  font-size: ${({theme}) => theme.font.size.l};
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: ${({theme}) => theme.colors.green};
  //margin-top: 15px;
  font-size: ${({theme}) => theme.font.size.m};
  font-weight: ${({theme}) => theme.font.weight.regular};
  color: ${({theme}) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.green};
  outline: none;
  cursor: pointer;
  transition: background-color .2s, border .2s;
  border-radius: 50px;
  
  &:hover{
  //color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.greenDark};
  border: 2px solid ${({theme}) => theme.colors.greenDark};;
  }
`;



const Header = () => {

    const {t} = useTranslation();

    return(
        <HeaderWrapper>
            <H1 data-aos="zoom-in-left">{t('home.header1')}</H1>
            <H3 data-aos="zoom-in-left" data-aos-delay="200">{t('home.header2')}</H3>
            {/*<h3>{t('home.header3')}</h3>*/}
            <Link activeClass="a" to="about" spy={true} smooth={true} offset={-80}
                  duration={500}><Button data-aos="zoom-in-left" data-aos-delay="400">{t('home.button')}</Button></Link>
        </HeaderWrapper>
    );

};

export default Header;
