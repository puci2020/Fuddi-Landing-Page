import React, { useEffect, useState } from "react";
import Layout from "../../Theme/Layout";
import styled from "styled-components";
import { auth, db, storage } from "../../firebaseConfigFile";
import firebase from "firebase";
import MDEditor from "@uiw/react-md-editor";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: lightgrey;
  padding-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nav = styled.div`
  width: 100vw;
  height: ${({ scroll }) => (scroll ? "80px" : "100px")};
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.greenTransparent};
  transition: background-color 1s, height 1s, font-size 1s;
`;

const Form = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;

  flex-direction: column;

  .form__item {
    border-radius: 10px;
    border: 1px solid lightgrey;
    padding-left: 10px;
    outline: none;
    margin-bottom: 10px;
  }

  .input {
    height: 30px;
  }

  .form__button {
    height: 30px;
    max-width: 100px;
    padding: 0;
    cursor: pointer;
  }
`;

const NewPost = ({ index, img, tit, tim, dat, cont, short, ed }) => {
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(null);
  // const [email, setEmail] = useState('');

  const [image, setImage] = useState(null);
  const [shortDesc, setShortDesc] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [content, setContent] = useState("");

  const [imag, setImag] = useState("");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [progress, setProgress] = useState(0);

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
    if (mounted) {
      setTitle(tit);
      setTime(tim);
      setDate(dat);
      setContent(cont);
      setShortDesc(short);
      setEdit(ed);
      setImag(img);
      setLoading(false);
    }
    return () => {
      mounted = false;
    };
  }, [tit, tim, dat, cont, short, ed, img]);

  const changeBackground = () => {
    if (window.scrollY >= 80) setNav(true);
    else setNav(false);
  };

  window.addEventListener("scroll", changeBackground);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const updatePost = () => {
    db.collection("posts").doc(index).set(
      {
        shortDesc: shortDesc,
        title: title,
        content: content,
        date: date,
        time: time,
        urlImage: imag,
      },
      { merge: true }
    );
    alert("Post zaktualizowany, odśwież stronę by zobaczyć efekty!");
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progrss = Math.round(
        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // );
        // setProgress(progrss);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestapm: firebase.firestore.FieldValue.serverTimestamp(),
              shortDesc: shortDesc,
              imageURL: url,
              title: title,
              content: content,
              date: date,
              time: time,
            });
            // setProgress(0);
            setShortDesc("");
            setImage(null);
            setTitle("");
            setContent("");
            setDate("");
            setTime("");
          });
      }
    );
  };

  return (
    <Layout>
    
      {loading ? (
        ""
      ) : (
        <>
          <Nav scroll={nav} />
          <Wrapper>
            {user ? (
              <Form>
                <input
                  placeholder="Tytuł"
                  type="text"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form__item input"
                />
                <input
                  placeholder="Data np. 1 stycznia 2020"
                  type="text"
                  value={date || ""}
                  onChange={(e) => setDate(e.target.value)}
                  className="form__item input"
                />
                <input
                  placeholder="Czas czytania np. 5 min"
                  type="text"
                  value={time || ""}
                  onChange={(e) => setTime(e.target.value)}
                  className="form__item input"
                />
                <textarea
                  placeholder="Short description"
                  className="form__item"
                  rows="10"
                  value={shortDesc || ""}
                  onChange={(e) => setShortDesc(e.target.value)}
                />
                <MDEditor
                  value={content || ""}
                  onChange={setContent}
                  className="form__item"
                />
                {edit ? (
                  <button
                    className="form__item form__button"
                    type="submit"
                    onClick={updatePost}
                  >
                    Aktualizuj post
                  </button>
                ) : (
                  <>
                    <input
                      type="file"
                      className="form__item"
                      onChange={handleChange}
                    />
                    <button
                      className="form__item form__button"
                      type="submit"
                      onClick={handleUpload}
                    >
                      Publikuj post
                    </button>
                  </>
                )}
              </Form>
            ) : (
              "Zaloguj się!"
            )}
          </Wrapper>
        </>
      )}
    </Layout>
  );
};

export default NewPost;
