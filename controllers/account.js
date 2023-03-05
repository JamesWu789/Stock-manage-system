const Account = require('../models/account');

exports.postAddAccount = (req, res, next) => {
    console.log("main:post");
    const workerName = req.body.workerName;
    const phoneNum = req.body.phoneNum;
    const workItem = req.body.workItem;
    const account = req.body.account;
    const password = req.body.password;
    const accou = new Account(
        workerName,
        phoneNum,
        workItem,
        account,
        password,
        null);
    accou
        .save()
        .then(() => {
            console.log('Created Account');
            console.log(req.body);
            res.redirect('/');      //註冊完帳號回到登入頁面
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAccounts = (req, res, next) => {
    console.log("main:get");
    Account.fetchAll()
        .then(account => {
            res.render('account', {
                accou: account
            });
        })
        .catch(err => console.log(err));
};

exports.getEditAccount = (req, res, next) => {
    const accountID = req.params.accountId;    // 網址後方的 /:內容
    Account.findById(accountID)
        .then(account => {
            res.render('edit-account', {
                account: account
            });
        })
        .catch(err => console.log(err));
};

exports.postEditAccount = (req, res, next) => {
    console.log("account:post:edit");
    const workerNameUpdate = req.body.workerName;
    const phoneNumUpdate = req.body.phoneNum;
    const workItemUpdate = req.body.workItem;
    const accountUpdate = req.body.account;
    const passwordUpdate = req.body.password;
    const accountID = req.body.accountId;

    const account = new Account(
        workerNameUpdate,
        phoneNumUpdate,
        workItemUpdate,
        accountUpdate,
        passwordUpdate,
        accountID
    );
    account
        .save()
        .then(result => {
            console.log('Update Account');
            res.redirect('/account');
        })
        .catch(err => console.log(err));
};

exports.getDeleteAccount = (req, res, next) => {
    const accountID = req.params.accountId;
    Account.deleteById(accountID)
        .then(() => {
            console.log('Delete Account');
            res.redirect('/account');
        }).catch(err => console.log(err));
};


