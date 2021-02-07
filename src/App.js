import React, { Component } from "react";
import "./App.css";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Recepter from './Containers/Recipes/Recipes';
import Startpage from './Containers/StartPage/Startpage';
import Smoothie from './Containers/Smoothie/Smoothie';
import Popular from './Containers/Popular/Popular';
import Login from './Containers/Login/Login';
import Mainpage from "./Containers/Mainpage/Mainpage";
import Mat from './Containers/Mat/Mat';
import Drink from './Containers/Drink/Drink';
import Page from './Components/Page/Page';
import Dessert from './Containers/Dessert/Dessert';

function App(){
		return (
			<div className="app">
				<BrowserRouter>
					<Startpage />
					
					<Switch>  	
						<Route path="/" exact component={Mainpage}/>
						<Route path="/startpage" exact component={Mainpage}/>
						<Route path="/recepter" exact component={Recepter}/>    
						<Route path="/login" exact component={Login}/>   
						
						<Route path="/recepter/mat" exact component={Mat}/>
						<Route path="/recepter/dryck" exact component={Drink}/>    
						<Route path="/recepter/smoothie" exact component={Smoothie}/>     
						<Route path="/recepter/dessert" exact component={Dessert}/>    
						<Route path="/recepter/popular" exact component={Popular}/>        

						<Route path="/recepter/dryck/:id" exact component={Page}/>        
						<Route path="/recepter/smoothie/:id" exact component={Page}/>        
						<Route path="/recepter/dessert/:id" exact component={Page}/>        
						<Route path="/recepter/popular/:id" exact component={Page}/>        
						<Route path="/recepter/mat/:id" exact component={Page}/>        
					</Switch>
				</BrowserRouter> 
			</div>
		);
	}

export default App;
