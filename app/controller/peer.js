
const Controller = require('./base');

class PeerController extends Controller {

  async version() {
    this.ctx.body = 'version';
  }

  async getPeers() {
    const { ctx, service } = this;
    const payload = ctx.query;
    const filters = {
      ip: payload.ip,
      os: payload.os,
    };
    const peers = await service.peer.getPeers(filters);
    this.success(peers);
  }
}

module.exports = PeerController;
