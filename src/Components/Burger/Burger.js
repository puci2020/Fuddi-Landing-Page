import React from 'react';
import './Burger.css'

const Burger = props => {

    return (
        <div className="Burger" id="burger" onClick={props.click}>
            <div id="first"></div>
            <div id="secound"></div>
            <div id="third"></div>
        </div>
    );
};

export default Burger;
