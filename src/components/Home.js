import React, { Component } from 'react';
import AdBannerImg from '../img/2.jpg';
import Topbanner from './Topbanner';
import Promoted from './Promoted';
//import Todayhot from './Todayhot';
import CoinsTab from './CoinsTab/CoinsTab';

class Home extends Component {
	componentDidMount(){
		document.title = "Welcome to Cryptolisting.com";
	}
	
	render() {
		return (
			<div>
				<Topbanner />
				<Promoted />
				<CoinsTab />
			</div>
		);
	}
}

export default Home;