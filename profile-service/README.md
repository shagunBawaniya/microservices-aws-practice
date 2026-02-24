# Profile Service

This is a microservice named `profile-service` built using Express.js. It aggregates user and product data from other microservices.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Logging](#logging)
- [Error Handling](#error-handling)
- [Running the Service](#running-the-service)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd profile-service
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
USER_SERVICE_URL=http://localhost:3000/users
PRODUCT_SERVICE_URL=http://localhost:3001/products
PORT=3002
```

## API Endpoints

### GET /profile/:userId

This endpoint retrieves user and product data for a specific user.

**Parameters:**
- `userId`: The ID of the user whose profile is being requested.

**Response:**
```json
{
  "user": { ... },
  "products": [ ... ]
}
```

## Logging

This service uses Morgan for logging HTTP requests and responses. Logs will be printed to the console for monitoring.

## Error Handling

The service includes a middleware for handling errors. It sends appropriate responses based on the error type.

## Running the Service

To start the service, run the following command:

```
npm start
```

The service will be available at `http://localhost:3002`.