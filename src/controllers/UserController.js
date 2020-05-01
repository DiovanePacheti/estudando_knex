const knex = require('../database');

module.exports ={

	async index(request, response){

		const user = await knex('users').select('*');

		return response.json(user);

	},

	async create(request, response){

		const {username} = request.body;

		const id = await knex('users').insert({
			username
		});

		return response.json();
	}

};