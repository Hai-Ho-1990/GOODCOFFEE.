// Hantera alla endpoint (tex : /register, /login)
import express from 'express';
import signinUser from '../controllers/authController.js';

const router = express.Router();

router.post('/api/users', signinUser);
router.get('/ping', (req, res) => {
    res.send('Auth route fungerar!');
});

export default router;
