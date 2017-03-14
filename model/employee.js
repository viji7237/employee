var mongoose = require('mongoose');
var employee = mongoose.model('employee');
var promise = require('promise');


exports.create = function (name, email, date_of_birth, department, gender, age) {
    
    return new Promise(function (success, failure) {
        var emp = new employee();
        emp.name = name;
        emp.email = email
        emp.date_of_birth = date_of_birth;
        emp.department = department
        emp.gender = gender;
        emp.age = age;
        
        emp.save().then(function (data) {
            success(data);
        }).catch(function (err) {
            var message = "Email address already exist";
            failure(message);
        });
        
    });
}

exports.update = function (id, name, email, date_of_birth, department, gender, age) {
    
    return new Promise(function (success, failure) {
        
        employee.findById(id)
        .then(function (employee) {
            
            employee.name = name;
            employee.email = email
            employee.date_of_birth = date_of_birth;
            employee.department = department;
            employee.gender = gender
            employee.age = age;
            employee.save()
            .then(function (data) {
                success(data);
            })
            .catch(function (err) {
                failure(err);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    });
}

exports.delete = function (id) {
    
    return new Promise(function (success, failure) {
        employee.remove(id)
        .then(function () {
            success('Employee removed successfully');
        })
        .catch(function (err) {
            console.log(err);
        });
    });
}
