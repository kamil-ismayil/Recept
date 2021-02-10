import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {LoginContext} from '../../Context/login-context';
import Mainpage from '../Mainpage/Mainpage';
import './Login.css';

const login = (props) => {
    const loginContext = useContext(LoginContext);
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const loginHandler = (event) => {
        loginContext.login(enteredUserName, enteredPassword);
        //console.log("Login -> :" + JSON.stringify(loginContext.data));
        event.preventDefault();        
    }
    
    return (
        <section className="main-form">            
            {loginContext.isLogged && <p class="loginName">You are logged in as: {enteredUserName}</p>}
            <h2>Please login to continue..</h2>
            <form onSubmit={loginHandler} >                
                <div className="login">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={enteredUserName} 
                            onChange={event => setEnteredUserName(event.target.value)} />
                </div>
                <div className="login">
                    <label htmlFor="password">Password</label>           
                    <input type="password" id="password" value={enteredPassword} 
                            onChange={event => setEnteredPassword(event.target.value)} />  
                </div> 
                <button class="loginButton" type="submit" >Sign in</button> 
            </form>            
        </section>
    )
}

export default login;
