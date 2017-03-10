exports.register = function (server, options, next) {

  server.route([
  {
    method: 'POST',
    path: '/webhooks/create',
    config: {
      description: 'webhooks from Github',
      handler: function (request, reply) {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('webhooks event');
        console.log(request.payload);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        reply('ok')
      }
    }
  }

  ]);

  return next();
};

exports.register.attributes = {
  name: 'Webhooks'
};