import React from 'react';
import './Header.css';

const header = (props) => {
    return(
        <div className="header">
            <div class="menuButton"></div>
            {/* <img src={window.location.origin +"/Images/Header/header.png"} /> */}
            <div class="welcome"> Welcome to yummie Recepies!</div>
        </div>
    )
};

export default header;