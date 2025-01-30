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

let html_meta_element = {};
html_meta_element.__proto__ = {};
Object.defineProperty(html_meta_element.__proto__, "name", {
  get: function () {
    h_log("html_meta_element.__proto__ name get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_meta_element.__proto__ name set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_meta_element.__proto__, "httpEquiv", {
  get: function () {
    h_log(
      "html_meta_element.__proto__ httpEquiv get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_meta_element.__proto__ httpEquiv set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_meta_element.__proto__, "content", {
  get: function () {
    h_log("html_meta_element.__proto__ content get [call]", "arg:", arguments);
    // return "sVaMpT7xyJ2Iio1UPyQHK9HVce2slXdp"; // khz
    if (this.__name === "h_meta_b") {
      return ""; //"sVaMpT7xyJ2Iio1UPyQHK9HVce2slXdp"
    }
  },
  set: function () {
    h_log("html_meta_element.__proto__ content set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_meta_element.__proto__, "media", {
  get: function () {
    h_log("html_meta_element.__proto__ media get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_meta_element.__proto__ media set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_meta_element.__proto__, "scheme", {
  get: function () {
    h_log("html_meta_element.__proto__ scheme get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_meta_element.__proto__ scheme set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
HTMLMetaElement = function () {
  h_log(
    "html_meta_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
  this.__name = arguments[0];
};
HTMLMetaElement.prototype = html_meta_element.__proto__;
Object.defineProperty(html_meta_element.__proto__, "constructor", {
  value: HTMLMetaElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_meta_element.__proto__, Symbol.toStringTag, {
  value: "HTMLMetaElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_meta_element.__proto__.__proto__ = HTMLElement.prototype;

let html_base_element = {};
html_base_element.__proto__ = {};
Object.defineProperty(html_base_element.__proto__, "href", {
  get: function () {
    h_log("html_base_element.__proto__ href get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_base_element.__proto__ href set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_base_element.__proto__, "target", {
  get: function () {
    h_log("html_base_element.__proto__ target get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_base_element.__proto__ target set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
HTMLBaseElement = function () {
  h_log(
    "html_base_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
  this.__name = arguments[0];
};
HTMLBaseElement.prototype = html_base_element.__proto__;
Object.defineProperty(html_base_element.__proto__, "constructor", {
  value: HTMLBaseElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_base_element.__proto__, Symbol.toStringTag, {
  value: "HTMLBaseElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_base_element.__proto__.__proto__ = HTMLElement.prototype;
let html_head_element = {};
html_head_element.__proto__ = {};
HTMLHeadElement = function () {
  h_log(
    "html_head_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
};
HTMLHeadElement.prototype = html_head_element.__proto__;
Object.defineProperty(html_head_element.__proto__, "constructor", {
  value: HTMLHeadElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_head_element.__proto__, Symbol.toStringTag, {
  value: "HTMLHeadElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_head_element.__proto__.__proto__ = HTMLElement.prototype;
let html_html_element = {};
html_html_element.__proto__ = {};
Object.defineProperty(html_html_element.__proto__, "version", {
  get: function () {
    h_log("html_html_element.__proto__ version get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_html_element.__proto__ version set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
HTMLHtmlElement = function () {
  h_log(
    "html_html_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
};
HTMLHtmlElement.prototype = html_html_element.__proto__;
Object.defineProperty(html_html_element.__proto__, "constructor", {
  value: HTMLHtmlElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_html_element.__proto__, Symbol.toStringTag, {
  value: "HTMLHtmlElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_html_element.__proto__.__proto__ = HTMLElement.prototype;
let html_body_element = {};
html_body_element.__proto__ = {};
Object.defineProperty(html_body_element.__proto__, "text", {
  get: function () {
    h_log("html_body_element.__proto__ text get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ text set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "link", {
  get: function () {
    h_log("html_body_element.__proto__ link get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ link set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "vLink", {
  get: function () {
    h_log("html_body_element.__proto__ vLink get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ vLink set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "aLink", {
  get: function () {
    h_log("html_body_element.__proto__ aLink get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ aLink set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "bgColor", {
  get: function () {
    h_log("html_body_element.__proto__ bgColor get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ bgColor set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "background", {
  get: function () {
    h_log(
      "html_body_element.__proto__ background get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ background set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onblur", {
  get: function () {
    h_log("html_body_element.__proto__ onblur get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onblur set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onerror", {
  get: function () {
    h_log("html_body_element.__proto__ onerror get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onerror set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onfocus", {
  get: function () {
    h_log("html_body_element.__proto__ onfocus get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onfocus set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onload", {
  get: function () {
    h_log("html_body_element.__proto__ onload get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onload set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onresize", {
  get: function () {
    h_log("html_body_element.__proto__ onresize get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onresize set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onscroll", {
  get: function () {
    h_log("html_body_element.__proto__ onscroll get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onscroll set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onafterprint", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onafterprint get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onafterprint set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onbeforeprint", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onbeforeprint get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onbeforeprint set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onbeforeunload", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onbeforeunload get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onbeforeunload set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onhashchange", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onhashchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onhashchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onlanguagechange", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onlanguagechange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onlanguagechange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onmessage", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onmessage get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onmessage set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onmessageerror", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onmessageerror get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onmessageerror set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onoffline", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onoffline get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onoffline set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "ononline", {
  get: function () {
    h_log("html_body_element.__proto__ ononline get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ ononline set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onpagehide", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onpagehide get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onpagehide set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onpageshow", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onpageshow get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onpageshow set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onpopstate", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onpopstate get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onpopstate set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onrejectionhandled", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onrejectionhandled get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onrejectionhandled set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onstorage", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onstorage get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onstorage set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onunhandledrejection", {
  get: function () {
    h_log(
      "html_body_element.__proto__ onunhandledrejection get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "html_body_element.__proto__ onunhandledrejection set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, "onunload", {
  get: function () {
    h_log("html_body_element.__proto__ onunload get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("html_body_element.__proto__ onunload set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
HTMLBodyElement = function () {
  h_log(
    "html_body_element.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
};
HTMLBodyElement.prototype = html_body_element.__proto__;
Object.defineProperty(html_body_element.__proto__, "constructor", {
  value: HTMLBodyElement,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(html_body_element.__proto__, Symbol.toStringTag, {
  value: "HTMLBodyElement",
  writable: false,
  enumerable: false,
  configurable: true,
});
html_body_element.__proto__.__proto__ = HTMLElement.prototype;
