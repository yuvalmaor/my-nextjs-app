# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Stage 3: Prepare the production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files and folders
# Commented out because 'next.config.js' doesn't exist
# COPY --from=builder /app/next.config.js ./

# Uncomment the following line if you have a 'public' directory
# COPY --from=builder /app/public ./public

COPY --from=builder /app/.next ./.next
COPY package.json ./

# Install only production dependencies
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
