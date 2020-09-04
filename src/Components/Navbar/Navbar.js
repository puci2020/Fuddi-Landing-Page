import React, {useState} from 'react';
import styled from 'styled-components'
import NavList from "../Navlist/Navlist";
import Burger from "../Burger/Burger";
import logo from "../../img/logo.png"

const NavbarWrapper = styled.header`
  
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${({scroll}) => scroll ? '80px' : '100px'};
  padding: 10px 85px 10px 10%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.scroll ? props.theme.colors.greenTransparent : 'transparent'};
  color: ${({theme}) => theme.colors.white};
  font-size: ${(props) => props.scroll ? props.theme.font.size.xs : props.theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.regular};
  letter-spacing: ${({theme}) => theme.font.space.s};
  transition: background-color 1s, height 1s, font-size 1s;
  z-index: 2;
  
  .scroll{
  background-color: ${({theme}) => theme.colors.greenTransparent};
  height: 80px;
  font-size: ${({theme}) => theme.font.size.m};
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  float: left;
  height: 70%;
  overflow:hidden;
  
  img{
  height: 90%;
  }
`;

const Navbar = props => {
    const [navbar, setNavbar]=useState(false);

    const changeBackground = () =>{
        if (window.scrollY>=80)
            setNavbar(true);
        else
            setNavbar(false);
    };

    window.addEventListener('scroll', changeBackground);

    return (

        <NavbarWrapper scroll={navbar}>

            <LogoWrapper>
                <img src={logo} alt="Fuddi logo"/>
            </LogoWrapper>
            {/*<div className={navbar ? 'logo_title logo_active' : 'logo_title'}>Fuddi</div>*/}

            <Burger click={props.drawerClickHandler} />
            <NavList/>

        </NavbarWrapper>

    );
};

export default Navbar;
