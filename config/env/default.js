'use strict';

module.exports = {

  app: {
    title: 'App name',
    description: 'a brief description'
  },

  port: process.env.PORT || 3000,

  sessionCookie: {
    maxAge: 24 * (60 * 60 * 1000),
    httpOnly: true,
    secure: false
  },

  sessionSecret: process.env.SESSION_SECRET || 'youshouldchangethistosomethingsecret'

};
