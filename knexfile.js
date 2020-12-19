// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    version: "12",
    connection: {
      host: process.env.DATABASE_HOST || "127.0.0.1",
      user: process.env.DEVELOPMENT_DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DEVELOPMENT_DATABASE_NAME,
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
  test: {
    client: "pg",
    version: "12",
    connection: {
      host: process.env.TEST_DATABASE_HOST || "127.0.0.1",
      user: process.env.TEST_DATABASE_USER,
      password: process.env.TEST_DATABASE_PASSWORD,
      database: process.env.TEST_DATABASE_NAME,
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },
};
