import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import pool from './db';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Använd auth-routes
app.use('/api', authRoutes);

// Standard endpoint för att testa servern
app.get('/api', async (req: Request, res: Response) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
});

// Endpoint för att hämta alla användare
app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Något gick fel vid databasförfrågan' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
