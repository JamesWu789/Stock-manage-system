const express = require('express');
const app = express();
const router = express.Router();


// router.get('/main', (req, res, next) => {
//     console.log('main:get');
//     res.render('Tab_page');
// })

// 新增資料進mongodb  // 細部功能都在controllers
const adminController = require('../controllers/product');
router.post('/main', adminController.postAddProduct);

router.get('/main', adminController.getProducts);

module.exports = router;