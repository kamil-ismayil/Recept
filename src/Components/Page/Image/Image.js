import React, { useEffect, useState, useContext } from 'react';
import './Image.css';

const image = (props) => {

    let imagePath = `${process.env.PUBLIC_URL}`+props.data.foodImg;

    return(
        <div className="image"  class="recepiePage">
            <img class="recepieImage" src={imagePath} />
        </div>
    )
}

export default image;