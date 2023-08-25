# Akinboboye Akinwande's submission for Tobmas Group Coding Assessment. A RESTful API with Node.js, MongoDB, and JWT Authentication

This repository contains a RESTful API built using Node.js, MongoDB for data storage, and JSON Web Token (JWT) for authentication to access protected user information

## Features

- User authentication using JWT (JSON Web Token)
- Secure password storage with hashing
- Password validation using a regex function(Only allows strong passwords. Password must contain letters, numbers, symbols and at least 8 characters long with at least one capital letter)
- MongoDB as the database backend
- Express.js for routing and middleware
- Error handling and validation
- Environmental configuration using `.env` file
- API documentation using Swagger
- API documentation using Postman

## Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Boboye-Ak/akinboboye-akinwande-tobmas
   cd akinboboye-akinwande-tobmas
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the project root and add the following variables:

   ```plaintext
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   JWT_SECRET=your-secret-key
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   ```bash
   npm run dev #for development mode
   ```

   ```bash
   npm run swagger-autogen #to update the documentation if you make changes
   ```

    ```bash
   npm run test #to run mocha tests. To be able to use tests you need to have mongoDB running locally on your PC
   ```

5. **Access the API:**

   The API should be accessible at `http://localhost:4000` if running on your local device.
   It is also live remotely at `https://akinboboye-akinwande-tobmas-production.up.railway.app`.

## API Endpoints

- **GET /test**: Test the api
- **POST /api/auth/signup**: Register a new user
- **POST /api/auth/login**: Authenticate and generate JWT token
- **GET /api/dashboard**: Get user dashboard data (protected route)
- **GET /doc/**: Get api swagger documentation

See swagger documentation at `akinboboye-akinwande-tobmas-production.up.railway.app/doc`

## Authentication

This API uses JWT (JSON Web Token) for authentication. The token is generated upon successful login and is required for accessing protected routes. In order to access protected routers, send the token as a value for the Authorization key in your header. eg {Authorization: "Bearer ${access_token}"}

## Error Handling

Error handling is implemented for various scenarios, including validation errors, authentication errors, and server errors with appropriate status codes and informative messages.

## Postman Collection

The postman collection for this project is available at [Postman Collection](https://www.postman.com/planetary-rocket-306155/workspace/public-workspace/collection/18499196-6eb87ad3-f9f6-40b3-a384-115cfbc34d03?action=share&creator=18499196&active-environment=18499196-94083831-2784-437f-bc2e-30266dd6e512) in the collection `Akinboboye-Akinwande-Tobmas`

## Appreciation

I greatly appreciate this opportunity and look forward to hearing from you.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
