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
const entrance_Routes = require('./routes/entrance');
const admin_Routes = require('./routes/admin');
const user_Routes = require('./routes/user');

console.log('ent:ger');
app.use(entrance_Routes);
app.use('/admin',admin_Routes);
app.use(user_Routes);


//連接到database
const mongoConnect = require('./util/database').mongoConnect;
mongoConnect(() => {
    app.listen(3000);
});

