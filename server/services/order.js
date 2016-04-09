const config = require('./../config');

const Firebase = require('firebase');

const ref = new Firebase(config.firebaseUrl);

module.exports = {

	save: function (data, callback) {
		ref.child('orders').push(data, callback);
	}

};
