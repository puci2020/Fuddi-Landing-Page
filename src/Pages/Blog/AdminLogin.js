import React, {useState, useEffect} from 'react';
import Layout from "../../Theme/Layout";
import styled from "styled-components";
import {auth} from "../../firebaseConfigFile"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
width: 300px;
height: 100px;
display: flex;
justify-content: space-between;
flex-direction: column;

.form__item{
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding-left: 10px;
  outline: none;
}

.form__button{
padding: 0;
cursor:pointer;
}
`

const AdminLogin = () => {
    const [nav, setNav] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // console.log(authUser);
                setUser(authUser);

            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        }

    }, [user]);

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error.message));

    };

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
                    <button className="btn" onClick={() => auth.signOut()}>Logout</button>
                ) : (
                    <Form>
                        <input
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form__item"
                        />
                        < input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form__item"
                        />
                        <button className="form__item form__button" type="submit" onClick={signIn}>Sign In</button>
                    </Form>
                )}
            </Wrapper>


        </Layout>
    );
};

export default AdminLogin;
