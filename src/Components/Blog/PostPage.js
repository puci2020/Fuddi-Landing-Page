import React, { useState, useEffect } from "react";
import Layout from "../../Theme/Layout";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebaseConfigFile";
import { title } from "@uiw/react-md-editor/lib/cjs/commands";

const Wrapper = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: lightgrey;
  padding-top: 120px;
`;

const Nav = styled.div`
  width: 100vw;
  height: ${({ scroll }) => (scroll ? "80px" : "100px")};
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.greenTransparent};
  transition: background-color 1s, height 1s, font-size 1s;
`;

const PostPage = () => {
  const [nav, setNav] = useState(false);
  const [posts, setPosts] = useState([]);

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
          setPosts(doc.data())
        }
      });
  },[]);

  return (
    <Layout>
      <Nav scroll={nav} />
      <Wrapper>
        {posts.content}

      </Wrapper>
    </Layout>
  );
};

export default PostPage;
