// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'postgres',
      port: '5432',
      user:     'postgres',
      password: 'Rock12023'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'postgres',
      port: '5432',
      user:     'Postgres',
      password: 'Rock12023'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'postgres',
      port: '5432',
      user:     'postgres',
      password: 'Rock12023'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
