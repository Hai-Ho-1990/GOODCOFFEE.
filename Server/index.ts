import express from 'express'; // Importerar express
import path from 'path'; // Importerar path-modulen
import cors from 'cors';
import pool from './db.js'; // Om din db är en JS-fil efter kompilering
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// Få den aktuella katalogen via import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(cors());
app.use(express.json());

// Använd auth-routes
app.use('/api', authRoutes);

app.use(express.urlencoded({ extended: true }));

// Servera statiska filer från dist
app.use(express.static(path.join(__dirname, 'dist')));

// Standard endpoint för att testa servern
app.get('/api', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
