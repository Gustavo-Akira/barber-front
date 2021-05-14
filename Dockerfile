FROM node:14.15.3 as build-prod
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-prod /app/dist/barber /usr/share/nginx/html