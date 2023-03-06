const Account = require('../models/account');

exports.postAddAccount = (req, res, next) => {
    console.log("register:post");
    const workerName = req.body.workerName;
    const phoneNum = req.body.phoneNum;
    const workItem = req.body.workItem;
    const account = req.body.account;
    const password = req.body.password;
    const editable = req.body.editable;   //checkbox結果為 on 跟 undefined
    const accou = new Account(              //construct了，所以後面呼叫變accou
        workerName,
        phoneNum,
        workItem,
        account,
        password,
        editable,
        null);

    accou
        .findByAccount()
        .then(result => {
            if (result.length == 0) {
                console.log("沒找到，存");
                accou.save();               //findByAccount結果要用promise.then來接資料，不然在外面都是Promise{<pending>}
                res.redirect('/');          //註冊完帳號回到登入頁面
            } else {
                console.log("有找到，不存");
                res.render('register', { alertSign: 'fire' });
            }
        }).catch(err => {
            console.log(err);
        });
};

exports.getAccounts = (req, res, next) => {
    console.log("main:get");
    Account.fetchAll()                  // 有static，不能accou.fetchAll
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
    const editableUpdate = req.body.editable;
    const accountID = req.body.accountId;

    const account = new Account(
        workerNameUpdate,
        phoneNumUpdate,
        workItemUpdate,
        accountUpdate,
        passwordUpdate,
        editableUpdate,
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


