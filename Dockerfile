#build
FROM node:16.15.1-alpine as build1
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

#nginx
FROM nginx:1.23.3-alpine
COPY ./nginx.conf /etc/nginx/conf.d/
COPY --from=build1 /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
