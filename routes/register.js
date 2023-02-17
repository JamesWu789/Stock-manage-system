const express = require('express');

const app = express();
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.render('register');
});

module.exports = router;