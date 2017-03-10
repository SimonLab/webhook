var Server = require('./server.js');
var Hoek = require('hoek');

Server.init(process.env.PORT || 4000, function (err, server) {

  Hoek.assert(!err, err);
  console.log('The server is running on: ', server.info.uri);
});