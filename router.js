var express = require('express');
var app = express();

var eventRouter = express.Router();
eventRouter.get('/', function(req, res) { });
eventRouter.post('/', function(req, res) { });
eventRouter.get('/:id', function(req, res) { });
eventRouter.patch('/:id', function(req, res) { });
eventRouter.delete('/:id', function(req, res) { });
app.use('/events', eventRouter);

var shoplistRouter = express.Router();
shoplistRouter.get('/', function(req, res) { });
shoplistRouter.post('/', function(req, res) { });
shoplistRouter.get('/:id', function(req, res) { });
shoplistRouter.patch('/:id', function(req, res) { });
shoplistRouter.delete('/:id', function(req, res) { });
app.use('/shoplist', shoplistRouter); 

var sensorRouter = express.Router();
sensorRouter.get('/', function(req, res) { });
sensorRouter.post('/', function(req, res) { });
sensorRouter.get('/:id', function(req, res) { });
sensorRouter.patch('/:id', function(req, res) { });
sensorRouter.delete('/:id', function(req, res) { });
app.use('/sensors', sensorRouter); 

var budgetRouter = express.Router();
budgetRouter.get('/', function(req, res) { });
budgetRouter.post('/', function(req, res) { });
budgetRouter.get('/:id', function(req, res) { });
budgetRouter.patch('/:id', function(req, res) { });
budgetRouter.delete('/:id', function(req, res) { });
app.use('/budget', budgetRouter);

module.exports = app;