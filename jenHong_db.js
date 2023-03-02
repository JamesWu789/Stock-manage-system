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

// const mongoose = require("mongoose");
// const uri = "mongodb+srv://james821202004:Zxc8152789@inventorydatabasecluste.t1z3bap.mongodb.net/?retryWrites=true&w=majority"
// async function connect() {
//     try {
//         await mongoose.connect(uri);
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error(error);
//     }
// };
// connect();

// const { MongoClient } = require("mongodb");
// const uri = "mongodb+srv://james821202004:Zxc8152789@inventorydatabasecluste.t1z3bap.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
//     try {
//         await client.connect();
//         console.log('connect successfully');
//         // database and collection code goes here
//         // insert code goes here
//         // display the results of your operation
//     } finally {
//         await client.close();
//     }
//    }
// run().catch(console.dir);
// app.listen(3000);

//連接到database
const mongoConnect = require('./util/database').mongoConnect;
mongoConnect(() => {
    app.listen(3000);
});

