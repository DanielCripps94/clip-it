# Use node:18-alpine as the base image
FROM node:18-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy only the package.json and lock file first (leverage Docker caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies with pnpm
RUN pnpm install

# Copy the rest of the application source code
COPY . .

# Expose the required port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]