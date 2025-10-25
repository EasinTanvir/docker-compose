# 1️⃣ Base build stage
FROM node:25-alpine AS base

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Get the build-time BASE_URL from Compose
ARG BASE_URL
ENV BASE_URL=$BASE_URL

RUN npm run build

# 2️⃣ Runtime stage
FROM node:25-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy necessary files
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./next.config.mjs
COPY --from=base /app/node_modules ./node_modules

# (optional) expose runtime env
ENV BASE_URL=$BASE_URL

EXPOSE 3000
CMD ["npm", "start"]
