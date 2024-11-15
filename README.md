# Next.js 15 and React 19 Project

This project is a modern web application built using Next.js 15 and React 19. It follows a set of conventions and best practices to ensure maintainability, scalability, and performance.

## Table of Contents

- [Framework Versions](#framework-versions)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Framework Versions

- **Next.js**: 15.x
- **React**: 19.x (Release Candidate)

## Project Structure

The project is organized into several key directories:

- `src/app`: Contains the main application logic, including pages and components.
- `src/components`: Houses reusable UI components, organized by common, UI, and feature-specific directories.
- `src/lib`: Includes utility functions, hooks, and other shared logic.
- `src/prisma`: Manages database schema and migrations using Prisma.
- `rules`: Contains YAML files defining project conventions and best practices.

## Installation

To get started with the project, clone the repository and install the dependencies:

```
bash
git clone <repository-url>
cd <project-directory>
npm install
```


## Scripts

The following scripts are available in the project:

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm run format`: Format the code using Prettier.
- `npm run clean`: Remove build artifacts and node modules.
- `npm run db:generate`: Generate Prisma client.
- `npm run db:migrate`: Run database migrations.
- `npm run db:deploy`: Deploy database migrations.
- `npm run db:push`: Push the Prisma schema to the database.
- `npm run db:status`: Check the status of database migrations.
- `npm run db:studio`: Open Prisma Studio for database management.

## Configuration

The project uses several configuration files:

- `.env.local`: Store environment variables locally. Do not commit this file to version control.
- `next.config.ts`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `.eslintrc.json`: ESLint configuration file.
- `.prettierrc.json`: Prettier configuration file.

## Development Guidelines

The project follows a set of guidelines to ensure code quality and consistency:

- **Environment Configuration**: Use Zod for environment variable validation. Store sensitive data in `.env.local`.
- **Component Organization**: Use PascalCase for component names. Each component should be in its own file.
- **Styling**: Use Tailwind CSS for styling. Follow shadcn's styling variables.
- **API Routes**: Use HTTP method exports and Zod for request validation.
- **State Management**: Use React Context and Zustand for state management.

For detailed guidelines, refer to the YAML files in the `rules` directory.

## Contributing

Contributions are welcome! Please follow the project's coding standards and guidelines. Before submitting a pull request, ensure that your code passes all tests and adheres to the project's conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

