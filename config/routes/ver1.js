'use strict';
var passport = require('passport');

var userController = require('../../controllers/user.js');

exports = module.exports = function(app) {

    app.post('/v1/login', passport.authenticate('local'), userController.login);
    app.post('/v1/logout', userController.logout);
    app.post('/v1/register', userController.register);

    app.all('/v1/*', userController.checkAuth);

    // add more routes here
}
