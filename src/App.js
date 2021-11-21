import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
import { render } from 'react-dom';

import './App.css';

import './css/stylesheet.css';
import './css/mmenu.css';
import './css/style.css';
import './components/FontawesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Addcoin from './components/Addcoin';
import Success from './components/Success';
import CoinDetails from './components/CoinDetails';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component{
	render() {
		return (
			<Router>
			<div className="App">
				<div id="main_wrapper">
					<Header />
					<div className="clearfix"></div>
					<Switch>
						<Route exact path='/' component={Home} />
						<ProtectedRoute exact path='/addcoin' component={Addcoin} />
						<Route exact path='/success' component={Success} />
						<Route exact path='/:chain/:name/:id' component={CoinDetails} />
					</Switch>
				</div>
				<Footer />
			</div>
			</Router>
		);
	}
}

export default App;
