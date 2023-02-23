//引用外部功能
const path = require('path');
const express = require('express');
const app = express();
var $ = require("jquery");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//設定ejs引擎
app.set('view engine', 'ejs');
app.set('views', 'views');

//公開public檔案
app.use(express.static(path.join(__dirname, 'public')));

//引用內部(js操作)
const entrance = require('./routes/entrance');
const register = require('./routes/register');
const main = require('./routes/Tab_page');

console.log('ent:ger');
app.use(entrance);
app.use(register.routes);
app.use(main);

app.listen(3000);