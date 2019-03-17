function decrypt(encrypt, text, shift) {
    var result = '';
    shift = (26 - shift) % 26;
    result = encrypt(text, shift);
    return result;
  }
  
  module.exports = decrypt;