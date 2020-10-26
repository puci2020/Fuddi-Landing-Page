import React from 'react';
import Layout from "../Theme/Layout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import {ParallaxProvider} from 'react-scroll-parallax';
import Roadmap from "../Components/Roadmap/Roadmap";
import Footer from "../Components/Footer/Footer";
import Screens from "../Components/Screens/Screens";
import Team from "../Components/Team/Team";
import About2 from "../Components/About/About2";


const Main = () => {

    return (
        <Layout>
            <div className="App">
                <ParallaxProvider>
                    <Home/>
                </ParallaxProvider>
                <ParallaxProvider>
                    <Screens/>
                </ParallaxProvider>
                <About/>
                <About2/>
                <Roadmap/>
                <Team/>
                <Footer/>
            </div>
        </Layout>
    );
}


export default Main;
