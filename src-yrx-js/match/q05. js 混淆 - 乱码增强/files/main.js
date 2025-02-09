const CryptoJS = require('./crypto-js.js');

function MD5_Encrypt(word) {
    return CryptoJS.MD5(word).toString();
    //反转：
    //return CryptoJS.MD5(word).toString().split("").reverse().join("");
}

function B64_Encrypt(word) {
    var src = CryptoJS.enc.Utf8.parse(word);
    return CryptoJS.enc.Base64.stringify(src);
}

function B64_Decrypt(word) {
    var src = CryptoJS.enc.Base64.parse(word);
    return CryptoJS.enc.Utf8.stringify(src);
}

console.log('MD5_Encrypt("123456")', MD5_Encrypt("123456"));
console.log('B64_Encrypt("123456")', B64_Encrypt("123456"));
console.log('B64_Decrypt("MTIzNDU2")', B64_Decrypt("MTIzNDU2"));
