import React, { useEffect, useState, useContext } from 'react';
import './Drink.css';
import { Redirect, Link } from 'react-router-dom';
import {ReadJsonContext} from '../../Context/readJson-context';
import Page from '../../Components/Page/Page';

const drink = (props) => {
    const readJsonContext = useContext(ReadJsonContext);
    const [data, setData] = useState();
    let drinkInfo = {};
    let imagePath;
    let id = 0; 

    useEffect(() => {
        readJsonContext.readJson('drinkData');
        setData(readJsonContext.data);
    },[data]);

    const imageElements = data!=null &&
        data.map(x=>{
            return (
                drinkInfo = data[id],
                id++,
                imagePath = `${process.env.PUBLIC_URL}`+x.foodImg,

                <Link class="foodBox" to={{pathname: '/recepter/dryck/'+x.id, state: {info: drinkInfo}}} >
                    <div className="imagebox" >
                        <img class="foodImage" src={imagePath}/>
                        <h5 class="imgText">{x.name}</h5>
                    </div>       
                </Link> 
            )
        }); 

    return(
        
        <div className="drink">
            {imageElements}
        </div>
        
    )
}

export default drink;