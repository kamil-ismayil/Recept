import React, { Component } from "react";
import "./App.css";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Startpage from './Containers/StartPage/Startpage';
import Recipes from './Containers/Recipes/Recipes';
import Favorites from './Containers/Favorites/Favorites';
import Login from './Containers/Login/Login';
import NavigationItem from './Components/Navigation/NavigationItem/NavigationItem';

function App(){
		return (
			<BrowserRouter>
				<Startpage />
				<Switch>  	
					<Route path="/recipes" exact component={Recipes}/>
					<Route path="/favorites" exact component={Favorites}/>    
					<Route path="/login" exact component={Login}/>        
				</Switch>
			</BrowserRouter> 
		);
	}


export default App;
