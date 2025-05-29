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
import adminUpdateProductController from '../controllers/adminUpdateProductController.js';
// import för admin
import { authenticate } from '../middleware/authenticate.js';
import { isAdmin } from '../middleware/isAdmin.js';
import { getAllProducts } from '../controllers/adminProductController.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

// user route
router.post('/signin', signinUser);
router.post('/login', loginUser);
router.get('/profile', getPersonalInfo);
router.put('/profile', updateProfile);
router.get('/product', productController);
router.get('/products/:id', productDetailController);
router.post('/checkout', checkOutController);
router.get('/orders', trackingOrderController);
router.put(
    '/products/:id',
    upload.single('main_image'),
    adminUpdateProductController
);

//admin route
router.get('/admin/products', authenticate, isAdmin, getAllProducts);
export default router;
