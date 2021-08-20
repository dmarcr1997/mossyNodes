const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mossyDB',
    password: 'amc24680',
    port: 5433
})

module.exports = { client }
