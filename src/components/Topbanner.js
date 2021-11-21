import React, { Component } from 'react';
import Typed from 'react-typed';
import loveswap from '../img/loveswap.gif';
import rewardscoin600 from '../img/rewardscoin600.gif';
import galaxy from '../img/galaxy.gif';
import magicdoge from '../img/magicdoge.gif';

class Topbanner extends Component {
	render() {
		return (
			<div>
				<div className="col-md-12">
					<div className="col-lg-2 col-md-12 mb-4">
					</div>
					<div className="col-lg-8 col-md-12 mb-4" style={{textAlign:"center"}}>
						<img src={loveswap} alt="loveswap" />
					</div>
					<div className="col-lg-2 col-md-12 mb-4">
					</div>
				</div>
				<div className="col-md-12" style={{paddingTop:"20px"}}>
					<div className="col-lg-4 col-md-12 mb-4" style={{textAlign:"center"}}>
						<img src={rewardscoin600} alt="loveswap" />
					</div>
					<div className="col-lg-4 col-md-12 mb-4" style={{textAlign:"center"}}>
						<img src={galaxy} alt="loveswap" />
					</div>
					<div className="col-lg-4 col-md-12 mb-4" style={{textAlign:"center"}}>
						<img src={magicdoge} alt="loveswap" />
					</div>
				</div>
			</div>
		);
	}
}

export default Topbanner;