import React, { useEffect, useState, useContext } from 'react';
import './Ingredient.css';

const ingredient = (props) => {
    
    return(
        <div>
            <h3>Ingredienser</h3>
            <p>
                {props.data.ingredience.map(x=>(
                    <div>
                        {x}
                    </div>
                ))}
            </p>
        </div>
    )
}

export default ingredient;