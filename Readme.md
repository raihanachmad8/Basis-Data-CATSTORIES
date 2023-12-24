# Cat Stories Management System

Welcome to the Cat Stories Management System project!

This repository hosts a comprehensive management solution designed for organizing and sharing cat stories. The system utilizes Express.js and Knex on the backend, with React.js on the frontend, providing a modern and efficient platform for managing and sharing cat-related content.

## Features

- **Cat Tracking:** Easily manage and organize cat stories within the system.
- **User Management:** Maintain a database of users, allowing for seamless story association.
- **React.js Frontend:** Utilize a responsive and interactive user interface for a smooth user experience.
- **Express.js and Knex Backend:** Leverage a robust backend architecture for efficient data handling.

## Authors

- [Achmad Raihan Fahrezi Effendy](https://github.com/raihanachmad8)

## Getting Started

This documentation provides information on setting up and running a Cat Stories Management System with Express.js, Knex, and React.js. To get started with this project, follow the steps below to install the required dependencies.

## Table of Contents

- [Cat Stories Management System](#cat-stories-management-system)
  - [Features](#features)
  - [Authors](#authors)
  - [Getting Started](#getting-started)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Additional Tools and Libraries](#additional-tools-and-libraries)
  - [Install Repository](#install-repository)
  - [Usage](#usage)
  - [Documentation](#documentation)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
    - [How to Contribute](#how-to-contribute)

## Prerequisites

- [Node.js](https://nodejs.org/) (for both backend and frontend)
- [Express.js](https://expressjs.com/)
- [Knex](http://knexjs.org/)
- [React.js](https://reactjs.org/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/) (your text editor of choice)

## Additional Tools and Libraries

- [Vite](https://vitejs.dev/): Frontend build tool
- [Jest](https://jestjs.io/): Testing framework
- [Joi](https://joi.dev/): Object schema validation
- [Winston](https://github.com/winstonjs/winston): Logging library
- [Axios](https://axios-http.com/): HTTP client
- [Tailwind CSS](https://tailwindcss.com/): CSS framework

## Install Repository

1. **Clone the repository to your local machine:**
    ```bash
    git clone https://github.com/raihanachmad8/cat-stories-management.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd cat-stories-management
    ```

3. **Install backend dependencies:**
    ```bash
    pnpm install
    ```

4. **Install frontend dependencies:**
    ```bash
    cd frontend
    pnpm install
    ```

5. **Setting Environment Variables:**
    Create an .env file in the directory and configure your environment variables (JWT_KEY, DB_MSSQL_DATABASE, DB_MSSQL_USERNAME, DB_MSSQL_PASSWORD). Edit if needed.

6. **Migration database:**
    ```bash
    pnpm migrate:seed
    ```

## Usage

To run the application, use the following commands:

1. **Start the backend:**
    ```bash
    pnpm run start:backend
    ```

2. **Start the frontend:**
    ```bash
    pnpm run start:frontend
    ```

3. **Run both frontend and backend concurrently:**
    ```bash
    pnpm dev
    ```

4. **Run database migrations and seed data:**
    ```bash
    pnpm run migrate:seed
    ```

5. **Run database migrations only:**
    ```bash
    pnpm run knex:migrate
    ```

6. **Rollback the last database migration:**
    ```bash
    pnpm run knex:rollback
    ```

7. **Run database seed data only:**
    ```bash
    pnpm run knex:seed
    ```

8. **Run tests:**
    ```bash
    pnpm test
    ```

## Documentation

Refer to the project documentation for detailed information on using and extending the Cat Stories Management System.

## API Documentation

Explore the API using the [Swagger UI](http://localhost:3000/api/v1/docs) or access directly in backend/docs/swagger.yaml.

## Contributing

We appreciate contributions from the community! The following individuals have contributed to the Cat Stories Management System:

- [Vunky Himawan](https://github.com/vunky-himawan)
- [Putra Zakaria Muzaki](https://github.com/PutraZakaria)

### How to Contribute

Contributions are welcome! If you have ideas for improvements or find issues, please feel free to contribute by following these guidelines:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request.

Please follow our [Contribution Guidelines](CONTRIBUTING.md) for more details.

Happy coding and cat story managing! 🐾
