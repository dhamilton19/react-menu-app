import React, {Component} from 'react';

import Button from 'react-toolbox/lib/button';

import Service from '../../Service';

require('./styles.css');


export default class SaveButton extends Component {

	render() {
		return <Button className='save-button' label='Submit' raised primary onClick={this.handleClick}/>
	}

	handleClick = () => {
		Service.save();
	};

}
