
const Controller = require('./base');

class PeerController extends Controller {
  async getPeers() {
    this.ctx.body = 'Hi, AvatarX';
  }

  async version() {
    this.ctx.body = 'version';
  }

  async getPeer() {}
}

module.exports = PeerController;
