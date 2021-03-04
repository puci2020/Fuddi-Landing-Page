import React, { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { useTranslation } from "react-i18next";
import { HashLink as Link } from "react-router-hash-link";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Navbar from "../Components/Navbar/Navbar";
import AOS from "aos";
// import ReactGA from 'react-ga';
// import { withRouter } from 'react-router-dom';

const Button = styled.button`
  width: 220px;
  height: 50px;
  background-color: red;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  border: 1px solid red;
  outline: none;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
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
    bottom: 20px;
    right: 20px;
  }
`;

// ReactGA.initialize('G-WSW3BKQX9B');

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
    setActive(!active);

    if (!active) {
      document.getElementById("secound").style.display = "none";
      document.getElementById("first").style.transform =
        "translateY(8px) rotate(45deg)";
      document.getElementById("third").style.transform =
        "translateY(-8px) rotate(-45deg)";
    } else {
      document.getElementById("secound").style.display = "block";
      document.getElementById("first").style.transform = "rotate(0)";
      document.getElementById("first").style.marginTop = "0";
      document.getElementById("third").style.transform = "rotate(0)";
      document.getElementById("third").style.marginBottom = "0";
    }
  };

  let sideDrawer = <SideDrawer />;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer show={sideDrawerOpen} />;
  }

  const { t } = useTranslation();

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // })

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      AOS.init({
        // disable: "mobile",
        once: true,
        duration: 700,
      });
      setLoading(false);
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
          <Navbar drawerClickHandler={drawerToggleClickHandler} />
          {sideDrawer}
          <Link to="/newsletter">
            <Button data-aos="fade-up-left">{t("newsletter.button")}</Button>
          </Link>
        </ThemeProvider>
      )}
    </>
  );
};

export default Layout;
