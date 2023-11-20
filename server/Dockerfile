FROM node:16
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]