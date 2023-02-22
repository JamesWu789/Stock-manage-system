const express = require('express');

const app = express();
const router = express.Router();


const new_account = [];
router.get('/register', (req, res, next) => {
    console.log('reg:get');
    res.render('register');
    // console.log(req.body.username);
});

const products = [];
router.post('/register', (req, res, next) => {
    console.log('reg:post');
    // products.push({ name: req.body.name });
    console.log(req.body);
    res.redirect('/');
});


exports.routes = router;
