/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  /*
   * id increments
   * name varchar (100)
   * genre varchar (100)
   * recommender_name varchar (100)
   * recommender_memo varchar (255)
   */
  return knex.schema.createTable("books", function (table) {
    table.increments("id").primary();
    table.string("name", 100).unique().notNullable();
    table.string("genre", 100).notNullable();
    table.string("recommender_name", 255).notNullable();
    table.string("recommender_memo", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
