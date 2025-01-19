

// var c = new Date().valueOf();
// var token = global.btoa('aiding_win' + String(c));
// var md = hex_md5(global.btoa('aiding_win' + String(Math.round(c/1000))));
// console.log('token, md', token, md);

const crypto = require('crypto');

// 获取当前时间戳
var c = new Date().valueOf();
var c = 1587102734000;

// Base64 编码
var token = Buffer.from('aiding_win' + String(c)).toString('base64');

// 生成 MD5 哈希值
var md = crypto.createHash('md5').update(Buffer.from('aiding_win' + String(Math.round(c / 1000))).toString('base64')).digest('hex');

console.log('sign = ', `${String(Math.round(c / 1000))}~${token}|${md}`);