# React Redux Apollo GraphQL Hot Boilerplate 2.0

Updated version of the old apollo graphql boilerplate. This one is cleaner and functional. I used boilerplate code from my [workbox-webpack-react](https://github.com/developer239/workbox-webpack-react) but I got rid of the [PWA](https://developers.google.com/web/progressive-web-apps/) aspects because progressive websites are little bit confusing for new developers.

[Try it here](https://react-redux-apollo-graphql.herokuapp.com/) (it might take a while before the free server wakes up)

Backend is provided by [graphq.cool](https://www.graph.cool/) :heart:

__Uses:__

 * [React Apollo](https://github.com/apollographql/react-apollo) 2.1.6
 * [React](https://github.com/facebook/react) 16.4.1
 * [React Router](https://github.com/ReactTraining/react-router) 4.3.1
 * [Recompose](https://github.com/acdlite/recompose) 0.27.1
 * [Redux](https://github.com/reactjs/redux) 4.0.0
 * [Webpack](https://github.com/webpack/webpack) 4.12.0
 * [Styled Components](https://github.com/styled-components/styled-components) 3.3.3

#### Installing the project
 
 Run
 ```yarn install```
 
 Make sure that `/public/vendor/vendors.js` file is generated.
 
 #### Development server
 
 Development server is served by [express framework](https://github.com/expressjs/express). Webpack is injected to the app through [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).
 
 To start the server just run: `yarn dev`
 
 #### Production server
  
 Production server is also served by [express framework](https://github.com/expressjs/express).
  
 Project files are generated into the `/public` folder using `yarn build` command.
 
 1) Use `yarn build` in order to build the static files.
 
 2) Use `yarn prod` command in order to start the app. This will start express server.
 
 #### Code Quality Tools
 
 * .editorconfig
 * [eslint](https://github.com/eslint/eslint) 4.11.0
 * [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 16.1.0
 
 #### Testing
 
 * [nightwatch](https://github.com/nightwatchjs/nightwatch) 0.9.16
 * [selenium-download](https://github.com/groupon/selenium-download) 2.0.10

  You don't have to install any global dependencies. Selenium server will be downloaded into `node_modules` and nightwatch will be run from `node_modules/.bin`.

  1) Run `yarn e2e:download` in order to download selenium jar file
  
  2) Run `yarn dev`
  
  3) Run `yarn e2e` so that you start testing

#### Other tips

* This app is heroku ready. You have to set `heroku config:set NPM_CONFIG_PRODUCTION=false` on your heroku server. Everything else is prepared. `Procfile` will run `yarn prod` command.

* New npm dependencies should be added into the `vendors` array in `/webpack/webpack.dll.babel.js`. Dll file with vendor libraries is generated after every `yarn install`. This makes webpack builds a lot faster.

## To do

- [ ] Write unit tests with at least 80% coverage
- [x] Add [nightwatch](https://github.com/nightwatchjs/nightwatch) in order to support E2E testing
