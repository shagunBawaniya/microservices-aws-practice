const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const profileRoutes = require('./src/routes/profileRoutes');
const errorHandler = require('./src/middleware/errorHandler');

// add swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// serve swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// mount profile routes (app.use('/profile', profileRoutes) + route '/:userId' => GET /profile/:userId)
app.use('/profile', profileRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Profile service running on port ${PORT}`);
});