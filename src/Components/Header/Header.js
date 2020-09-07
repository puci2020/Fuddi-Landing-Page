import React from "react";
import styled from 'styled-components'
import {useTranslation} from "react-i18next";
import {Link} from "react-scroll";

const HeaderWrapper = styled.div`
  color: ${({theme}) => theme.colors.white};
  text-shadow: .3rem .3rem .3rem black;
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({theme}) => theme.colors.white};
  margin-top: 10px;
  font-size: ${({theme}) => theme.font.size.l};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.colors.gray};
  border: 2px solid ${({theme}) => theme.colors.white};
  outline: none;
  cursor: pointer;
  transition: background-color .2s, color .2s;
  border-radius: 50px;
  
  &:hover{
  color: ${({theme}) => theme.colors.white};
  background-color: transparent;
  }
`;



function Header() {

    const {t} = useTranslation();

    return(
        <HeaderWrapper>
            <H1>{t('home.header1')}</H1>
            <H1>{t('home.header2')}</H1>
            {/*<h3>{t('home.header3')}</h3>*/}
            <Link activeClass="a" to="about" spy={true} smooth={true} offset={-80}
                  duration={500}><Button>{t('home.button')}</Button></Link>
        </HeaderWrapper>
    );

};

export default Header;
