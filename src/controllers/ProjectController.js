const knex = require('../database');

module.exports = {

	async index(request, response, next){
		try{
			//page recebe 1 como valor padrao caso nao exista este parametro
			const {user_id, page = 1} = request.query;//recebe por parametro nomeado 

			const query = knex('projects').limit(5).offset((page - 1) * 5)

			const countObj = knex('projects').count();//capturando o total de registros

			if(user_id){//se o user_if true
				query
				.where({user_id})//retorna onde id for igual {user_id :user_id}
				//trabalha com a tabela users quando verificado os ids das tabelas
				.join('users', 'users.id', '=', 'projects.user_id')
				.select(['projects.*','users.username'])
				.where('users.deleted_at', null)//traga quando este campo for null na tabela user
				//calcular o total de requitro do id referente	
				countObj
				.where({user_id})
			}

			const [count] = await countObj;
			response.header('X-Total_Count', count['count(*)']);

			const results = await query;

			return response.json(results)
		}catch(error){
			next(error)
		}
	},

	async create(request, response, next){
		try{

			const {title} = request.body;
			const user_id = request.headers.authorization;

			await knex('projects').insert({
				title,
				user_id

			});

			return response.status(201).send()

		}catch(error){
			next(error);
		}
	}

};