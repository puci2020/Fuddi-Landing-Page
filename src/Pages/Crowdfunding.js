import React from 'react';
import Layout from "../Theme/Layout";
import Footer from "../Components/Footer/Footer";
import CrowdfundingItem from "../Components/CrowdfundingItem/CrowdfundingItem";

const Crowdfunding = () => {
    return (
        <Layout>
            <div className="crowd">
                <CrowdfundingItem/>
                <Footer/>

            </div>
        </Layout>
    );
}


export default Crowdfunding;
