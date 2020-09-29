import React, {Component} from 'react';
import Layout from "../Theme/Layout";
import Navbar from "../Components/Navbar/Navbar";
import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Footer from "../Components/Footer/Footer";
import CrowdfundingItem from "../Components/CrowdfundingItem/CrowdfundingItem";


class Main extends Component {
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
            <Layout>
                <div className="crowd">

                    <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                    {/*{navBar}*/}
                    {sideDrawer}
                    <CrowdfundingItem/>
                    <Footer/>

                </div>
            </Layout>
        );
    }
}

export default Main;
