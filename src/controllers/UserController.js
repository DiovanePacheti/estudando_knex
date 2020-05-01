const knex = require('../database');

module.exports ={

	async index(request, response){

		const user = await knex('users').select('*');

		return response.json(user);

	},

	async create(request, response, next){
		
		try{
			const {username} = request.body;

			const id = await knex('users').insert({
				username
			});
			return response.status(201).send();//status 201 creado sucesso e um send vazio
		}catch(error){
			next(error);
		}
	},

	async update(request, response, next){
		try{
			const {username} = request.body;
			const id = request.headers.authorization;

			await knex('users').update({username}).where('id',id);

			return response.send()
		}catch(error){
			next(error);
		}
	},

	async delete(request, response, next){
		try{

			const id = request.headers.authorization;

			await knex('users').where('id',id).delete();

			return response.status().send();

		}catch(error){
			next(error); 
		}
	}

};