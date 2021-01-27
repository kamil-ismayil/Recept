import React, { Component } from "react";
import "./App.css";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Startpage from './Containers/StartPage/Startpage';

class App extends Component {
	render() {
		return (
			<div className="App">
                <BrowserRouter>
                <Switch>  
                    <Route path="/" exact component={Startpage}/>    
					<Route path="/recipes" exact component={Startpage}/>    
					<Route path="/favorites" exact component={Startpage}/>    
					<Route path="/login" exact component={Startpage}/>    
                </Switch>
                </BrowserRouter> 
            </div>
		);
	}
}

export default App;
