# Authentication REST API with Passportjs and Nodejs

## Starting 🚀

![social-auth|500](vault/social-auth.gif)

A REST authentication API with Node.js, Express.js and MongoDB in the backend and Reactjs as client, to manage the registration and login of users using local strategies and with social networks from the Passport js library.

## Table of Contents 📋

- [Installation and configuration](#installation-and-configuration)
- [Use](#use)
- [Dependencies](#dependencies)
- [License](#license)
- [Contribution](#contribution)

## Built with 🛠️

This project is built mainly with

- [Nodejs](https://nodejs.org/en/) - Javascript environment for server.
- [Expressjs](https://expressjs.com/en/starter/installing.html) - web infrastructure for Nodejs
- [MongoDb](https://www.mongodb.com/try/download/community) - Database to persist information
- [Passportjs](https://www.passportjs.org/docs/) - Library for authentication
- [Reactjs](https://reactjs.org/) - Framework to build the client

## Installation and configuration 🔧

1. Clone this repository: `git clone https://github.com/username/project.git`
2. to access the backend: `cd backend`.
3. Install the dependencies: `npm install`.
4. Configure the database: Create an `.env` file with the environment variables needed to connect to your MongoDB database, the login credentials for social networks.
5. Start the server: `npm run start` .
6. For the client side enter with: `cd client`.
7. Install the dependencies: `npm install`.
8. Start the client: `npm start`

## Dependencies

- [express](https://expressjs.com/es/4x/api.html)
- express-session
- express-validator
- bcryptjs
- jsonwebtoken
- mongoose
- connect-mongo
- passport
- passport-github2
- passport-google-oauth20
- passport-jwt
- passport-local

## Autores ✒️

- **Sebastian Vera** - _Initial Work_ - [verastian](https://github.com/Verastian)
