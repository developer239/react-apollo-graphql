[![CircleCI](https://circleci.com/gh/developer239/react-apollo-graphql.svg?style=svg)](https://circleci.com/gh/developer239/react-apollo-graphql) [![Test Coverage](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/test_coverage)](https://codeclimate.com/github/developer239/react-apollo-graphql/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/maintainability)](https://codeclimate.com/github/developer239/react-apollo-graphql/maintainability) [![Greenkeeper badge](https://badges.greenkeeper.io/developer239/react-apollo-graphql.svg)](https://greenkeeper.io/)

## React Apollo GraphQl

 [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 Today you have basically two ways how to start new react application: [NextJs](https://github.com/zeit/next.js/) or [Create React App](https://github.com/facebook/create-react-app). I created this repository couple of years ago and now I try to keep it alive so that I have at least some idea how to bootstrap new react application from scratch.

 Backend is provided by [graphq.cool](https://www.graph.cool) ❤️

## Demo

 You can try the application [here](https://react-apollo-graphql.herokuapp.com) (it might take a while before the free server wakes up)

#### Custom UI Library 📚

I was slowly getting lost in all of my side projects. Every time I wanted to learn something new I had to spend a lot of time on a basic UI for my application. So I decided to create my own components library.

You can find the repository [here](https://github.com/developer239/ui-react-library)

#### Data Flow (no redux 🎉)

 In the past, Apollo users stored their application’s local data in a separate Redux or MobX store. With apollo-link-state, you no longer have to maintain a second store for local state. You can instead use the Apollo Client cache as your single source of truth that holds all of your local data alongside your remote data. To access or update your local state, you use GraphQL queries and mutations just like you would for data from a server.

 You can find more information [here](https://www.apollographql.com/docs/link/links/state.html)

## Installation

 Run
 ```yarn install```
 
 Vendors dll files should be generated automatically in `/public/vendors-[hash].js` every time you change your dependencies.

 ## Development

 Development server is provided by [express framework](https://github.com/expressjs/express). Webpack is injected to the app through [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).
 
 To start the server just run: `yarn dev`
 
 ## Production
  
 Project files are generated into the `/public` folder using `yarn build:production` command.
 
 1) Use `yarn build:production` in order to build the static files.
 
 2) Use `yarn prod` command in order to start the app. This will start express server.

 ## Deployment on Heroku
 
 This application is Heroku ready. All you have to do is set `config:set NPM_CONFIG_PRODUCTION=false` in your your config. Everything else is prepared.
 
 ## Docker
 
 The development process is not dockerized. However, it is possible to run a production application from docker container:
 
 ```
 docker-compose up
 ```
