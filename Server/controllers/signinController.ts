import { Request, Response } from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler

// Hantera sign-in för användaren
const signinUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    // Bör logga ut req.body så man vet vad är fel
    console.log('Received body:', req.body);

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required.');
    }

    const existingUsername = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username]
    );

    const existingEmail = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );

    // Skapa ett tom objekt där nycklarna är sträng och värderna också är sträng
    // Måste aktivt skapa errors-objektet i backend och skicka med det i res.json() för att frontend ska kunna läsa data.errors.
    const errors: Record<string, string> = {};
    if (existingUsername.rows.length > 0) {
        errors.username = 'Username is already used.';
    }

    if (existingEmail.rows.length > 0) {
        errors.email = 'Email is already used.';
    }
    //Omvandlar alla errors till array
    if (Object.keys(errors).length > 0) {
        return res.status(409).json({
            errors
        });
    }

    const admin = 0;

    try {
        const hashedPassword = await bcrypt.hash(password, 7);
        await pool.query(
            'INSERT INTO users (username, password, email, admin) VALUES ($1, $2, $3, $4)',
            [username, hashedPassword, email, admin]
        );
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Fel i signinUser:', error);
        res.status(500).json({ error: 'Serverfel vid signin' });
    }
};

// Wrap:a sign-in funktionen med asyncHandler
export default asyncHandler(signinUser);
