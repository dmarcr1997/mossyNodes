import { Client } from 'pg';

export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'mossyDB',
    password: 'amc24680',
    port: 5433
})
