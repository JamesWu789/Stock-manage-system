const express = require('express');
const app = express();
const router = express.Router();


// 細部功能都在controllers
const adminController_product = require('../controllers/product');
router.get('/product', adminController_product.getProducts);
        
//work
const adminController_work = require('../controllers/work');
router.get('/work', adminController_work.getWorks);

// account
const adminController_account = require('../controllers/account');
router.get('/account', adminController_account.getAccounts);             // account頁面看


module.exports = router;