
const Controller = require('./base');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hi, AvatarX';
  }

  async newAccount() {
    const { ctx, service } = this;
    const payload = ctx.request.body || {};
    const account = await service.account.createNewAccount(payload);
    this.success(account);
  }
}

module.exports = HomeController;
