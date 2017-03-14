var express = require('express');
var router = express.Router();
var employee = global.package.db.employee;

router.get('/create', function (req, res) {
    
    var ed = readRequestData(req);
    
    employee
    .create(ed.name, ed.email, ed.date_of_birth, ed.department, ed.gender, ed.age)
    //.create('emp1', 'sample@gmail.com', '1984/06/15', 'MCA', 'male', 33)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

});

router.get('/update/:id', function (req, res) {
    
    var ed = readRequestData(req);
    ed.name = 'test';
    employee
    .update(req.params.id, ed.name, ed.email, ed.date_of_birth, ed.department, ed.gender, ed.age)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

});

router.get('/delete/:id', function (req, res) {
    
    employee
    .delete(req.params.id)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

});

function readRequestData(req) {
    return {
        name : req.body.name,
        email : req.body.email,
        date_of_birth : req.body.dob,
        department : req.body.department,
        gender : req.body.gender,
        age : req.body.age
    }
}

module.exports = router;