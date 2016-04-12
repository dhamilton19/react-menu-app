import {AppState} from 'simple-state-manager';
import {SubscriptionManager} from 'simple-subscription-manager';


export default class Service {

	static save() {
		fetch('/order', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...AppState.getState().order
			})
		}).then(response => {
			return response.json();
		}).then(json => {
			SubscriptionManager.publish('alert', json);
		});
	}

}
