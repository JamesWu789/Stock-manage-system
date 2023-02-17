const express = require('express');

const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('entrance');
});

router.post('/', (req, res, next) => {
    res.render('entrance');
});

// const modal = document.querySelector('.modal');
// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// };

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// });

// exports.modal = modal;

// exports.router = router;
module.exports = router;