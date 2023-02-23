const express = require('express');
const app = express();
const router = express.Router();


router.get('/main', (req, res, next) => {
    console.log('main:get');
    res.render('Tab_page');
})

module.exports = router;


// const events = require('events');
// const eventEmitter = new events.EventEmitter();

// window.onload = function () {
//     // 啟動第一個panel
//     panelDisplay(tabLink[0]);
//     //點擊  tab a連結
//     for (let i = 0; i < tabLink.length; i++) {
//         tabLink[i].addEventListener('click', function (e) {
//             // e.preventDefault();
//             panelDisplay(this);
//         });
//     };

//     function panelDisplay(activePanel) {
//         // Do something...
//         for (let i = 0; i < tabLink.length; i++) {

//             //設定條件tabLink ==activePanel 
//             //將tablink代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" ，就是每執行一次function的時候就進行全部tablinks增加class

//             if (tabLink[i] == activePanel) {
//                 tabLink[i].classList.add("active");
//                 tabContents[i].style.display = "block";
//             } else {
//                 tabLink[i].classList.remove("active");
//                 tabContents[i].style.display = "none";
//             }
//         }
//     }
// };