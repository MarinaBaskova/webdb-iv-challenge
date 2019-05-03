exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('instructions_steps').truncate().then(function() {
		// Inserts seed entries
		return knex('instructions_steps').insert([
			{ description: 'Take 1/2 dough', recipe_id: 1 },
			{ description: '1/4 cup tomato sauce', recipe_id: 1 },
			{ description: '8 ounces mozzarella cheese', recipe_id: 1 },
			{ description: 'Cook bacon over medium heat until crisp', recipe_id: 2 },
			{ description: 'Cook fettuccine', recipe_id: 2 },
			{ description: 'Add onion to drippings in skillet', recipe_id: 2 },
			{ description: 'Stir cheese', recipe_id: 2 },
			{ description: 'Add salt and pepper', recipe_id: 2 },
			{ description: 'Add bacon into sauce', recipe_id: 2 },
			{ description: 'Boil 4 cups water', recipe_id: 3 },
			{ description: 'Add salt and pepper', recipe_id: 3 },
			{ description: 'Gradually whisk in polenta', recipe_id: 3 },
			{
				description: 'Reduce heat to medium-low and cook until tender and thickened but still creamy',
				recipe_id: 3
			},
			{ description: 'Stirring often, about 30 minutes', recipe_id: 3 }
		]);
	});
};
