import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler

const productDetailController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);

    let findingProduct = await pool.query(
        'SELECT id, name, price, discount_price, main_image, status, stock FROM products WHERE id = $1',
        [id]
    );

    const product = findingProduct.rows[0];

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
};

export default asyncHandler(productDetailController);
