# 1️⃣ Use the latest Node.js (lightweight Alpine image)
FROM node:25-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy source code
COPY . .

# 6️⃣ Copy .env file (optional — only if safe and needed)
# COPY .env . 

# 7️⃣ Define default environment variables
ENV NODE_ENV=production

# 8️⃣ Allow Docker to use a dynamic port from .env or docker run
ARG PORT=5000
ENV PORT=$PORT

# 9️⃣ Expose the port (for documentation only)
EXPOSE $PORT

# 10️⃣ Start the app
CMD ["node", "server.js"]
