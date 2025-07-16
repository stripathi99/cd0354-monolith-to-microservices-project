FROM node:18-alpine

## Create app directory
WORKDIR /usr/src/app

## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN npm update
RUN npm install

# RUN npm ci --omit=dev && npm cache clean --force

## Bundle app source
COPY ./ ./

EXPOSE 8080

CMD [ "npm", "run", "prod" ]