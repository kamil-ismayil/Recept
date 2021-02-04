import React from 'react';
import './Mat.css';
import NavigationItem from '../../Components/Navigation/NavigationItem/NavigationItem';

const mat = (props) =>(
    <div className="mat">
        <div className="">
            <h1>Måltider</h1>
            <ul>
                <NavigationItem link="/" cname="mal, menu">Förrätter</NavigationItem>
                <NavigationItem link="/" cname="mal, menu">Huvudrätter</NavigationItem>
                <NavigationItem link="/" cname="mal, menu">Frukost</NavigationItem>
                <NavigationItem link="/" cname="mal, menu">Lunch</NavigationItem>
                <NavigationItem link="/" cname="mal, menu">Middag</NavigationItem>
            </ul>
        </div>  

        <div className="">
            <h1>Ingredients</h1>
            <ul>
                <NavigationItem link="/" cname="ing, menu">Kyckling</NavigationItem>
                <NavigationItem link="/" cname="ing, menu">Lax</NavigationItem>
                <NavigationItem link="/" cname="ing, menu">Pasta</NavigationItem>
                <NavigationItem link="/" cname="ing, menu">Vegetariskt</NavigationItem>
            </ul>
        </div>  

    </div>

);

export default mat;