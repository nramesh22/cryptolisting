import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal';
import axios from 'axios';
import Logo from '../img/cryptolisting-01.jpg';
import CoinImg from '../img/1.jpg';

import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(en);

class Todayhot extends Component {
	
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
		
		axios.get('http://localhost:8000/api/coinsApproved/')
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
			axios.get('http://localhost:8000/api/coinsApproved/')
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
						<td>
							<Link
								to={{
								pathname: `${res.chain}/${res.name}/${res.id}`,
								state: {
									data: res
								},
								}}
							>
							<img alt="" className="img-fluid rounded-circle shadow-lg" src={'http://localhost:8000/storage/coin_logo/'+ res.logo } width="50" height="50" />
							</Link>
						</td>
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
			<div className="col-md-12">
				<h4 className="headline margin-top-30 margin-bottom-40">Today hot</h4>
				<div className="style-1 element_tab">
					<ul className="utf_tabs_nav">
						<li className="active"><a href="#tab1b"> Normal</a></li>
					</ul>
					<div className="tab_container">
						<div className="tab_content" id="tab1b">
							<div className="col-lg-2 col-md-12 mb-4">
							</div>
							<div className="col-lg-8 col-md-12 mb-4">
								<div className="utf_dashboard_list_box" >
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
							<div className="col-lg-2 col-md-12 mb-4">
							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Todayhot;