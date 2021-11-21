import React, { Component } from 'react';
import { connect } from "react-redux";
import SocialModal from './Modal/SocialModal';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import Logo from '../img/cryptolisting-01.jpg';

import { userActions } from '../_actions';
		
class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			apiLocalURL : 'http://localhost:8000/api/',
			apiPublicURL : 'https://listingapp.cryptolisting.com/admin/api/',
		};
	}
	
	responseFacebook = (response) => {
		console.log(response);
		//Send post data to Backend
		axios.post( this.state.apiLocalURL+"checkUserFBData", { response }).then((res) => {
			console.log(res.data[0]);
			this.props.login(res.data[0]);
		}).catch((error) => {
            console.log(error.res);
		});
		this.setState({ show: false });
	}
	
	responseGoogle = (response) => {
		//console.log(response.profileObj);
		axios.post( this.state.apiLocalURL+"checkUserGoogleData", { response }).then((res) => {
			console.log(res.data[0]);
			this.props.login(res.data[0]);
		}).catch((error) => {
            console.log(error.res);
		});
		this.setState({ show: false });
	}
	
	modalOpen = () => {
		this.setState({ 
			show: true
		});
	}
	
	logoutUser (e) {
		e.preventDefault();
		this.props.logout();
	}
	
	modalClose (e) {
		this.setState({ show: false });
	}
	
	render() {
		const { user, loggingIn } = this.props;
		
		if(user){
			return (
				<header id="header_part" className="fullwidth"> 
					<div id="header">
						<div className="container"> 
							<div className="utf_left_side"> 
								<div id="logo"> <a href="index-2.html"><img src={Logo} alt="" /></a> </div>
								<div className="mmenu-trigger">
									<button className="hamburger utfbutton_collapse" type="button">
										<span className="utf_inner_button_box">
											<span className="utf_inner_section"></span>
										</span>
									</button>
								</div>
								<nav id="navigation" className="style_one">
									<ul id="responsive">
										<li><a className="current" href="/">Home</a></li>			  
										<li>
											<a href="#">Advertise</a>
											<ul>
												<li><a href="#">Promoted Slots</a></li>
												<li><a href="#">Banner Ads</a></li>	
											</ul>
										</li>
									</ul>
								</nav>
								<div className="clearfix"></div>
							</div>
							<div className="utf_right_side">
								<div className="header_widget"> 
									<a className="button border sign-in popup-with-zoom-anim"> Hi, {user.name}</a> 
									<a href="/addcoin" className="button border with-icon"><i className="fa fa-star-o"></i> Add Coins</a>
									<a onClick={(event) => this.logoutUser(event) } className="button border with-icon"><i className="fa fa-sign-out"></i> Logout</a>
								</div>
							</div>
						</div>
					</div>    
				</header>
			);
		}
		
		return (
			<header id="header_part" className="fullwidth"> 
				<div id="header">
					<div className="container"> 
						<div className="utf_left_side"> 
							<div id="logo"> <a href="index-2.html"><img src={Logo} alt="" /></a> </div>
							<div className="mmenu-trigger">
								<button className="hamburger utfbutton_collapse" type="button">
									<span className="utf_inner_button_box">
										<span className="utf_inner_section"></span>
									</span>
								</button>
							</div>
							<nav id="navigation" className="style_one">
								<ul id="responsive">
									<li><a className="current" href="/">Home</a></li>			  
									<li>
										<a href="#">Advertise</a>
										<ul>
											<li><a href="#">Promoted Slots</a></li>
											<li><a href="#">Banner Ads</a></li>	
										</ul>
									</li>
								</ul>
							</nav>
							<div className="clearfix"></div>
						</div>
						<div className="utf_right_side">
							<div className="header_widget"> 
								<a onClick={() => this.modalOpen() } className="button border sign-in popup-with-zoom-anim"><i className="fa fa-sign-in"></i> Sign In</a> 
							</div>
						</div>
					</div>
					{/* Model for Edit Studnet Record */}
					<SocialModal title="Sign In" onClose={ (event) => this.modalClose(event) } show={this.state.show} >
						<FacebookLogin
							appId="3945752315526634"
							autoLoad={false}
							fields="name,email,picture"
							callback={this.responseFacebook}
							render={renderProps => (
								<button onClick={renderProps.onClick} className="button" style={{backgroundColor: '#3578e5', width:'100%'}} > <i className="fa fa-facebook"></i> Login using Facebook</button>
							)}
						/>
						<p></p>
						<GoogleLogin
							clientId="156463993737-aenglg2mqignet4ugqdrirop0inki9le.apps.googleusercontent.com"
							render={renderProps => (
								<button onClick={renderProps.onClick} className="button" style={{width:'100%'}} > <i className="fa fa-google"></i> Login using Google </button>
							)}
							buttonText="Login"
							onSuccess={this.responseGoogle}
							onFailure={this.responseGoogle}
							cookiePolicy={'single_host_origin'}
						/>
					</SocialModal>
				</div>    
			</header>
		);
	}
}

function mapState(state) {
    const { loggingIn } = state.authentication;
	const { authentication } = state;
    const { user } = authentication;
    return { user, loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedHeader = connect(mapState, actionCreators)(Header);
//export default { connectedHeader as Header };

export default connectedHeader;