/**
* Setup Express app.
*/
'use strict';

let helmet = require('helmet');
let methodOverride = require('method-override');
let bodyParser = require('body-parser');

module.exports = setup;

/**
* Sets up Express app.
*
* @param {Object} app  The express app.
*/
function setup(app) {
  app.use(helmet());
  app.use(methodOverride());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};
