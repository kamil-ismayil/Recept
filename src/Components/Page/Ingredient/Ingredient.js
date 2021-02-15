import React, { useEffect, useState, useContext } from 'react';
import './Ingredient.css';

const ingredient = (props) => {
    
    return(
        <div class="recepiePage">
            <h3>Ingredienser</h3>
            <p>
                {props.data.ingredience.map(x=>(
                    <div className="ing">
                        {x}
                    </div>
                ))}
            </p>
        </div>
    )
}

export default ingredient;