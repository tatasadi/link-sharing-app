# syntax=docker/dockerfile:1.7-labs

# 1) Builder - use build platform for compilation
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
COPY prisma ./prisma
RUN if [ -f yarn.lock ]; then corepack enable && corepack prepare yarn@stable --activate && yarn --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile; \
    else npm ci; fi
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN \
  if [ -f yarn.lock ]; then corepack enable && yarn build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm run build; \
  else npm run build; fi

# 2) Target deps - install runtime deps for target platform
FROM --platform=$TARGETPLATFORM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f yarn.lock ]; then corepack enable && corepack prepare yarn@stable --activate && yarn --frozen-lockfile --production; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile --prod; \
    else npm ci --only=production; fi

# 3) Runner (production image)
FROM --platform=$TARGETPLATFORM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy built app from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
# Copy production dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Create cache directory with proper ownership
RUN mkdir -p .next/cache && chown -R nextjs:nextjs .next

# Expose a default port; can be overridden
EXPOSE 3000

# Use non-root user
USER nextjs

# Start the Next.js server
ENV PORT=3000
CMD ["node", "server.js"]
