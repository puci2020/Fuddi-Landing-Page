import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";


const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  grid-gap: 60px;
  padding: 0 10%;
  
  @media (max-width: 1024px){
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, auto);
  }
`;

const ContentItem = styled.div`
  height: auto;
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
                <ContentItem>
                    <h4>{t('faq.quest2.header')}</h4>
                    <p>{t('faq.quest2.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest3.header')}</h4>
                    <p>{t('faq.quest3.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest4.header')}</h4>
                    <p>{t('faq.quest4.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest5.header')}</h4>
                    <p>{t('faq.quest5.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest6.header')}</h4>
                    <p>{t('faq.quest6.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest7.header')}</h4>
                    <p>{t('faq.quest7.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest8.header')}</h4>
                    <p>{t('faq.quest8.content')}</p>
                </ContentItem>
                <ContentItem>
                    <h4>{t('faq.quest9.header')}</h4>
                    <p>{t('faq.quest9.content')}</p>
                </ContentItem>
            </Content>
        </div>
    );
};

export default FaqItem;
