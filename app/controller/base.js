'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  // 分页参数
  get pageParams() {
    return {
      per_page: this.ctx.query.per_page || 10,
      page: this.ctx.query.page || 1,
    };
  }

  success(data = '', message = 'success', code = 1) {
    this.ctx.body = {
      data,
      code,
      message,
    };
  }

  page(data = '', pagination = {}, message = 'success', code = 1) {
    this.ctx.body = {
      data,
      code,
      message,
      pagination,
    };
  }

  notFound(message) {
    message = message || 'not found';
    this.ctx.throw(404, message);
  }
}
module.exports = BaseController;
