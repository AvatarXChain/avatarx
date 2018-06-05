'use strict';

const Controller = require('./base');

class PeerController extends Controller {
  async getPeers() {
    this.ctx.body = 'hi, KPChain';
  }

  async version() {
    this.ctx.body = 'version';
  }

  async getPeer() {

  }
}

module.exports = PeerController;
