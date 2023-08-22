# Akinboboye Akinwande's submission for Tobmas Group Coding Assessment. A RESTful API with Node.js, MongoDB, and JWT Authentication

This repository contains a RESTful API built using Node.js, MongoDB for data storage, and JSON Web Token (JWT) for authentication to access protected user information

## Features

- User authentication using JWT (JSON Web Token)
- Secure password storage with hashing
- MongoDB as the database backend
- Express.js for routing and middleware
- Error handling and validation
- Environmental configuration using `.env` file
- API documentation using Swagger

## Prerequisites

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Boboye-Ak/akinboboye-akinwande-jite-newton-assessment
    cd akinboboye-akinwande-jite-newton-assessment
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
    npm run dev //for development mode
    ```
    

5. **Access the API:**

    The API should be accessible at `http://localhost:4000`.

## API Endpoints

- **POST /auth/signup**: Register a new user
- **POST /api/login**: Authenticate and generate JWT token
- **GET /api/dashboard**: Get user dashboard data (protected route)

## Authentication

This API uses JWT (JSON Web Token) for authentication. The token is generated upon successful login and is required for accessing protected routes. In order to access protected routers, send the token as a value for the Authorization key in your header. eg {Authorization: "Bearer ${access_token}"}

## Error Handling

Error handling is implemented for various scenarios, including validation errors, authentication errors, and server errors.

## Postman Collection

The postman collection for this project is available at [Postman Collection](https://www.postman.com/planetary-rocket-306155/workspace/public-workspace/collection/18499196-6eb87ad3-f9f6-40b3-a384-115cfbc34d03?action=share&creator=18499196)

## Appreciation

I greatly appreciate this opportunity and look forward to hearing from you.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
