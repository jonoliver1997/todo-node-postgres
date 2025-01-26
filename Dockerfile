# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json file
COPY package*.json .

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 4500

# Run the app
CMD ["node", "./src/server.js"]