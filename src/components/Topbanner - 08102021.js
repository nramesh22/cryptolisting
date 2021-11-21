import React, { Component } from 'react';
import Typed from 'react-typed';

class Topbanner extends Component {
	render() {
		return (
			<div className="search_container_block home_main_search_part main_search_block" style={{height: '120px'}}>
				<div className="main_inner_search_block">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2>Find Your Best <span style={{color:'#f71e94'}}><Typed
									strings={[
										'Coins',
										'coin1',
										'coin2']}
										typeSpeed={80}
										backSpeed={80}
										backDelay={4000}
										startDelay={1000}
										showCursor
										loop >
								</Typed></span></h2>
								<h4> Special discount today, all our advertising services at only $100/day! Bring in investorsAdvertsiement Banner</h4> 
							</div>
						</div>
					</div>
				</div>    
			</div>
		);
	}
}

export default Topbanner;