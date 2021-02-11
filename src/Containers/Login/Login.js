import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {LoginContext} from '../../Context/login-context';
import './Login.css';

const login = (props) => {
    const loginContext = useContext(LoginContext);
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const loginHandler = (event) => {
        loginContext.login(enteredUserName, enteredPassword);
        event.preventDefault();        
    }
    
    return (
        <section className="main-form">            
            <form onSubmit={loginHandler} >                
                <div className="login">
                    <h2>Vänligen logga in för att se dina favorit recepter</h2>
                    <label htmlFor="username">Användarnamn:</label>
                    <input type="text" id="username" value={enteredUserName} 
                            onChange={event => setEnteredUserName(event.target.value)} />
               
                    <label htmlFor="password">Lösenord:</label>           
                    <input type="password" id="password" value={enteredPassword} 
                            onChange={event => setEnteredPassword(event.target.value)} />
                          
                </div> 
                <button class="loginButton" type="submit" >Logga in</button>  
            </form>            
        </section>
    )
}

export default login;
