const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('ent:get');
    res.render('entrance');
});

router.post('/', (req, res, next) => {
    console.log('ent:post');
    res.redirect('/main');
});

module.exports = router;