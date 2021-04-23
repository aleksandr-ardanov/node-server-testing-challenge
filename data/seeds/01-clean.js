
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'alex'},
        {id: 2, name: 'mike'},
        {id: 3, name: 'jim'}
      ]);
    });
};
