import knex from 'knex';

export const db = knex({
    client: 'mssql',
    connection: {
        host: process.env.DB_MSSQL_HOST || 'localhost',
        port: parseInt(process.env.DB_MSSQL_PORT) || 1433,
        user: process.env.DB_MSSQL_USERNAME,
        password: process.env.DB_MSSQL_PASSWORD,
        database: process.env.DB_MSSQL_DATABASE,
        options: {
            encrypt: false,
            truestedServerCertificate: true,
        },
    },
});
