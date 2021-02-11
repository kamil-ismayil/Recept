import React from 'react';
import './Method.css';

const method = (props) => {

    return(
        <div className="method"  class="recepiePage">
            <h3>Gör så här</h3>
            <ol>
                {props.data.method.map(x=>(
                    <li>
                        {x}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default method;