import React, {Component} from 'react';
import './App.css'
import styled from 'styled-components'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import backGround from './img/faq2.jpeg'
import Content from './Components/FaqItem/FaqItem'


const StyledWrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: lightgrey;
  padding: 100px 0;
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow:hidden;
  //h2{
  //  color: rgb(255, 255, 255);
  //text-shadow: .2rem .2rem .1rem black;
  //
  //}
 
`;



// const ContentItem = styled.div`
//   height: 400px;
//   border-radius: 20px;
//   background-color: rgba(43,57,71,85%);
//   padding: 40px;
//   color: white;
//   letter-spacing: .1rem;
//   font-size: 1.1rem;
//   h4{
//   padding: 20px 0;
//   }
//
// `;

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

    render() {
        let sideDrawer = <SideDrawer/>;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
        }
        return (
            <div className="faq" id="faq">
                <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>

                {sideDrawer}
                <StyledWrapper>

                    <Content/>
                </StyledWrapper>
                <Footer/>
            </div>
        );
    }
}

export default Faq;
