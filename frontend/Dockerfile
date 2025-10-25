# 1️⃣ Build stage
FROM node:25-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Pass BASE_URL at build time (used for static builds)
ARG BASE_URL
ENV BASE_URL=${BASE_URL}

RUN npm run build

# 2️⃣ Runner stage
FROM node:25-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only needed files
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# Add BASE_URL for runtime (server components, API routes, etc.)
ARG BASE_URL
ENV BASE_URL=${BASE_URL}

EXPOSE 3000

CMD ["npm", "start"]
