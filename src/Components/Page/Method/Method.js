import React, { useEffect, useState, useContext } from 'react';
import './Method.css';

const method = (props) => {

    return(
        <div>
            <h3>Gör så här</h3>
            <p>
                {props.data.method.map(x=>(
                    <div>
                        {x}
                    </div>
                ))}
            </p>
        </div>
    )
}

export default method;