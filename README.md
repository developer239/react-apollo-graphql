[![CircleCI](https://circleci.com/gh/developer239/react-apollo-graphql.svg?style=svg)](https://circleci.com/gh/developer239/react-apollo-graphql)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/test_coverage)](https://codeclimate.com/github/developer239/react-apollo-graphql/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/8b605e0fb1af6dc86063/maintainability)](https://codeclimate.com/github/developer239/react-apollo-graphql/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/developer239/react-apollo-graphql.svg)](https://greenkeeper.io/)
[![TypeScript](https://badges.frapsoft.com/typescript/version/typescript-next.svg?v=101)](https://www.typescriptlang.org/)

## React Apollo GraphQL [from scratch]


Today you have basically two ways how to start new React application: [NextJs](https://github.com/zeit/next.js/) or [Create React App](https://github.com/facebook/create-react-app). 

This application was created from scratch. If you ever wondered how to create your own boilerplate. This is a good place to start.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Demo

 You can try the application [here](https://react-apollo-graphql.herokuapp.com) (it might take a while before the free server wakes up)
 
 📘 Backend API is running [here](https://node-type-orm-graphql.herokuapp.com/graphql). You can find the source code of the backend application [here](https://github.com/developer239/node-type-orm-graphql).

# Development

System Dependencies:

1. `brew install node`
2. `brew install yarn`

Run development server:

1. `yarn install`
2. `yarn apollo:generate-types:watch`
3. `yarn watch`

## Useful Commands

- `yarn lint:ts` lint TS files
- `yarn lint:css` lint CSS
- `yarn lint:circular-dependencies` detects circular dependencies
- `yarn apollo:generate-types` generate TS definitions from GraphQL schema
- `yarn apollo:remove-all-types` remove all automatically generated TS definitions
- `yarn test` run jest

## Docker 🐳
 
The development process is not dockerized. However, it is possible to run a production application in docker container:
 
```
docker-compose up
```
