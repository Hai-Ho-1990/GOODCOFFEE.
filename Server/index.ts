import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Använd auth-routes
app.use('/api', authRoutes);

app.use(express.urlencoded({ extended: true }));

// Konvertera import.meta.url till en filväg
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servera statiska filer från dist
app.use(express.static(path.join(__dirname, 'dist')));

// // Fallback route för alla andra rutter (SPA)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// Standard endpoint för att testa servern
app.get('/api', async (req: Request, res: Response) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
});

app.use(express.static(path.join(path.resolve(), 'dist')));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
