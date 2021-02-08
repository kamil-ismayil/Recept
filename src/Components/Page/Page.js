import React, { useEffect, useState, useContext } from 'react';
import Image from './Image/Image';
import Ingredient from './Ingredient/Ingredient';
import Method from './Method/Method';
import Description from './Description/Description';
import './Page.css';

const page = (props) => {
    
    return(
        <div class="recepiesPage">
            <section className="page">
                <div class="data"><Description data={props.location.state.info}/></div>
                <div className="image"><Image data={props.location.state.info}/></div>
                <div class="ingredient"><Ingredient data={props.location.state.info}/></div>
                <div class="method"><Method data={props.location.state.info}/></div>
            </section>
        </div>
    )
}

export default page;