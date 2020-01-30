FROM node:alpine AS build
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build ./build .