'use strict';
const { Service } = require('egg');

class BaseService extends Service {
  // 默认不需要提供构造函数。
  constructor(ctx) {
    super(ctx); // 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    // 当前model
    this.Cmodel = null;
    // 分页参数
    this.page_params = {
      per_page: Number(this.ctx.query.per_page) || 10,
      page: Number(this.ctx.query.page) || 1,
      total_count: 0,
      total_page: 1,
    };
  }

  async findById(id) {
    return await this.Cmodel.findById(id);
  }

  async assertIdExist(id) {
    const x = await this.Cmodel.findById(id);
    if (!x) {
      this.ctx.throw('资源不存在', 404);
    }
    return x;
  }

  /**
   * 分页方法
   * @param  {Object} conditions [description]
   * @param  {Array} order [description]
   * @param  {Object} include [description]
   * @param  {Object} attributes [description]
   * @param  {[type]} group [description]
   * @return {[type]} [description]
   */
  async page(conditions = {}, order = [[ 'id', 'desc' ]], include = null, attributes = null, group = null) {
    // const { ctx } = this;
    const data = await this.Cmodel.findAll({
      where: conditions,
      offset: (this.page_params.page - 1) * this.page_params.per_page,
      limit: this.page_params.per_page,
      order,
      include,
      attributes,
      group,
    });
    this.page_params.total_count = await this.Cmodel.count({ where: conditions });
    this.page_params.total_page = Math.ceil(this.page_params.total_count / this.page_params.per_page);
    return { data, pagination: this.page_params };
  }
}

module.exports = BaseService;

