# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production app (includes Prisma generate)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database
- `npx prisma migrate dev --name <name>` - Create and apply new migration
- `npx prisma generate` - Generate Prisma client (auto-runs on postinstall)
- `npx prisma studio` - Open Prisma Studio database GUI

### Storybook
- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production

## Architecture Overview

### Next.js App Router Structure
- **App Directory**: Uses Next.js 13+ App Router with TypeScript
- **Route Groups**:
  - `(authorized)` - Protected routes requiring authentication
  - `(edit)` - Nested group within authorized for link/profile editing
- **Middleware**: Route protection via NextAuth middleware in `middleware.ts`

### Authentication
- **NextAuth v5** with credentials provider using bcrypt for password hashing
- **Session Strategy**: JWT-based with 30-day expiration
- **Protected Routes**: `/`, `/links`, `/profile`, `/preview` require authentication
- **Custom Pages**: Custom login page at `/login`

### Database & ORM
- **Prisma ORM** with PostgreSQL
- **Models**:
  - `User` - Profile data, credentials, Azure blob file references
  - `Link` - Social platform links with ordering support
- **Relationships**: One-to-many between User and Links

### State Management
- **Zustand** store in `app/useStore.ts` manages:
  - Links array with drag-and-drop reordering
  - Profile data (firstName, lastName, email)
  - Profile image URL from Azure storage
- **Key Actions**: addLink, removeLink, updateLink, reorderLinks, updateProfile

### File Storage
- **Azure Blob Storage** integration via `@azure/storage-blob`
- **Server Actions** in `actions/azure-blob-storage.ts` handle uploads
- **Image Handling**: Profile pictures stored in Azure with filename tracking in database

### UI Components
- **Shadcn/ui** components with Tailwind CSS
- **React Hook Form** with Zod validation for all forms
- **Drag & Drop**: `@hello-pangea/dnd` for link reordering
- **Icons**: Lucide React for UI, React Icons for social platforms

### Key Patterns
- **Server Actions**: Database operations in `actions/` directory (auth.ts, data.ts)
- **Form Validation**: Zod schemas with React Hook Form integration
- **Component Structure**: Sections in `components/sections/`, UI primitives in `components/ui/`
- **Public Profiles**: Shareable profile pages at `/[userId]` route

### Environment Setup
Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `AUTH_SECRET` - NextAuth secret key
- `AZURE_STORAGE_CONNECTION_STRING` - Azure Blob Storage connection
- `AZURE_STORAGE_CONTAINER_NAME` - Azure container name
- `AZURE_STORAGE_NAME` - Azure storage account name

## Deployment

### Docker Deployment
The app includes a production-ready Dockerfile with multi-stage build:
- **Base**: Node 18 on Debian Bullseye slim
- **Dependencies**: Installs packages and generates Prisma client
- **Builder**: Builds Next.js app with standalone output
- **Runner**: Production container with non-root user

### GitHub Actions Workflows
- **Azure Deployment** (`.github/workflows/ci-cd.yml`): Deploys to Azure Container Apps
- **Ubuntu Server Deployment** (`.github/workflows/deploy-ubuntu.yml`): Deploys to Ubuntu server via SSH

### Ubuntu Server Setup Requirements
Required GitHub secrets for Ubuntu deployment:
- `SERVER_HOST` - Ubuntu server IP/hostname
- `SERVER_USER` - SSH username
- `SERVER_SSH_KEY` - Private SSH key for authentication
- `SERVER_PORT` - SSH port (optional, defaults to 22)
- `DOCKER_NETWORK` - Docker network name for database connectivity
- All environment variables listed above

Server prerequisites:
- Docker installed and running
- SSH access configured
- Port 3003 available for the application