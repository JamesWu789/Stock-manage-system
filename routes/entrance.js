const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('ent:get');
    res.render('entrance');
});


//登入判定
const adminController_account = require('../controllers/account');
router.post('/', adminController_account.checkLogin);

// 註冊操作
router.post('/register', adminController_account.postAddAccount);       // register頁面新增

// 註冊頁面
router.get('/register', (req, res, next) => {
    console.log('reg:get');
    res.render('register', { alertSign: ' ' });
});


module.exports = router;