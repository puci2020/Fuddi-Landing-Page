import React from 'react';
import styled from 'styled-components'
import GlobalStyle from "../Theme/GlobalStyles";
import Layout from "../Theme/Layout";
import NewsletterItem from "../Components/NewsletterItem/NewsletterItem";


const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  padding: 100px 0;
  background-color: ${({theme}) => theme.colors.greenTransparent};
  overflow:hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Newsletter = () => {
    return (
        <Layout>
            <div className="contact" id="contact">
                <GlobalStyle/>
                <StyledWrapper>

                    <NewsletterItem/>
                </StyledWrapper>
            </div>
        </Layout>
    );
}

export default Newsletter;
