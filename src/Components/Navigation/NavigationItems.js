import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
        <ul className="NavigationItems">
            <NavigationItem link="/recipes">Recipes</NavigationItem>
            <NavigationItem link="/favorites">Favorites</NavigationItem>
            <NavigationItem link="/login">Login</NavigationItem>
        </ul>
);

export default navigationItems;