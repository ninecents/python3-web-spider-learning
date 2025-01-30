let html_div_element = {};
html_div_element.__proto__ = {};
Object.defineProperty(html_div_element.__proto__, "align", {
  get: function () {
    h_log("html_div_element.__proto__ align get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_div_element.__proto__ align set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
HTMLDivElement = function (flag, __name) {
  h_log(
    "html_div_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
  if (arguments.length && "h_div" === flag) {
    this.__name = __name;
    return;
  }
  throw TypeError("Illegal constructor");
};
HTMLDivElement.prototype = html_div_element.__proto__;
Object.defineProperty(html_div_element.__proto__, "constructor", {
  value: HTMLDivElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_div_element.__proto__, Symbol.toStringTag, {
  value: "HTMLDivElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_div_element.__proto__.__proto__ = HTMLElement.prototype;






let html_script_element = {};
html_script_element.__proto__ = {};
Object.defineProperty(html_script_element.__proto__, "src", {
  get: function () {
    h_log("html_script_element.__proto__ src get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_script_element.__proto__ src set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "type", {
  get: function () {
    h_log("html_script_element.__proto__ type get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_script_element.__proto__ type set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "noModule", {
  get: function () {
    h_log(
      "html_script_element.__proto__ noModule get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ noModule set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "charset", {
  get: function () {
    h_log(
      "html_script_element.__proto__ charset get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ charset set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "async", {
  get: function () {
    h_log("html_script_element.__proto__ async get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_script_element.__proto__ async set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "defer", {
  get: function () {
    h_log("html_script_element.__proto__ defer get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_script_element.__proto__ defer set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "crossOrigin", {
  get: function () {
    h_log(
      "html_script_element.__proto__ crossOrigin get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ crossOrigin set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "text", {
  get: function () {
    h_log("html_script_element.__proto__ text get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_script_element.__proto__ text set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "referrerPolicy", {
  get: function () {
    h_log(
      "html_script_element.__proto__ referrerPolicy get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ referrerPolicy set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "fetchPriority", {
  get: function () {
    h_log(
      "html_script_element.__proto__ fetchPriority get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ fetchPriority set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "event", {
  get: function () {
    h_log("html_script_element.__proto__ event get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_script_element.__proto__ event set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "htmlFor", {
  get: function () {
    h_log(
      "html_script_element.__proto__ htmlFor get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ htmlFor set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "integrity", {
  get: function () {
    h_log(
      "html_script_element.__proto__ integrity get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ integrity set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "blocking", {
  get: function () {
    h_log(
      "html_script_element.__proto__ blocking get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ blocking set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
HTMLScriptElement = function () {
  h_log(
    "html_script_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
  this.__name = arguments[0];
};
HTMLScriptElement.prototype = html_script_element.__proto__;
Object.defineProperty(html_script_element.__proto__, "constructor", {
  value: HTMLScriptElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, "attributionSrc", {
  get: function () {
    h_log(
      "html_script_element.__proto__ attributionSrc get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_script_element.__proto__ attributionSrc set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_script_element.__proto__, Symbol.toStringTag, {
  value: "HTMLScriptElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_script_element.__proto__.__proto__ = HTMLElement.prototype;
