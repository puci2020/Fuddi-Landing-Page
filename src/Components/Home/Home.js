import React from 'react';
import "./Home.css"
import {useTranslation} from "react-i18next";

function Home() {
    const {t} = useTranslation();


    return (
        <div className="home">
            {/*<Navbar/>*/}
            <p>{t("link1.1")}</p>
        </div>
    );
}

export default Home;
