import React, { useEffect, useState, useContext } from 'react';
import './Description.css';

const drink = (props) => {
    
    useEffect( ()=>{
        console.log(JSON.stringify(props.data))

    })

    return(
        <div className="description">
            <h3>{props.data.name}</h3>
            <p>{props.data.description}</p>
            
        </div>
    )
}

export default drink;