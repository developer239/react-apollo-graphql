FROM node:alpine

ENV NODE_ENV='production'
ENV SERVER_URL='https://node-type-orm-graphql.herokuapp.com/graphql'

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install

# Bundle app source
COPY . /usr/src/app
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "prod" ]
