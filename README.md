[![CircleCI](https://circleci.com/gh/developer239/react-apollo-graphql.svg?style=svg)](https://circleci.com/gh/developer239/react-apollo-graphql) [![Test Coverage](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/test_coverage)](https://codeclimate.com/github/developer239/react-apollo-graphql/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/maintainability)](https://codeclimate.com/github/developer239/react-apollo-graphql/maintainability) [![Greenkeeper badge](https://badges.greenkeeper.io/developer239/react-apollo-graphql.svg)](https://greenkeeper.io/)

## React Apollo GraphQl

 The third version of minimal react apollo boilerplate. I was learning GraphQl several years ago. However, I couldn't find many react-apollo examples. The situation changed a lot since then, but I am trying to keep this repository alive. It is always nice to see a good example. I hope this one will make learning Apollo and GraphQl easier for you.

 Backend is provided by [graphq.cool](https://www.graph.cool) ❤️

## Demo

 You can try the application [here](https://react-apollo-graphql.herokuapp.com) (it might take a while before the free server wakes up)


#### Main Dependencies

 * [React](https://github.com/facebook/react)
 * [React Router](https://github.com/ReactTraining/react-router)
 * [Apollo](https://github.com/apollographql/react-apollo)
 * [Styled Components](https://github.com/styled-components/styled-components)
 * [Formik](https://github.com/jaredpalmer/formik)
 * [Yup](https://github.com/jquense/yup)
 * [Recompose](https://github.com/acdlite/recompose)
 * [Webpack](https://github.com/webpack/webpack)
 * [Babel](https://github.com/babel/babel)

#### Code Quality Tools

 * [eslint](https://github.com/eslint/eslint)
 * [stylelint](https://github.com/stylelint/stylelint)
 * [jest](https://github.com/facebook/jest)
 * [enzyme](https://github.com/airbnb/enzyme)
 * [.editorconfig](http://editorconfig.org/)


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
