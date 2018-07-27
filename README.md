## React Apollo GraphQl

 The third version of minimal react apollo boilerplate. I was learning GraphQl several years ago. However, I couldn't find many react-apollo examples. The situation changed a lot since then, but I am trying to keep this repository alive. There is never enough of simple examples. I hope this one will make learning Apollo and GraphQl easier for you.

 Backend is provided by [graphq.cool](https://www.graph.cool/) ❤️

## Demo

 You can try the application [here](https://react-redux-apollo-graphql.herokuapp.com/) (it might take a while before the free server wakes up)


#### Main Dependencies

 * [React](https://github.com/facebook/react) 16.4.1
 * [React Router](https://github.com/ReactTraining/react-router) 4.3.1
 * [Apollo](https://github.com/apollographql/react-apollo) 2.1.6
 * [Styled Components](https://github.com/styled-components/styled-components) 3.3.3
 * [Formik](https://github.com/jaredpalmer/formik) 1.0.2
 * [Yup](https://github.com/jquense/yup) 0.26.0
 * [Recompose](https://github.com/acdlite/recompose) 0.27.1
 * [Webpack](https://github.com/webpack/webpack) 4.16.3  

#### Code Quality Tools

 * [eslint](https://github.com/eslint/eslint) 5.2.0
 * [stylelint](https://github.com/stylelint/stylelint) 9.4.0
 * [jest](https://github.com/facebook/jest) 23.4.1
 * [enzyme](https://github.com/airbnb/enzyme) 3.3.0
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
 
 #### Production server
  
 Project files are generated into the `/public` folder using `yarn build:production` command.
 
 1) Use `yarn build:production` in order to build the static files.
 
 2) Use `yarn prod` command in order to start the app. This will start express server.
