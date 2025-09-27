# syntax=docker.io/docker/dockerfile:1

# Use a Debian-based Node 18 image (Bullseye slim)
FROM node:18-bullseye-slim AS base

# Update package lists and install required packages
RUN apt-get update && apt-get install -y \
    libssl1.1 \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

WORKDIR /app

# -------------------------------
# Dependencies Stage
# -------------------------------
FROM base AS deps
# Copy only the package and lock files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

COPY prisma ./prisma

# Install dependencies with the preferred package manager.
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# -------------------------------
# Build Stage
# -------------------------------
FROM base AS builder
WORKDIR /app
# Copy the node_modules from the deps stage.
COPY --from=deps /app/node_modules ./node_modules
# Copy the entire project (ensure your .dockerignore allows needed files, e.g. the prisma folder).
COPY . .
# Build the Next.js application.
RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# -------------------------------
# Runner / Production Stage
# -------------------------------
FROM base AS runner
WORKDIR /app

# Set production environment variable.
ENV NODE_ENV=production

# Create a system group and user for running the app.
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy static assets and the standalone output from the builder stage.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to a non-root user.
USER nextjs

# Expose the port on which the Next.js server runs.
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the server.
CMD ["node", "server.js"]
