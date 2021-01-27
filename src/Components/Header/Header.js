import React, { Component } from 'react';
import './Header.css';

const header = (props) => {
    return(
        <div className="header">
            <img src={require('../../Images/header.png')} />
        </div>
    )
};

export default header;