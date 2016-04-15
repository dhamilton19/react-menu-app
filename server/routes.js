const ordersService = require('./services/orders');

module.exports = function (app, path) {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../www/index.html'));
    });

    app.post('/order', (req, res) => {
        ordersService.save(req.body, function (success) {
            res.send(success);
        });
    });

    app.get('/orders', (req, res) => {
        ordersService.getAll(function (response) {
            res.send(response);
        });
    });

};
