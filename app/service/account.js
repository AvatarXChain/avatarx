
const Service = require('egg').Service;

const crypto = require('crypto');
const ed = require('../utils/ed.js');
const Mnemonic = require('bitcore-mnemonic');


class AccountService extends Service {

  constructor(ctx) {
    super(ctx);
    this.Helper = this.ctx.helper;
    // this.Config = this.app.config
  }

  async createNewAccount(payload) {
    let ent = Number(payload.ent);

    if ([ 128, 256, 384 ].indexOf(ent) === -1) {
      ent = 128;
    }

    const secret = new Mnemonic(ent).toString();
    const publicKeyHash = crypto.createHash('sha256').update(secret, 'utf8').digest();
    const keypair = ed.makeKeypair(publicKeyHash);
    const address = this.Helper.generateBase58CheckAddress(keypair.publicKey);

    const data = {
      secret,
      publicKey: keypair.publicKey.toString('hex'),
      privateKey: keypair.privateKey.toString('hex'),
      address,
    };

    return data;
  }
}

module.exports = AccountService;
