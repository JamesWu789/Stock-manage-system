const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

class Product {
    constructor(provider, idNumber, specification, quantity, price, texture, id, userId) {
        this.provider = provider;
        this.idNumber = idNumber;
        this.specification = specification;
        this.quantity = quantity;
        this.price = price;
        this.texture = texture;
        this._id = id ? new mongodb.ObjectId(id) : null;    // 待研究 (下方save在更改資料時用)
        this.userId = userId;                               // 待研究
    }

    save() {
        const db = getDb();      //getDb就直接連接到資料庫
        let db_tem;
        if (this._id) {
            db_tem = db
                .collection('products')
                .updateOne({ _id: this._id }, { $set: this });
        } else {
            db_tem = db
                .collection('products')     //集合
                .insertOne(this);           //也可以insertMany([{} {}]) 
        }
        return db_tem
            .then(result => {
                // console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        const db = getDb();
        return db
            .collection('products')
            .find()
            .toArray()              // 將所有檔案變成array(最好在檔案很多時用)
            .then(products => {
                // console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(prodId) {
        const db = getDb();
        return db
            .collection('products')
            .find({ _id: new mongodb.ObjectId(prodId) })
            .next()
            .then(product => {
                // console.log(product);
                return product;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static deleteById(prodId) {
        const db = getDb();
        return db
            .collection('products')
            .deleteOne({ _id: new mongodb.ObjectId(prodId) })
            .then(result => {
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Product;
