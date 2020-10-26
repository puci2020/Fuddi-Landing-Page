import React from 'react';
import styled from 'styled-components'
import Footer from "../Components/Footer/Footer";
import GlobalStyle from "../Theme/GlobalStyles";
import Layout from "../Theme/Layout";
import ContactItem from '../Components/ContactItem/ContactItem'


const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  padding: 100px 0;
  background-color: ${({theme}) => theme.colors.greenTransparent};
  overflow:hidden;
  position: relative;
`;


const Contact = () => {

    return (
        <Layout>
            <div className="contact" id="contact">
                <GlobalStyle/>
                <StyledWrapper>

                    <ContactItem/>
                </StyledWrapper>
                <Footer/>
            </div>
        </Layout>
    );
}


export default Contact;
