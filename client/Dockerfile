FROM node:current-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm ci --production
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/build/ /usr/share/nginx/html
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
