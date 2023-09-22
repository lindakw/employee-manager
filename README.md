# Employee Management App

## Overview

The Employee Management App is a web application built using React.js for the frontend, Node.js with Express.js for the backend, and MongoDB Atlas as the database. This app allows organizations to manage their employee data efficiently, including adding, editing, and deleting employee records.

Additionally, this repository includes Docker configuration files to containerize the application, making it easy to deploy and run in different environments.

## Features

- **Employee Management**: Add, edit, and delete employee records with ease.
- **Database Integration**: Utilizes MongoDB Atlas as the database for storing employee information.
- **Containerization**: Docker setup for containerizing the application, ensuring consistent deployment across various platforms.

  ## Future Features
  - **User Authentication**: Secure user authentication for accessing and managing employee data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your system.
- MongoDB Atlas account for database hosting.
- Docker installed (if you plan to use Docker for deployment).

## Getting Started

Follow these steps to get the Employee Management App up and running:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/lindakw/employee-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd employee-manager
   ```

3. Install frontend and backend dependencies:

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

4. Configuration:

   - Create a `.env` file in the `server` directory and set your MongoDB Atlas connection URI and other environment variables as needed.

5. Start the application:

   ```bash
   # Start the frontend (from the 'client' directory)
   cd ../client
   npm start

   # Start the backend (from the 'server' directory)
   cd ../server
   npm start
   ```

6. Access the application in your browser at `http://localhost:3000`.

## Docker Deployment

To deploy the Employee Management App using Docker, follow these steps:

1. Ensure Docker is installed and running on your system.

2. Build the Docker image:

   ```bash
   docker build -t employee-manager .
   ```

3. Run the Docker container:

   ```bash
   docker run -d -p 8080:8080 --env-file server/.env employee-manager
   ```

4. Access the application in your browser at `http://localhost:8080`.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/new-feature
   ```

4. Make your changes and commit them with a descriptive commit message.

5. Push your changes to your GitHub repository:

   ```bash
   git push origin feature/new-feature
   ```

6. Create a pull request from your branch to the main repository.


Thank you for using the Employee Management App! We hope it serves your needs effectively.
