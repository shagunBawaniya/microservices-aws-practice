const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// HTTP request logging using morgan (tiny = concise method+url+status+res time)
app.use(morgan('tiny'));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', productRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;