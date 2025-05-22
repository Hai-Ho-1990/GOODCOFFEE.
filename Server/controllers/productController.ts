import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler

const productController = async (req: Request, res: Response) => {
    const { category } = req.query;

    let query =
        'SELECT id, name, discount_price, main_image, description FROM products';
    const values = [];

    if (category) {
        query += ' WHERE category = $1';
        values.push(category);
    }

    const findingProduct = await pool.query(query, values);

    const products = findingProduct.rows;
    if (!products || products.length === 0) {
        return res.status(404).json({ message: 'product not found' });
    }
    res.status(200).json(products);
};

export default asyncHandler(productController);
