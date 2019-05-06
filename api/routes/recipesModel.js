const db = require('../../config/dbConfig');

module.exports = {
	find,
	add
};

function find() {
	return db('recipes');
}

function findById(id) {
	return db('recipes')
		.join('dishes', 'recipes.dish_id', 'dishes.id')
		.select('recipes.id', 'recipes.name', 'dishes.name')
		.first();
}

function add(recipe) {
	return db('recipes').insert(recipe, 'id').then(([ id ]) => {
		return findById(id);
	});
}
