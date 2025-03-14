FROM node:20.18.1-alpine3.21 AS build

WORKDIR /usr/src/autoholod-frontend

COPY package.json ./

RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/autoholod-frontend/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
