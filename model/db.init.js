﻿var mongoose = require('mongoose');

var dbURI = global.resource.config.db_url;

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});


var employeeSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    date_of_birth: { type: Date, default: Date.now },
    department: { type: String },
    gender: { type: String },
    age: { type: Number }
});


// Build the User model
mongoose.model('employee', employeeSchema);
