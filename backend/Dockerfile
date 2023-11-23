# Use an official Node runtime as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /app/backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Install the cors package
RUN npm install cors

# Bundle the source code inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "run", "dev"]
