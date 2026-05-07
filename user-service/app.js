var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var db = require('./models')
var swagger = require('./swagger')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Swagger
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.specs))

//app.use('/', indexRouter);
app.use('/', usersRouter);

db.sequelize.authenticate().catch(err =>
  console.error('Sequelize connection error:', err.message)
)

module.exports = app
