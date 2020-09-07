import React, {Component} from 'react';
import styled from 'styled-components'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import GlobalStyle from "../Theme/GlobalStyles";
import Layout from "../Theme/Layout";
import ContactItem from '../Components/ContactItem/ContactItem'


const StyledWrapper = styled.div`
  width: 100vw;
  //min-height: calc(100vh - 250px);
  min-height: 100vh;
  padding: 100px 0;
  background-color: ${({theme}) => theme.colors.greenTransparent};
  //background-size: cover;
  //background-repeat: no-repeat;
  //background-position: center 0;
  //background-attachment: fixed;
  overflow:hidden;
  position: relative;
  //z-index: -2;
 
`;




class Contact extends Component {
    state = {
        sideDrawerOpen: false,
        active: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen,
            };
        });
        this.setState((prevState) => {
            return {
                active: !prevState.active
            }
        });
        if (!this.state.active) {
            // console.log("działą");
            document.getElementById('secound').style.display = "none";
            document.getElementById('first').style.transform = "translateY(8px) rotate(45deg)";
            document.getElementById('third').style.transform = "translateY(-8px) rotate(-45deg)";
        } else {
            // console.log("nie")
            document.getElementById('secound').style.display = "block";
            document.getElementById('first').style.transform = "rotate(0)";
            document.getElementById('first').style.marginTop = "0";
            document.getElementById('third').style.transform = "rotate(0)";
            document.getElementById('third').style.marginBottom = "0";
        }
    };

    render() {
        let sideDrawer = <SideDrawer/>;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
        }
        return (
            <Layout>
                <div className="contact" id="contact">
                    <GlobalStyle/>
                    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>

                    {sideDrawer}
                    <StyledWrapper>

                        <ContactItem/>
                    </StyledWrapper>
                    <Footer/>
                </div>
            </Layout>
        );
    }
}

export default Contact;
