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
        
        //(function (err, data) {
        //    if (err) {
        //        var message = "Email address already exist";
        //        failure(message);
        //    } else {
        //        success(data);
        //    }
        //});
    });
}
