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

    useEffect(() => {
        readJsonContext.readJson('drinkData');
        setData(readJsonContext.data);
    },[data]);

    function enlargeImage(x) {
        x.height = "64px";
        x.width = "64px";
    } 

    const imageElements = data!=null &&
        data.map(x=>{
            return (
                drinkInfo = data[x.id-1],
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