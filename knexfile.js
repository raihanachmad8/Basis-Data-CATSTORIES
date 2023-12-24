import dotenv from 'dotenv';
dotenv.config();


export default {

    development: {
        client: process.env.DB_CLIENT || 'mssql',
        connection: {
            host: process.env.DB_MSSQL_HOST || 'localhost', 
            port: parseInt(process.env.DB_MSSQL_PORT) || 1433,
            user: process.env.DB_MSSQL_USERNAME,
            password: process.env.DB_MSSQL_PASSWORD,
            database: process.env.DB_MSSQL_DATABASE,
            options: {
                encrypt: false,
                truestedServerCertificate: true,
            }
        },
        migrations: {
            directory: './backend/database/migrations',
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: './backend/database/seeds',
        },
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
      database: 'my_db',
      user:     'username',
      password: 'password'
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
