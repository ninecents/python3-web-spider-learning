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


function get_$qF(timeStamp) {
    // _0x4e96b4['_$qF'] = CryptoJS['enc']['Utf8'][_$UH[0xff]]
    //  (_0x4e96b4['btoa'](_0x4e96b4['_$is'])['slice'](0x0, 0x10));
    let _$is = new Date().valueOf();
    _$is = timeStamp;
    let param = btoa(_$is).slice(0, 0x10);
    return  CryptoJS['enc']['Utf8']['parse'](param);
}

function main(timeStamp) {
  /*
   _$Ww = _$Tk[_$UH[0x2db]][_$UH[0x2dc]]["parse"](_0x4e96b4["_$pr"]["toString"]()),
   _0x29dd83 = _$Tk["A" + _$UH[0x32d]][_$UH[0x337] + _$UH[0x336]](_$Ww, _0x4e96b4[_0xc77418("0x6", "OCbs")], {
        mode: _$Tk[_$UH[0x339] + _$UH[0x33a]][_$UH[0x2e5]],
        padding: _$Tk[_$UH[0x33b]][_$UH[0x33c] + _$UH[0x33d]]
        }), _0x4e96b4["_$" + _$UH[0x348][0x1] + _$UH[0x353][0x1]] = _0x29dd83["toString"]();
  */
//  _0x4e96b4["_$pr"]["toString"]() => ["123456","123456","123456","123456",]["toString"]()
    let _$pr = ['7b8735953fe8b47a2ae1059c74b6ba13', 'a007c702eafbaea2cc2e535537c7ea92', '370c511d00b2b6ecf081404949719ea4', '3eca0544584656fa0c8ee53a7f544fbf', '4e927403c952304545dc5bfd91c86863'];
    let _$Ww = CryptoJS['enc']['Utf8']['parse'](_$pr['toString']());
    // _0x4e96b4[_0xc77418("0x6", "OCbs")]
    // window['_$qF']
    let _0x29dd83 = CryptoJS['AES']['encrypt'](_$Ww, get_$qF(timeStamp), {
        mode: CryptoJS['mode']['ECB'],
        padding: CryptoJS['pad']['Pkcs7']
    });
    // _0x4e96b4["_$" + _$UH[0x348][0x1] + _$UH[0x353][0x1]]
    // window['_$ss'] = _0x29dd83['toString']();
    return _0x29dd83['toString']();
}

let m = '4e927403c952304545dc5bfd91c86863';
let RM4hZBv0dDon443M = main();
console.log('RM4hZBv0dDon443M : ', RM4hZBv0dDon443M);
// fetch("https://match.yuanrenxue.cn/api/match/5?m=1739624759023&f=1739624754000", {
//     "headers": {
//       "accept": "application/json, text/javascript, */*; q=0.01",
//       "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
//       "priority": "u=0, i",
//       "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Windows\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "x-requested-with": "XMLHttpRequest",
//       "cookie": `sessionid=kscfpubhdvwmi1qds35srbrn6uedwd0r; HMACCOUNT=D960CE22B168C40A; no-alert3=true; m=${m}; RM4hZBv0dDon443M=${RM4hZBv0dDon443M}`,
//       "Referer": "https://match.yuanrenxue.cn/match/5",
//       "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": null,
//     "method": "GET"
//   }).then(response => {
//     // response.json()
//     return response.text();
//     })
//       .then(data => {
//         console.log(data)
//     });