'use strict'

const Controller = require('./base')

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, KPChain'
  }

  async newAccount() {
    const { ctx, service, helper } = this
    const payload = ctx.request.body || {}
    const { data, message, code } = await service.account.createNewAccount(payload)
    console.log(data, message, code)
    this.success(data, message, code)
  }
}

module.exports = HomeController
