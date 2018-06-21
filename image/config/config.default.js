'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529513539054_1801';

  // add your config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: 'wuweiwei.me',
      port: 3306,
      user: 'image',
      password: 'wuww5511',
      database: 'image'
    },
    app: true
  }

  return config;
};
