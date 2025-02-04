(function () {
  var b = "4|2|1|6|3|7|5|8|0".split('|');
  var c = 0x0;
  var d = function () {
    var g = !![];
    return function (h, i) {
      var j = g ? function () {
        if (i) {
          var k = i.apply(h, arguments);
          i = null;
          return k;
        }
      } : function () {};
      g = ![];
      return j;
    };
  }();
  (function () {
    d(this, function () {
      var g = new RegExp('function *( *)');
      var h = new RegExp('\+\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
      var i = _$oc('init');
      if (!g.test(i('chain')) || !h.test(i('input'))) {
        i('0');
      } else {
        _$oc();
      }
    })();
  })();
  console.log('此网页受【爱锭云盾 V1.0 动态版】保护');
  var e = new Date().valueOf();
  token = window.btoa('aiding_win' + String(e));
  md = hex_md5(window.btoa('aiding_win' + String(Math.round(e / 0x3e8))));
  document.cookie = 'sign=' + Math.round(e / 0x3e8) + '~' + token + '|' + md + '; path=/';
  location.reload();
})();