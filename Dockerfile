FROM node:22.17.0 AS build

WORKDIR /msme-website

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# --- Production Image ---
FROM node:22.17.0 AS production
WORKDIR /msme-website

# Copy only necessary files for runtime
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /msme-website/.next ./.next
COPY --from=build /msme-website/public ./public

# Copy config files that are needed at runtime
COPY --from=build /msme-website/next.config.mjs ./next.config.mjs
COPY --from=build /msme-website/tailwind.config.mjs ./tailwind.config.mjs
COPY --from=build /msme-website/postcss.config.mjs ./postcss.config.mjs

EXPOSE 3000
CMD ["npm", "start"]
