import React, {useState} from 'react';
import Layout from "../../Theme/Layout";
import {useParams} from 'react-router-dom'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: lightgrey;
  padding-top: 120px;
`

const Nav = styled.div`
  width: 100vw;
  height: ${({scroll}) => scroll ? '80px' : '100px'};
  position: fixed;
  top: 0;
background-color: ${(props) => props.theme.colors.greenTransparent};
  transition: background-color 1s, height 1s, font-size 1s;
  
`

const PostPage = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80)
            setNav(true);
        else
            setNav(false);
    };

    window.addEventListener('scroll', changeBackground);

    const {id} = useParams();
    return (
        <Layout>
            <Nav scroll={nav}/>
            <Wrapper>
                {id}

            </Wrapper>


        </Layout>
    );
};

export default PostPage;