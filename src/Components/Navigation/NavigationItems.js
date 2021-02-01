import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
        <ul className="NavigationItems">
            <NavigationItem link="/startpage">Start sida</NavigationItem>

            <NavigationItem link="/recepter">Recepter</NavigationItem>
                <ul>
                    <NavigationItem link="/recepter/mat">Mat</NavigationItem>
                    <NavigationItem link="/recepter/dryck">Dryck</NavigationItem>
                    <NavigationItem link="/recepter/smoothie">Smoothie</NavigationItem>
                    <NavigationItem link="/recepter/dessert">Dessert</NavigationItem>
                    <NavigationItem link="/recepter/populara">Populära</NavigationItem>
                </ul>
            <NavigationItem link="/login">Login</NavigationItem>
        </ul>
);

export default navigationItems;