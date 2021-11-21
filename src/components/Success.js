import React, { Component } from 'react';

class Success extends Component {
	render() {
		return (
			<div className="container">
				<div className="row utf_sticky_main_wrapper">
					<div className="col-lg-12 col-md-12">
						<div id="utf_listing_overview" className="utf_listing_section">
							<h3 className="utf_listing_headline_part margin-top-30 margin-bottom-30">Coin added Successfully</h3>
							<p>Your coin will be listed in our website as soon as after admin approval. Thanks you!</p>
							<div className="social-contact">
								<a href="/" className="facebook-link"><i className="fa fa-arrow-left"></i> Back to Home</a>
								<a href="/addcoin" className="twitter-link"><i className="fa fa-plus"></i> Add more coins</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Success;