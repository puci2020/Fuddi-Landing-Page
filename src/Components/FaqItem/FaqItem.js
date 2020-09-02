import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";


const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 60px;
  padding: 0 10%;
`;

const ContentItem = styled.div`
  height: 400px;
  border-radius: 20px;
  background-color: rgba(43,57,71,85%);
  padding: 40px;
  color: white;
  letter-spacing: .1rem;
  font-size: 1.1rem;
  h4{
  padding: 20px 0;
  }
  
`;


const FaqItem = () => {

    const {t} = useTranslation();

    return (
        <div>
            <h2>{t('faq.header')}</h2>
            <Content>
                <ContentItem>
                    <h4>{t('faq.quest1.header')}</h4>
                    <p>{t('faq.quest1.content')}</p>
                </ContentItem>
            </Content>
        </div>
    );
};

export default FaqItem;
