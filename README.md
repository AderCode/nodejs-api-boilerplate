# NodeJS Boilerplate

Basic NodeJS Express Server API

## Install for Development

- npm install
- npm run dev
- Test in browser or postman localhost:3000/api/test

## Production

- npm run start

Dish up you HTML in client
Configure api routes in server/src/routes (be sure to add them to server/src/routes/index.js)

## Dependencies

- Babel
  - to transpile es6+ to es5 for multi-browser compatibility
- Express
  - Wouldn't be much of an express server without it
- Morgan
  - http request logging
- Rimraf
  - cross platform Unix `rm -rf` command for non OS specific execution

## Dev Dependencies

- Concurrently
  - for running more than one command at the same time
- Nodemon
  - Automatic server restarting