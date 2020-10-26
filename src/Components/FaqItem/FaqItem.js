import React, {useState} from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";
import arrow from '../../img/icons/arrow.svg'


const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(4, auto);
  grid-gap: 15px;
  padding: 0 10%;
  
  ${({theme}) => theme.media.tablet}{
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, auto);
  grid-gap: 20px;
  }
`;

const ContentItem = styled.div`
  height: auto;
  border-radius: 25px;
  background-color: ${({theme}) => theme.colors.box};
  padding: 15px 30px;
  color: ${({theme}) => theme.colors.white};
  letter-spacing: ${({theme}) => theme.font.space.s};
  font-size: ${({theme}) => theme.font.size.s};
  cursor: pointer;
  h4{

  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  
  .header{
  width: 90%;
  }

      img{
      width: 12px;
      height: 12px;
      transform: rotate(0);
        transition: transform .35s ease-in-out;
      }

      .rotate{
        transform: rotate(90deg);
        transition: transform .3s ease-in-out;
      }
  }
  div{
    text-align: left;
    .space{
    height: 10px;
    width: 100%;
    }

  }
  
  .accordion__item{
  overflow: hidden;
  transition: max-height .3s cubic-bezier(1, 0, 1, 0);
  height: fit-content;
  max-height: 100vh;
  }
  
  .collapsed{
  max-height: 0;
  transition: max-height .35s cubic-bezier(0, 1, 0, 1);
  
  }
  
  ${({theme}) => theme.media.tablet}{
      //padding: 25px;
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

const Box = ({title, children}) => {
    const [open, setOpen] = useState(true);
    return (
        <ContentItem onClick={() => setOpen(!open)}>
            <h4><div className="header">{title}</div> <img className={open ? '' : 'rotate'} src={arrow} alt="right_arrow"/></h4>
            <div className={open ? 'accordion__item collapsed' : 'accordion__item'}>
                <div className="space"/>
                {children}</div>
        </ContentItem>
    )
};

const FaqItem = () => {

    const {t} = useTranslation();

    return (
        <div>
            <H2>{t('faq.header')}</H2>
            <Content>
                <Box title={t('faq.quest1.header')}>
                    {t('faq.quest1.content')}
                </Box>
                <Box title={t('faq.quest2.header')}>
                    {t('faq.quest2.content')}
                </Box>
                <Box title={t('faq.quest3.header')}>
                    {t('faq.quest3.content')}
                </Box>
                <Box title={t('faq.quest4.header')}>
                    {t('faq.quest4.content')}
                </Box>
                <Box title={t('faq.quest5.header')}>
                    {t('faq.quest5.content')}
                </Box>
                <Box title={t('faq.quest6.header')}>
                    {t('faq.quest6.content')}
                </Box>
                <Box title={t('faq.quest7.header')}>
                    {t('faq.quest7.content')}
                </Box>
                <Box title={t('faq.quest8.header')}>
                    {t('faq.quest8.content')}
                </Box>
                <Box title={t('faq.quest9.header')}>
                    {t('faq.quest9.content')}
                </Box>
            </Content>
        </div>
    );
};

export default FaqItem;
