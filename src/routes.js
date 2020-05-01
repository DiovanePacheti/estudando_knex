const express = require('express');

const UserController = require('./controllers/UserController');
const routes = express.Router();



routes
	//User
	.get('/user', UserController.index)
	.post('/user', UserController.create);

module.exports = routes;