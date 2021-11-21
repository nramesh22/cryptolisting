import React, { Component } from 'react';
import { Tabs } from 'react-simple-tabs-component';
import "./CoinsTab.css";
import Todayhot from '../Todayhot';
import NormalCoins from '../NormalCoins';
import PreSaleCoins from '../PreSaleCoins';
import NewCoins from '../NewCoins';
import AllTimeCoins from '../AllTimeCoins';

class CoinsTab extends Component {
	
	render() {

		// Tabs structure Array
		const tabs = [
			{
				label: 'Normal',
				Component: NormalCoins
			},
			{
				label: 'Today Hot',
				Component: Todayhot
			},
			{
				label: 'New',
				Component: NewCoins
			},
			{
				label: 'All Time Best',
				Component: AllTimeCoins
			},
			{
				label: 'Presale',
				Component: PreSaleCoins
			}
		]
		
		return (
			<div className="container" style={{width:'auto'}}>
				<div className="col-md-12">
					<h4 className="headline margin-top-30 margin-bottom-40"></h4>
					<Tabs tabs={tabs} /* Props */ />
				</div>
			</div>
		);
	}
}

export default CoinsTab;