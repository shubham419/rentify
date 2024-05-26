# Rentify

Rentify is a web application designed to streamline the property rental process for sellers and renters. Sellers can list their properties, and renters can browse through these listings to find their desired rental property. The platform provides an intuitive interface for managing property details and ensures a seamless user experience.

## Frontend

The frontend of Rentify is built with React, providing a dynamic and responsive user interface. Below are the key libraries and frameworks used:

### Libraries Used
- **@emotion/react**: For writing CSS styles with JavaScript.
- **@emotion/styled**: For creating styled React components.
- **@mui/material**: Material-UI library for React components.
- **axios**: For making HTTP requests to the backend.
- **notistack**: For displaying notifications and alerts.
- **react-icons**: For including popular icons in the project.
- **react-router-dom**: For routing and navigation within the React application.

## Backend

The backend of Rentify is built with Node.js and Express, providing robust APIs for managing property listings and user authentication. MongoDB is used as the database to store user and property information.

### Libraries Used
- **bcrypt**: For hashing passwords.
- **cors**: For enabling Cross-Origin Resource Sharing.
- **dotenv**: For loading environment variables from a `.env` file.
- **express**: For creating the server and handling routes.
- **joi**: For data validation.
- **jsonwebtoken**: For handling JSON Web Tokens (JWT) used in authentication.
- **mongoose**: For interacting with MongoDB.
- **nodemon**: For automatically restarting the server during development.
- **validator**: For data validation and sanitization.
### Setup for backend
create .env file and add following variable:
JWT_KEY
MONGO_URI
CLIENT_ORIGIN
