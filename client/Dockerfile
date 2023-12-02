FROM node:current-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]