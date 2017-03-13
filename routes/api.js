var express = require('express');
var router = express.Router();
var employee = global.package.db.employee;

router.get('/create', function (req, res) {
    
    employee
    .create('Emp 1', 'sampl2@gmail.com', '2016-02-11', 'MCA' , 'male', 32)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

});

module.exports = router;