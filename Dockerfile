FROM node:12

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

EXPOSE 3000

ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

# Building app
RUN npm run generate

# Running the app
CMD [ "npm", "start" ]
