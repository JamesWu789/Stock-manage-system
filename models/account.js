const getDb = require('../util/database').getDb;

class Account {
    constructor(workerName, phoneNum, workItem, account, password) {
        this.workerName = workerName;
        this.phoneNum = phoneNum;
        this.workItem = workItem;
        this.account = account;
        this.password = password;
    }

    save() {
        const db = getDb();      //getDb就直接連接到資料庫
        return db
            .collection('account')     //集合
            .insertOne(this)            //也可以insertMany([{} {}])  //this就是上方資訊
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('account')
            .find()
            .toArray()              // 將所有檔案變成array(最好在檔案很多時用)
            .then(account => {
                console.log(account);
                return account;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(accountId) {
        const db = getDb();
        return db
            .collection('account')
            .find({ _id: new mongodb.ObjectId(accountId) })
            .next()
            .then(account => {
                console.log(account);
                return account;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static deleteById(accountId) {
        const db = getDb();
        return db
            .collection('account')
            .deleteOne({ _id: new mongodb.ObjectId(accountId) })
            .then(result => {
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Account;
