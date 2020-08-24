import React from 'react';
import "./Roadmap.css"
import roadmap from '../../img/roadmap.png';

function Roadmap() {


    return (
        <div className="roadmap" id="roadmap">
            <div className="space"></div>
            <h2> Road Map</h2>
            <div className="map">
                <img src={roadmap}/>
            </div>
        </div>
    );
}

export default Roadmap;
