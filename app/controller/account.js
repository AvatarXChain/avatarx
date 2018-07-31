
const Controller = require('./base');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hi, AvatarX';
  }

  async createAccount() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const account = await service.account.createAccountByMnemonic(payload);
    this.success(account);
  }
}

module.exports = HomeController;
