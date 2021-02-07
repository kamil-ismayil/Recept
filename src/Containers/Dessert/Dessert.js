import React, { useEffect, useState, useContext } from 'react';
import './Dessert.css';
import { Link } from 'react-router-dom';
import {ReadJsonContext} from '../../Context/readJson-context';
import Page from '../../Components/Page/Page';

const dessert = (props) => {
    const readJsonContext = useContext(ReadJsonContext);
    const [data, setData] = useState();
    let dessertInfo = {};
    let imagePath;
    let id = 0; 

    useEffect(() => {
        readJsonContext.readJson('dessertData');
        setData(readJsonContext.data);
        
    },[data]);

    const dessertElements = data!=null &&
        data.map(x=>{
            return (
                dessertInfo = data[id],
                id++,
                imagePath = `${process.env.PUBLIC_URL}`+x.foodImg,

                <Link to={{pathname: '/recepter/dessert/'+x.id, state: {info: dessertInfo}}} >
                    <div className="imagebox" >
                        <img src={imagePath}/>
                        <h5>{x.name}</h5>
                    </div>       
                </Link> 
            )
        }); 

    return(
        
        <div className="dessert">
            {dessertElements}
        </div>
        
    )
}

export default dessert;