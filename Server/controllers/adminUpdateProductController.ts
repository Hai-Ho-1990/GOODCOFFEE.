import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js';

const adminUpdateProductController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const productId = req.params.id;
    const { name, stock, price, status } = req.body;

    const main_image = req.file ? req.file.originalname : undefined;

    try {
        let imageToSave = main_image;

        if (!main_image) {
            const result = await pool.query(
                'SELECT main_image FROM products WHERE id = $1',
                [productId]
            );
            imageToSave = result.rows[0]?.main_image;
        }

        const result = await pool.query(
            'UPDATE products SET name = $1, stock = $2, discount_price = $3, status = $4, main_image = $5 WHERE id = $6 RETURNING *',
            [name, stock, price, status, imageToSave, productId]
        );
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update product' });
    }
};

export default asyncHandler(adminUpdateProductController);
