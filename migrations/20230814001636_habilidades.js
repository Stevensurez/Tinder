/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasColumn('habilidades').then(function(exists) {
        if(exists){
            return knex.schema.dropTable('habilidades')
        }
    })
  
};
