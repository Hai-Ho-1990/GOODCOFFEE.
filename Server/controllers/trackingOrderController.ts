import { Request, Response } from 'express';
import pool from '../db.js';
import asyncHandler from '../utils/asyncHandler.js'; // Importera asyncHandler
import jwt from 'jsonwebtoken';

const trackingOrderController = async (req: Request, res: Response) => {
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

        const orderResult = await pool.query(
            'SELECT id, total_price, status, order_date FROM orders WHERE user_id = $1',
            [user_id]
        );

        const orders = orderResult.rows;

        for (const order of orders) {
            const itemsResult = await pool.query(
                'SELECT oi.product_id, p.name AS product_name, p.main_image, oi.quantity, oi.unit_price FROM order_items oi JOIN products p ON p.id = oi.product_id WHERE oi.order_id = $1',
                [order.id]
            );
            order.items = itemsResult.rows;
        }
        res.status(201).json({
            orders
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Tracking Order failed' });
    }
};

export default asyncHandler(trackingOrderController);
