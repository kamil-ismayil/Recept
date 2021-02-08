import React, { useEffect, useState, useContext } from 'react';
import './Popular.css';
import { Link } from 'react-router-dom';
import {ReadJsonContext} from '../../Context/readJson-context';
import Page from '../../Components/Page/Page';

const popular = (props) => {
    const readJsonContext = useContext(ReadJsonContext);
    const [data, setData] = useState();
    let popularInfo = {};
    let imagePath;
    let id = 0; 

    useEffect(() => {
        readJsonContext.readJson('popularData');
        setData(readJsonContext.data);
        
    },[data]);

    const popularElements = data!=null &&
        data.map(x=>{
            return (
                popularInfo = data[id],
                id++,
                imagePath = `${process.env.PUBLIC_URL}`+x.foodImg,

                <Link class="foodBox" to={{pathname: '/recepter/popular/'+x.id, state: {info: popularInfo}}} >
                    <div className="imagebox" >
                        <img class="foodImage" src={imagePath}/>
                        <h5 class="imgText">{x.name}</h5>
                    </div>       
                </Link> 
            )
        }); 

    return(
        
        <div className="popular">
            {popularElements}
        </div>
        
    )
}

export default popular;