import React from 'react';
import styled from 'styled-components'
import {useTranslation} from "react-i18next";

const Wrapper = styled.div`
padding-top: 100px;
 width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({theme}) => theme.colors.greenTransparent};
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 40px 20px 40px 10%;
  color: ${({theme}) => theme.colors.white};
  text-shadow: .2rem .2rem .1rem black;
`;

const P = styled.p`
  padding: 20px 10%;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  a{
    color: ${({theme}) => theme.colors.white};
  }
`

const CrowdfundingItem = () => {

    const {t} = useTranslation();

    return (
        <div>

            <Wrapper>
                <H2>Crowdfunding</H2>

                <P>{t('crowdfunding.def')}
                    <br/><br/>

                    {t('crowdfunding.source')} <a href="https://poradnikprzedsiebiorcy.pl/-crowdfunding-jak-to-dziala"> {t('crowdfunding.link')}</a></P>
            </Wrapper>
        </div>
    );
};

export default CrowdfundingItem;
