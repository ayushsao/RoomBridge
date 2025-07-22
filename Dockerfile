# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from server directory
COPY server/package*.json ./

# Install dependencies
RUN npm install --production

# Copy only server source code
COPY server/ ./

# Expose port
EXPOSE 8000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
