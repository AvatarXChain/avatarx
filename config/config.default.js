
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526387024272_6653';

  // add your config here
  config.middleware = [ 'errorHandler' ];

  // 安全设置 https://eggjs.org/zh-cn/core/security.htm
  exports.security = {
    csrf: false,
  };

  exports.pg = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '5432',
      // username
      user: 'postgres',
      // password
      password: 'password',
      // database
      database: 'avatarx',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
    // use pool or client, default is true for pool
    pool: true,
  };

  return config;
};
