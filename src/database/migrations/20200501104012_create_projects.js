
exports.up = knex => knex.schema.createTable('projects', table => {
  	table.increments('id')
  	table.text('title')
  	
  	// -- relacionamento  (1, n)
  	table.integer('user_id')//o campo user_id 
  		.references('users.id')//faz referencia ao id da tabela users "users.id"
  		.notNullable()//o campo na pode ser null
  		.onDelete('CASCADE')//retringe quando o usuario for deletado esta açao ocorra em cascata ao projetos relacionados a ele

  	table.timestamps(true, true)
  })


exports.down = knex => knex.schema.dropTable('projects');


