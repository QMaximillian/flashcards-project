// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    version: "12",
    connection: {
      host: "127.0.0.1",
      user: "quinnlashinsky",
      password: "",
      database: "quizletdev"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },
  test: {
    client: "pg",
    version: "12",
    connection: {
      host: "127.0.0.1",
      user: "quinnlashinsky",
      password: "",
      database: "quizletdevtest"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  // staging: {
  //   client: "pg",
  //   connection: {
  //     database: "quizlet-staging",
  //     host: "127.0.0.1",
  //     user: "quinnlashinsky",
  //     password: ""
  //   },
  //   migrations: {
  //     directory: __dirname + "/knex/migrations"
  //   }
  // }

    production: {
      client: "pg",
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: __dirname + "/knex/migrations"
      },
      seeds: {
        directory: __dirname + "/knex/seeds"
      }
    }
};

