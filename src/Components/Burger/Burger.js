import React from 'react';
import './Burger.css'

const Burger = props => {



    return (
        <div className="burger" id="burger" onClick={props.click}>
            <div id="first"/>
            <div id="secound"/>
            <div id="third"/>
        </div>
    );
};

export default Burger;
