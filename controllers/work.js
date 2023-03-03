const Work = require('../models/work');

exports.postAddWork = (req, res, next) => {
    console.log("main:post");
    const worker = req.body.worker;
    const workItem = req.body.workItem;
    const specification = req.body.specification;
    const quantity = req.body.quantity;
    const location = req.body.location;
    const date = req.body.date;
    const work = new Work(worker, workItem, specification, quantity, location, date);
    work
        .save()
        .then(() => {
            console.log('Created Work');
            console.log(req.body);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getWorks = (req, res, next) => {
    console.log("main:get");
    Work.fetchAll()
        .then(works => {
            res.render('work', {
                works: works
            });
            // console.log("works:", works);
        })
        .catch(err => console.log(err));
};

