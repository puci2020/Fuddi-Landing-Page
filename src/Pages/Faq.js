import React from 'react';
import styled from 'styled-components'
import Footer from "../Components/Footer/Footer";
import backGround from '../img/faq.jpeg'
import Content from '../Components/FaqItem/FaqItem'
import GlobalStyle from "../Theme/GlobalStyles";
import Layout from "../Theme/Layout";


const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: lightgrey;
  padding: 100px 0;
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow:hidden;
 
`;

const Faq = () => {

    return (
        <Layout>
            <GlobalStyle/>
            <StyledWrapper>
                <Content/>
            </StyledWrapper>
            <Footer/>
        </Layout>
    );
}

export default Faq;
