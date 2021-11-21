import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal';
import Topbanner from './Topbanner';
import CoinImg from '../img/1.jpg';
import galaxy from '../img/galaxy.gif';
import magicdoge from '../img/magicdoge.gif';



class CoinDetails extends Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
			coinsDetails: [],
			resData: this.props.location.state.data,
			paramID: '',
			show: false,
			addVoteData: {
				id: "",
				count: "",
			},
			apiLocalURL : 'http://localhost:8000/api/',
			apiPublicURL : 'https://listingapp.cryptolisting.com/admin/api/',
			localImgPath : 'http://localhost:8000/storage/',
			publicImgPath : 'https://listingapp.cryptolisting.com/admin/storage/app/public/',
		};
	}
	
	componentDidMount() {
		document.title = "Coin Details :: Cryptolisting";
		this.state.paramID = this.props.match.params.id;
		axios.post( this.state.apiLocalURL+'getCoinDetails', {
			id : this.state.paramID
		}).then(res => {
			this.setState({
				coinsDetails: res.data
			});
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
		
		axios.post( this.state.apiLocalURL+"addVoteCount", {
			id,
			count,
		}).then((response) => {
			axios.post( this.state.apiLocalURL+'getCoinDetails', {
				id : this.state.paramID
			}).then(res => {
				this.setState({
					coinsDetails: res.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
            this.setState({
				show: false,
				addVoteData: { id, count },
            });
		}).catch((error) => {
            this.setState({isLoading:false})
            console.log(error.response);
		});
	};
	
	render() {
		const { addVoteData } = this.state;
		return (
			<div className="container" style={{width:"auto"}}>
				<Topbanner />
				<div className="col-lg-12 col-md-2 mb-4">
					<div className="col-lg-2 col-md-12 mb-4" style={{paddingTop:"30px"}}>
						<img src={galaxy} alt="loveswap" style={{height:"250px"}} />
					</div>
					<div className="col-lg-8 col-md-8 mb-4">
						<div id="titlebar" className="utf_listing_titlebar" style={{paddingTop:"27px"}}>
							<div className="utf_listing_titlebar_title">
								<h2>{this.state.coinsDetails.name} <span className="listing-tag">Test</span></h2>
								<ul className="listing_item_social">
									<li><a href="javascript:void(0)" className="now_open"> Votes : {this.state.coinsDetails.votes}</a></li>              
								</ul>
							</div>
						</div>
						<div id="utf_listing_overview" className="utf_listing_section">
							<div className="social-contact">
								<a href="javascript:void(0)" className="youtube-link"> Market Cap(USD) : {this.state.coinsDetails.market_cap} </a>
								<a href="javascript:void(0)" className="youtube-link"> Price(USD) : {this.state.coinsDetails.price} </a>
								<a href="javascript:void(0)" className="youtube-link"> Launch : {this.state.coinsDetails.launch}</a>
							</div>
							
							<h3 className="utf_listing_headline_part margin-top-30 margin-bottom-30">Description</h3>
							<p>{this.state.coinsDetails.description}</p>
							{/* Model for Edit Studnet Record */}
							<Modal title="Add Vote" onClose={ (event) => this.modalClose(event) } show={this.state.show} updateVote={this.updateVote}>
								<p>Are you sure to add your vote?</p>
							</Modal>
							<p style={{textAlign:"center"}}>
								<button onClick={() => this.modalOpen(this.state.coinsDetails.id,this.state.coinsDetails.votes) } className="button gray"> <i className="fa fa-rocket"></i> Votes </button>
							</p>
							<div className="social-contact">
								<a href={this.state.coinsDetails.website} className="facebook-link"><i className="fa fa-globe"></i> Website</a>
								<a href={this.state.coinsDetails.twitter} className="twitter-link"><i className="fa fa-twitter"></i> Twitter</a>
								<a href={this.state.coinsDetails.telegram} className="instagram-link"><i className="fa fa-telegram"></i> Telegram</a>
								<a href={this.state.coinsDetails.discord} className="linkedin-link"><i className="fa fa-discord"></i> Discord</a>
								<a href={this.state.coinsDetails.reddit} className="youtube-link"><i className="fa fa-reddit"></i> Reddit</a>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-2 mb-4" style={{paddingTop:"30px"}}>
						<img src={magicdoge} alt="loveswap" style={{height:"250px"}} />
					</div>
				</div>
			</div>
		);
	}
}

export default CoinDetails;