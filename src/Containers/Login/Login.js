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
<<<<<<< HEAD
            {loginContext.isLogged && <p class="loginName">You are logged in as: {enteredUserName}</p>}
            <h2>Please login to continue..</h2>
            <form onSubmit={loginHandler} >                
                <div className="login">
                    <label htmlFor="username">Username</label>
=======
            <form onSubmit={loginHandler} >                
                <div className="login">
                    <h2>Vänligen logga in för att se dina favorit recepter</h2>
                    <label htmlFor="username">Användarnamn:</label>
>>>>>>> a63191a9086fab3e65f1029006c85a17b3d1008a
                    <input type="text" id="username" value={enteredUserName} 
                            onChange={event => setEnteredUserName(event.target.value)} />
               
                    <label htmlFor="password">Lösenord:</label>           
                    <input type="password" id="password" value={enteredPassword} 
<<<<<<< HEAD
                            onChange={event => setEnteredPassword(event.target.value)} />  
=======
                            onChange={event => setEnteredPassword(event.target.value)} />
                    <button type="submit" >Logga in</button>        
>>>>>>> a63191a9086fab3e65f1029006c85a17b3d1008a
                </div> 
                <button class="loginButton" type="submit" >Sign in</button> 
            </form>            
        </section>
    )
}

export default login;
