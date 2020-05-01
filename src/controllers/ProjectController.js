const knex = require('../database');

module.exports = {

	async index(request, response, next){
		try{

			const {user_id} = request.query;//recebe por parametro nomeado 

			const query = knex('projects')

			if(user_id){//se o user_if true
				query
					.where({user_id})//retorna onde id for igual {user_id :user_id}
					//trabalha com a tabela users quando verificado os ids das tabelas
					.join('users', 'users.id', '=', 'projects.user_id')
					.select(['projects.*','users.username'])
			}

			const results = await query;

			return response.json(results)
		}catch(error){
			next(error)
		}
	}

};