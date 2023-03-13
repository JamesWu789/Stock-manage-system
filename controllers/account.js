const Account = require('../models/account');

exports.postAddAccount = (req, res, next) => {
    console.log("register:post");
    const workerName = req.body.workerName;
    const phoneNum = req.body.phoneNum;
    const workItem = req.body.workItem;
    const account = req.body.account;
    const password = req.body.password;
    const editable = req.body.editable;   //checkbox結果為 on 跟 undefined
    const readable = req.body.readable;
    const accou = new Account(              //construct了，所以後面呼叫變accou
        workerName,
        phoneNum,
        workItem,
        account,
        password,
        editable,
        readable,
        null);

    Account
        .findByAccount(account)
        .then(result => {
            if (result.length == 0) {
                console.log("沒找到，存");
                accou.save();               //findByAccount結果要用promise.then來接資料，不然在外面都是Promise{<pending>}
                res.redirect('/');          //註冊完帳號回到登入頁面
            } else {
                console.log("有找到，不存");
                console.log('result:', result);
                res.render('register', { alertSign: 'fire' });
            }
        }).catch(err => {
            console.log(err);
        });
};

exports.getAccounts = (req, res, next) => {
    console.log("main:get");
    const edit = req.query.edit;
    Account.fetchAll()                  // 有static，不能accou.fetchAll
        .then(account => {
            if (edit === 'true') {
                res.render('admin/account', {
                    accou: account
                })
            } else {
                res.render('user/account_list', {
                    accou: account
                })
            }
        }).catch(err => console.log(err));
};    
    

exports.getEditAccount = (req, res, next) => {
    const accountID = req.params.accountId;    // 網址後方的 /:內容
    Account.findById(accountID)
        .then(account => {
            res.render('admin/edit-account', {
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
    const readableUpdate = req.body.readable;
    const accountID = req.body.accountId;

    const account = new Account(
        workerNameUpdate,
        phoneNumUpdate,
        workItemUpdate,
        accountUpdate,
        passwordUpdate,
        editableUpdate,
        readableUpdate,
        accountID
    );
    account
        .save()
        .then(result => {
            console.log('Update Account');
            res.redirect('/admin/account?edit=true');
        })
        .catch(err => console.log(err));
};

exports.getDeleteAccount = (req, res, next) => {
    const accountID = req.params.accountId;
    Account.deleteById(accountID)
        .then(() => {
            console.log('Delete Account');
            res.redirect('/admin/account?edit=true');
        }).catch(err => console.log(err));

};

exports.checkLogin = (req, res, next) => {
    const account = req.body.account;
    const password = req.body.password;
    Account
        .findByAccount(account)
        .then(result => {
            if (result.length == 0 || result[0]['password'] !== password || !(result[0]['readable']) ) {
                res.redirect('/');          //帳密錯誤回登入頁面                // 沒權限
            } else if (result[0]['editable'] === 'on'){
                res.redirect('/admin/product?edit=true');        //可登入 可編輯
            } else {
                res.redirect('/product?edit=false');              //可登入 不可編輯 (?後面是 字串)
            }
        }).catch(err => {
            console.log(err);
        });
};
