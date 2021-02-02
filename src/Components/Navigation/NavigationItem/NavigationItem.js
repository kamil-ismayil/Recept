import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationItem.css';

const navigationItem = (props) => (
    <div className="navigationItem">
        <li className={props.cname}>
            <NavLink to={props.link} style={{ textDecoration: 'none'}}>
                {props.children}
            </NavLink>
        </li>
    </div>
);

export default navigationItem; 