import React, {useState} from 'react';
import "./About.css"

function About() {

    const [about, setAbout]=useState(false);

    const changePadding = () =>{
        if (window.scrollY>=700)
            setAbout(true);
        else
            setAbout(false);
    };

    window.addEventListener('scroll', changePadding);
    return (
        <div className={about ? 'about scr' : 'about'} id="about">
            <h3>elasdasdasdasdasdo</h3>
        </div>
    );
}

export default About;
