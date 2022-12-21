FROM node:18-alpine3.16
WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . .
CMD node index.js
