const u2fToken = require('./index').U2FToken;
const tokenType = require('./index').Type

const vToken = new u2fToken([], tokenType.SECP256R1WithSHA256)


console.log(vToken);