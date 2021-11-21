import React, { Component } from 'react';
import Logo from '../img/cryptolisting-01.jpg';

class Header extends Component {
	render() {
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
								<a href="#dialog_signin_part" className="button border sign-in popup-with-zoom-anim"><i className="fa fa-sign-in"></i> Sign In</a> 
								<a href="/addcoin" className="button border with-icon"><i className="fa fa-star-o"></i> Add Coins</a>
							</div>
						</div>
						<div id="dialog_signin_part" className="zoom-anim-dialog mfp-hide">
							<div className="small_dialog_header">
								<h3>Sign In</h3>
							</div>
							<div className="utf_signin_form style_one">
								<ul className="utf_tabs_nav">
									<li className=""><a href="#tab1">Log In</a></li>
									<li><a href="#tab2">Register</a></li>
								</ul>
								<div className="tab_container alt"> 
									<div className="tab_content" id="tab1" style={{display:'none'}}>
										<form method="post" className="login">
											<p className="utf_row_form utf_form_wide_block">
												<label for="username">
													<input type="text" className="input-text" name="username" id="username" value="" placeholder="Username" />
												</label>
											</p>
											<p className="utf_row_form utf_form_wide_block">
												<label for="password">
													<input className="input-text" type="password" name="password" id="password" placeholder="Password"/>
												</label>
											</p>
											<div className="utf_row_form utf_form_wide_block form_forgot_part"> 
												<span className="lost_password fl_left"> <a href="javascript:void(0);">Forgot Password?</a> </span>
												<div className="checkboxes fl_right">
													<input id="remember-me" type="checkbox" name="check" />
													<label for="remember-me">Remember Me</label>
												</div>
											</div>
											<div className="utf_row_form">
												<input type="submit" className="button border margin-top-5" name="login" value="Login" />
											</div>
											<div className="utf-login_with my-3">
												<span className="txt">Or Login in With</span>
											</div>
											<div className="row">
												<div className="col-md-6 col-6">
													<a href="javascript:void(0);" className="social_bt facebook_btn mb-0"><i className="fa fa-facebook"></i> Facebook</a>
												</div>
												<div className="col-md-6 col-6">
													<a href="javascript:void(0);" className="social_bt google_btn mb-0"><i className="fa fa-google"></i> Google</a>
												</div>
											</div>
										</form>
									</div>
									<div className="tab_content" id="tab2" style={{display:'none'}}>
										<form method="post" className="register">
											<p className="utf_row_form utf_form_wide_block">
												<label for="username2">
													<input type="text" className="input-text" name="username" id="username2" value="" placeholder="Username" />
												</label>
											</p>
											<p className="utf_row_form utf_form_wide_block">
												<label for="email2">
													<input type="text" className="input-text" name="email" id="email2" value="" placeholder="Email" />
												</label>
											</p>
											<p className="utf_row_form utf_form_wide_block">
												<label for="password1">
													<input className="input-text" type="password" name="password1" id="password1" placeholder="Password" />
												</label>
											</p>
											<p className="utf_row_form utf_form_wide_block">
												<label for="password2">
													<input className="input-text" type="password" name="password2" id="password2" placeholder="Confirm Password" />
												</label>
											</p>
											<input type="submit" className="button border fw margin-top-10" name="register" value="Register" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>    
			</header>
		);
	}
}

export default Header;