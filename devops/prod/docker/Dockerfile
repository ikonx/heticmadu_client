FROM node:alpine AS build
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build ./build/* ./
COPY --from=build ./build/static/ ./static
COPY ./devops/prod/nginx/heticmadu.conf /etc/nginx/conf.d/default.conf