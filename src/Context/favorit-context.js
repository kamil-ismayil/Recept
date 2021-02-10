import React, {useCallback, useEffect, useState} from 'react';

export const FavoritAddContext = React.createContext({
    data: []
});

const favoritContextProvider = (props) => {
    let objArray = [];  
   
    const favoritAddHandler = useCallback( (info) => {
        info!=null && objArray.push(info)
    }, []); 

    return (
        <FavoritAddContext.Provider value={{data: objArray, addFavorit: favoritAddHandler}}>
            {props.children}
        </FavoritAddContext.Provider>
    );
};

export default favoritContextProvider; 