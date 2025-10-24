# 1️⃣ Use the latest stable Node.js image
FROM node:25-alpine AS base

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files for caching
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy all files
COPY . .

# 6️⃣ Build the Next.js project
RUN npm run build

# 7️⃣ Create a smaller production image
FROM node:25-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only the build output and necessary files
COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# 8️⃣ Expose the Next.js default port
EXPOSE 3000

# 9️⃣ Start the Next.js app
CMD ["npm", "start"]
