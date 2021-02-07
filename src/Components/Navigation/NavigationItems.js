import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
    
        <ul className="navigationItems">
            <NavigationItem link="/startpage" cname="menu">Start sida</NavigationItem>

            <NavigationItem link="/recepter" cname="menu">Recepter</NavigationItem>
                <ul>
                    <NavigationItem link="/recepter/mat" cname="menu">Mat</NavigationItem>
                    <NavigationItem link="/recepter/dryck" cname="menu">Dryck</NavigationItem>
                    <NavigationItem link="/recepter/smoothie" cname="menu">Smoothie</NavigationItem>
                    <NavigationItem link="/recepter/dessert" cname="menu">Dessert</NavigationItem>
                    <NavigationItem link="/recepter/popular" cname="menu">Populära</NavigationItem>
                </ul>
            <NavigationItem link="/login" cname="sidebar">Login</NavigationItem>
        </ul>
);

export default navigationItems;