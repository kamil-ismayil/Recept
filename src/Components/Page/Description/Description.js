import React, { useEffect, useContext, useState, useRef} from 'react';
import './Description.css';
import {LoginContext} from '../../../Context/login-context';
import {FavoritAddContext} from '../../../Context/favorit-context';

const description = (props) => {
    const loginContext = useContext(LoginContext);
    const favoritContext = useContext(FavoritAddContext);
    const [data, setData] = useState();
    let btnRef = useRef();
    const [loggedIn, setLoggedIn] = useState(false);
    
    useEffect( ()=>{
        setData(props.data);  
        setLoggedIn(loginContext.isLogged);
        console.log("kamil");
    },[data])

    const addToFavorites = () => {
        favoritContext.addFavorit(props.data);
        if(btnRef.current){
            btnRef.current.setAttribute("disabled", "disabled");
        }
    }

    return(
        <div className="description"  class="recepiePage">
            <h3>{props.data.name}</h3>
            <button className={props.hide=="true" ? "hide" : "show"}
                disabled={(loggedIn & !this.disabled) ? false : true} 
                onClick={addToFavorites}
                ref={btnRef} >
                    Lägg till i favoriter
            </button>
            <p>{props.data.description}</p>
        </div>
    )
}

export default description;