# Blog TurboRepo

A fullstack monorepo blog application built with Next.js (frontend) and NestJS (backend), using Prisma ORM for database management and GraphQL for API communication. The project features authentication, user management, posts, comments, tags, and likes functionality. It's organized using Turborepo for efficient development and build processes.

## Project Structure

```
blog-turborepo/
├── package.json
├── turbo.json
├── apps/
│   ├── api/
│   │   ├── .env.example
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
│   │   │   ├── auth/
│   │   │   │   ├── auth.module.ts
│   │   │   │   ├── auth.resolver.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── dto/
│   │   │   │   ├── entities/
│   │   │   │   ├── guards/
│   │   │   │   ├── strategies/
│   │   │   │   └── types/
│   │   │   ├── comment/
│   │   │   │   ├── comment.module.ts
│   │   │   │   ├── comment.resolver.ts
│   │   │   │   ├── comment.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-comment.input.ts
│   │   │   │   │   └── update-comment.input.ts
│   │   │   │   └── entities/
│   │   │   │       └── comment.entity.ts
│   │   │   ├── graphql/
│   │   │   │   └── schema.gql
│   │   │   ├── like/
│   │   │   │   ├── like.module.ts
│   │   │   │   ├── like.resolver.ts
│   │   │   │   ├── like.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-like.input.ts
│   │   │   │   │   └── update-like.input.ts
│   │   │   │   └── entities/
│   │   │   │       └── like.entity.ts
│   │   │   ├── post/
│   │   │   │   ├── post.module.ts
│   │   │   │   ├── post.resolver.ts
│   │   │   │   ├── post.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-post.input.ts
│   │   │   │   │   └── update-post.input.ts
│   │   │   │   └── entities/
│   │   │   │       └── post.entity.ts
│   │   │   ├── tag/
│   │   │   │   ├── tag.module.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-tag.input.ts
│   │   │   │   │   └── update-tag.input.ts
│   │   │   │   └── entities/
│   │   │   │       └── tag.entity.ts
│   │   │   ├── user/
│   │   │   │   ├── user.module.ts
│   │   │   │   ├── user.resolver.ts
│   │   │   │   ├── user.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   ├── create-user.input.ts
│   │   │   │   │   └── update-user.input.ts
│   │   │   │   └── entities/
│   │   │   │       └── user.entity.ts
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

## Features

### Backend Features

- **GraphQL API** with Apollo Server integration
- **JWT Authentication** with Passport strategy
- **User Management** - User registration, authentication, and profiles
- **Blog Posts** - CRUD operations for blog posts with slug support
- **Comments System** - Users can comment on blog posts
- **Tagging System** - Organize posts with tags
- **Like System** - Users can like/unlike posts
- **Database Migrations** - Prisma-managed database schema evolution
- **Data Seeding** - Populate database with sample data

### Frontend Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design**

## Description

This project is a comprehensive fullstack blog platform with modern web technologies. The backend (`api`) is built with NestJS and uses GraphQL for API communication, Prisma ORM for database operations, and JWT for authentication. The frontend (`front`) is built with Next.js for a modern, fast user experience. Turborepo manages the monorepo structure, enabling efficient builds and development workflows.

## How It Works

- **Backend (NestJS):**
  - Handles GraphQL API endpoints for all blog operations
  - JWT-based authentication with Passport
  - Prisma ORM for database operations (SQLite)
  - Modular architecture with separate modules for Users, Posts, Comments, Tags, Likes, and Auth
  - Auto-generated GraphQL schema from TypeScript decorators

- **Frontend (Next.js):**
  - Modern React-based user interface
  - TypeScript for enhanced developer experience
  - Tailwind CSS for responsive styling
  - Server-side rendering capabilities

- **Database (SQLite with Prisma):**
  - User management with unique email validation
  - Blog posts with slug generation and author relations
  - Comment system linked to posts and users
  - Tag system for content organization
  - Like system for user engagement

- **Turborepo:** Orchestrates builds and development across multiple apps/packages

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v11+)

### Install Dependencies

```bash
npm install
```

### Setup Database

1. Navigate to the API directory:

   ```bash
   cd apps/api
   ```

2. Set up environment variables:

   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Edit the .env file with your specific values
   # DATABASE_URL="file:./dev.db"
   # JWT_SECRET="your-jwt-secret-key"
   # JWT_EXPIRES_IN="24h"
   ```

3. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

4. (Optional) Seed the database with sample data:
   ```bash
   npm run db:seed
   ```

### Start Backend (NestJS)

```bash
cd apps/api
npm run dev
```

The GraphQL playground will be available at `http://localhost:3000/graphql`

### Start Frontend (Next.js)

```bash
cd apps/front
npm run dev
```

The frontend will be available at `http://localhost:3001`

### Development with Turborepo

To run both apps together in development mode:

```bash
npm run dev
```

To build all applications:

```bash
npm run build
```

To lint all applications:

```bash
npm run lint
```

## API Endpoints

The backend exposes a GraphQL API at `/graphql` with the following main operations:

### Authentication

- `signIn(email, password)` - User login
- JWT-based authentication for protected operations

### Users

- `createUser()` - User registration
- `users()` - Get all users
- `user(id)` - Get user by ID

### Posts

- `posts()` - Get all posts
- `post(id)` - Get post by ID
- `createPost()` - Create new post (authenticated)
- `updatePost()` - Update existing post (authenticated)

### Comments

- `comments()` - Get comments for a post
- `createComment()` - Add comment to post (authenticated)

### Tags & Likes

- Tag and like operations for content organization and engagement

## Database Schema

The application uses SQLite database with the following main entities:

- **User**: id, name, email, bio, avatar, password, timestamps
- **Post**: id, slug, title, content, thumbnail, published, authorId, timestamps
- **Comment**: id, content, postId, authorId, timestamps
- **Tag**: id, name (with many-to-many relation to Posts)
- **Like**: id, userId, postId, timestamp

## Technology Stack

### Backend

- **NestJS** - Node.js framework
- **GraphQL** - API query language
- **Apollo Server** - GraphQL server
- **Prisma** - Database ORM
- **SQLite** - Database
- **JWT** - Authentication
- **Passport** - Authentication middleware
- **TypeScript** - Type safety

### Frontend

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### Development

- **Turborepo** - Monorepo management
- **ESLint** - Code linting
- **Prettier** - Code formatting

## License

MIT
