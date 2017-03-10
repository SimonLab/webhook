var Hapi = require('hapi');
var Home = require('./home.js');
var webhooks = require('./webhooks.js')


exports.init = function (port, next) {

  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Home, webhooks], function (err) {
    if (err) {
      return next(err);
    }

    server.start(function (err) {

      return next(err, server);
    });
  });
};