
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/account.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /account/new', () => {
    return app.httpRequest()
      .get('/account/new')
      .expect('Hi, AvatarXChain')
      .expect(200);
  });
});
