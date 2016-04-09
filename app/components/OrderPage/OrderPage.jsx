import React, {Component} from 'react';

import menu from '../../menu';

import MenuSection from '../MenuSection';
import Input from 'react-toolbox/lib/input';
import RadioGroupField from '../RadioGroupField';
import SaveButton from '../SaveButton';

require('./styles.css');

import {AppState} from 'simple-state-manager/lib';

const questions = [
	'Please choose a starter:',
	'Please choose a main:',
	'Please choose a dessert:'
];


export default class OrderPage extends Component {

	componentWillMount() {
		AppState.connect(this, 'order');
	}

	render() {
		return (
			<div>
				<MenuSection menu={menu}/>
				<section className='order'>
					<Input type='text' label='Please enter your full name' name='name' value={this.state.order.name}
						   onChange={this.handleChange.bind(this, 'name')}/>
					<RadioGroupField question={questions[0]} options={menu.starters}
									 onChange={this.handleChange.bind(this, 'starter')}
									 value={this.state.order.starter}/>
					<RadioGroupField question={questions[1]} options={menu.mains}
									 onChange={this.handleChange.bind(this, 'main')} value={this.state.order.main}/>
					<RadioGroupField question={questions[2]} options={menu.desserts}
									 onChange={this.handleChange.bind(this, 'dessert')}
									 value={this.state.order.dessert}/>
					<SaveButton />
				</section>
			</div>
		)
	}

	handleChange = (name, value) => {
		const newOrder = {
			order: {
				...this.state.order,
				[name]: value
			}
		};

		const newState = {
			...this.state,
			...newOrder
		};

		this.updateState(newState);
	};

	updateState(newState) {
		this.setState(newState);
		AppState.setState({...newState});
	}

}
