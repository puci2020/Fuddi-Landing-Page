import React from 'react'
import styled from 'styled-components'
import Layout from "../../Theme/Layout"
import isComing from "../../img/isComing.png"

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #003d00;
display: flex;
align-items: center;
justify-content: center;

  ${({theme}) => theme.media.phone}{
    img{
      width: 80vw;
      height: auto;
    }
  }
`

const Shop = () => {
    return (
        <Layout>
            <Wrapper>
                <img src={isComing} alt='iscomming'/>
            </Wrapper>
        </Layout>
    );
};

export default Shop;
