exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').truncate().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ name: 'Dough' },
			{ name: 'Tomato Sauce' },
			{ name: 'Mozzarella cheese' },
			{ name: 'Bacon' },
			{ name: 'Fettuccine' },
			{ name: 'Onion' },
			{ name: 'Salt' },
			{ name: 'Pepper' },
			{ name: 'Polenta' },
			{ name: 'Cheese' }
		]);
	});
};
