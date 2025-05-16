import { Request, Response } from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler
import jwt from 'jsonwebtoken';

const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    // Bör logga ut req.body så man vet vad är fel
    console.log('Received body:', req.body);

    if (!username || !password) {
        return res.status(400).json({
            errors: {
                username: 'Username is required',
                password: 'Password is required'
            }
        });
    }

    const findingUser = await pool.query(
        'SELECT * FROM users WHERE username = $1 ',
        [username]
    );
    const user = findingUser.rows[0];

    const errors: Record<string, string> = {};

    if (!user) {
        errors.username = 'Invalid username.';
    }
    if (user && !(await bcrypt.compare(password, user.password))) {
        errors.password = 'Invalid password.';
    }

    //Omvandlar alla errors till array
    if (Object.keys(errors).length > 0) {
        return res.status(401).json({
            errors
        });
    }

    const userId = user.id || user.user_id;
    // skapa en JWT-token som innehåller användarens ID och username, så att kunna skickas till och använda av senare frontend för autentisering
    // Token fungerar som ett ID-kort. Den innehåller vem du är och bevisar att du är inloggad.
    const token = jwt.sign(
        {
            id: userId,
            username: user.username
        },
        'minhemlighetcode',
        { expiresIn: '1y' }
    );

    //här definierar vad som ska skapas som response.data i frontend
    return res.status(200).json({
        message: ' Login successfully',
        id: userId,
        token: token,
        username: user.username
    });
};

export default asyncHandler(loginUser);
