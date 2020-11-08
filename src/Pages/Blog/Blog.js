import React from 'react'
import styled from 'styled-components'
import Layout from "../../Theme/Layout"
import background from "../../img/blog/home3.jpeg"
import {Link} from "react-scroll"
import {useTranslation} from "react-i18next"
import Post from "../../Components/Blog/Post";




const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`
const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  padding: 60px 10% 20px 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  //align-items: center;
  justify-items: center;
  background-color: aliceblue;
  
  ${({theme}) => theme.media.tablet}{
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({theme}) => theme.media.phone}{
    grid-template-columns: 1fr;
  }
`

const H1 = styled.h1`
  font-size: ${({theme}) => theme.font.size.xl};
  font-weight: ${({theme}) => theme.font.weight.bold};
  letter-spacing: ${({theme}) => theme.font.space.m};
  padding-bottom: 15px;
  color: white;
  overflow: hidden;
  
  ${({theme}) => theme.media.phone}{
  font-size: ${({theme}) => theme.font.size.l};
  }
`;


const Button = styled.button`
  padding: 15px 20px;
  background-color: ${({theme}) => theme.colors.green};
  //margin-top: 15px;
  font-size: ${({theme}) => theme.font.size.m};
  font-weight: ${({theme}) => theme.font.weight.regular};
  color: ${({theme}) => theme.colors.white};
  border: 2px solid ${({theme}) => theme.colors.green};
  outline: none;
  cursor: pointer;
  transition: background-color .2s, border .2s;
  border-radius: 50px;
  overflow: hidden;
  
  &:hover{
  //color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.greenDark};
  border: 2px solid ${({theme}) => theme.colors.greenDark};;
  }
`;


const Blog = () => {

    const {t} = useTranslation()

    return (
        <Layout>
            <Background>
                <H1 data-aos="zoom-in-up">Stowrzony by wnieść do Twojego <br/>życia więcej świeżości</H1>
                <Link data-aos="zoom-in-up" duration={800} activeClass="a" to="about" spy={true} smooth={true} offset={-80}><Button
                                             data-aos-delay="400">{t('home.button')}</Button></Link>
            </Background>
            <Content>
                <Post id={"askjdhas6876asid@#$"} head={"smaczne owoce"}/>
                <Post id={"jahx@"}/>
                <Post/>
                <Post/>
            </Content>
        </Layout>
    );
};

export default Blog;
