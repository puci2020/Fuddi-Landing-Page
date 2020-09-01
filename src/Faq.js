import React, {Component} from 'react';
import './App.css'
import styled from 'styled-components'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/SideDrawer/SideDrawer";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgrey;
 
`;

class Faq extends Component {
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

render()
{
    let sideDrawer = <SideDrawer/>;

    if (this.state.sideDrawerOpen) {
        sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
    }
    return (
        <div className="faq" id="faq">
            <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>

            {sideDrawer}
            <StyledWrapper>
                faq
            </StyledWrapper>
            <Footer/>
        </div>
    );
}
}
export default Faq;
