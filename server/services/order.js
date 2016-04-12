const config = require('../config');

const Db = require('json-db').Db;
Db.init({directory:config.directory});

module.exports = {

	save: function (data, callback) {

		if(data.name && data.starter && data.main) {
			const newData = {};
			newData[data.name] = data;
			Db.addToQueue(newData);

			callback({success: true});
		}
		else{
			callback({success: false});
		}
	}

};
