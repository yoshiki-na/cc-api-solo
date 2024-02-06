// Update with your config settings.

// dotenv, process.envを経由して.envファイルにアクセスし、dotenvとして取り扱いできる

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // development: {
  //   client: "postgresql",
  //   connection: {
  //     filename: "./dev.sqlite3",
  //   },
  // },

  // staging: {
  client: "postgresql",
  connection: {
    database: "rm_library",
    user: "oh-nakamura",
    password: "password",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};
