const getDb = require('../util/database').getDb;

class Product {
    constructor(provider, idNumber, specification, quantity, price, texture) {
        this.provider = provider;
        this.idNumber = idNumber;
        this.specification = specification;
        this.quantity = quantity;
        this.price = price;
        this.texture = texture;
    }

    save() {
        const db = getDb();      //getDb就直接連接到資料庫
        return db
            .collection('products')     //集合
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
            .collection('products')
            .find()
            .toArray()              // 將所有檔案變成array(最好在檔案很多時用)
            .then(products => {
                console.log(products);
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
                console.log(product);
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
