// Hantera alla endpoint (tex : /register, /login)
import express from 'express';
import signinUser from '../controllers/signinController.js';
import loginUser from '../controllers/loginController.js';

const router = express.Router();

router.post('/signin', signinUser);
router.post('/login', loginUser);
router.get('/ping', (req, res) => {
    res.send('Auth route fungerar!');
});

export default router;
