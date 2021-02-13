import React, { useEffect, useState, useContext } from 'react';
import '../FoodCollection.css';
import { Link } from 'react-router-dom';
import {ReadJsonContext} from '../../Context/readJson-context';
import Page from '../../Components/Page/Page';

const smoothie = (props) => {
    const readJsonContext = useContext(ReadJsonContext);
    const [data, setData] = useState();
    let smoothieInfo = {};
    let imagePath;
    let id = 0; 

    useEffect(() => {
        readJsonContext.readJson('smoothieData');
        setData(readJsonContext.data);
        
    },[data]);

    const smoothieElements = data!=null &&
        data.map(x=>{
            return (
                smoothieInfo = data[id],
                id++,
                imagePath = `${process.env.PUBLIC_URL}`+x.foodImg,

                <Link class="foodBox" to={{pathname: '/recepter/smoothie/'+x.id, state: {info: smoothieInfo}}} >
                    <div className="imagebox" >
                        <img class="foodImage" src={imagePath}/>
                        <h5 class="imgText">{x.name}</h5>
                    </div>       
                </Link> 
            )
        }); 

    return(
        
        <div className="smoothie">
            {smoothieElements}
        </div>
        
    )
}

export default smoothie;