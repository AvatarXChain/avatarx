
// const VERSION = 'v1';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // peer
  router.get('/peers', controller.peer.getPeers);
  router.get('/peer/version', controller.peer.version);

  // account
  router.post('/account/create', controller.account.createAccount);

};
