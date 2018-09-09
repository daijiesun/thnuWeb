const crypto = require('crypto')

function md5Crypto(password){
    const hash = crypto.createHash('md5')
    hash.update(password)
    const md5Password = hash.digest('hex')
    return md5Password;
}
module.exports = md5Crypto
