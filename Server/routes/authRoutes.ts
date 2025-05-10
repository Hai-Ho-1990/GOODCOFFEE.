// Hantera alla endpoint (tex : /register, /login)
import express from 'express';
import signinUser from '../controllers/authController';

const router = express.Router();

router.post('/signin', signinUser);
router.get('/ping', (req, res) => {
    res.send('Auth route fungerar!');
});

export default router;
