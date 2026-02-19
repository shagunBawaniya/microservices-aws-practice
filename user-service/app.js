var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// require Sequelize models
var db = require('./models');

// swagger
var swagger = require('./swagger');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.specs));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// test authenticate once (only logs on error)
db.sequelize.authenticate().catch(err => console.error('Sequelize connection error:', err.message));

module.exports = app;
