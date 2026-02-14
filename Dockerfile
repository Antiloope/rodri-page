FROM node:22-alpine

WORKDIR /app

# Copy package files first for layer caching: npm ci only re-runs when these change
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Default command: production build for GitHub Pages
CMD ["npm", "run", "build"]
