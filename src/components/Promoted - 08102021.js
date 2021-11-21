import React, { Component, useState } from 'react';
import Modal from './Modal/Modal';
import axios from 'axios';
import CoinImg from '../img/1.jpg';

import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);
 
class Promoted extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			coins: [],
			show: false,
			setShow: false,
			addVoteData: {
				id: "",
				count: "",
			},
			isLoading: false,
		};
	}
	
	componentDidMount() {
		
		axios.get('https://listingapp.cryptolisting.com/admin/api/coinsApproved/')
		.then(res => {
			this.setState({
				coins: res.data
			});
			//console.log(this.state.coins);
		})
		.catch((error) => {
			console.log(error);
		})
	}
	
	modalOpen = (id, count) => {
		this.setState({ 
			addVoteData: { id, count },
			show: true
		});
	}
	
	modalClose (e) {
		this.setState({ show: false });
	}
	
	updateVote = () => {
		let {
			id,
			count
        } = this.state.addVoteData;
		
		this.setState({
			isLoading: true,
        });
		
		axios.post("https://listingapp.cryptolisting.com/admin/api/addVoteCount", {
			id,
			count,
		}).then((response) => {
			axios.get('https://listingapp.cryptolisting.com/admin/api/coinsApproved/')
			.then(res => {
				this.setState({
					coins: res.data
				});
				//console.log(this.state.coins);
			})
			.catch((error) => {
				console.log(error);
			})
            this.setState({
				show: false,
				addVoteData: { id, count },
				isLoading:false,
            });
		}).catch((error) => {
            this.setState({isLoading:false})
            console.log(error.response);
		});
	};
  
	render() {
		const { addVoteData } = this.state;
		let coinsDetails = [];
		if (this.state.coins.length) {
			coinsDetails = this.state.coins.map((res, i) => {
				return (
					<tr>
						<td>{ i+1 }</td>
						<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={'https://listingapp.cryptolisting.com/admin/storage/app/public/coin_logo/'+ res.logo } width="50" height="50" /></td>
						<td>{res.name}</td>
						<td>{res.symbol}</td>
						<td>{res.chain}</td>
						<td><span className="badge badge-pill badge-primary text-uppercase"><ReactTimeAgo date={res.launch} /></span></td>
						<td><button onClick={() => this.modalOpen(res.id,res.votes) } className="button gray"> {res.votes} </button></td>
					</tr>
				);
			});
		}
		
		return (
			<div className="col-lg-12 col-md-12 mb-4">
				<div className="utf_dashboard_list_box">
					<h4 style={{textAlign: 'center'}}>Promoted Coins</h4>
					<div className="dashboard-list-box table-responsive invoices with-icons">
						{/* Model for Edit Studnet Record */}
						<Modal title="Add Vote" onClose={ (event) => this.modalClose(event) } show={this.state.show} updateVote={this.updateVote}>
							<p>Are you sure to add your vote?</p>
						</Modal>
	  
						<table className="table table-hover">
							<thead>
								<tr>
									<th>#</th>
									<th>Image</th>
									<th>Coin name</th>
									<th>Symbol</th>
									<th>Chain</th>
									<th>Launch</th>
									<th>Votes</th>
								</tr>
							</thead>
							<tbody>
								{coinsDetails}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Promoted;