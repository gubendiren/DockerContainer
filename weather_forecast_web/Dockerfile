FROM node:latest as build 

WORKDIR /app 
COPY package.json .
COPY yarn.lock .

RUN yarn install --silent
COPY . . 

RUN yarn build

FROM nginx 
COPY nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/build  /usr/share/nginx/html 
CMD ["nginx", "-g", "daemon off;"]