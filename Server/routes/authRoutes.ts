// Hantera alla endpoint (tex : /register, /login)
import express from 'express';
import signinUser from '../controllers/signinController.js';
import loginUser from '../controllers/loginController.js';
import getPersonalInfo from '../controllers/personalController.js';
import updateProfile from '../controllers/updateProfileController.js';
import productController from '../controllers/productController.js';
import productDetailController from '../controllers/productDetailController.js';
import checkOutController from '../controllers/checkOutController.js';
import trackingOrderController from '../controllers/trackingOrderController.js';
// import för admin
import { authenticate } from '../middleware/authenticate.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router = express.Router();

// user route
router.post('/signin', signinUser);
router.post('/login', loginUser);
router.get('/profile', getPersonalInfo);
router.put('/profile', updateProfile);
router.get('/product', productController);
router.get('/product/:id', productDetailController);
router.post('/checkout', checkOutController);
router.get('/orders', trackingOrderController);

//admin route

export default router;
