const express = require('express');
const app = express();
const router = express.Router();


// 新增資料進mongodb  // 細部功能都在controllers
const adminController_prod = require('../controllers/product');
router.post('/main', adminController_prod.postAddProduct);
router.get('/main', adminController_prod.getProducts);
router.get('/main/edit-product/:productId', adminController_prod.getEditProduct)
router.post('/main/edit-product', adminController_prod.postEditProduct);

const adminController_work = require('../controllers/work');
router.get('/work', adminController_work.getWorks);
router.post('/work', adminController_work.postAddWork);

const adminController_account = require('../controllers/account');
router.get('/account', adminController_account.getAccounts);             // account頁面看
router.post('/register', adminController_account.postAddAccount);       // register頁面新增


module.exports = router;