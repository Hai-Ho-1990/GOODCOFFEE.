import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db.js';

import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Använd auth-routes
app.use('/api', authRoutes);

app.use(express.urlencoded({ extended: true }));

// Standard endpoint för att testa servern
app.get('/api', async (req: Request, res: Response) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
});

app.get('/api/users', async (req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.send(result.rows);
});

// Skapa /login rutt
app.get('/login', (req, res) => {
    res.send('Login Route');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
