import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios"; 
import SimpleReactValidator from 'simple-react-validator';
import MomentInput from 'react-moment-input';

class Addcoin extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			symbol: '',
			market_cap: '',
			price: '',
			launch: '',
			chain: '',
			token_address: '',
			website: '',
			telegram: '',
			twitter: '',
			discord: '',
			reddit: '',
			logo: '',
			description: '',
		}
		this.validator = new SimpleReactValidator();
	}
	
	handleUserInput (e) {
		const isFile = e.target.type === 'file';
		let fieldValue;
		if(isFile){
			let files  = e.target.files;
			let reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onload = (e) => {
				let fieldValue = e.target.result;
			}
		}
		const name   = e.target.name;
		//const value  = e.target.value;
		//const value  = fieldValue;
		const value = isFile ? fieldValue : e.target.value;
		this.setState({[name]: value});
	}
	
	handleSubmit = event => {
		event.preventDefault();
		if (this.validator.allValid()) {
			const data = {
				name: this.state.name,
				symbol: this.state.symbol,
				market_cap: this.state.market_cap,
				price: this.state.price,
				launch: this.state.launch,
				chain: this.state.chain,
				token_address: this.state.token_address,
				website: this.state.website,
				telegram: this.state.telegram,
				twitter: this.state.twitter,
				discord: this.state.discord,
				reddit: this.state.reddit,
				logo: this.state.logo,
				description: this.state.description,
			}
			
			axios.post('http://localhost:8000/api/coins', { data }).then( res =>{
				console.log(res);
				console.log(res.data);
				window.location = "/success" //This line of code will redirect you once the submission is succeed
			})
		} else {
			this.validator.showMessages();
			// rerender to show messages for the first time
			// you can use the autoForceUpdate option to do this automatically`
			this.forceUpdate();
		}
		
	}
	
	render() {
		
		return (
			<div className="container margin-bottom-75">
				<div className="row">
					<div className="col-lg-12">
						<div id="utf_add_listing_part">     
							<form onSubmit = { this.handleSubmit } noValidate>
							<div className="add_utf_listing_section margin-top-45"> 
								<div className="utf_add_listing_part_headline_part">
									<h3><i className="fa fa-tag"></i> Coin info</h3>
								</div>  
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Name</h5>
										<input type="text" className="form-control" name="name" placeholder="Coin Name" value={this.state.name} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('name', this.state.name, 'required|alpha')}
									</div>
									<div className="col-md-6">
										<h5>Symbol</h5>                  
										<input type="text" name="symbol" id="symbol" placeholder="Symbol..." value={this.state.symbol} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('symbol', this.state.symbol, 'required|alpha')}
									</div>
								</div>   
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Market Cap in USD</h5>
										<input type="text" className="search-field" name="market_cap" id="market_cap" placeholder="Market Cap in USD" value={this.state.market_cap} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('market_cap', this.state.market_cap, 'required|currency')}
									</div>
									<div className="col-md-6">
										<h5>Price in USD</h5>                  
										<input type="text" name="price" id="price" placeholder="Price in USD" value={this.state.price} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('price', this.state.price, 'required|currency')}
									</div>
								</div>  
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Launch Date</h5>
										<input type="date" className="search-field" name="launch" id="launch" placeholder="Launch Date" value={this.state.launch} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('launch', this.state.launch, 'required|date')}
									</div>
									<div className="col-md-6">
										<h5>Chain</h5>
										<select name="chain" value={this.state.chain} onChange={(event) => this.handleUserInput(event)}>
											<option value="">Select</option>
											<option value="bsc">bsc</option>
											<option value="eth">eth</option>
											<option value="polkadot">polkadot</option>
											<option value="polygon">polygon</option>
										</select>
										{this.validator.message('chain', this.state.chain, 'required')}
									</div>
								</div> 	
								<div className="row with-forms">
									<div className="col-md-12">
										<h5>Token Contract Address</h5>
										<input type="text" className="search-field" name="token_address" id="token_address" placeholder="Token Contract Address" value={this.state.token_address} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('token_address', this.state.token_address, 'required|alpha_num')}
									</div> 
								</div> 
							</div>
							<div className="add_utf_listing_section margin-top-45"> 
								<div className="utf_add_listing_part_headline_part">
									<h3><i className="fa fa-list"></i> Links</h3>
								</div>              
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Website</h5>
										<input type="text" placeholder="Website" name="website" value={this.state.website} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('website', this.state.website, 'required|url')}
									</div>	
									<div className="col-md-6">
										<h5>Telegram</h5>
										<input type="text" placeholder="Telegram" name="telegram" value={this.state.telegram} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('telegram', this.state.telegram, 'required|url')}
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Twitter</h5>
										<input type="text" placeholder="Twitter" name="twitter" value={this.state.twitter} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('twitter', this.state.twitter, 'required|url')}
									</div>
									<div className="col-md-6">
										<h5>Discord</h5>
										<input type="text" placeholder="Discord" name="discord" value={this.state.discord} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('discord', this.state.discord, 'required|url')}
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Reddit</h5>
										<input type="text" placeholder="Reddit" name="reddit" value={this.state.reddit} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('reddit', this.state.reddit, 'required|url')}
									</div>
									<div className="col-md-6">
										<h5>Logo</h5>
										<input type="file" placeholder="Logo" name="logo" value={this.state.logo} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('logo', this.state.logo, 'required')}
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-12">
										<h5>Additional Information</h5>
										<textarea name="description" cols="40" rows="3" id="description" placeholder="Description..." spellcheck="true" onChange={(event) => this.handleUserInput(event)} >{this.state.description}</textarea>
										{this.validator.message('description', this.state.description, 'required')}
									</div> 									
								</div>
							</div>
							<button type="submit" className="button preview"><i className="fa fa-arrow-circle-right"></i> Add Coin</button> 
							</form>
						</div>
					</div>        
				</div>
			</div>
		);
	}
}

export default Addcoin;