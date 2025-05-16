// Hantera alla endpoint (tex : /register, /login)
import express from 'express';
import signinUser from '../controllers/signinController.js';
import loginUser from '../controllers/loginController.js';
import getPersonalInfo from '../controllers/personalController.js';

const router = express.Router();

router.post('/signin', signinUser);
router.post('/login', loginUser);
router.get('/profile', getPersonalInfo);
export default router;
