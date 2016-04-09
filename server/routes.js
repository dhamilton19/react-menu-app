const ordersService = require('./services/order');

module.exports = function (app, path) {

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../www/index.html'));
	});

	app.post('/order', (req, res) => {
		ordersService.save(req.body, function(error){
			res.send({success: !error});
		});
	});

};
