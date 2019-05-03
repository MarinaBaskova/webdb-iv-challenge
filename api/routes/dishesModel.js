const db = require('../../config/dbConfig');

module.exports = {
	find,
	findById,
	add,
	update,
	remove
};

function find() {
	return db('dishes');
}

function findById(id) {
	return db('dishes')
		.join('recipes', 'recipes.dish_id', 'dishes.id')
		.select('dishes.id', 'dishes.name', 'recipes.name')
		.where({ 'dishes.id': id })
		.first();
}

function add(dish) {
	return db('dishes').insert(dish, 'id').then(([ id ]) => {
		return findById(id);
	});
}

// function update(id, changes){
// return db('dishes')
// .where({id})
// }
