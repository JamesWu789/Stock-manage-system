const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

//連接mongoDb   //在主程式jenHong_db時呼叫
const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://james821202004:Zxc8152789@inventorydatabasecluste.t1z3bap.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            _db = client.db("JenHongCheng");  //選擇database //給_db輸入值
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
