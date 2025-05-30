import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import pool from '../db.js';

const adminGetOrdersController = async (req: Request, res: Response) => {
    try {
        const orderResult = await pool.query(
            'SELECT id, user_id, total_price, status, order_date FROM orders'
        );

        const orders = orderResult.rows;
        for (const order of orders) {
            const itemsResult = await pool.query(
                'SELECT oi.order_id, oi.product_id, p.name AS product_name, p.main_image, oi.quantity, oi.unit_price FROM order_items oi JOIN products p ON p.id = oi.product_id WHERE oi.order_id = $1',
                [order.id]
            );
            // Vi lägger till en lista av alla objekter som innehåller alla produkter som tillhör detta order.
            order.items = itemsResult.rows;
        }
        res.status(200).json({ orders });
    } catch (err) {
        console.error('Admin order fetch error:', err);
        res.status(500).json({
            message: 'Could not fetch admin orders per user'
        });
    }
};

export default asyncHandler(adminGetOrdersController);
