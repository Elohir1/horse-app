var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var horseRouter = require('./controller/horse');
var userRouter = require('./controller/user');
var activityRouter = require('./controller/activity');
var planRouter = require('./controller/plan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/horse', horseRouter);
app.use('/user', userRouter);
app.use('/activity', activityRouter);
app.use('/plan', planRouter);

module.exports = app;
