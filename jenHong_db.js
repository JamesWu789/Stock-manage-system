//引用外部功能
const path = require('path');
const express = require('express');
const app = express();


//設定ejs引擎
app.set('view engine', 'ejs');
app.set('views', 'views');

//公開public檔案
app.use(express.static(path.join(__dirname, 'public')));

//引用內部(js操作)
const entrance = require('./routes/entrance');
const register = require('./routes/register');
app.use(entrance);
app.use(register);

app.listen(3000);