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
  
  ${({theme}) => theme.media.tablet}{
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, auto);
  grid-gap: 20px;
  }
`;

const ContentItem = styled.div`
  height: auto;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.box};
  padding: 40px;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  font-size: ${({theme}) => theme.font.size.m};
  h4{
  padding: 20px 0;
  }
  p{
    text-align: left;
  }
  ${({theme}) => theme.media.tablet}{
      padding: 25px;
      font-size: ${({theme}) => theme.font.size.s};
  }
  ${({theme}) => theme.media.phone}{
      font-size: ${({theme}) => theme.font.size.xxs};
  }
  
`;

const H2 = styled.h2`
  font-size: ${({theme}) => theme.font.size.l};
  margin: 40px 20px 40px 10%;
  color: ${({theme}) => theme.colors.white};
  text-shadow: .2rem .2rem .1rem black;
`;
const FaqItem = () => {

    const {t} = useTranslation();

    return (
        <div>
            <H2>{t('faq.header')}</H2>
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
