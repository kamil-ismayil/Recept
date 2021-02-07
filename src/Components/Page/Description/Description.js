import React, { useEffect} from 'react';
import './Description.css';

const description = (props) => {
    
    useEffect( ()=>{
        console.log("Description.js");
        console.log(JSON.stringify(props.data))

    })

    return(
        <div className="description">
            <h3>{props.data.name}</h3>
            <p>{props.data.description}</p>
            
        </div>
    )
}

export default description;