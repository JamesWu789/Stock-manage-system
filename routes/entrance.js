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


router.get('/register', (req, res, next) => {
    console.log('reg:get');
    res.render('register', { alertSign: ' ' });
});


module.exports = router;