import React, {useEffect, useState} from 'react';
import Layout from "../../Theme/Layout";
import styled from "styled-components";
import {auth} from "../../firebaseConfigFile";
import MDEditor from '@uiw/react-md-editor';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: lightgrey;
  padding-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Nav = styled.div`
  width: 100vw;
  height: ${({scroll}) => scroll ? '80px' : '100px'};
  position: fixed;
  top: 0;
background-color: ${(props) => props.theme.colors.greenTransparent};
  transition: background-color 1s, height 1s, font-size 1s;
  
`

const Form = styled.form`
width: 90%;
height: auto;
display: flex;
justify-content: space-between;

flex-direction: column;

.form__item{
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding-left: 10px;
  outline: none;
  margin-bottom: 10px;
}

.input{
  height: 30px;
 }


.form__button{
height: 30px;
max-width: 100px;
padding: 0;
cursor:pointer;
}
`

const NewPost = () => {
    const [nav, setNav] = useState(false);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
            } else {
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        }
    }, [user]);

    const changeBackground = () => {
        if (window.scrollY >= 80)
            setNav(true);
        else
            setNav(false);
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <Layout>
            <Nav scroll={nav}/>
            <Wrapper>
            {user ? (
                <Form>
                    <input
                        placeholder="Title"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form__item input"
                    />
                    < textarea
                        placeholder="Short description"
                        className="form__item"
                        rows="10"
                    />
                    <MDEditor
                        // value={value}
                        // onChange={setValue}
                        className="form__item"
                    />
                    <input
                        type="file"
                        className="form__item"
                    />
                    <button className="form__item form__button" type="submit" >Sign In</button>
                </Form>
            ) : ('Zaloguj się!')}

            </Wrapper>

        </Layout>
    );
};

export default NewPost;
