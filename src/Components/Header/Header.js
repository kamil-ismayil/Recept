import React, { Component } from 'react';
import './Header.css';

const header = (props) => {
    return(
        <div className="header">
            <img class="hrow" src={require('../../Images/header.png')} />
            <div class="hrow" style={{width: "70%"}}>
                <p style={{fontSize: 28}}>Välkommen till Recepies!</p> 
                <p>Username60</p>
            </div>
            
        </div>
    )
};

export default header;