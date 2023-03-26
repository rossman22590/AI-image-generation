# Base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the application runs
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
