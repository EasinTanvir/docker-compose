FROM node:20-alpine
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the backend app
COPY . .

# Set default env (docker-compose will override with .env)
ENV PORT=${PORT:-5000}
EXPOSE 5000

CMD ["node", "server.js"]
