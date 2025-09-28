# syntax=docker/dockerfile:1.7-labs

# 1) Builder - use build platform for compilation
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
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

# 3) Runner (production image)
FROM --platform=$TARGETPLATFORM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install OpenSSL for Prisma (Alpine uses OpenSSL 3.0 natively)
RUN apk add --no-cache openssl

# Create a non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy built app from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Create cache directory with proper ownership
RUN mkdir -p .next/cache && chown -R nextjs:nextjs .next

# Expose a default port; can be overridden
EXPOSE 3000

# Use non-root user
USER nextjs

# Start the Next.js server
ENV PORT=3000
CMD ["node", "server.js"]
