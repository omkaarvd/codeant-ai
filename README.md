This project is built using Next.js and includes the following npm scripts for development, building, and running the application.

## Prerequisites

- Node.js installed on your machine.
- Package manager like `npm`, `pnpm`, or `yarn`.

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

### 1. **Development**

Run the application in development mode with TurboPack for faster builds.

```bash
pnpm dev
```

- Starts the Next.js development server.
- Watches for changes in your files and reloads the application automatically.

### 2. **Build**

Create an optimized production build of the application.

```bash
pnpm build
```

- Compiles the project into static assets and server-side resources.
- Ensures the application is production-ready.

### 3. **Start**

Serve the optimized production build.

```bash
pnpm start
```

- Starts a Node.js server to serve the production build.
- Useful for previewing the application as it would appear in production.
