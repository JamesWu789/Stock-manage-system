const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    console.log("main:post");
    const provider = req.body.provider;
    const idNumber = req.body.idNumber;
    const specification = req.body.specification;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const texture = req.body.texture;
    const product = new Product(provider, idNumber, specification, quantity, price, texture);
    product
        .save()
        .then(result => {
            // console.log(result);
            console.log('Created Product');
            console.log(req.body);
            // res.redirect('/main');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => console.log(err));
};

