'use strict';

const VERSION = 'v1';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // peer
  router.get('/peer', controller.peer.getPeers);
  router.get('/peer/version', controller.peer.version);
  router.get('/peer/get', controller.peer.getPeer);

  // account
  router.get('/account/new', controller.account.newAccount);

}
