FROM node:latest

# Create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install dependencies
COPY package.json .
RUN yarn install

# Bundle app source
COPY . .

# Exports
EXPOSE 3001
CMD yarn dev