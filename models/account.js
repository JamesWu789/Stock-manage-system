const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Account {
    constructor(workerName, phoneNum, workItem, account, password, id, userId) {
        this.workerName = workerName;
        this.phoneNum = phoneNum;
        this.workItem = workItem;
        this.account = account;
        this.password = password;
        this._id = id ? new mongodb.ObjectId(id) : null;    // 待研究 (下方save在更改資料時用)
        this.userId = userId;                               // 待研究
    }

    save() {
        const db = getDb();      //getDb就直接連接到資料庫
        let db_tem;
        if (this._id) {
            db_tem = db
                .collection('account')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            db_tem = db
                .collection('account')     //集合
                .insertOne(this);           //也可以insertMany([{} {}]) 
        }
        return db_tem
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
