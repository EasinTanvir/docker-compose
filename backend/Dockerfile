# 1️⃣ Use an official lightweight Node.js base image
FROM node:25-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your app
COPY . .

# Set environment variable (you can override it in docker run)
ENV PORT=5000

# Expose the port (should match your .env PORT)
EXPOSE ${PORT}

# Start the app
CMD ["node", "server.js"]
