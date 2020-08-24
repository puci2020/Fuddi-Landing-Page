import React, {Component} from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import {ParallaxProvider} from 'react-scroll-parallax';
import Roadmap from "./Components/Roadmap/Roadmap";

class App extends Component {
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
            document.getElementById('secound').style.display = "none";
            document.getElementById('first').style.transform = "translateY(8px) rotate(45deg)";
            // document.getElementById('first').style.marginTop= "15px";

            document.getElementById('third').style.transform = "translateY(-8px) rotate(-45deg)";
            // document.getElementById('third').style.marginBottom= "15px";

        } else {
            document.getElementById('secound').style.display = "block";
            document.getElementById('first').style.transform = "rotate(180deg)";
            document.getElementById('first').style.marginTop = "0";
            document.getElementById('third').style.transform = "rotate(0)";
            document.getElementById('third').style.marginBottom = "0";
        }
    };

    render() {
        let sideDrawer;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer show={this.state.sideDrawerOpen}/>
        }
        return (
            <div className="App">
                <ParallaxProvider>
                    <Home/>
                </ParallaxProvider>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {sideDrawer}
                <About/>
                <Roadmap/>

            </div>
        );
    }
}

export default App;
