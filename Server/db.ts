// Skapa och exportera en databas anslutning

import dotenv from 'dotenv';

import pg from 'pg';

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Sätt till true när deploy till Render,ssl: { rejectUnauthorized: false }
});

export default pool;
