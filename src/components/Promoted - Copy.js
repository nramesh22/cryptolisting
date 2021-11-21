import React, { Component } from 'react';
import axios from 'axios';
import CoinImg from '../img/1.jpg';

class Promoted extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			coins: []
		};
	}
	
	componentDidMount() {
		axios.get('http://localhost:8000/api/coins/')
		.then(res => {
			this.setState({
				coins: res.data
			});
		})
		.catch((error) => {
			console.log(error);
		})
	}
	
	DataTable() {
		return this.state.coins.map((res, i) => {
			return (
				<tr>
					<td>1</td>
					<td>{this.res.name}</td>
					<td>{this.res.name}</td>
					<td>{this.res.symbol}</td>
					<td>{this.res.chain}</td>
					<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
					<td><a href="coinlisting.html" className="button gray"> 355</a></td>
				</tr>
			);
		});
	}
  
	render() {
		return (
			<div className="col-lg-12 col-md-12 mb-4">
				<div className="utf_dashboard_list_box">
					<h4 style={{textAlign: 'center'}}>Promoted Coins</h4>
					<div className="dashboard-list-box table-responsive invoices with-icons">
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
								<tr>
									<td>1</td>
									<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={CoinImg} width="50" height="50" /></td>
									<td>Bull Run</td>
									<td>BR2</td>
									<td>BSC</td>
									<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
									<td><a href="coinlisting.html" className="button gray"> 355</a></td>
								</tr>
								<tr>
									<td>1</td>
									<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={CoinImg} width="50" height="50" /></td>
									<td>Bull Run</td>
									<td>BR2</td>
									<td>BSC</td>
									<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
									<td><a href="coinlisting.html" className="button gray"> 355</a></td>
								</tr>
								<tr>
									<td>1</td>
									<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={CoinImg} width="50" height="50" /></td>
									<td>Bull Run</td>
									<td>BR2</td>
									<td>BSC</td>
									<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
									<td><a href="coinlisting.html" className="button gray"> 355</a></td>
								</tr>
								<tr>
									<td>1</td>
									<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={CoinImg} width="50" height="50" /></td>
									<td>Bull Run</td>
									<td>BR2</td>
									<td>BSC</td>
									<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
									<td><a href="coinlisting.html" className="button gray"> 355</a></td>
								</tr>
								<tr>
									<td>1</td>
									<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={CoinImg} width="50" height="50" /></td>
									<td>Bull Run</td>
									<td>BR2</td>
									<td>BSC</td>
									<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
									<td><a href="coinlisting.html" className="button gray"> 355</a></td>
								</tr>
								<tr>
									<td>1</td>
									<td><img alt="" className="img-fluid rounded-circle shadow-lg" src={CoinImg} width="50" height="50" /></td>
									<td>Bull Run</td>
									<td>BR2</td>
									<td>BSC</td>
									<td><span className="badge badge-pill badge-primary text-uppercase">8 Days</span></td>
									<td><a href="coinlisting.html" className="button gray"> 355</a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Promoted;