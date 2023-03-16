# pull official base image
FROM node:16-alpine as build

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# add app
COPY . .

# start app
RUN yarn build


FROM nginx:1.20.2-alpine
COPY --from=build ./app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]