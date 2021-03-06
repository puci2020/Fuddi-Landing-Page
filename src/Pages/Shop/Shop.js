import React from 'react'
import styled from 'styled-components'
import Layout from "../../Theme/Layout"

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #003d00;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
font-size: 1.6rem;


p{
  margin-bottom: 10px;
  font-size: 1.7rem;
}

a{
  text-decoration: none;
  color: white;
}


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

                {/* <img src={isComing} alt='iscomming'/> */}

                <p>Zamówienia przyjmujemy na:</p>
                <a href={"mailto:fuddi.kontakt@gmail.com"}>fuddi.kontakt@gmail.com</a>
                733 084 316<br/>
            </Wrapper>
        </Layout>
    );
};

export default Shop;
