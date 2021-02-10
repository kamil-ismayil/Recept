import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
    
        <ul className="navigationItems">
            <NavigationItem class="menuButtons" link="/startpage" cname="menu">Start sida</NavigationItem>
            
            <p class="receptHeader">Recepter</p>
                {/* <ul> */}
                    <NavigationItem class="menuButtons" link="/recepter/mat" cname="menu">Mat</NavigationItem>
                    <NavigationItem class="menuButtons" link="/recepter/dryck" cname="menu">Dryck</NavigationItem>
                    <NavigationItem class="menuButtons" link="/recepter/smoothie" cname="menu">Smoothie</NavigationItem>
                    <NavigationItem class="menuButtons" link="/recepter/dessert" cname="menu">Dessert</NavigationItem>
                    <NavigationItem class="menuButtons" link="/recepter/popular" cname="menu">Populära</NavigationItem>
                    <NavigationItem class="menuButtons" link="/recepter/favorit" cname="menu">Favoriter</NavigationItem>
                {/* </ul> */}
            
        </ul>
);

export default navigationItems;