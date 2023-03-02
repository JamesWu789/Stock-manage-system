const express = require('express');
const app = express();
const router = express.Router();


router.get('/main', (req, res, next) => {
    console.log('main:get');
    res.render('Tab_page');
})

// 細部功能都在controllers
const adminController = require('../controllers/product');
router.post('/main', adminController.postAddProduct);


module.exports = router;   