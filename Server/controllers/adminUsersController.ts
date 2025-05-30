import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js';

const adminUsersController = async (req: Request, res: Response) => {
    const result = await pool.query('SELECT * FROM users WHERE admin = false');
    res.json({ users: result.rows });
};

export default asyncHandler(adminUsersController);
