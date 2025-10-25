# ---------- Stage: deps & build ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install build dependencies
COPY frontend/package*.json ./ 
# If you use pnpm/yarn, change the install command accordingly
RUN npm ci

# Copy the rest of the frontend app
COPY frontend/ .

# Accept a build arg for the public base url (used by Next at build time)
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

# Also set BASE_URL env to embed for server runtime (if you read process.env.BASE_URL server-side)
ARG BASE_URL
ENV BASE_URL=${BASE_URL}

# Build the Next.js app (standalone output expected)
RUN npm run build

# ---------- Stage: runtime ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy the standalone output produced by Next
# Next's standalone build creates .next/standalone and .next/static
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# If you have public folder assets, copy them
COPY --from=builder /app/public ./public

# Ensure node_modules referenced by the standalone package are available (package.json lives inside standalone)
# Install only production dependencies if needed (the standalone folder normally includes needed deps)
# But to be safe, if standalone/package.json exists, install:
RUN if [ -f "package.json" ]; then \
      npm ci --omit=dev --quiet || true; \
    fi

EXPOSE 3000

# Default runtime env (docker-compose will override)
ENV BASE_URL=${BASE_URL:-http://backend:5000}
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL:-http://backend:5000}

# The standalone server entrypoint created by Next is usually server.js at root of the standalone folder.
CMD ["node", "server.js"]
