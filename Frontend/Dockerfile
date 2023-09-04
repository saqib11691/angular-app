FROM node:16-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY ./Frontend/package.json /app

RUN install -g @angular/cli
RUN npm install
COPY . /app
RUN npm run build
 
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/frontend /usr/share/nginx/html
