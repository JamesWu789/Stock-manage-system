const express = require('express');
const app = express();
const router = express.Router();


// 細部功能都在controllers
const adminController_product = require('../controllers/product');
router.post('/product', adminController_product.postAddProduct);
router.get('/product', adminController_product.getProducts);
router.get('/product/edit-product/:productId', adminController_product.getEditProduct);
router.post('/product/edit-product', adminController_product.postEditProduct);
router.get('/product/delete-product/:productId', adminController_product.getDeleteProduct);

//work
const adminController_work = require('../controllers/work');
router.get('/work', adminController_work.getWorks);
router.post('/work', adminController_work.postAddWork);
router.get('/work/edit-work/:workId', adminController_work.getEditWork);
router.post('/work/edit-work', adminController_work.postEditWork);
router.get('/work/delete-work/:workId', adminController_work.getDeleteWork);

// account
const adminController_account = require('../controllers/account');
router.get('/account', adminController_account.getAccounts);             // account頁面看
router.get('/account/edit-account/:accountId', adminController_account.getEditAccount);
router.post('/account/edit-account', adminController_account.postEditAccount);
router.get('/account/delete-account/:accountId', adminController_account.getDeleteAccount);


module.exports = router;