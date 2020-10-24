import React from 'react';
import styled from 'styled-components'
import {useTranslation} from "react-i18next";
import {HashLink as Link} from 'react-router-hash-link';




const NavWrapper = styled.div`
  position: absolute;
  width: auto;
  right: 10%;
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  
  li{
  padding: 30px 10px;
  
    a{
      text-decoration: none;
      color: ${({theme}) => theme.colors.white};
      
      &:hover{
        color: ${({theme}) => theme.colors.orange};
        cursor: pointer;
      }
    }
  }
  
  #lang{
  margin-left: 30px;
  background: transparent;
  outline: none;
  border: none;
  color: ${({theme}) => theme.colors.white};
  
  option{
  color: black;
  }
  }
  
  #lang2{
  display: none;
  }
  
   @media(max-width: 1350px){
    display: none;
    
    #lang{
    display: none;
    }
    
    #lang2{
    display: block;
    }
  }
`;

const Select = styled.select`
  margin-left: 30px;
  background: transparent;
  outline: none;
  border: none;
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.font.size.s};
  
  option{
  color: black;
  }
  
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.colors.white};
  padding: 10px;
  cursor: pointer;
  outline: none;
`;

function NavList() {
    const {t, i18n} = useTranslation();

    function changeLanguage() {
        const lg = document.getElementById('lang').value;
        i18n.changeLanguage(lg);

    }

    function changeLanguageBtn(lang) {
        i18n.changeLanguage(lang);
    }

    return (

        <NavWrapper>
            <UL>
                <li>
                    <Link smooth to="/#home"
                          scroll={el => el.scrollIntoView({behavior: 'smooth'})}> {t("link1.1")}</Link>
                </li>
                <li>
                    <Link smooth to={'/contact'}
                          scroll={el => el.scrollIntoView({behavior: 'smooth'})}>{t("link4.1")}</Link>
                </li>
                <li>
                    <Link smooth to={'/crowdfunding'} scroll={el => el.scrollIntoView({behavior: 'smooth'})}
                          top="0">Crowdfunding</Link>
                </li>
                <li>
                    <Link smooth to={'/faq/#faq'} scroll={el => el.scrollIntoView({behavior: 'smooth'})}
                          top="0">FAQ</Link>
                </li>
                <li>
                    <Link smooth to="#" scroll={el => el.scrollIntoView({behavior: 'smooth'})}
                          top="0">Blog</Link>
                </li>
                <li>
                    <Link smooth to="#" scroll={el => el.scrollIntoView({behavior: 'smooth'})}
                          top="0">{t("link6.1")}</Link>
                </li>

                <li><Select id="lang" onChange={() => changeLanguage()}>
                    <option value={'pl'}>PL</option>
                    <option value={'en'}>EN</option>
                </Select></li>
                <ul id="lang2">
                    <Button onClick={() => changeLanguageBtn('pl')}>PL</Button>
                    <Button onClick={() => changeLanguageBtn('en')}>EN</Button>
                </ul>
            </UL>


        </NavWrapper>

    );

}

export default NavList;

