const routes = require('next-routes');

module.exports = routes()
  .add('/', 'home')
  .add('/users/:org', 'users')
  .add('/users/:org/:user', 'details');
