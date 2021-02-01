import React from 'react';
import classes from './Layout.css';
import Header from '../../Components/Header/Header';
import NavigationItems from '../../Components/Navigation/NavigationItems';
import Mainpage from '../../Containers/Mainpage/Mainpage';
import Aux from '../Aux_/Aux_';

const layout = (props) => {
    
    return (
        <Aux>
            <Header/>
            
            <div className="navmain">
                <NavigationItems />                
            </div>
            
        </Aux>
    );
}

export default layout; 