'use strict';

var config = require('./config/env');

// packages - empty

exports.dummy = 'modules/dummy';

/*
 * Common modules are common across sub-projects.
 * Ex: db module, analytics module are contendors.
 */

exports.common = [
  {
    'packagePath': 'models',
    'packageEnhancer': 'mongodb',
    'server': config.db
  }
];

// main app - empty

exports.app = [exports.dummy]
  .concat(exports.common);

// microservers - empty

module.exports = exports;
