const express = require('express');
const app = express();
const router = express.Router();


// 新增資料進mongodb  // 細部功能都在controllers
const adminController_product = require('../controllers/product');
router.post('/main', adminController_product.postAddProduct);
router.get('/main', adminController_product.getProducts);
router.get('/main/edit-product/:productId', adminController_product.getEditProduct);
router.post('/main/edit-product', adminController_product.postEditProduct);
router.get('/main/delete-product/:productId', adminController_product.getDeleteProduct);

//work
const adminController_work = require('../controllers/work');
router.get('/work', adminController_work.getWorks);
router.post('/work', adminController_work.postAddWork);

// account
const adminController_account = require('../controllers/account');
router.get('/account', adminController_account.getAccounts);             // account頁面看
router.post('/register', adminController_account.postAddAccount);       // register頁面新增
router.get('/account/edit-account/:accountId', adminController_account.getEditAccount);
router.post('/account/edit-account', adminController_account.postEditAccount);
router.get('/account/delete-account/:accountId', adminController_account.getDeleteAccount);


module.exports = router;