# ### Build
# FROM beevelop/ionic:v2021.06.1 AS ionic

# ## Create app directory
# WORKDIR /usr/src/app

# ## Install app dependencies
# ## A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# RUN npm install .
# ## Bundle app source

# COPY . .

# RUN ionic build

# ### Run 
# FROM nginx:alpine

# #COPY www /usr/share/nginx/html
# COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html

# ## Build
# FROM beevelop/ionic:v2021.06.1 AS ionic
# # Create the application directory
# WORKDIR /usr/src/app
# # Install the application dependencies
# # We can use wildcard to ensure both package.json AND package-lock.json are considered
# # where available (npm@5+)
# COPY package*.json ./

# ENV NODE_OPTIONS=--max-old-space-size=4096

# RUN npm install -f

# # Bundle app source
# COPY . .
# RUN ionic build

# ## Run 
# FROM nginx:1.29.0-alpine
# #COPY www /usr/share/nginx/html
# COPY --from=ionic /usr/src/app/www /usr/share/nginx/html

## Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Copy app dependencies
COPY package*.json ./

ENV NODE_OPTIONS=--max-old-space-size=4096

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the Ionic app
RUN ionic build

## Production Stage
FROM nginx:1.29.0-alpine

# Copy built files from build stage to Nginx html folder
COPY --from=build /app/www /usr/share/nginx/html