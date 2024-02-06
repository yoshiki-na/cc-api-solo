/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("books").del();
  await knex("books").insert([
    {
      id: 1,
      name: "foo",
      genre: "test",
      recommender_name: "seed",
    },
    {
      id: 2,
      name: "bar",
      genre: "test",
      recommender_name: "seed",
    },
    {
      id: 3,
      name: "",
      genre: "test",
      recommender_name: "seed",
      recommender_memo: "タイポでたまたま出てきた",
    },
    {
      id: 4,
      name: "code",
      genre: "test",
      recommender_name: "seed",
      recommender_memo: "CC研修",
    },
    {
      id: 5,
      name: "chrysalis",
      genre: "test",
      recommender_name: "seed",
      recommender_memo: "CC研修",
    },
  ]);
};
