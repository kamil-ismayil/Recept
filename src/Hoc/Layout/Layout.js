import React from "react";
import classes from "./Layout.css";
import Header from "../../Components/Header/Header";
import NavigationItems from "../../Components/Navigation/NavigationItems";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Mainpage from "../../Containers/Mainpage/Mainpage";
import Aux from "../Aux_/Aux_";
import Navbar from "../../Components/Navbar/Navbar";
import Recepter from '../../Containers/Recipes/Recipes';
import Smoothie from '../../Containers/Smoothie/Smoothie';
import Popular from '../../Containers/Popular/Popular';
import Login from '../../Containers/Login/Login';
import Mat from '../../Containers/Mat/Mat';
import Drink from '../../Containers/Drink/Drink';
import Page from '../../Components/Page/Page';
import Dessert from '../../Containers/Dessert/Dessert';
import Favorit from '../../Containers/Favorit/Favorit';

const layout = (props) => {
	return (
		<Aux class="layoutContainer">
			{/* <Header class="header" /> */}
			<body class="mainContainer">
			<BrowserRouter className="routerMenu">
					{/* <Startpage /> */}
					<Navbar />
					<Switch>  	
						<Route path="/" exact component={Mainpage}/>
						<Route path="/startpage" exact component={Mainpage}/>
						<Route path="/recepter" exact component={Recepter}/>    
						<Route path="/login" exact component={Login}/>   
						
						<Route path="/recepter/favorit" exact component={Favorit}/>
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
				<div className="navmain"></div>
			</body>
		</Aux>
	);
};

export default layout;
