import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler
import jwt from 'jsonwebtoken';

const checkOutController = async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, 'minhemlighetcode') as {
            id: number;
            username: string;
        };

        const user_id = decoded.id;

        const {
            total_price,
            status = 'Pending',
            order_date,
            order_items
        } = req.body;

        // Mer detaljerade felkontroller
        if (!user_id) {
            return res
                .status(400)
                .json({ message: 'Missing user_id from token' });
        }
        if (total_price === undefined || total_price === null) {
            return res.status(400).json({ message: 'Missing total_price' });
        }
        if (!order_date) {
            return res.status(400).json({ message: 'Missing order_date' });
        }
        if (!Array.isArray(order_items)) {
            return res
                .status(400)
                .json({ message: 'order_items must be an array' });
        }

        const orderResult = await pool.query(
            'INSERT INTO orders (user_id, total_price, status, order_date) VALUES ($1, $2, $3, $4) RETURNING id',
            [user_id, total_price, status, order_date]
        );

        const orderId = orderResult.rows[0].id;

        for (const item of order_items) {
            const { product_id, quantity, unit_price } = item;
            if (!product_id) {
                return res
                    .status(400)
                    .json({ message: 'Missing product_id in item' });
            }
            if (quantity === undefined || quantity === null) {
                return res
                    .status(400)
                    .json({ message: 'Missing quantity in item' });
            }
            if (unit_price === undefined || unit_price === null) {
                return res
                    .status(400)
                    .json({ message: 'Missing unit_price in item' });
            }

            await pool.query(
                'INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES ($1, $2, $3, $4)',
                [orderId, product_id, quantity, unit_price]
            );
        }

        res.status(201).json({ message: 'Oreder created.', orderId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Checkout failed' });
    }
};

export default asyncHandler(checkOutController);
