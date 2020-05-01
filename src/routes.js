const express = require('express');
const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController');
const routes = express.Router();



routes
	//User
	.get('/user', UserController.index)
	.post('/user', UserController.create)
	.put('/user', UserController.update)
	.delete('/user', UserController.delete)
	//Projcts
	.get('/project', ProjectController.index)
	.post('/project', ProjectController.create)

module.exports = routes;