import React from 'react';
import styled from 'styled-components'

const BurgerWrapper = styled.div`
  @media(max-width: 1350px){
      width: 2rem;
      height: 2rem;
      position: absolute;
      right: 10%;
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      cursor: pointer;
      margin: 10px;
      
      #first, #third, #secound{
        transition: transform .35s ease-in-out;
        }
    }
`;

const Line = styled.div`
  width: 100%;
  height: .25rem;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  
  
`;

const Burger = props => {

    return (
        <BurgerWrapper id="burger" onClick={props.click}>
            <Line id="first"/>
            <Line id="secound"/>
            <Line id="third"/>
        </BurgerWrapper>
    );
};

export default Burger;
