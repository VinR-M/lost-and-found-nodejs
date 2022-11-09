/* eslint-disable no-use-before-define */
/* eslint-disable strict */
/**
* Setup Express app.
*/

'use strict';

const helmet = require('helmet');
const methodOverride = require('method-override');
const express = require('express');

module.exports = setup;

/**
* Sets up Express app.
*
* @param {Object} app  The express app.
*/
function setup(app) {
  app.use(helmet());
  app.use(methodOverride());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  return app;
}
