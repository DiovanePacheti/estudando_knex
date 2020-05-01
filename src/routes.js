const express = require('express');
const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController');
const routes = express.Router();




	//User
	routes.get('/user', UserController.index)
	routes.post('/user', UserController.create)
	routes.put('/user/:id', UserController.update)
	routes.delete('/user/:id', UserController.delete)
	//Projcts
	routes.get('/project', ProjectController.index)
	routes.post('/project', ProjectController.create)

module.exports = routes;