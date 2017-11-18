# React Redux Apollo GraphQL Hot Boilerplate 2.0

Updated version of the old apollo graphql boilerplate. This one is cleaner and functional. I used boilerplate code from my [workbox-webpack-react](https://github.com/developer239/workbox-webpack-react) but I got rid of the [PWA](https://developers.google.com/web/progressive-web-apps/) aspects because progressive websites are little bit confusing for new developers.

[Try it here](https://react-redux-apollo-graphql.herokuapp.com/) (it might take a while before the free server wakes up)

__Uses:__

 * [React Apollo](https://github.com/apollographql/react-apollo) 2.0.2
 * [React](https://github.com/facebook/react) 16.0.1
 * [React Router](https://github.com/ReactTraining/react-router) 4.2.2
 * [Recompose](https://github.com/acdlite/recompose) 0.26.0
 * [Redux](https://github.com/reactjs/redux) 3.7.2
 * [Webpack](https://github.com/webpack/webpack) 3.8.1

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

#### Other tips

* This app is heroku ready. You have to set `heroku config:set NPM_CONFIG_PRODUCTION=false` on your heroku server. Everything else is prepared. `Procfile` will run `yarn prod` command.

* New npm dependencies should be added into the `vendors` array in `/webpack/webpack.dll.babel.js`. Dll file with vendor libraries is generated after every `yarn install`. This makes webpack builds a lot faster.

## To do

- [ ] Write unit tests with at least 80% coverage
- [ ] Add [nightwatch](https://github.com/nightwatchjs/nightwatch) in order to support E2E testing
