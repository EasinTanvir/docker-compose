# 1️⃣ Use the latest Node.js (lightweight Alpine image)
FROM node:25-alpine

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy package files for dependency installation
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy the rest of the source code
COPY . .

# 6️⃣ Expose the port your Node.js app listens on
# (Change if your app uses another port)
EXPOSE 5000

# 7️⃣ Define environment variable for production
ENV NODE_ENV=production

# 8️⃣ Run the Node.js application
CMD ["node", "server.js"]
