import React from "react"
import styled from 'styled-components'
import NavList from "../Navlist/Navlist";

const NavWrapper = styled.nav`
  .side{
      height: 100vh;
      background-color: ${({theme}) => theme.colors.grayMenu};
      box-shadow: 2px 0 5px rgba(0,0,0, .5);
      position: fixed;
      top: 0;
      left: 0;
      width: 70%;
      max-width: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateX(-100%);
      transition: transform .35s ease-in-out;
      z-index: 1;
  }
  
  .open{
    transform: translateX(0);
  }
  
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 30px;
    height: auto;
    flex-direction: column;
}
  li{
    padding: 25px 10px;
}
    a{
      text-decoration: none;
      color: #FFFFFF;
      &:hover{
        color: #FDFF00;
        cursor: pointer;
        }
}
  
`;


const SideDrawer = props => {

    let drawerClasses = 'side';
    if (props.show) {
        drawerClasses = 'side open'
    }

    return (
        <NavWrapper>
            <div className={drawerClasses}>
                <NavList/>
            </div>
        </NavWrapper>

    );
};

export default SideDrawer;
