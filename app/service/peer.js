
const Service = require('egg').Service;

class PeerService extends Service {

  constructor(ctx) {
    super(ctx);
    this.Helper = this.ctx.helper;
  }

  async getPeers(filters) {
    
  }
}

module.exports = PeerService;
