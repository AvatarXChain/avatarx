'use strict';

const NORMAL_PREFIX = 'KPC'

const base58check = require('../utils/base58check')
const crypto = require('crypto')

/**
 * 根据公钥生成账户地址
 * @param  {[type]} publicKey [description]
 * @return {string} [description]
 */
exports.generateBase58CheckAddress = publicKey => {
  if (typeof publicKey === 'string') {
    publicKey = Buffer.from(publicKey, 'hex')
  }

  const h1 = crypto.createHash('sha256').update(publicKey).digest()
  console.log(h1)
  const h2 = crypto.createHash('ripemd160').update(h1).digest()

  console.log(h2)
  return NORMAL_PREFIX + base58check.encode(h2)
}