
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          title:"Meu Projeto 1"
          user_id:1,
        },
        {
          title:"Meu Projeto 2"
          user_id:1,
        },
        {
          title:"Meu Projeto 3"
          user_id:2,
        }
      ]);
    });
};
