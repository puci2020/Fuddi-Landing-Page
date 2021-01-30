import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../Theme/Layout";
import background from "../../img/blog/home3.jpeg";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import Post from "../../Components/Blog/Post";
import { auth, db } from "../../firebaseConfigFile";

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
`;
const Content = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  padding: 60px 10% 20px 10%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  //align-items: center;
  justify-items: center;
  background-color: aliceblue;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${({ theme }) => theme.media.phone} {
    grid-template-columns: 1fr;
  }
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.space.m};
  padding-bottom: 15px;
  color: white;
  overflow: hidden;

  ${({ theme }) => theme.media.phone} {
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.green};
  //margin-top: 15px;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.green};
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s, border 0.2s;
  border-radius: 50px;
  overflow: hidden;

  &:hover {
    //color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.greenDark};
    border: 2px solid ${({ theme }) => theme.colors.greenDark};
  }
`;

const NewButton = styled.button`
  width: 220px;
  height: 50px;
  background-color: red;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  border: 1px solid red;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: 110px;
  right: 50px;
  font: inherit;
  font-weight: ${({ theme }) => theme.font.weight.plusRegular};
  transition: 0.2s;
  z-index: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.greenDark};
    border: 1px solid ${({ theme }) => theme.colors.greenDark};
  }

  ${({ theme }) => theme.media.phone} {
    //   bottom: 20px;
    right: 20px;
  }
`;

const Blog = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);

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
    };
  }, [user]);

  useEffect(() => {
    let mounted = true;
    db.collection("posts")
      .orderBy("timestapm", "desc")
      .onSnapshot((snapshot) => {
        if (mounted) {
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
          setloading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        ""
      ) : (
        
        <Layout>
          <Background>
            <H1 data-aos="zoom-in-up">
              Stworzony by wnieść do Twojego <br />
              życia więcej świeżości
            </H1>
            <Link
              data-aos="zoom-in-up"
              duration={800}
              to="#posts"
              smooth={true}
              offset={-80}
            >
              <Button data-aos-delay="400">{t("home.button")}</Button>
            </Link>
          </Background>
          <Content id="posts">
            {posts.map(({ id, data }) => (
              <Post key={id} id={id} data={data} />
            ))}
          </Content>

          {user ? (
            <>
              <Link to={"/newPost"}>
                <NewButton data-aos="fade-up-left">Nowy post</NewButton>
              </Link>
              <NewButton
                style={{ bottom: 170 }}
                data-aos="fade-up-left"
                onClick={() => auth.signOut()}
              >
                Wyloguj się
              </NewButton>
            </>
          ) : (
            ""
          )}
          </Layout>
        
      )}
    </>
  );
};

export default Blog;
