import React, {Component} from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import {ParallaxProvider} from 'react-scroll-parallax';
import Roadmap from "./Components/Roadmap/Roadmap";
import Footer from "./Components/Footer/Footer";
import Screens from "./Components/Screens/Screens";
import Team from "./Components/Team/Team";

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

        // let navBar = <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        //
        // if (this.state.active){
        //     navBar = <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        // }
        return (
            <div className="App">
                <ParallaxProvider>
                    <Home/>
                </ParallaxProvider>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                {/*{navBar}*/}
                {sideDrawer}
                <ParallaxProvider>
                    <Screens/>
                </ParallaxProvider>
                <About/>
                <Team/>
                <Roadmap/>
                <Footer/>

            </div>
        );
    }
}

export default App;
