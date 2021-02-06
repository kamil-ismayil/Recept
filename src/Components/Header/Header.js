import React from 'react';
import './Header.css';

const header = (props) => {
    return(
        <div className="header">
            <img src={window.location.origin +"/Images/Header/header.png"} />
        </div>
    )
};

export default header;