import React, {Component} from 'react';

import {SubscriptionManager} from 'simple-subscription-manager';

require('./styles.css');


export default class Alert extends Component {

	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		SubscriptionManager.subscribe(this, 'alert');
	}

	on(data) {
		if (data.alert) {
			this.setState(data.alert);
			window.setTimeout(() => {
				this.setState({success: null});
			}, 2000);
		}
	}

	render() {
		let alert;
		if (this.state.success === true) {
			alert = <div className='alert success'>Submitted successfully</div>;
		}
		else if (this.state.success === false) {
			alert = <div className='alert fail'>Error, something went wrong</div>;
		}
		else {
			return null;
		}
		return alert;
	}

}
