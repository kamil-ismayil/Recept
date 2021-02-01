import React, { Component, useState } from 'react';
import Mainpage from '../Mainpage/Mainpage';
import './Login.css';

const login = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const loginHandler = (event) => {
        
        event.preventDefault();        
    }
    
    return (
        <section className="main-form">            
            <form onSubmit={loginHandler} >                
                <div className="login">
                    <h2>Please login to continue..</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={enteredUserName} 
                            onChange={event => setEnteredUserName(event.target.value)} />
                </div>
                <div className="login">
                    <label htmlFor="password">Password</label>           
                    <input type="password" id="password" value={enteredPassword} 
                            onChange={event => setEnteredPassword(event.target.value)} />
                    <button type="submit" >Sign in</button>        
                </div> 
            </form>            
        </section>
    )
}

export default login; 