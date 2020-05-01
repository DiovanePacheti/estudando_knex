const knex = require('../database');

module.exports ={

	async index(request, response){

		const user = await knex('users').select('*');

		return response.json(user);

	}

};