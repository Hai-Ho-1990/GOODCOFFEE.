import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getAllProducts = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    }
);
