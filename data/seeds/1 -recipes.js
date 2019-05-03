exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').truncate().then(function() {
		// Inserts seed entries
		return knex('recipes').insert([
			{ name: 'Pizza Margherita', dish_id: 1 },
			{ name: 'Carbonara', dish_id: 2 },
			{ name: 'Polenta', dish_id: 3 }
		]);
	});
};
