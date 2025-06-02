import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

//__filename refererar direkt till index.js sökväg, alltså vad detta fil befinner
const __filename = fileURLToPath(import.meta.url);
//__dirname refererar till mappen som index.js befinner
const __dirname = path.dirname(__filename);
// Skapa en sökväg där innehåller en mapp 'uploads' vilken ligger i samma mapp som __dirname
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
console.log('Server __dirname:', __dirname);
console.log('Uploads path:', path.join(__dirname, 'uploads'));

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
});

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
