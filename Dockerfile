# Step 1: Use the official Node.js image
FROM node:18-alpine AS builder

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy all source files
COPY . .

# Step 5: Build the Next.js application
RUN npm run build

# Step 6: Use a lightweight image for production
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the built app and node_modules
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port and set command
EXPOSE 3000
CMD ["npm", "run", "start"]
