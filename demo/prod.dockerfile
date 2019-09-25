# Node 
FROM node:lts-alpine as build

# Instalar bash
RUN apk update && apk add bash

# Instalar @angular/cli
RUN npm install -g @angular/cli

# Directorio de trabajo
WORKDIR /app

# se agrega `/app/node_modules/.bin` al $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalacion de dependencias de aplicacion web
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli

# se copia todo el proyecto (menos los archivos del .dockerignore)
COPY . /app

# Compilacion de proyecto angular
RUN ng build --output-path=dist

############
### prod ###
############

# Imagen Base Nginx
FROM nginx:1.16.0-alpine

# Se copia el artefacto contruido desde 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# Se expone el puerto 80
EXPOSE 80

# Se ejecuta nginx
CMD ["nginx", "-g", "daemon off;"]