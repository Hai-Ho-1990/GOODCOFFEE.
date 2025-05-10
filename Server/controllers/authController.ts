import { Request, Response } from 'express';
import pool from '../db';
import bcrypt from 'bcrypt';
import asyncHandler from '../utils/asyncHandler'; // Importera asyncHandler

// Hantera sign-in för användaren
const signinUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)',
            [username, hashedPassword, email]
        );
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Här fångas eventuella fel och skickas vidare till nästa middleware
        throw error;
    }
};

// Wrap:a sign-in funktionen med asyncHandler
export default asyncHandler(signinUser);
