import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios"; 
import SimpleReactValidator from 'simple-react-validator';
import Moment from 'react-moment';
import bsc_chain from '../img/bsc_chain.png';

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
			email: '',
			username: '',
			password: '',
			cpassword: '',
			apiLocalURL : 'http://localhost:8000/api/',
			apiPublicURL : 'https://listingapp.cryptolisting.com/admin/api/',
		}
		this.validator = new SimpleReactValidator({
			validators: {
				dateFormat: {  // name the rule
					message: 'The :attribute must be a valid date format(DD-MM-YYYY)',
					rule: (val, params, validator) => {
						return validator.helpers.testRegex(val,/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i)
					},
					messageReplace: (message, params) => message.replace(':values', this.helpers.toSentence(params)),  // optional
					required: true  // optional
				},
				/* FileUpload : {
					message: 'The :attribute must not be empty',
					rule: (val, params, validator) => {
						return val != '';
					},
					messageReplace: (message, params) => message.replace(':values', this.helpers.toSentence(params)),  // optional
					required: true  // optional
				}, */
				confirmpwd : {
					message: 'The :attribute must be match to password',
					rule: (val, params, validator) => {
						return val === this.state.password;
					},
					messageReplace: (message, params) => message.replace(':values', this.helpers.toSentence(params)),  // optional
					required: true  // optional
				}
			}
		});
	}
	
	componentDidMount(){
		document.title = "Add Coin :: Cryptolisting";
	}

	
	handleUserInput (e) {
		
		const name  = e.target.name;
		const value = e.target.value;
		
		this.setState({[name]: value});
		console.log(name);
	}
	
	handleFileInput (e) {
		
		let files  = e.target.files;
		let reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = (e) => {
			const name  = 'logo';
			const value = e.target.result;
			this.setState({[name]: value});
		}
		
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
				//logo: this.state.logo,
				description: this.state.description,
				email: this.state.email,
				username: this.state.username,
				password: this.state.password,
				cpassword: this.state.cpassword,
			}
			
			axios.post( this.state.apiPublicURL+'coins', { data, file : this.state.logo }).then( res =>{
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
							<form onSubmit = { this.handleSubmit } >
							<div className="add_utf_listing_section margin-top-45"> 
								<div className="utf_add_listing_part_headline_part">
									<h3><i className="fa fa-tag"></i> Coin info</h3>
								</div>  
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Name</h5>
										<input type="text" className="form-control" name="name" placeholder="Ex : Bitcoin" value={this.state.name} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('name', this.state.name, 'required|alpha')}
									</div>
									<div className="col-md-6">
										<h5>Symbol</h5>                  
										<input type="text" name="symbol" id="symbol" placeholder="Ex : BTC" value={this.state.symbol} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('symbol', this.state.symbol, 'required')}
									</div>
								</div>   
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Market Cap in USD</h5>
										<input type="text" className="search-field" name="market_cap" id="market_cap" placeholder="Ex : 150000" value={this.state.market_cap} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('market_cap', this.state.market_cap, 'required|currency')}
									</div>
									<div className="col-md-6">
										<h5>Price in USD</h5>                  
										<input type="text" name="price" id="price" placeholder="Ex : 00.6" value={this.state.price} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('price', this.state.price, 'required|currency')}
									</div>
								</div>  
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Launch Date</h5>
										<input type="date" className="search-field" name="launch" id="launch" placeholder="Launch Date" value={this.state.launch} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('launch', this.state.launch, 'required|dateFormat')}
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
										<input type="text" className="search-field" name="token_address" id="token_address" placeholder="Enter Token Address" value={this.state.token_address} onChange={(event) => this.handleUserInput(event)} />
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
										<input type="text" placeholder="Ex : www.bitcoin.com" name="website" value={this.state.website} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('website', this.state.website, 'required|url')}
									</div>	
									<div className="col-md-6">
										<h5>Telegram</h5>
										<input type="text" placeholder="Ex : https://t.me/bitcoin.com" name="telegram" value={this.state.telegram} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('telegram', this.state.telegram, 'required|url')}
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Twitter</h5>
										<input type="text" placeholder="Ex : https://twitter.com" name="twitter" value={this.state.twitter} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('twitter', this.state.twitter, 'required|url')}
									</div>
									<div className="col-md-6">
										<h5>Discord</h5>
										<input type="text" placeholder="Ex : https://discord.com/" name="discord" value={this.state.discord} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('discord', this.state.discord, 'required|url')}
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Reddit</h5>
										<input type="text" placeholder="Ex : https://www.reddit.com/" name="reddit" value={this.state.reddit} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('reddit', this.state.reddit, 'required|url')}
									</div>
									<div className="col-md-6">
										<h5>Logo</h5>
										<input type="file" name="logo" accept=".jpg,.png" onChange={(event) => this.handleFileInput(event)} />
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-12">
										<h5>Additional Information</h5>
										<textarea name="description" cols="40" rows="3" id="description" placeholder="Ex : bitcoin is the decentralized digital currency" spellcheck="true" onChange={(event) => this.handleUserInput(event)} >{this.state.description}</textarea>
										{this.validator.message('description', this.state.description, 'required')}
									</div> 									
								</div>
							</div>
							<div className="add_utf_listing_section margin-top-45"> 
								<div className="utf_add_listing_part_headline_part">
									<h3><i className="fa fa-user"></i> Sign Up</h3>
								</div>              
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Email</h5>
										<input type="text" placeholder="Email ID" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('email', this.state.email, 'required|email')}
									</div>	
									<div className="col-md-6">
										<h5>Username</h5>
										<input type="text" placeholder="Username" name="username" value={this.state.username} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('username', this.state.username, 'required|alpha_num')}
									</div>
								</div>
								<div className="row with-forms">
									<div className="col-md-6">
										<h5>Password</h5>
										<input type="password" placeholder="Password" name="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('password', this.state.password, 'required')}
									</div>
									<div className="col-md-6">
										<h5>Confirm Password</h5>
										<input type="password" placeholder="Confirm Password" name="cpassword" value={this.state.cpassword} onChange={(event) => this.handleUserInput(event)} />
										{this.validator.message('confirm password', this.state.cpassword, 'required|confirmpwd')}
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