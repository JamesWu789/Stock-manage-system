const Account = require('../models/account');

exports.postAddAccount = (req, res, next) => {
    console.log("main:post");
    const workerName = req.body.workerName;
    const phoneNum = req.body.phoneNum;
    const workItem = req.body.workItem;
    const account = req.body.account;
    const password = req.body.password;
    const accou = new Account(workerName, phoneNum, workItem, account, password);
    accou
        .save()
        .then(() => {
            console.log('Created Account');
            console.log(req.body);
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAccounts = (req, res, next) => {
    console.log("main:get");
    Account.fetchAll()
        .then(accou => {
            res.render('account', {
                accou: accou
            });
            // console.log("account:", account);
        })
        .catch(err => console.log(err));
};

