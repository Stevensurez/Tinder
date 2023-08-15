/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('users', function(t){
                t.increments('user_id').primary()
                t.string('firstName', 100).notNullable()
                t.string('lastName', 100)
                t.integer('age', 3)
                t.string('gender', 50)
                t.string('nacionality', 50)
                t.string('country', 50)
                t.string('city', 50)
                t.string('address', 50)
                t.integer('ability', 10)
            })
        }
    })
  
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasColumn('users').then(function(exists) {
        if(exists){
            return knex.schema.dropTable('users')
        }
    })
  
    
};
