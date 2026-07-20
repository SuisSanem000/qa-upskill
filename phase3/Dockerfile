# ============================================================
# Dockerfile — QA Upskill Playwright Test Suite
# ============================================================

# TODO: Choose the official Playwright base image
# Replace X.X.X with the Playwright version from your package.json
# Find available tags at: https://mcr.microsoft.com/en-us/product/playwright/tags
FROM mcr.microsoft.com/playwright:v1.48.0-jammy

# TODO: Set the working directory inside the container
WORKDIR /app

# TODO: Copy package files first (Docker caching optimization)
# Copy package.json and package-lock.json before the rest of the code
# so that npm install only re-runs when dependencies change
COPY package.json package-lock.json ./

# TODO: Install Node.js dependencies
RUN npm ci

# TODO: Copy the rest of the project files
COPY . .

# TODO: (Optional) Set environment variables for CI
ENV CI=true

# TODO: Define the default command to run when the container starts
# This runs all Playwright tests
CMD ["npx", "playwright", "test", "--reporter=list"]
