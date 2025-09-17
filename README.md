# Blog TurboRepo

A fullstack monorepo blog application built with Next.js (frontend) and NestJS (backend), using Prisma ORM for database management. The project is organized using Turborepo for efficient development and build processes.

## Project Structure

```
blog-turborepo/
├── package.json
├── turbo.json
├── apps/
│   ├── api/
│   │   ├── eslint.config.mjs
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── tsconfig.build.json
│   │   ├── tsconfig.json
│   │   ├── prisma/
│   │   │   ├── dev.db
│   │   │   ├── schema.prisma
│   │   │   ├── seed.ts
│   │   │   └── migrations/
│   │   │       ├── migration_lock.toml
│   │   │       ├── 20250917003756_init/
│   │   │       │   └── migration.sql
│   │   │       └── 20250917004958_fixing/
│   │   │           └── migration.sql
│   │   ├── src/
│   │   │   ├── app.controller.spec.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app.service.ts
│   │   │   ├── main.ts
│   │   │   ├── graphql/
│   │   │   │   └── schema.gql
│   │   │   ├── post/
│   │   │   │   ├── post.module.ts
│   │   │   │   ├── post.resolver.ts
│   │   │   │   ├── post.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-post.input.ts
│   │   │   │   │   └── update-post.input.ts
│   │   │   │   └── entities/
│   │   │   │       └── post.entity.ts
│   │   │   └── prisma/
│   │   │       ├── prisma.module.ts
│   │   │       ├── prisma.service.spec.ts
│   │   │       └── prisma.service.ts
│   │   └── test/
│   │       ├── app.e2e-spec.ts
│   │       └── jest-e2e.json
│   └── front/
│       ├── eslint.config.mjs
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── README.md
│       ├── tsconfig.json
│       ├── public/
│       │   ├── file.svg
│       │   ├── globe.svg
│       │   ├── next.svg
│       │   ├── vercel.svg
│       │   ├── window.svg
│       └── src/
│           └── app/
│               ├── favicon.ico
│               ├── globals.css
│               ├── layout.tsx
│               └── page.tsx
```

## Description

This project is a fullstack blog platform. The backend (`api`) is built with NestJS and uses Prisma ORM for database operations. The frontend (`front`) is built with Next.js for a modern, fast user experience. Turborepo manages the monorepo structure, enabling efficient builds and development workflows.

## How It Works

- **Backend (NestJS):** Handles API requests, GraphQL endpoints, and database operations for blog posts.

- **Frontend (Next.js):** Provides the user interface for viewing and creating blog posts.
- **Prisma:** Manages database schema and migrations.
- **Turborepo:** Orchestrates builds and development across multiple apps/packages.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Setup Database

1. Navigate to `apps/api/prisma`.
2. Run migrations:
   ```bash
   npx prisma migrate dev
   ```
3. (Optional) Seed the database:
   ```bash
   npx ts-node seed.ts
   ```

### Start Backend (NestJS)

```bash
cd apps/api
npm run start:dev
```

### Start Frontend (Next.js)

```bash
cd apps/front
npm run dev
```

### Development with Turborepo

To run both apps together:

```bash
npm run dev
```

## License

MIT
