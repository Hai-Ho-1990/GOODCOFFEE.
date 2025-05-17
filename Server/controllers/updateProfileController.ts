import { Request, Response } from 'express';
import pool from '../db.js';
import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler

const updateProfile = async (req: Request, res: Response) => {
    // Hämta authorization från skickade headers
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    //Dekoda token & returnera det ursprungliga payload-objektet (ex. { id: 123, email: "test@example.com" })
    const decoded = jwt.verify(token, 'minhemlighetcode') as {
        id: number;
        username: string;
    };

    const findingUser = await pool.query(
        'SELECT username, email, telephone, address, postcode, city FROM users WHERE id = $1 ',
        [decoded.id]
    );
    const user = findingUser.rows[0];

    if (!user) {
        return res.status(404).json({ message: 'user not found' });
    } else {
        await pool.query(
            'UPDATE users SET username = $1, email = $2, telephone = $3, address = $4, postcode = $5, city = $6 WHERE id = $7',
            [
                req.body.username,
                req.body.email,
                req.body.telephone,
                req.body.address,
                req.body.postcode,
                req.body.city,
                decoded.id
            ]
        );
    }
    res.status(200).json(user);
};

export default asyncHandler(updateProfile);
