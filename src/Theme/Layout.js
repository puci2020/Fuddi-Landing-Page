import React from 'react'
import GlobalStyle from "./GlobalStyles"
import styled from 'styled-components'
import {ThemeProvider} from 'styled-components'
import {theme} from "./Theme";
import {useTranslation} from "react-i18next";

const Button = styled.button`
  width: 220px;
  height: 50px;
  background-color: ${({theme}) => theme.colors.green};
  color: ${({theme}) => theme.colors.white};
  border-radius: 25px;
  border: 1px solid darkolivegreen;
  //border: none;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  font: inherit;
  font-weight: ${({theme}) => theme.font.weight.plusRegular};
  transition: .2s;
  z-index: 1;
  
  &:hover{
    background-color: ${({theme}) => theme.colors.greenTransparent};
    color: ${({theme}) => theme.colors.orange};
    border: 1px solid lightgrey;
  }
  
  ${({theme}) => theme.media.phone}{
    bottom: 20px;
    right: 20px;
    
  }
`

const Layout = ({children}) => {
    const {t} = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
            <Button>{t('newsletter.button')}</Button>
        </ThemeProvider>
    );
};

export default Layout;
