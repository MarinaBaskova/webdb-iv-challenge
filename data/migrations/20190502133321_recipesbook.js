exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('dishes', (table) => {
			table.increments();
			table.string('name', 128).notNullable().unique();
		})
		.createTable('recipes', (table) => {
			table.increments();
			table.string('name', 128).notNullable().unique();

			table
				.integer('dish_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('dishes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('instructions_steps', (table) => {
			table.increments();
			table.string('description', 128).notNullable();
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('ingredients', (table) => {
			table.increments();
			table.string('name', 128).notNullable();
		})
		.createTable('recipe_ingredients', (table) => {
			table.increments();
			table.decimal('quantity', 8, 2).notNullable();
			table
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

			table
				.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('dishes')
		.dropTableIfExists('recipes')
		.dropTableIfExists('instructions_steps')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipe_ingredients');
};
