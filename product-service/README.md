# Product Service

This is a product service built using Express and Sequelize ORM. It provides a RESTful API for managing products, including creating, retrieving, updating, and deleting product entries.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd product-service
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your environment variables by copying the `.env.example` to `.env` and updating the values as needed.

## Usage

To start the server, run:
```
npm start
```
The server will listen on the port specified in your environment variables (default is 3000).

## Environment Variables

The following environment variables are required:

- `DB_HOST`: Database host
- `DB_USER`: Database username
- `DB_PASS`: Database password
- `DB_NAME`: Database name
- `PORT`: Port for the server to listen on (default is 3000)

## API Endpoints

- `POST /products`: Create a new product
- `GET /products`: Retrieve all products
- `GET /products/:id`: Retrieve a product by ID
- `PUT /products/:id`: Update a product by ID
- `DELETE /products/:id`: Delete a product by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.