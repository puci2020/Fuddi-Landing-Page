import React from 'react';
import styled from 'styled-components'

const StyledItem = styled.div`
  width: auto;
  height: 100%;

`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 40px 20px;
  color: ${({theme}) => theme.colors.white};
  text-shadow: .2rem .2rem .1rem black;
`;

const FormWrapper = styled.div`
  form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
`;

const NewsletterItem = () => {
    return (
        <StyledItem>
            <H2>Bądź na bieżąco z nowościami od Fuddi!</H2>
            <FormWrapper>
                <form>
                    <input type="text"/>
                    <button type="submit">Wyślij</button>
                </form>
            </FormWrapper>
        </StyledItem>
    );
};

export default NewsletterItem;
