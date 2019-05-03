exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipe_ingredients').truncate().then(function() {
		// Inserts seed entries
		return knex('recipe_ingredients').insert([
			{ recipe_id: 1, ingredient_id: 1, quantity: 1.5 },
			{ recipe_id: 1, ingredient_id: 2, quantity: 0.5 },
			{ recipe_id: 1, ingredient_id: 3, quantity: 0.66 },
			{ recipe_id: 2, ingredient_id: 4, quantity: 0.22 }, // RECIPE 2
			{ recipe_id: 2, ingredient_id: 5, quantity: 0.88 },
			{ recipe_id: 2, ingredient_id: 6, quantity: 1.32 },
			{ recipe_id: 2, ingredient_id: 7, quantity: 0.35 },
			{ recipe_id: 2, ingredient_id: 8, quantity: 0.31 },
			{ recipe_id: 2, ingredient_id: 10, quantity: 0.73 },
			{ recipe_id: 3, ingredient_id: 9, quantity: 0.92 } // RECIPE 3
		]);
	});
};
