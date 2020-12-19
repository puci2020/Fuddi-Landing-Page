import React, { useState, useEffect } from "react";
import Layout from "../../Theme/Layout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db, auth } from "../../firebaseConfigFile";
import MDEditor from "@uiw/react-md-editor";
import NewPost from "../../Pages/Blog/NewPost";

const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: aliceblue;
  padding: 120px;

  .content {
    text-align: justify;
  }
`;

const Nav = styled.div`
  width: 100vw;
  height: ${({ scroll }) => (scroll ? "80px" : "100px")};
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.greenTransparent};
  transition: background-color 1s, height 1s, font-size 1s;
`;

const Img = styled.div`
  .img {
    width: 100%;
    margin: 10px 0;
    img {
      width: 100%;
      margin: 10px 0;
    }
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

const PostPage = () => {
  const [nav, setNav] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  const changeBackground = () => {
    if (window.scrollY >= 80) setNav(true);
    else setNav(false);
  };

  window.addEventListener("scroll", changeBackground);

  const { id } = useParams();

  useEffect(() => {
    db.collection("posts")
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setPosts(doc.data());
        }
      });
  }, []);

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

  return (
    <Layout>
      <Nav scroll={nav} />
      <Wrapper>
        <h3>{posts.title}</h3>
        <span>
          {posts.date} Czas czytania: {posts.time}
        </span>
        <Img className="img">
          <img className="img" src={posts.imageURL} alt="" />
        </Img>
        <div className="content">
          <MDEditor.Markdown source={posts.content} />
        </div>
      </Wrapper>

      {user ? (
        <>
          <NewButton style={{ bottom: 170 }} data-aos="fade-up-left">
            Edytuj post
          </NewButton>
          <NewPost
            index={id}
            img={posts.imageURL}
            tit={posts.title}
            dat={posts.date}
            tim={posts.time}
            cont={posts.content}
            short={posts.shortDesc}
            ed={true}
          />
        </>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default PostPage;
