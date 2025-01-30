try{(function(){debugger;/*
定义常用工具函数等
*/

let __index = 0;
h_log = (...args) => {
  ++__index;
  _h_log(`[mylog] ${__index.toString().padStart(3, '0')}`, ...args)
}









Error.prepareStackTrace = function (error, structuredStackTrace) {
    h_log("有报错, 错误已打印，可以考虑在此处拦截\n", error)
    // error.stack = error.stack.replace(/vm.js/g, "<anonymous>")
    // h_log("有报错,已拦截，替换为\n", error.stack)
    return error
};


let _lp_func_toString = Object.assign(Function.prototype.toString);
let _lp_obj_toString = Object.assign(Object.prototype.toString);



Function.prototype.toString = function () {
    if(_lp_func_toString.call(this).includes("window")){
      h_log(`Function toString ${this.name} 被调用`)
      h_log(`返回：` + 'function Window() { [native code] }')
      return 'function Window() { [native code] }'
    }
    h_log(`Function toString ${this.name} 被调用`)
    h_log("函数体为（只展示50字符）：" + _lp_func_toString.call(this).slice(0, 50))
    h_log("原路返回")
    return _lp_func_toString.call(this)
};

Object.prototype.toString = function () {
    h_log("Object toString 被调用")
    h_log("对象为：" + _lp_obj_toString.call(this))
    h_log(this)
    h_log("----------------------------------------")
    return _lp_obj_toString.call(this)
};
let eventTarget = {};
Object.defineProperty(eventTarget, "addEventListener", {
    get: function () {
        h_log("[v] eventTarget addEventListener value [get]", "arg:", arguments);
        return function () {
            h_log("[v] eventTarget addEventListener value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(eventTarget, "dispatchEvent", {
    get: function () {
        h_log("[v] eventTarget dispatchEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] eventTarget dispatchEvent value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(eventTarget, "removeEventListener", {
    get: function () {
        h_log("[v] eventTarget removeEventListener value [get]", "arg:", arguments);
        return function () {
            h_log("[v] eventTarget removeEventListener value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
EventTarget = function () {
    h_log("eventTarget constructor value [call]", "arg:", arguments)
};
EventTarget.prototype = eventTarget;
Object.defineProperty(eventTarget, "constructor", {
    value: EventTarget,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(eventTarget, Symbol.toStringTag, {
    value: "EventTarget",
    writable: false,
    enumerable: false,
    configurable: true,
});
let _base_dom = {};
Object.defineProperty(_base_dom, "title", {
    get: function () {
        h_log("_base_dom title get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom title set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "lang", {
    get: function () {
        h_log("_base_dom lang get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom lang set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "translate", {
    get: function () {
        h_log("_base_dom translate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom translate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "dir", {
    get: function () {
        h_log("_base_dom dir get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom dir set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "hidden", {
    get: function () {
        h_log("_base_dom hidden get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom hidden set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "accessKey", {
    get: function () {
        h_log("_base_dom accessKey get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom accessKey set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "draggable", {
    get: function () {
        h_log("_base_dom draggable get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom draggable set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "spellcheck", {
    get: function () {
        h_log("_base_dom spellcheck get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom spellcheck set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "autocapitalize", {
    get: function () {
        h_log("_base_dom autocapitalize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom autocapitalize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "contentEditable", {
    get: function () {
        h_log("_base_dom contentEditable get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom contentEditable set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "enterKeyHint", {
    get: function () {
        h_log("_base_dom enterKeyHint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom enterKeyHint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "isContentEditable", {
    get: function () {
        h_log("_base_dom isContentEditable get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "inputMode", {
    get: function () {
        h_log("_base_dom inputMode get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom inputMode set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "virtualKeyboardPolicy", {
    get: function () {
        h_log("_base_dom virtualKeyboardPolicy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom virtualKeyboardPolicy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "offsetParent", {
    get: function () {
        h_log("_base_dom offsetParent get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "offsetTop", {
    get: function () {
        h_log("_base_dom offsetTop get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "offsetLeft", {
    get: function () {
        h_log("_base_dom offsetLeft get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "offsetWidth", {
    get: function () {
        h_log("_base_dom offsetWidth get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "offsetHeight", {
    get: function () {
        h_log("_base_dom offsetHeight get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "popover", {
    get: function () {
        h_log("_base_dom popover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom popover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "innerText", {
    get: function () {
        h_log("_base_dom innerText get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom innerText set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "outerText", {
    get: function () {
        h_log("_base_dom outerText get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom outerText set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onbeforexrselect", {
    get: function () {
        h_log("_base_dom onbeforexrselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onbeforexrselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onabort", {
    get: function () {
        h_log("_base_dom onabort get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onabort set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onbeforeinput", {
    get: function () {
        h_log("_base_dom onbeforeinput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onbeforeinput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onbeforetoggle", {
    get: function () {
        h_log("_base_dom onbeforetoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onbeforetoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onblur", {
    get: function () {
        h_log("_base_dom onblur get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onblur set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncancel", {
    get: function () {
        h_log("_base_dom oncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncanplay", {
    get: function () {
        h_log("_base_dom oncanplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncanplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncanplaythrough", {
    get: function () {
        h_log("_base_dom oncanplaythrough get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncanplaythrough set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onchange", {
    get: function () {
        h_log("_base_dom onchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onclick", {
    get: function () {
        h_log("_base_dom onclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onclose", {
    get: function () {
        h_log("_base_dom onclose get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onclose set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncontextlost", {
    get: function () {
        h_log("_base_dom oncontextlost get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncontextlost set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncontextmenu", {
    get: function () {
        h_log("_base_dom oncontextmenu get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncontextmenu set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncontextrestored", {
    get: function () {
        h_log("_base_dom oncontextrestored get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncontextrestored set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncuechange", {
    get: function () {
        h_log("_base_dom oncuechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncuechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondblclick", {
    get: function () {
        h_log("_base_dom ondblclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondblclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondrag", {
    get: function () {
        h_log("_base_dom ondrag get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondrag set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondragend", {
    get: function () {
        h_log("_base_dom ondragend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondragend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondragenter", {
    get: function () {
        h_log("_base_dom ondragenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondragenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondragleave", {
    get: function () {
        h_log("_base_dom ondragleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondragleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondragover", {
    get: function () {
        h_log("_base_dom ondragover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondragover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondragstart", {
    get: function () {
        h_log("_base_dom ondragstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondragstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondrop", {
    get: function () {
        h_log("_base_dom ondrop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondrop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ondurationchange", {
    get: function () {
        h_log("_base_dom ondurationchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ondurationchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onemptied", {
    get: function () {
        h_log("_base_dom onemptied get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onemptied set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onended", {
    get: function () {
        h_log("_base_dom onended get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onended set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onerror", {
    get: function () {
        h_log("_base_dom onerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onfocus", {
    get: function () {
        h_log("_base_dom onfocus get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onfocus set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onformdata", {
    get: function () {
        h_log("_base_dom onformdata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onformdata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oninput", {
    get: function () {
        h_log("_base_dom oninput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oninput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oninvalid", {
    get: function () {
        h_log("_base_dom oninvalid get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oninvalid set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onkeydown", {
    get: function () {
        h_log("_base_dom onkeydown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onkeydown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onkeypress", {
    get: function () {
        h_log("_base_dom onkeypress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onkeypress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onkeyup", {
    get: function () {
        h_log("_base_dom onkeyup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onkeyup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onload", {
    get: function () {
        h_log("_base_dom onload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onloadeddata", {
    get: function () {
        h_log("_base_dom onloadeddata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onloadeddata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onloadedmetadata", {
    get: function () {
        h_log("_base_dom onloadedmetadata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onloadedmetadata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onloadstart", {
    get: function () {
        h_log("_base_dom onloadstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onloadstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmousedown", {
    get: function () {
        h_log("_base_dom onmousedown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmousedown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmouseenter", {
    get: function () {
        h_log("_base_dom onmouseenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmouseenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmouseleave", {
    get: function () {
        h_log("_base_dom onmouseleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmouseleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmousemove", {
    get: function () {
        h_log("_base_dom onmousemove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmousemove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmouseout", {
    get: function () {
        h_log("_base_dom onmouseout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmouseout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmouseover", {
    get: function () {
        h_log("_base_dom onmouseover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmouseover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmouseup", {
    get: function () {
        h_log("_base_dom onmouseup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmouseup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onmousewheel", {
    get: function () {
        h_log("_base_dom onmousewheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onmousewheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpause", {
    get: function () {
        h_log("_base_dom onpause get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpause set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onplay", {
    get: function () {
        h_log("_base_dom onplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onplaying", {
    get: function () {
        h_log("_base_dom onplaying get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onplaying set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onprogress", {
    get: function () {
        h_log("_base_dom onprogress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onprogress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onratechange", {
    get: function () {
        h_log("_base_dom onratechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onratechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onreset", {
    get: function () {
        h_log("_base_dom onreset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onreset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onresize", {
    get: function () {
        h_log("_base_dom onresize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onresize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onscroll", {
    get: function () {
        h_log("_base_dom onscroll get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onscroll set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onsecuritypolicyviolation", {
    get: function () {
        h_log("_base_dom onsecuritypolicyviolation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onsecuritypolicyviolation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onseeked", {
    get: function () {
        h_log("_base_dom onseeked get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onseeked set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onseeking", {
    get: function () {
        h_log("_base_dom onseeking get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onseeking set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onselect", {
    get: function () {
        h_log("_base_dom onselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onslotchange", {
    get: function () {
        h_log("_base_dom onslotchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onslotchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onstalled", {
    get: function () {
        h_log("_base_dom onstalled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onstalled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onsubmit", {
    get: function () {
        h_log("_base_dom onsubmit get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onsubmit set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onsuspend", {
    get: function () {
        h_log("_base_dom onsuspend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onsuspend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ontimeupdate", {
    get: function () {
        h_log("_base_dom ontimeupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ontimeupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ontoggle", {
    get: function () {
        h_log("_base_dom ontoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ontoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onvolumechange", {
    get: function () {
        h_log("_base_dom onvolumechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onvolumechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onwaiting", {
    get: function () {
        h_log("_base_dom onwaiting get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onwaiting set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onwebkitanimationend", {
    get: function () {
        h_log("_base_dom onwebkitanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onwebkitanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onwebkitanimationiteration", {
    get: function () {
        h_log("_base_dom onwebkitanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onwebkitanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onwebkitanimationstart", {
    get: function () {
        h_log("_base_dom onwebkitanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onwebkitanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onwebkittransitionend", {
    get: function () {
        h_log("_base_dom onwebkittransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onwebkittransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onwheel", {
    get: function () {
        h_log("_base_dom onwheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onwheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onauxclick", {
    get: function () {
        h_log("_base_dom onauxclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onauxclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ongotpointercapture", {
    get: function () {
        h_log("_base_dom ongotpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ongotpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onlostpointercapture", {
    get: function () {
        h_log("_base_dom onlostpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onlostpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerdown", {
    get: function () {
        h_log("_base_dom onpointerdown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerdown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointermove", {
    get: function () {
        h_log("_base_dom onpointermove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointermove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerrawupdate", {
    get: function () {
        h_log("_base_dom onpointerrawupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerrawupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerup", {
    get: function () {
        h_log("_base_dom onpointerup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointercancel", {
    get: function () {
        h_log("_base_dom onpointercancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointercancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerover", {
    get: function () {
        h_log("_base_dom onpointerover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerout", {
    get: function () {
        h_log("_base_dom onpointerout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerenter", {
    get: function () {
        h_log("_base_dom onpointerenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpointerleave", {
    get: function () {
        h_log("_base_dom onpointerleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpointerleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onselectstart", {
    get: function () {
        h_log("_base_dom onselectstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onselectstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onselectionchange", {
    get: function () {
        h_log("_base_dom onselectionchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onselectionchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onanimationend", {
    get: function () {
        h_log("_base_dom onanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onanimationiteration", {
    get: function () {
        h_log("_base_dom onanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onanimationstart", {
    get: function () {
        h_log("_base_dom onanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ontransitionrun", {
    get: function () {
        h_log("_base_dom ontransitionrun get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ontransitionrun set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ontransitionstart", {
    get: function () {
        h_log("_base_dom ontransitionstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ontransitionstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ontransitionend", {
    get: function () {
        h_log("_base_dom ontransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ontransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "ontransitioncancel", {
    get: function () {
        h_log("_base_dom ontransitioncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom ontransitioncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncopy", {
    get: function () {
        h_log("_base_dom oncopy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncopy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncut", {
    get: function () {
        h_log("_base_dom oncut get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncut set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onpaste", {
    get: function () {
        h_log("_base_dom onpaste get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onpaste set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "dataset", {
    get: function () {
        h_log("_base_dom dataset get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "nonce", {
    get: function () {
        h_log("_base_dom nonce get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom nonce set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "autofocus", {
    get: function () {
        h_log("_base_dom autofocus get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom autofocus set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "tabIndex", {
    get: function () {
        h_log("_base_dom tabIndex get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom tabIndex set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "style", {
    get: function () {
        h_log("_base_dom style get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom style set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "attributeStyleMap", {
    get: function () {
        h_log("_base_dom attributeStyleMap get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "attachInternals", {
    get: function () {
        h_log("[v] _base_dom attachInternals value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom attachInternals value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "blur", {
    get: function () {
        h_log("[v] _base_dom blur value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom blur value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "click", {
    get: function () {
        h_log("[v] _base_dom click value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom click value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "focus", {
    get: function () {
        h_log("[v] _base_dom focus value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom focus value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "hidePopover", {
    get: function () {
        h_log("[v] _base_dom hidePopover value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom hidePopover value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "showPopover", {
    get: function () {
        h_log("[v] _base_dom showPopover value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom showPopover value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "togglePopover", {
    get: function () {
        h_log("[v] _base_dom togglePopover value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom togglePopover value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom, "inert", {
    get: function () {
        h_log("_base_dom inert get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom inert set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "oncontentvisibilityautostatechange", {
    get: function () {
        h_log("_base_dom oncontentvisibilityautostatechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom oncontentvisibilityautostatechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, "onscrollend", {
    get: function () {
        h_log("_base_dom onscrollend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onscrollend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
HTMLElement = function () {
    h_log("_base_dom constructor value [call]", "arg:", arguments)
};
HTMLElement.prototype = _base_dom;
Object.defineProperty(_base_dom, "constructor", {
    value: HTMLElement,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_base_dom, "onbeforematch", {
    get: function () {
        h_log("_base_dom onbeforematch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom onbeforematch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom, Symbol.toStringTag, {
    value: "HTMLElement",
    writable: false,
    enumerable: false,
    configurable: true,
});
_base_dom.__proto__ = {};
Object.defineProperty(_base_dom.__proto__, "namespaceURI", {
    get: function () {
        h_log("_base_dom.__proto__ namespaceURI get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "prefix", {
    get: function () {
        h_log("_base_dom.__proto__ prefix get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "localName", {
    get: function () {
        h_log("_base_dom.__proto__ localName get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "tagName", {
    get: function () {
        h_log("_base_dom.__proto__ tagName get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "id", {
    get: function () {
        h_log("_base_dom.__proto__ id get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ id set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "className", {
    get: function () {
        h_log("_base_dom.__proto__ className get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ className set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "classList", {
    get: function () {
        h_log("_base_dom.__proto__ classList get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ classList set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "slot", {
    get: function () {
        h_log("_base_dom.__proto__ slot get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ slot set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "attributes", {
    get: function () {
        h_log("_base_dom.__proto__ attributes get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "shadowRoot", {
    get: function () {
        h_log("_base_dom.__proto__ shadowRoot get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "part", {
    get: function () {
        h_log("_base_dom.__proto__ part get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ part set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "assignedSlot", {
    get: function () {
        h_log("_base_dom.__proto__ assignedSlot get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "innerHTML", {
    get: function () {
        h_log("_base_dom.__proto__ innerHTML get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ innerHTML set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "outerHTML", {
    get: function () {
        h_log("_base_dom.__proto__ outerHTML get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ outerHTML set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "scrollTop", {
    get: function () {
        h_log("_base_dom.__proto__ scrollTop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ scrollTop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "scrollLeft", {
    get: function () {
        h_log("_base_dom.__proto__ scrollLeft get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ scrollLeft set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "scrollWidth", {
    get: function () {
        h_log("_base_dom.__proto__ scrollWidth get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "scrollHeight", {
    get: function () {
        h_log("_base_dom.__proto__ scrollHeight get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "clientTop", {
    get: function () {
        h_log("_base_dom.__proto__ clientTop get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "clientLeft", {
    get: function () {
        h_log("_base_dom.__proto__ clientLeft get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "clientWidth", {
    get: function () {
        h_log("_base_dom.__proto__ clientWidth get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "clientHeight", {
    get: function () {
        h_log("_base_dom.__proto__ clientHeight get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onbeforecopy", {
    get: function () {
        h_log("_base_dom.__proto__ onbeforecopy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onbeforecopy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onbeforecut", {
    get: function () {
        h_log("_base_dom.__proto__ onbeforecut get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onbeforecut set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onbeforepaste", {
    get: function () {
        h_log("_base_dom.__proto__ onbeforepaste get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onbeforepaste set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onsearch", {
    get: function () {
        h_log("_base_dom.__proto__ onsearch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onsearch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "elementTiming", {
    get: function () {
        h_log("_base_dom.__proto__ elementTiming get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ elementTiming set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onfullscreenchange", {
    get: function () {
        h_log("_base_dom.__proto__ onfullscreenchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onfullscreenchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onfullscreenerror", {
    get: function () {
        h_log("_base_dom.__proto__ onfullscreenerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onfullscreenerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onwebkitfullscreenchange", {
    get: function () {
        h_log("_base_dom.__proto__ onwebkitfullscreenchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onwebkitfullscreenchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "onwebkitfullscreenerror", {
    get: function () {
        h_log("_base_dom.__proto__ onwebkitfullscreenerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ onwebkitfullscreenerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "role", {
    get: function () {
        h_log("_base_dom.__proto__ role get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ role set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaAtomic", {
    get: function () {
        h_log("_base_dom.__proto__ ariaAtomic get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaAtomic set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaAutoComplete", {
    get: function () {
        h_log("_base_dom.__proto__ ariaAutoComplete get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaAutoComplete set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaBusy", {
    get: function () {
        h_log("_base_dom.__proto__ ariaBusy get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaBusy set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaBrailleLabel", {
    get: function () {
        h_log("_base_dom.__proto__ ariaBrailleLabel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaBrailleLabel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaBrailleRoleDescription", {
    get: function () {
        h_log("_base_dom.__proto__ ariaBrailleRoleDescription get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaBrailleRoleDescription set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaChecked", {
    get: function () {
        h_log("_base_dom.__proto__ ariaChecked get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaChecked set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaColCount", {
    get: function () {
        h_log("_base_dom.__proto__ ariaColCount get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaColCount set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaColIndex", {
    get: function () {
        h_log("_base_dom.__proto__ ariaColIndex get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaColIndex set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaColSpan", {
    get: function () {
        h_log("_base_dom.__proto__ ariaColSpan get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaColSpan set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaCurrent", {
    get: function () {
        h_log("_base_dom.__proto__ ariaCurrent get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaCurrent set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaDescription", {
    get: function () {
        h_log("_base_dom.__proto__ ariaDescription get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaDescription set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaDisabled", {
    get: function () {
        h_log("_base_dom.__proto__ ariaDisabled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaDisabled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaExpanded", {
    get: function () {
        h_log("_base_dom.__proto__ ariaExpanded get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaExpanded set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaHasPopup", {
    get: function () {
        h_log("_base_dom.__proto__ ariaHasPopup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaHasPopup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaHidden", {
    get: function () {
        h_log("_base_dom.__proto__ ariaHidden get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaHidden set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaInvalid", {
    get: function () {
        h_log("_base_dom.__proto__ ariaInvalid get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaInvalid set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaKeyShortcuts", {
    get: function () {
        h_log("_base_dom.__proto__ ariaKeyShortcuts get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaKeyShortcuts set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaLabel", {
    get: function () {
        h_log("_base_dom.__proto__ ariaLabel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaLabel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaLevel", {
    get: function () {
        h_log("_base_dom.__proto__ ariaLevel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaLevel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaLive", {
    get: function () {
        h_log("_base_dom.__proto__ ariaLive get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaLive set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaModal", {
    get: function () {
        h_log("_base_dom.__proto__ ariaModal get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaModal set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaMultiLine", {
    get: function () {
        h_log("_base_dom.__proto__ ariaMultiLine get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaMultiLine set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaMultiSelectable", {
    get: function () {
        h_log("_base_dom.__proto__ ariaMultiSelectable get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaMultiSelectable set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaOrientation", {
    get: function () {
        h_log("_base_dom.__proto__ ariaOrientation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaOrientation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaPlaceholder", {
    get: function () {
        h_log("_base_dom.__proto__ ariaPlaceholder get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaPlaceholder set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaPosInSet", {
    get: function () {
        h_log("_base_dom.__proto__ ariaPosInSet get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaPosInSet set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaPressed", {
    get: function () {
        h_log("_base_dom.__proto__ ariaPressed get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaPressed set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaReadOnly", {
    get: function () {
        h_log("_base_dom.__proto__ ariaReadOnly get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaReadOnly set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaRelevant", {
    get: function () {
        h_log("_base_dom.__proto__ ariaRelevant get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaRelevant set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaRequired", {
    get: function () {
        h_log("_base_dom.__proto__ ariaRequired get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaRequired set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaRoleDescription", {
    get: function () {
        h_log("_base_dom.__proto__ ariaRoleDescription get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaRoleDescription set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaRowCount", {
    get: function () {
        h_log("_base_dom.__proto__ ariaRowCount get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaRowCount set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaRowIndex", {
    get: function () {
        h_log("_base_dom.__proto__ ariaRowIndex get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaRowIndex set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaRowSpan", {
    get: function () {
        h_log("_base_dom.__proto__ ariaRowSpan get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaRowSpan set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaSelected", {
    get: function () {
        h_log("_base_dom.__proto__ ariaSelected get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaSelected set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaSetSize", {
    get: function () {
        h_log("_base_dom.__proto__ ariaSetSize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaSetSize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaSort", {
    get: function () {
        h_log("_base_dom.__proto__ ariaSort get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaSort set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaValueMax", {
    get: function () {
        h_log("_base_dom.__proto__ ariaValueMax get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaValueMax set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaValueMin", {
    get: function () {
        h_log("_base_dom.__proto__ ariaValueMin get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaValueMin set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaValueNow", {
    get: function () {
        h_log("_base_dom.__proto__ ariaValueNow get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaValueNow set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "ariaValueText", {
    get: function () {
        h_log("_base_dom.__proto__ ariaValueText get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__ ariaValueText set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "children", {
    get: function () {
        h_log("_base_dom.__proto__ children get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "firstElementChild", {
    get: function () {
        h_log("_base_dom.__proto__ firstElementChild get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "lastElementChild", {
    get: function () {
        h_log("_base_dom.__proto__ lastElementChild get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "childElementCount", {
    get: function () {
        h_log("_base_dom.__proto__ childElementCount get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "previousElementSibling", {
    get: function () {
        h_log("_base_dom.__proto__ previousElementSibling get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "nextElementSibling", {
    get: function () {
        h_log("_base_dom.__proto__ nextElementSibling get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__, "after", {
    get: function () {
        h_log("[v] _base_dom.__proto__ after value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ after value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "animate", {
    get: function () {
        h_log("[v] _base_dom.__proto__ animate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ animate value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "append", {
    get: function () {
        h_log("[v] _base_dom.__proto__ append value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ append value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "attachShadow", {
    get: function () {
        h_log("[v] _base_dom.__proto__ attachShadow value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ attachShadow value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "before", {
    get: function () {
        h_log("[v] _base_dom.__proto__ before value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ before value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "closest", {
    get: function () {
        h_log("[v] _base_dom.__proto__ closest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ closest value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "computedStyleMap", {
    get: function () {
        h_log("[v] _base_dom.__proto__ computedStyleMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ computedStyleMap value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getAttribute", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getAttribute value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getAttribute value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getAttributeNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getAttributeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getAttributeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getAttributeNames", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getAttributeNames value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getAttributeNames value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getAttributeNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getAttributeNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getAttributeNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getAttributeNodeNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getAttributeNodeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getAttributeNodeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getBoundingClientRect", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getBoundingClientRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getBoundingClientRect value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getClientRects", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getClientRects value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getClientRects value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getElementsByClassName", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getElementsByClassName value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getElementsByClassName value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getElementsByTagName", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getElementsByTagName value [get]", "arg:", arguments);
        return function () {
          h_log('[v] _base_dom.__proto__ getElementsByTagName value [call]', "this:", this)
          h_log("[v] _base_dom.__proto__ getElementsByTagName value [call]", "arg:", arguments)
          if (this.__name === 'h_div_a') {
            return []
          }
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getElementsByTagNameNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getElementsByTagNameNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getElementsByTagNameNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getInnerHTML", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getInnerHTML value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getInnerHTML value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "hasAttribute", {
    get: function () {
        h_log("[v] _base_dom.__proto__ hasAttribute value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ hasAttribute value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "hasAttributeNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ hasAttributeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ hasAttributeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "hasAttributes", {
    get: function () {
        h_log("[v] _base_dom.__proto__ hasAttributes value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ hasAttributes value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "hasPointerCapture", {
    get: function () {
        h_log("[v] _base_dom.__proto__ hasPointerCapture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ hasPointerCapture value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "insertAdjacentElement", {
    get: function () {
        h_log("[v] _base_dom.__proto__ insertAdjacentElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ insertAdjacentElement value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "insertAdjacentHTML", {
    get: function () {
        h_log("[v] _base_dom.__proto__ insertAdjacentHTML value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ insertAdjacentHTML value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "insertAdjacentText", {
    get: function () {
        h_log("[v] _base_dom.__proto__ insertAdjacentText value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ insertAdjacentText value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "matches", {
    get: function () {
        h_log("[v] _base_dom.__proto__ matches value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ matches value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "prepend", {
    get: function () {
        h_log("[v] _base_dom.__proto__ prepend value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ prepend value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "querySelector", {
    get: function () {
        h_log("[v] _base_dom.__proto__ querySelector value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ querySelector value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "querySelectorAll", {
    get: function () {
        h_log("[v] _base_dom.__proto__ querySelectorAll value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ querySelectorAll value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "releasePointerCapture", {
    get: function () {
        h_log("[v] _base_dom.__proto__ releasePointerCapture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ releasePointerCapture value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "remove", {
    get: function () {
        h_log("[v] _base_dom.__proto__ remove value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ remove value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "removeAttribute", {
    get: function () {
        h_log("[v] _base_dom.__proto__ removeAttribute value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ removeAttribute value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "removeAttributeNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ removeAttributeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ removeAttributeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "removeAttributeNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__ removeAttributeNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ removeAttributeNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "replaceChildren", {
    get: function () {
        h_log("[v] _base_dom.__proto__ replaceChildren value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ replaceChildren value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "replaceWith", {
    get: function () {
        h_log("[v] _base_dom.__proto__ replaceWith value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ replaceWith value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "requestFullscreen", {
    get: function () {
        h_log("[v] _base_dom.__proto__ requestFullscreen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ requestFullscreen value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "requestPointerLock", {
    get: function () {
        h_log("[v] _base_dom.__proto__ requestPointerLock value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ requestPointerLock value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "scroll", {
    get: function () {
        h_log("[v] _base_dom.__proto__ scroll value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ scroll value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "scrollBy", {
    get: function () {
        h_log("[v] _base_dom.__proto__ scrollBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ scrollBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "scrollIntoView", {
    get: function () {
        h_log("[v] _base_dom.__proto__ scrollIntoView value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ scrollIntoView value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "scrollIntoViewIfNeeded", {
    get: function () {
        h_log("[v] _base_dom.__proto__ scrollIntoViewIfNeeded value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ scrollIntoViewIfNeeded value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "scrollTo", {
    get: function () {
        h_log("[v] _base_dom.__proto__ scrollTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ scrollTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "setAttribute", {
    get: function () {
        h_log("[v] _base_dom.__proto__ setAttribute value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ setAttribute value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "setAttributeNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ setAttributeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ setAttributeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "setAttributeNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__ setAttributeNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ setAttributeNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "setAttributeNodeNS", {
    get: function () {
        h_log("[v] _base_dom.__proto__ setAttributeNodeNS value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ setAttributeNodeNS value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "setPointerCapture", {
    get: function () {
        h_log("[v] _base_dom.__proto__ setPointerCapture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ setPointerCapture value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "toggleAttribute", {
    get: function () {
        h_log("[v] _base_dom.__proto__ toggleAttribute value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ toggleAttribute value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "webkitMatchesSelector", {
    get: function () {
        h_log("[v] _base_dom.__proto__ webkitMatchesSelector value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ webkitMatchesSelector value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "webkitRequestFullScreen", {
    get: function () {
        h_log("[v] _base_dom.__proto__ webkitRequestFullScreen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ webkitRequestFullScreen value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "webkitRequestFullscreen", {
    get: function () {
        h_log("[v] _base_dom.__proto__ webkitRequestFullscreen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ webkitRequestFullscreen value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "checkVisibility", {
    get: function () {
        h_log("[v] _base_dom.__proto__ checkVisibility value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ checkVisibility value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__, "getAnimations", {
    get: function () {
        h_log("[v] _base_dom.__proto__ getAnimations value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__ getAnimations value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Element = function () {
    h_log("_base_dom.__proto__ constructor value [call]", "arg:", arguments)
};
Element.prototype = _base_dom.__proto__;
Object.defineProperty(_base_dom.__proto__, "constructor", {
    value: Element,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_base_dom.__proto__, Symbol.toStringTag, {
    value: "Element",
    writable: false,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_base_dom.__proto__, Symbol.unscopables, {
    value: {},
    writable: false,
    enumerable: false,
    configurable: true,
});
_base_dom.__proto__.__proto__ = {};
Object.defineProperty(_base_dom.__proto__.__proto__, "nodeType", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ nodeType get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "nodeName", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ nodeName get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "baseURI", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ baseURI get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "isConnected", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ isConnected get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "ownerDocument", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ ownerDocument get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "parentNode", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ parentNode get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "parentElement", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ parentElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "childNodes", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ childNodes get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "firstChild", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ firstChild get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "lastChild", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ lastChild get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "previousSibling", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ previousSibling get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "nextSibling", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ nextSibling get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "nodeValue", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ nodeValue get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__.__proto__ nodeValue set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "textContent", {
    get: function () {
        h_log("_base_dom.__proto__.__proto__ textContent get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_base_dom.__proto__.__proto__ textContent set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "ELEMENT_NODE", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "ATTRIBUTE_NODE", {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "TEXT_NODE", {
    value: 3,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "CDATA_SECTION_NODE", {
    value: 4,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "ENTITY_REFERENCE_NODE", {
    value: 5,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "ENTITY_NODE", {
    value: 6,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "PROCESSING_INSTRUCTION_NODE", {
    value: 7,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "COMMENT_NODE", {
    value: 8,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_NODE", {
    value: 9,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_TYPE_NODE", {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_FRAGMENT_NODE", {
    value: 11,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "NOTATION_NODE", {
    value: 12,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_POSITION_DISCONNECTED", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_POSITION_PRECEDING", {
    value: 2,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_POSITION_FOLLOWING", {
    value: 4,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_POSITION_CONTAINS", {
    value: 8,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_POSITION_CONTAINED_BY", {
    value: 16,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
    value: 32,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(_base_dom.__proto__.__proto__, "appendChild", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ appendChild value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ appendChild value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "cloneNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ cloneNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ cloneNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "compareDocumentPosition", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ compareDocumentPosition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ compareDocumentPosition value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "contains", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ contains value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ contains value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "getRootNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ getRootNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ getRootNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "hasChildNodes", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ hasChildNodes value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ hasChildNodes value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "insertBefore", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ insertBefore value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ insertBefore value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "isDefaultNamespace", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ isDefaultNamespace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ isDefaultNamespace value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "isEqualNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ isEqualNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ isEqualNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "isSameNode", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ isSameNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ isSameNode value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "lookupNamespaceURI", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ lookupNamespaceURI value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ lookupNamespaceURI value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "lookupPrefix", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ lookupPrefix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ lookupPrefix value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "normalize", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ normalize value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ normalize value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "removeChild", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ removeChild value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ removeChild value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_base_dom.__proto__.__proto__, "replaceChild", {
    get: function () {
        h_log("[v] _base_dom.__proto__.__proto__ replaceChild value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _base_dom.__proto__.__proto__ replaceChild value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Node = function () {
    h_log("_base_dom.__proto__.__proto__ constructor value [call]", "arg:", arguments)
};
Node.prototype = _base_dom.__proto__.__proto__;
Object.defineProperty(_base_dom.__proto__.__proto__, "constructor", {
    value: Node,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_base_dom.__proto__.__proto__, Symbol.toStringTag, {
    value: "Node",
    writable: false,
    enumerable: false,
    configurable: true,
});
_base_dom.__proto__.__proto__.__proto__ = eventTarget;let _document = {};
Object.defineProperty(_document, "location", {
  get: function () {
    h_log("_document location get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document location set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: false,
});
_document.__proto__ = {};
HTMLDocument = function () {
  h_log("_document.__proto__ constructor value [call]", "arg:", arguments);
};
HTMLDocument.prototype = _document.__proto__;
Object.defineProperty(_document.__proto__, "constructor", {
  value: HTMLDocument,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(_document.__proto__, Symbol.toStringTag, {
  value: "HTMLDocument",
  writable: false,
  enumerable: false,
  configurable: true,
});
_document.__proto__.__proto__ = {};
Object.defineProperty(_document.__proto__.__proto__, "implementation", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ implementation get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "URL", {
  get: function () {
    h_log("_document.__proto__.__proto__ URL get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "documentURI", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ documentURI get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "compatMode", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ compatMode get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "characterSet", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ characterSet get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "charset", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ charset get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "inputEncoding", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ inputEncoding get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "contentType", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ contentType get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "doctype", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ doctype get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "documentElement", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ documentElement get [call]",
      "arg:",
      arguments
    );
    // return _jsdom_document.documentElement
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "xmlEncoding", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ xmlEncoding get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "xmlVersion", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ xmlVersion get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ xmlVersion set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "xmlStandalone", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ xmlStandalone get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ xmlStandalone set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "domain", {
  get: function () {
    h_log("_document.__proto__.__proto__ domain get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ domain set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "referrer", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ referrer get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
let _value_cookie = "";
let _document_cookie_obj = {};
Object.defineProperty(_document.__proto__.__proto__, "cookie", {
  get: function () {
    h_log("_document.__proto__.__proto__ cookie get [call]", "arg:", arguments);
    return _value_cookie;
  },
  set: function (newValue) {
    h_log("_document.__proto__.__proto__ cookie set [call]", "arg:", arguments);
    let ck = newValue.split("=");
    if (ck.length >= 2) {
      let ck_key = ck[0];
      let ck_value = ck[1];
      if (ck_value.indexOf(";") != -1) {
        ck_value = ck[1].split(";")[0];
      } else {
        ck_value = ck[1];
      }
      _document_cookie_obj[ck_key] = ck_value;
    }
    _value_cookie = newValue;
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "lastModified", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ lastModified get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "readyState", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ readyState get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "title", {
  get: function () {
    h_log("_document.__proto__.__proto__ title get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ title set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "dir", {
  get: function () {
    h_log("_document.__proto__.__proto__ dir get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ dir set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "body", {
  get: function () {
    h_log("_document.__proto__.__proto__ body get [call]", "arg:", arguments);
    // return _jsdom_document.body
  },
  set: function () {
    h_log("_document.__proto__.__proto__ body set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "head", {
  get: function () {
    h_log("_document.__proto__.__proto__ head get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "images", {
  get: function () {
    h_log("_document.__proto__.__proto__ images get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "embeds", {
  get: function () {
    h_log("_document.__proto__.__proto__ embeds get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "plugins", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ plugins get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "links", {
  get: function () {
    h_log("_document.__proto__.__proto__ links get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "forms", {
  get: function () {
    h_log("_document.__proto__.__proto__ forms get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "scripts", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ scripts get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "currentScript", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ currentScript get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "defaultView", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ defaultView get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "designMode", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ designMode get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ designMode set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onreadystatechange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onreadystatechange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onreadystatechange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "anchors", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ anchors get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "applets", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ applets get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fgColor", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ fgColor get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ fgColor set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "linkColor", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ linkColor get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ linkColor set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "vlinkColor", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ vlinkColor get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ vlinkColor set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "alinkColor", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ alinkColor get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ alinkColor set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "bgColor", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ bgColor get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ bgColor set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "all", {
  get: function () {
    h_log("_document.__proto__.__proto__ all get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "scrollingElement", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ scrollingElement get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerlockchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerlockchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerlockchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerlockerror", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerlockerror get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerlockerror set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "hidden", {
  get: function () {
    h_log("_document.__proto__.__proto__ hidden get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "visibilityState", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ visibilityState get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "wasDiscarded", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ wasDiscarded get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "prerendering", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ prerendering get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "featurePolicy", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ featurePolicy get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitVisibilityState", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ webkitVisibilityState get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitHidden", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ webkitHidden get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforecopy", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforecopy get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforecopy set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforecut", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforecut get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforecut set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforepaste", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforepaste get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforepaste set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfreeze", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onfreeze get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onfreeze set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onprerenderingchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onprerenderingchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onprerenderingchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onresume", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onresume get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onresume set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsearch", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onsearch get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onsearch set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onvisibilitychange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onvisibilitychange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onvisibilitychange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fullscreenEnabled", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ fullscreenEnabled get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ fullscreenEnabled set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fullscreen", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ fullscreen get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ fullscreen set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfullscreenchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onfullscreenchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onfullscreenchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfullscreenerror", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onfullscreenerror get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onfullscreenerror set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitIsFullScreen", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ webkitIsFullScreen get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "webkitCurrentFullScreenElement",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ webkitCurrentFullScreenElement get [call]",
        "arg:",
        arguments
      );
    },
    set: undefined,
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(
  _document.__proto__.__proto__,
  "webkitFullscreenEnabled",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ webkitFullscreenEnabled get [call]",
        "arg:",
        arguments
      );
    },
    set: undefined,
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(
  _document.__proto__.__proto__,
  "webkitFullscreenElement",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ webkitFullscreenElement get [call]",
        "arg:",
        arguments
      );
    },
    set: undefined,
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(
  _document.__proto__.__proto__,
  "onwebkitfullscreenchange",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ onwebkitfullscreenchange get [call]",
        "arg:",
        arguments
      );
    },
    set: function () {
      h_log(
        "_document.__proto__.__proto__ onwebkitfullscreenchange set [call]",
        "arg:",
        arguments
      );
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(
  _document.__proto__.__proto__,
  "onwebkitfullscreenerror",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ onwebkitfullscreenerror get [call]",
        "arg:",
        arguments
      );
    },
    set: function () {
      h_log(
        "_document.__proto__.__proto__ onwebkitfullscreenerror set [call]",
        "arg:",
        arguments
      );
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "rootElement", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ rootElement get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "pictureInPictureEnabled",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ pictureInPictureEnabled get [call]",
        "arg:",
        arguments
      );
    },
    set: undefined,
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "onbeforexrselect", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforexrselect get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforexrselect set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onabort", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onabort get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onabort set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforeinput", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforeinput get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforeinput set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforetoggle", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforetoggle get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforetoggle set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onblur", {
  get: function () {
    h_log("_document.__proto__.__proto__ onblur get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ onblur set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncancel", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncancel get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncancel set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncanplay", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncanplay get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncanplay set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncanplaythrough", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncanplaythrough get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncanplaythrough set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onclick", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onclick get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onclick set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onclose", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onclose get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onclose set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontextlost", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncontextlost get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncontextlost set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontextmenu", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncontextmenu get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncontextmenu set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncontextrestored", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncontextrestored get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncontextrestored set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncuechange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oncuechange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oncuechange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondblclick", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondblclick get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondblclick set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondrag", {
  get: function () {
    h_log("_document.__proto__.__proto__ ondrag get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ ondrag set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondragend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondragend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragenter", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondragenter get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondragenter set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragleave", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondragleave get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondragleave set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragover", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondragover get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondragover set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondragstart", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondragstart get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondragstart set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondrop", {
  get: function () {
    h_log("_document.__proto__.__proto__ ondrop get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ ondrop set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ondurationchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ondurationchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ondurationchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onemptied", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onemptied get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onemptied set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onended", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onended get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onended set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onerror", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onerror get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onerror set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onfocus", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onfocus get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onfocus set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onformdata", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onformdata get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onformdata set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oninput", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oninput get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oninput set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oninvalid", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ oninvalid get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ oninvalid set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onkeydown", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onkeydown get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onkeydown set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onkeypress", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onkeypress get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onkeypress set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onkeyup", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onkeyup get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onkeyup set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onload", {
  get: function () {
    h_log("_document.__proto__.__proto__ onload get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ onload set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onloadeddata", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onloadeddata get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onloadeddata set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onloadedmetadata", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onloadedmetadata get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onloadedmetadata set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onloadstart", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onloadstart get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onloadstart set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmousedown", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmousedown get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmousedown set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseenter", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseenter get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseenter set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseleave", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseleave get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseleave set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmousemove", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmousemove get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmousemove set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseout", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseout get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseout set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseover", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseover get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseover set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmouseup", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseup get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmouseup set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onmousewheel", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onmousewheel get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onmousewheel set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpause", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpause get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpause set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onplay", {
  get: function () {
    h_log("_document.__proto__.__proto__ onplay get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ onplay set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onplaying", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onplaying get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onplaying set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onprogress", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onprogress get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onprogress set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onratechange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onratechange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onratechange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onreset", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onreset get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onreset set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onresize", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onresize get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onresize set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onscroll", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onscroll get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onscroll set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "onsecuritypolicyviolation",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ onsecuritypolicyviolation get [call]",
        "arg:",
        arguments
      );
    },
    set: function () {
      h_log(
        "_document.__proto__.__proto__ onsecuritypolicyviolation set [call]",
        "arg:",
        arguments
      );
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "onseeked", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onseeked get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onseeked set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onseeking", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onseeking get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onseeking set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onselect", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onselect get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onselect set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onslotchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onslotchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onslotchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onstalled", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onstalled get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onstalled set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsubmit", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onsubmit get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onsubmit set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onsuspend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onsuspend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onsuspend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontimeupdate", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ontimeupdate get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ontimeupdate set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontoggle", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ontoggle get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ontoggle set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onvolumechange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onvolumechange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onvolumechange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwaiting", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onwaiting get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onwaiting set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkitanimationend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onwebkitanimationend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onwebkitanimationend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "onwebkitanimationiteration",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ onwebkitanimationiteration get [call]",
        "arg:",
        arguments
      );
    },
    set: function () {
      h_log(
        "_document.__proto__.__proto__ onwebkitanimationiteration set [call]",
        "arg:",
        arguments
      );
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "onwebkitanimationstart", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onwebkitanimationstart get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onwebkitanimationstart set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwebkittransitionend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onwebkittransitionend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onwebkittransitionend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onwheel", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onwheel get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onwheel set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onauxclick", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onauxclick get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onauxclick set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ongotpointercapture", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ongotpointercapture get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ongotpointercapture set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onlostpointercapture", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onlostpointercapture get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onlostpointercapture set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerdown", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerdown get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerdown set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointermove", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointermove get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointermove set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerrawupdate", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerrawupdate get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerrawupdate set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerup", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerup get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerup set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointercancel", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointercancel get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointercancel set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerover", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerover get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerover set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerout", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerout get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerout set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerenter", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerenter get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerenter set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpointerleave", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerleave get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpointerleave set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onselectstart", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onselectstart get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onselectstart set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onselectionchange", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onselectionchange get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onselectionchange set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onanimationend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onanimationend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onanimationend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onanimationiteration", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onanimationiteration get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onanimationiteration set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onanimationstart", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onanimationstart get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onanimationstart set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitionrun", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitionrun get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitionrun set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitionstart", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitionstart get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitionstart set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitionend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitionend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitionend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "ontransitioncancel", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitioncancel get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ ontransitioncancel set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncopy", {
  get: function () {
    h_log("_document.__proto__.__proto__ oncopy get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ oncopy set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "oncut", {
  get: function () {
    h_log("_document.__proto__.__proto__ oncut get [call]", "arg:", arguments);
  },
  set: function () {
    h_log("_document.__proto__.__proto__ oncut set [call]", "arg:", arguments);
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onpaste", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onpaste get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onpaste set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "children", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ children get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "firstElementChild", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ firstElementChild get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "lastElementChild", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ lastElementChild get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "childElementCount", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ childElementCount get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "activeElement", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ activeElement get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "styleSheets", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ styleSheets get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "pointerLockElement", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ pointerLockElement get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fullscreenElement", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ fullscreenElement get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ fullscreenElement set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "adoptedStyleSheets", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ adoptedStyleSheets get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ adoptedStyleSheets set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "pictureInPictureElement",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ pictureInPictureElement get [call]",
        "arg:",
        arguments
      );
    },
    set: undefined,
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "fonts", {
  get: function () {
    h_log("_document.__proto__.__proto__ fonts get [call]", "arg:", arguments);
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "adoptNode", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ adoptNode value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ adoptNode value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "append", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ append value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ append value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "captureEvents", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ captureEvents value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ captureEvents value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "caretRangeFromPoint", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ caretRangeFromPoint value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ caretRangeFromPoint value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "clear", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ clear value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ clear value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "close", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ close value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ close value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createAttribute", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createAttribute value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createAttribute value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createAttributeNS", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createAttributeNS value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createAttributeNS value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createCDATASection", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createCDATASection value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createCDATASection value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createComment", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createComment value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createComment value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createDocumentFragment", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createDocumentFragment value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createDocumentFragment value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createElement", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createElement value [get]",
      "arg:",
      arguments
    );
    // debugger;
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createElement value [call]",
        "arg:",
        arguments
      );
      return new HTMLDivElement('h_div', 'h_div_a');
    }
    // return _ele_div;
    // return _jsdom_document.createElement;
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createElement value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createElementNS", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createElementNS value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createElementNS value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createEvent", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createEvent value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createEvent value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createExpression", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createExpression value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createExpression value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createNSResolver", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createNSResolver value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createNSResolver value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createNodeIterator", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createNodeIterator value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createNodeIterator value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "createProcessingInstruction",
  {
    get: function () {
      h_log(
        "[v] _document.__proto__.__proto__ createProcessingInstruction value [get]",
        "arg:",
        arguments
      );
      return function () {
        h_log(
          "[v] _document.__proto__.__proto__ createProcessingInstruction value [call]",
          "arg:",
          arguments
        );
      };
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "createRange", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createRange value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createRange value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createTextNode", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createTextNode value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createTextNode value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "createTreeWalker", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ createTreeWalker value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ createTreeWalker value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "elementFromPoint", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ elementFromPoint value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ elementFromPoint value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "elementsFromPoint", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ elementsFromPoint value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ elementsFromPoint value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "evaluate", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ evaluate value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ evaluate value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "execCommand", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ execCommand value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ execCommand value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "exitFullscreen", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ exitFullscreen value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ exitFullscreen value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "exitPictureInPicture", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ exitPictureInPicture value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ exitPictureInPicture value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "exitPointerLock", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ exitPointerLock value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ exitPointerLock value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getElementById", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getElementById value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getElementById value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByClassName", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getElementsByClassName value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getElementsByClassName value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByName", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getElementsByName value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getElementsByName value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByTagName", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getElementsByTagName value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getElementsByTagName value [call]",
        "arg:",
        arguments
      );
      if (arguments[0] === 'script') {
        return [new HTMLScriptElement('h_script_a'), new HTMLScriptElement('h_script_b')];
      }
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getElementsByTagNameNS", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getElementsByTagNameNS value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getElementsByTagNameNS value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getSelection", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getSelection value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getSelection value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "hasFocus", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ hasFocus value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ hasFocus value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "importNode", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ importNode value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ importNode value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "open", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ open value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ open value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "prepend", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ prepend value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ prepend value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandEnabled", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ queryCommandEnabled value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ queryCommandEnabled value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandIndeterm", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ queryCommandIndeterm value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ queryCommandIndeterm value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandState", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ queryCommandState value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ queryCommandState value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandSupported", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ queryCommandSupported value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ queryCommandSupported value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "queryCommandValue", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ queryCommandValue value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ queryCommandValue value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "querySelector", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ querySelector value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ querySelector value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "querySelectorAll", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ querySelectorAll value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ querySelectorAll value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "releaseEvents", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ releaseEvents value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ releaseEvents value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "replaceChildren", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ replaceChildren value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ replaceChildren value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "startViewTransition", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ startViewTransition value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ startViewTransition value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitCancelFullScreen", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ webkitCancelFullScreen value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ webkitCancelFullScreen value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "webkitExitFullscreen", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ webkitExitFullscreen value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ webkitExitFullscreen value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "write", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ write value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ write value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "writeln", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ writeln value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ writeln value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Document = function () {
  h_log(
    "_document.__proto__.__proto__ constructor value [call]",
    "arg:",
    arguments
  );
};
Document.prototype = _document.__proto__.__proto__;
Object.defineProperty(_document.__proto__.__proto__, "constructor", {
  value: Document,
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "fragmentDirective", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ fragmentDirective get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "onbeforematch", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforematch get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onbeforematch set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "browsingTopics", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ browsingTopics value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ browsingTopics value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "hasPrivateToken", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ hasPrivateToken value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ hasPrivateToken value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "hasRedemptionRecord", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ hasRedemptionRecord value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ hasRedemptionRecord value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "requestStorageAccess", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ requestStorageAccess value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ requestStorageAccess value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "timeline", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ timeline get [call]",
      "arg:",
      arguments
    );
  },
  set: undefined,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "oncontentvisibilityautostatechange",
  {
    get: function () {
      h_log(
        "_document.__proto__.__proto__ oncontentvisibilityautostatechange get [call]",
        "arg:",
        arguments
      );
    },
    set: function () {
      h_log(
        "_document.__proto__.__proto__ oncontentvisibilityautostatechange set [call]",
        "arg:",
        arguments
      );
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, "onscrollend", {
  get: function () {
    h_log(
      "_document.__proto__.__proto__ onscrollend get [call]",
      "arg:",
      arguments
    );
  },
  set: function () {
    h_log(
      "_document.__proto__.__proto__ onscrollend set [call]",
      "arg:",
      arguments
    );
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "getAnimations", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ getAnimations value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ getAnimations value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, "hasStorageAccess", {
  get: function () {
    h_log(
      "[v] _document.__proto__.__proto__ hasStorageAccess value [get]",
      "arg:",
      arguments
    );
    return function () {
      h_log(
        "[v] _document.__proto__.__proto__ hasStorageAccess value [call]",
        "arg:",
        arguments
      );
    };
  },
  enumerable: true,
  configurable: true,
});
Object.defineProperty(
  _document.__proto__.__proto__,
  "requestStorageAccessFor",
  {
    get: function () {
      h_log(
        "[v] _document.__proto__.__proto__ requestStorageAccessFor value [get]",
        "arg:",
        arguments
      );
      return function () {
        h_log(
          "[v] _document.__proto__.__proto__ requestStorageAccessFor value [call]",
          "arg:",
          arguments
        );
      };
    },
    enumerable: true,
    configurable: true,
  }
);
Object.defineProperty(_document.__proto__.__proto__, Symbol.toStringTag, {
  value: "Document",
  writable: false,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(_document.__proto__.__proto__, Symbol.unscopables, {
  value: {},
  writable: false,
  enumerable: false,
  configurable: true,
});
_document.__proto__.__proto__.__proto__ = Node.prototype;
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
let _location = {};
Object.defineProperty(_location, "valueOf", {
    get: function () {
        h_log("[v] _location valueOf value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _location valueOf value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: false
});
Object.defineProperty(_location, "ancestorOrigins", {
    get: function () {
        h_log("_location ancestorOrigins get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "href", {
    get: function () {
        h_log("_location href get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location href set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "origin", {
    get: function () {
        h_log("_location origin get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "protocol", {
    get: function () {
        h_log("_location protocol get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location protocol set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "host", {
    get: function () {
        h_log("_location host get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location host set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "hostname", {
    get: function () {
        h_log("_location hostname get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location hostname set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "port", {
    get: function () {
        h_log("_location port get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location port set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "pathname", {
    get: function () {
        h_log("_location pathname get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location pathname set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "search", {
    get: function () {
        h_log("_location search get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location search set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "hash", {
    get: function () {
        h_log("_location hash get [call]", "arg:", arguments)
    }, set: function () {
        h_log("_location hash set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(_location, "assign", {
    get: function () {
        h_log("[v] _location assign value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _location assign value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: false
});
Object.defineProperty(_location, "reload", {
    get: function () {
        h_log("[v] _location reload value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _location reload value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: false
});
Object.defineProperty(_location, "replace", {
    get: function () {
        h_log("[v] _location replace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _location replace value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: false
});
Object.defineProperty(_location, "toString", {
    get: function () {
        h_log("[v] _location toString value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _location toString value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: false
});
Object.defineProperty(_location, Symbol.toPrimitive, {
    value: undefined,
    writable: false,
    enumerable: false,
    configurable: false,
});
_location.__proto__ = {};
Location = function () {
    h_log("_location.__proto__ constructor value [call]", "arg:", arguments)
};
Location.prototype = _location.__proto__;
Object.defineProperty(_location.__proto__, "constructor", {
    value: Location,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_location.__proto__, Symbol.toStringTag, {
    value: "Location",
    writable: false,
    enumerable: false,
    configurable: true,
});window = globalThis;
window.Object = Object;
window.Function = Function;
window.Array = Array;
window.Number = Number;
window.parseFloat = parseFloat;
window.parseInt = parseInt;
window.Infinity = Infinity;
window.NaN = NaN;
window.undefined = undefined;
window.Boolean = Boolean;
window.String = String;
window.Symbol = Symbol;
window.Date = Date;
window.Promise = Promise;
window.RegExp = RegExp;
window.Error = Error;
window.AggregateError = AggregateError;
window.EvalError = EvalError;
window.RangeError = RangeError;
window.ReferenceError = ReferenceError;
window.SyntaxError = SyntaxError;
window.TypeError = TypeError;
window.URIError = URIError;
window.globalThis = globalThis;
window.JSON = JSON;
window.Math = Math;
window.Intl = Intl;
window.ArrayBuffer = ArrayBuffer;
window.Atomics = Atomics;
window.Uint8Array = Uint8Array;
window.Int8Array = Int8Array;
window.Uint16Array = Uint16Array;
window.Int16Array = Int16Array;
window.Uint32Array = Uint32Array;
window.Int32Array = Int32Array;
window.Float32Array = Float32Array;
window.Float64Array = Float64Array;
window.Uint8ClampedArray = Uint8ClampedArray;
window.BigUint64Array = BigUint64Array;
window.BigInt64Array = BigInt64Array;
window.DataView = DataView;
window.Map = Map;
window.BigInt = BigInt;
window.Set = Set;
window.WeakMap = WeakMap;
window.WeakSet = WeakSet;
window.Proxy = Proxy;
window.Reflect = Reflect;
window.FinalizationRegistry = FinalizationRegistry;
window.WeakRef = WeakRef;
window.decodeURI = decodeURI;
window.decodeURIComponent = decodeURIComponent;
window.encodeURI = encodeURI;
window.encodeURIComponent = encodeURIComponent;
window.escape = escape;
window.unescape = unescape;
window.eval = eval;
window.isFinite = isFinite;
window.isNaN = isNaN;
window.console = console;
Object.defineProperty(window, "Option", {
    get: function () {
        h_log("[v] window Option value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Option value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Image", {
    get: function () {
        h_log("[v] window Image value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Image value [call]", "arg:", arguments);
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Audio", {
    get: function () {
        h_log("[v] window Audio value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Audio value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitURL", {
    get: function () {
        h_log("[v] window webkitURL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitURL value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitRTCPeerConnection", {
    get: function () {
        h_log("[v] window webkitRTCPeerConnection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitRTCPeerConnection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitMediaStream", {
    get: function () {
        h_log("[v] window webkitMediaStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitMediaStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebKitMutationObserver", {
    get: function () {
        h_log("[v] window WebKitMutationObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebKitMutationObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebKitCSSMatrix", {
    get: function () {
        h_log("[v] window WebKitCSSMatrix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebKitCSSMatrix value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XSLTProcessor", {
    get: function () {
        h_log("[v] window XSLTProcessor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XSLTProcessor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XPathResult", {
    get: function () {
        h_log("[v] window XPathResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XPathResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XPathExpression", {
    get: function () {
        h_log("[v] window XPathExpression value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XPathExpression value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XPathEvaluator", {
    get: function () {
        h_log("[v] window XPathEvaluator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XPathEvaluator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLSerializer", {
    get: function () {
        h_log("[v] window XMLSerializer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLSerializer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLHttpRequestUpload", {
    get: function () {
        h_log("[v] window XMLHttpRequestUpload value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLHttpRequestUpload value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLHttpRequestEventTarget", {
    get: function () {
        h_log("[v] window XMLHttpRequestEventTarget value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLHttpRequestEventTarget value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLHttpRequest", {
    get: function () {
        h_log("[v] window XMLHttpRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLHttpRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XMLDocument", {
    get: function () {
        h_log("[v] window XMLDocument value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XMLDocument value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WritableStreamDefaultWriter", {
    get: function () {
        h_log("[v] window WritableStreamDefaultWriter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WritableStreamDefaultWriter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WritableStreamDefaultController", {
    get: function () {
        h_log("[v] window WritableStreamDefaultController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WritableStreamDefaultController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WritableStream", {
    get: function () {
        h_log("[v] window WritableStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WritableStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Worker", {
    get: function () {
        h_log("[v] window Worker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Worker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WheelEvent", {
    get: function () {
        h_log("[v] window WheelEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WheelEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebSocket", {
    get: function () {
        h_log("[v] window WebSocket value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebSocket value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLVertexArrayObject", {
    get: function () {
        h_log("[v] window WebGLVertexArrayObject value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLVertexArrayObject value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLUniformLocation", {
    get: function () {
        h_log("[v] window WebGLUniformLocation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLUniformLocation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLTransformFeedback", {
    get: function () {
        h_log("[v] window WebGLTransformFeedback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLTransformFeedback value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLTexture", {
    get: function () {
        h_log("[v] window WebGLTexture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLTexture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLSync", {
    get: function () {
        h_log("[v] window WebGLSync value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLSync value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLShaderPrecisionFormat", {
    get: function () {
        h_log("[v] window WebGLShaderPrecisionFormat value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLShaderPrecisionFormat value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLShader", {
    get: function () {
        h_log("[v] window WebGLShader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLShader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLSampler", {
    get: function () {
        h_log("[v] window WebGLSampler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLSampler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLRenderingContext", {
    get: function () {
        h_log("[v] window WebGLRenderingContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLRenderingContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLRenderbuffer", {
    get: function () {
        h_log("[v] window WebGLRenderbuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLRenderbuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLQuery", {
    get: function () {
        h_log("[v] window WebGLQuery value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLQuery value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLProgram", {
    get: function () {
        h_log("[v] window WebGLProgram value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLProgram value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLFramebuffer", {
    get: function () {
        h_log("[v] window WebGLFramebuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLFramebuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLContextEvent", {
    get: function () {
        h_log("[v] window WebGLContextEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLContextEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLBuffer", {
    get: function () {
        h_log("[v] window WebGLBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGLActiveInfo", {
    get: function () {
        h_log("[v] window WebGLActiveInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGLActiveInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebGL2RenderingContext", {
    get: function () {
        h_log("[v] window WebGL2RenderingContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebGL2RenderingContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WaveShaperNode", {
    get: function () {
        h_log("[v] window WaveShaperNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WaveShaperNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VisualViewport", {
    get: function () {
        h_log("[v] window VisualViewport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VisualViewport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VirtualKeyboardGeometryChangeEvent", {
    get: function () {
        h_log("[v] window VirtualKeyboardGeometryChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VirtualKeyboardGeometryChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ViewTransition", {
    get: function () {
        h_log("[v] window ViewTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ViewTransition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoFrame", {
    get: function () {
        h_log("[v] window VideoFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoColorSpace", {
    get: function () {
        h_log("[v] window VideoColorSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoColorSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ValidityState", {
    get: function () {
        h_log("[v] window ValidityState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ValidityState value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VTTCue", {
    get: function () {
        h_log("[v] window VTTCue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VTTCue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "UserActivation", {
    get: function () {
        h_log("[v] window UserActivation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window UserActivation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "URLSearchParams", {
    get: function () {
        h_log("[v] window URLSearchParams value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window URLSearchParams value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "URLPattern", {
    get: function () {
        h_log("[v] window URLPattern value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window URLPattern value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "URL", {
    get: function () {
        h_log("[v] window URL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window URL value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "UIEvent", {
    get: function () {
        h_log("[v] window UIEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window UIEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedTypePolicyFactory", {
    get: function () {
        h_log("[v] window TrustedTypePolicyFactory value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedTypePolicyFactory value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedTypePolicy", {
    get: function () {
        h_log("[v] window TrustedTypePolicy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedTypePolicy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedScriptURL", {
    get: function () {
        h_log("[v] window TrustedScriptURL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedScriptURL value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedScript", {
    get: function () {
        h_log("[v] window TrustedScript value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedScript value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrustedHTML", {
    get: function () {
        h_log("[v] window TrustedHTML value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrustedHTML value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TreeWalker", {
    get: function () {
        h_log("[v] window TreeWalker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TreeWalker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TransitionEvent", {
    get: function () {
        h_log("[v] window TransitionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TransitionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TransformStreamDefaultController", {
    get: function () {
        h_log("[v] window TransformStreamDefaultController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TransformStreamDefaultController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TransformStream", {
    get: function () {
        h_log("[v] window TransformStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TransformStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TrackEvent", {
    get: function () {
        h_log("[v] window TrackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TrackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TouchList", {
    get: function () {
        h_log("[v] window TouchList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TouchList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TouchEvent", {
    get: function () {
        h_log("[v] window TouchEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TouchEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Touch", {
    get: function () {
        h_log("[v] window Touch value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Touch value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ToggleEvent", {
    get: function () {
        h_log("[v] window ToggleEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ToggleEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TimeRanges", {
    get: function () {
        h_log("[v] window TimeRanges value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TimeRanges value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrackList", {
    get: function () {
        h_log("[v] window TextTrackList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrackList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrackCueList", {
    get: function () {
        h_log("[v] window TextTrackCueList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrackCueList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrackCue", {
    get: function () {
        h_log("[v] window TextTrackCue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrackCue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextTrack", {
    get: function () {
        h_log("[v] window TextTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextMetrics", {
    get: function () {
        h_log("[v] window TextMetrics value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextMetrics value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextEvent", {
    get: function () {
        h_log("[v] window TextEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextEncoderStream", {
    get: function () {
        h_log("[v] window TextEncoderStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextEncoderStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextEncoder", {
    get: function () {
        h_log("[v] window TextEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextDecoderStream", {
    get: function () {
        h_log("[v] window TextDecoderStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextDecoderStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TextDecoder", {
    get: function () {
        h_log("[v] window TextDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TextDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Text", {
    get: function () {
        h_log("[v] window Text value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Text value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskSignal", {
    get: function () {
        h_log("[v] window TaskSignal value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskSignal value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskPriorityChangeEvent", {
    get: function () {
        h_log("[v] window TaskPriorityChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskPriorityChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskController", {
    get: function () {
        h_log("[v] window TaskController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "TaskAttributionTiming", {
    get: function () {
        h_log("[v] window TaskAttributionTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window TaskAttributionTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SyncManager", {
    get: function () {
        h_log("[v] window SyncManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SyncManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SubmitEvent", {
    get: function () {
        h_log("[v] window SubmitEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SubmitEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StyleSheetList", {
    get: function () {
        h_log("[v] window StyleSheetList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StyleSheetList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StyleSheet", {
    get: function () {
        h_log("[v] window StyleSheet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StyleSheet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StylePropertyMapReadOnly", {
    get: function () {
        h_log("[v] window StylePropertyMapReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StylePropertyMapReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StylePropertyMap", {
    get: function () {
        h_log("[v] window StylePropertyMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StylePropertyMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StorageEvent", {
    get: function () {
        h_log("[v] window StorageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StorageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Storage", {
    get: function () {
        h_log("[v] window Storage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Storage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StereoPannerNode", {
    get: function () {
        h_log("[v] window StereoPannerNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StereoPannerNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StaticRange", {
    get: function () {
        h_log("[v] window StaticRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StaticRange value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SourceBufferList", {
    get: function () {
        h_log("[v] window SourceBufferList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SourceBufferList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SourceBuffer", {
    get: function () {
        h_log("[v] window SourceBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SourceBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ShadowRoot", {
    get: function () {
        h_log("[v] window ShadowRoot value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ShadowRoot value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Selection", {
    get: function () {
        h_log("[v] window Selection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Selection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SecurityPolicyViolationEvent", {
    get: function () {
        h_log("[v] window SecurityPolicyViolationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SecurityPolicyViolationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScriptProcessorNode", {
    get: function () {
        h_log("[v] window ScriptProcessorNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScriptProcessorNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScreenOrientation", {
    get: function () {
        h_log("[v] window ScreenOrientation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScreenOrientation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Screen", {
    get: function () {
        h_log("[v] window Screen value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Screen value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Scheduling", {
    get: function () {
        h_log("[v] window Scheduling value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Scheduling value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Scheduler", {
    get: function () {
        h_log("[v] window Scheduler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Scheduler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGViewElement", {
    get: function () {
        h_log("[v] window SVGViewElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGViewElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGUseElement", {
    get: function () {
        h_log("[v] window SVGUseElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGUseElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGUnitTypes", {
    get: function () {
        h_log("[v] window SVGUnitTypes value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGUnitTypes value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTransformList", {
    get: function () {
        h_log("[v] window SVGTransformList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTransformList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTransform", {
    get: function () {
        h_log("[v] window SVGTransform value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTransform value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTitleElement", {
    get: function () {
        h_log("[v] window SVGTitleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTitleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextPositioningElement", {
    get: function () {
        h_log("[v] window SVGTextPositioningElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextPositioningElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextPathElement", {
    get: function () {
        h_log("[v] window SVGTextPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextElement", {
    get: function () {
        h_log("[v] window SVGTextElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTextContentElement", {
    get: function () {
        h_log("[v] window SVGTextContentElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTextContentElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGTSpanElement", {
    get: function () {
        h_log("[v] window SVGTSpanElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGTSpanElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSymbolElement", {
    get: function () {
        h_log("[v] window SVGSymbolElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSymbolElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSwitchElement", {
    get: function () {
        h_log("[v] window SVGSwitchElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSwitchElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGStyleElement", {
    get: function () {
        h_log("[v] window SVGStyleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGStyleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGStringList", {
    get: function () {
        h_log("[v] window SVGStringList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGStringList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGStopElement", {
    get: function () {
        h_log("[v] window SVGStopElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGStopElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSetElement", {
    get: function () {
        h_log("[v] window SVGSetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGScriptElement", {
    get: function () {
        h_log("[v] window SVGScriptElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGScriptElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGSVGElement", {
    get: function () {
        h_log("[v] window SVGSVGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGSVGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGRectElement", {
    get: function () {
        h_log("[v] window SVGRectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGRectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGRect", {
    get: function () {
        h_log("[v] window SVGRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGRect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGRadialGradientElement", {
    get: function () {
        h_log("[v] window SVGRadialGradientElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGRadialGradientElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPreserveAspectRatio", {
    get: function () {
        h_log("[v] window SVGPreserveAspectRatio value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPreserveAspectRatio value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPolylineElement", {
    get: function () {
        h_log("[v] window SVGPolylineElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPolylineElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPolygonElement", {
    get: function () {
        h_log("[v] window SVGPolygonElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPolygonElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPointList", {
    get: function () {
        h_log("[v] window SVGPointList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPointList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPoint", {
    get: function () {
        h_log("[v] window SVGPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPoint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPatternElement", {
    get: function () {
        h_log("[v] window SVGPatternElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPatternElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGPathElement", {
    get: function () {
        h_log("[v] window SVGPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGNumberList", {
    get: function () {
        h_log("[v] window SVGNumberList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGNumberList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGNumber", {
    get: function () {
        h_log("[v] window SVGNumber value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGNumber value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMetadataElement", {
    get: function () {
        h_log("[v] window SVGMetadataElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMetadataElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMatrix", {
    get: function () {
        h_log("[v] window SVGMatrix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMatrix value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMaskElement", {
    get: function () {
        h_log("[v] window SVGMaskElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMaskElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMarkerElement", {
    get: function () {
        h_log("[v] window SVGMarkerElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMarkerElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGMPathElement", {
    get: function () {
        h_log("[v] window SVGMPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGMPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLinearGradientElement", {
    get: function () {
        h_log("[v] window SVGLinearGradientElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLinearGradientElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLineElement", {
    get: function () {
        h_log("[v] window SVGLineElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLineElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLengthList", {
    get: function () {
        h_log("[v] window SVGLengthList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLengthList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGLength", {
    get: function () {
        h_log("[v] window SVGLength value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGLength value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGImageElement", {
    get: function () {
        h_log("[v] window SVGImageElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGImageElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGraphicsElement", {
    get: function () {
        h_log("[v] window SVGGraphicsElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGraphicsElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGradientElement", {
    get: function () {
        h_log("[v] window SVGGradientElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGradientElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGeometryElement", {
    get: function () {
        h_log("[v] window SVGGeometryElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGeometryElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGGElement", {
    get: function () {
        h_log("[v] window SVGGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGForeignObjectElement", {
    get: function () {
        h_log("[v] window SVGForeignObjectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGForeignObjectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFilterElement", {
    get: function () {
        h_log("[v] window SVGFilterElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFilterElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFETurbulenceElement", {
    get: function () {
        h_log("[v] window SVGFETurbulenceElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFETurbulenceElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFETileElement", {
    get: function () {
        h_log("[v] window SVGFETileElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFETileElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFESpotLightElement", {
    get: function () {
        h_log("[v] window SVGFESpotLightElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFESpotLightElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFESpecularLightingElement", {
    get: function () {
        h_log("[v] window SVGFESpecularLightingElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFESpecularLightingElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEPointLightElement", {
    get: function () {
        h_log("[v] window SVGFEPointLightElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEPointLightElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEOffsetElement", {
    get: function () {
        h_log("[v] window SVGFEOffsetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEOffsetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEMorphologyElement", {
    get: function () {
        h_log("[v] window SVGFEMorphologyElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEMorphologyElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEMergeNodeElement", {
    get: function () {
        h_log("[v] window SVGFEMergeNodeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEMergeNodeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEMergeElement", {
    get: function () {
        h_log("[v] window SVGFEMergeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEMergeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEImageElement", {
    get: function () {
        h_log("[v] window SVGFEImageElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEImageElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEGaussianBlurElement", {
    get: function () {
        h_log("[v] window SVGFEGaussianBlurElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEGaussianBlurElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncRElement", {
    get: function () {
        h_log("[v] window SVGFEFuncRElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncRElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncGElement", {
    get: function () {
        h_log("[v] window SVGFEFuncGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncBElement", {
    get: function () {
        h_log("[v] window SVGFEFuncBElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncBElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFuncAElement", {
    get: function () {
        h_log("[v] window SVGFEFuncAElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFuncAElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEFloodElement", {
    get: function () {
        h_log("[v] window SVGFEFloodElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEFloodElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDropShadowElement", {
    get: function () {
        h_log("[v] window SVGFEDropShadowElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDropShadowElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDistantLightElement", {
    get: function () {
        h_log("[v] window SVGFEDistantLightElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDistantLightElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDisplacementMapElement", {
    get: function () {
        h_log("[v] window SVGFEDisplacementMapElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDisplacementMapElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEDiffuseLightingElement", {
    get: function () {
        h_log("[v] window SVGFEDiffuseLightingElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEDiffuseLightingElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEConvolveMatrixElement", {
    get: function () {
        h_log("[v] window SVGFEConvolveMatrixElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEConvolveMatrixElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFECompositeElement", {
    get: function () {
        h_log("[v] window SVGFECompositeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFECompositeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEComponentTransferElement", {
    get: function () {
        h_log("[v] window SVGFEComponentTransferElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEComponentTransferElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEColorMatrixElement", {
    get: function () {
        h_log("[v] window SVGFEColorMatrixElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEColorMatrixElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGFEBlendElement", {
    get: function () {
        h_log("[v] window SVGFEBlendElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGFEBlendElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGEllipseElement", {
    get: function () {
        h_log("[v] window SVGEllipseElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGEllipseElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGElement", {
    get: function () {
        h_log("[v] window SVGElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGDescElement", {
    get: function () {
        h_log("[v] window SVGDescElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGDescElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGDefsElement", {
    get: function () {
        h_log("[v] window SVGDefsElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGDefsElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGComponentTransferFunctionElement", {
    get: function () {
        h_log("[v] window SVGComponentTransferFunctionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGComponentTransferFunctionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGClipPathElement", {
    get: function () {
        h_log("[v] window SVGClipPathElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGClipPathElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGCircleElement", {
    get: function () {
        h_log("[v] window SVGCircleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGCircleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimationElement", {
    get: function () {
        h_log("[v] window SVGAnimationElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimationElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedTransformList", {
    get: function () {
        h_log("[v] window SVGAnimatedTransformList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedTransformList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedString", {
    get: function () {
        h_log("[v] window SVGAnimatedString value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedString value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedRect", {
    get: function () {
        h_log("[v] window SVGAnimatedRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedRect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedPreserveAspectRatio", {
    get: function () {
        h_log("[v] window SVGAnimatedPreserveAspectRatio value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedPreserveAspectRatio value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedNumberList", {
    get: function () {
        h_log("[v] window SVGAnimatedNumberList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedNumberList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedNumber", {
    get: function () {
        h_log("[v] window SVGAnimatedNumber value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedNumber value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedLengthList", {
    get: function () {
        h_log("[v] window SVGAnimatedLengthList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedLengthList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedLength", {
    get: function () {
        h_log("[v] window SVGAnimatedLength value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedLength value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedInteger", {
    get: function () {
        h_log("[v] window SVGAnimatedInteger value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedInteger value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedEnumeration", {
    get: function () {
        h_log("[v] window SVGAnimatedEnumeration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedEnumeration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedBoolean", {
    get: function () {
        h_log("[v] window SVGAnimatedBoolean value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedBoolean value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimatedAngle", {
    get: function () {
        h_log("[v] window SVGAnimatedAngle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimatedAngle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimateTransformElement", {
    get: function () {
        h_log("[v] window SVGAnimateTransformElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimateTransformElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimateMotionElement", {
    get: function () {
        h_log("[v] window SVGAnimateMotionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimateMotionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAnimateElement", {
    get: function () {
        h_log("[v] window SVGAnimateElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAnimateElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAngle", {
    get: function () {
        h_log("[v] window SVGAngle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAngle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SVGAElement", {
    get: function () {
        h_log("[v] window SVGAElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SVGAElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Response", {
    get: function () {
        h_log("[v] window Response value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Response value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ResizeObserverSize", {
    get: function () {
        h_log("[v] window ResizeObserverSize value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ResizeObserverSize value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ResizeObserverEntry", {
    get: function () {
        h_log("[v] window ResizeObserverEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ResizeObserverEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ResizeObserver", {
    get: function () {
        h_log("[v] window ResizeObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ResizeObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Request", {
    get: function () {
        h_log("[v] window Request value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Request value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReportingObserver", {
    get: function () {
        h_log("[v] window ReportingObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReportingObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamDefaultReader", {
    get: function () {
        h_log("[v] window ReadableStreamDefaultReader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamDefaultReader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamDefaultController", {
    get: function () {
        h_log("[v] window ReadableStreamDefaultController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamDefaultController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamBYOBRequest", {
    get: function () {
        h_log("[v] window ReadableStreamBYOBRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamBYOBRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStreamBYOBReader", {
    get: function () {
        h_log("[v] window ReadableStreamBYOBReader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStreamBYOBReader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableStream", {
    get: function () {
        h_log("[v] window ReadableStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ReadableByteStreamController", {
    get: function () {
        h_log("[v] window ReadableByteStreamController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ReadableByteStreamController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Range", {
    get: function () {
        h_log("[v] window Range value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Range value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RadioNodeList", {
    get: function () {
        h_log("[v] window RadioNodeList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RadioNodeList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCTrackEvent", {
    get: function () {
        h_log("[v] window RTCTrackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCTrackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCStatsReport", {
    get: function () {
        h_log("[v] window RTCStatsReport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCStatsReport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCSessionDescription", {
    get: function () {
        h_log("[v] window RTCSessionDescription value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCSessionDescription value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCSctpTransport", {
    get: function () {
        h_log("[v] window RTCSctpTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCSctpTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCRtpTransceiver", {
    get: function () {
        h_log("[v] window RTCRtpTransceiver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCRtpTransceiver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCRtpSender", {
    get: function () {
        h_log("[v] window RTCRtpSender value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCRtpSender value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCRtpReceiver", {
    get: function () {
        h_log("[v] window RTCRtpReceiver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCRtpReceiver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCPeerConnectionIceEvent", {
    get: function () {
        h_log("[v] window RTCPeerConnectionIceEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCPeerConnectionIceEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCPeerConnectionIceErrorEvent", {
    get: function () {
        h_log("[v] window RTCPeerConnectionIceErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCPeerConnectionIceErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCPeerConnection", {
    get: function () {
        h_log("[v] window RTCPeerConnection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCPeerConnection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCIceTransport", {
    get: function () {
        h_log("[v] window RTCIceTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCIceTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCIceCandidate", {
    get: function () {
        h_log("[v] window RTCIceCandidate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCIceCandidate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCErrorEvent", {
    get: function () {
        h_log("[v] window RTCErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCError", {
    get: function () {
        h_log("[v] window RTCError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCEncodedVideoFrame", {
    get: function () {
        h_log("[v] window RTCEncodedVideoFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCEncodedVideoFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCEncodedAudioFrame", {
    get: function () {
        h_log("[v] window RTCEncodedAudioFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCEncodedAudioFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDtlsTransport", {
    get: function () {
        h_log("[v] window RTCDtlsTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDtlsTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDataChannelEvent", {
    get: function () {
        h_log("[v] window RTCDataChannelEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDataChannelEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDataChannel", {
    get: function () {
        h_log("[v] window RTCDataChannel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDataChannel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDTMFToneChangeEvent", {
    get: function () {
        h_log("[v] window RTCDTMFToneChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDTMFToneChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCDTMFSender", {
    get: function () {
        h_log("[v] window RTCDTMFSender value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCDTMFSender value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RTCCertificate", {
    get: function () {
        h_log("[v] window RTCCertificate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RTCCertificate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PromiseRejectionEvent", {
    get: function () {
        h_log("[v] window PromiseRejectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PromiseRejectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ProgressEvent", {
    get: function () {
        h_log("[v] window ProgressEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ProgressEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Profiler", {
    get: function () {
        h_log("[v] window Profiler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Profiler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ProcessingInstruction", {
    get: function () {
        h_log("[v] window ProcessingInstruction value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ProcessingInstruction value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PopStateEvent", {
    get: function () {
        h_log("[v] window PopStateEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PopStateEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PointerEvent", {
    get: function () {
        h_log("[v] window PointerEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PointerEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PluginArray", {
    get: function () {
        h_log("[v] window PluginArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PluginArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Plugin", {
    get: function () {
        h_log("[v] window Plugin value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Plugin value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PictureInPictureWindow", {
    get: function () {
        h_log("[v] window PictureInPictureWindow value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PictureInPictureWindow value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PictureInPictureEvent", {
    get: function () {
        h_log("[v] window PictureInPictureEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PictureInPictureEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PeriodicWave", {
    get: function () {
        h_log("[v] window PeriodicWave value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PeriodicWave value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceTiming", {
    get: function () {
        h_log("[v] window PerformanceTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceServerTiming", {
    get: function () {
        h_log("[v] window PerformanceServerTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceServerTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceResourceTiming", {
    get: function () {
        h_log("[v] window PerformanceResourceTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceResourceTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformancePaintTiming", {
    get: function () {
        h_log("[v] window PerformancePaintTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformancePaintTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceObserverEntryList", {
    get: function () {
        h_log("[v] window PerformanceObserverEntryList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceObserverEntryList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceObserver", {
    get: function () {
        h_log("[v] window PerformanceObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceNavigationTiming", {
    get: function () {
        h_log("[v] window PerformanceNavigationTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceNavigationTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceNavigation", {
    get: function () {
        h_log("[v] window PerformanceNavigation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceNavigation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceMeasure", {
    get: function () {
        h_log("[v] window PerformanceMeasure value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceMeasure value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceMark", {
    get: function () {
        h_log("[v] window PerformanceMark value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceMark value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceLongTaskTiming", {
    get: function () {
        h_log("[v] window PerformanceLongTaskTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceLongTaskTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceEventTiming", {
    get: function () {
        h_log("[v] window PerformanceEventTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceEventTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceEntry", {
    get: function () {
        h_log("[v] window PerformanceEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PerformanceElementTiming", {
    get: function () {
        h_log("[v] window PerformanceElementTiming value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PerformanceElementTiming value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Performance", {
    get: function () {
        h_log("[v] window Performance value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Performance value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Path2D", {
    get: function () {
        h_log("[v] window Path2D value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Path2D value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PannerNode", {
    get: function () {
        h_log("[v] window PannerNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PannerNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PageTransitionEvent", {
    get: function () {
        h_log("[v] window PageTransitionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PageTransitionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OverconstrainedError", {
    get: function () {
        h_log("[v] window OverconstrainedError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OverconstrainedError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OscillatorNode", {
    get: function () {
        h_log("[v] window OscillatorNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OscillatorNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OffscreenCanvasRenderingContext2D", {
    get: function () {
        h_log("[v] window OffscreenCanvasRenderingContext2D value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OffscreenCanvasRenderingContext2D value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OffscreenCanvas", {
    get: function () {
        h_log("[v] window OffscreenCanvas value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OffscreenCanvas value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OfflineAudioContext", {
    get: function () {
        h_log("[v] window OfflineAudioContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OfflineAudioContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OfflineAudioCompletionEvent", {
    get: function () {
        h_log("[v] window OfflineAudioCompletionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OfflineAudioCompletionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NodeList", {
    get: function () {
        h_log("[v] window NodeList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NodeList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NodeIterator", {
    get: function () {
        h_log("[v] window NodeIterator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NodeIterator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NodeFilter", {
    get: function () {
        h_log("[v] window NodeFilter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NodeFilter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});

Object.defineProperty(window, "NetworkInformation", {
    get: function () {
        h_log("[v] window NetworkInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NetworkInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationTransition", {
    get: function () {
        h_log("[v] window NavigationTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationTransition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationHistoryEntry", {
    get: function () {
        h_log("[v] window NavigationHistoryEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationHistoryEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationDestination", {
    get: function () {
        h_log("[v] window NavigationDestination value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationDestination value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationCurrentEntryChangeEvent", {
    get: function () {
        h_log("[v] window NavigationCurrentEntryChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationCurrentEntryChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Navigation", {
    get: function () {
        h_log("[v] window Navigation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Navigation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigateEvent", {
    get: function () {
        h_log("[v] window NavigateEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigateEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NamedNodeMap", {
    get: function () {
        h_log("[v] window NamedNodeMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NamedNodeMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MutationRecord", {
    get: function () {
        h_log("[v] window MutationRecord value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MutationRecord value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MutationObserver", {
    get: function () {
        h_log("[v] window MutationObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MutationObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MouseEvent", {
    get: function () {
        h_log("[v] window MouseEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MouseEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MimeTypeArray", {
    get: function () {
        h_log("[v] window MimeTypeArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MimeTypeArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MimeType", {
    get: function () {
        h_log("[v] window MimeType value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MimeType value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MessagePort", {
    get: function () {
        h_log("[v] window MessagePort value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MessagePort value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MessageEvent", {
    get: function () {
        h_log("[v] window MessageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MessageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MessageChannel", {
    get: function () {
        h_log("[v] window MessageChannel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MessageChannel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackVideoStats", {
    get: function () {
        h_log("[v] window MediaStreamTrackVideoStats value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackVideoStats value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackProcessor", {
    get: function () {
        h_log("[v] window MediaStreamTrackProcessor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackProcessor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackGenerator", {
    get: function () {
        h_log("[v] window MediaStreamTrackGenerator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackGenerator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrackEvent", {
    get: function () {
        h_log("[v] window MediaStreamTrackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamTrack", {
    get: function () {
        h_log("[v] window MediaStreamTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamEvent", {
    get: function () {
        h_log("[v] window MediaStreamEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamAudioSourceNode", {
    get: function () {
        h_log("[v] window MediaStreamAudioSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamAudioSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStreamAudioDestinationNode", {
    get: function () {
        h_log("[v] window MediaStreamAudioDestinationNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStreamAudioDestinationNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaStream", {
    get: function () {
        h_log("[v] window MediaStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaSourceHandle", {
    get: function () {
        h_log("[v] window MediaSourceHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaSourceHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaSource", {
    get: function () {
        h_log("[v] window MediaSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaRecorder", {
    get: function () {
        h_log("[v] window MediaRecorder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaRecorder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaQueryListEvent", {
    get: function () {
        h_log("[v] window MediaQueryListEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaQueryListEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaQueryList", {
    get: function () {
        h_log("[v] window MediaQueryList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaQueryList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaList", {
    get: function () {
        h_log("[v] window MediaList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaError", {
    get: function () {
        h_log("[v] window MediaError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaEncryptedEvent", {
    get: function () {
        h_log("[v] window MediaEncryptedEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaEncryptedEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaElementAudioSourceNode", {
    get: function () {
        h_log("[v] window MediaElementAudioSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaElementAudioSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaCapabilities", {
    get: function () {
        h_log("[v] window MediaCapabilities value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaCapabilities value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MathMLElement", {
    get: function () {
        h_log("[v] window MathMLElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MathMLElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});

Object.defineProperty(window, "LayoutShiftAttribution", {
    get: function () {
        h_log("[v] window LayoutShiftAttribution value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LayoutShiftAttribution value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LayoutShift", {
    get: function () {
        h_log("[v] window LayoutShift value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LayoutShift value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LargestContentfulPaint", {
    get: function () {
        h_log("[v] window LargestContentfulPaint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LargestContentfulPaint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "KeyframeEffect", {
    get: function () {
        h_log("[v] window KeyframeEffect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window KeyframeEffect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "KeyboardEvent", {
    get: function () {
        h_log("[v] window KeyboardEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window KeyboardEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IntersectionObserverEntry", {
    get: function () {
        h_log("[v] window IntersectionObserverEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IntersectionObserverEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IntersectionObserver", {
    get: function () {
        h_log("[v] window IntersectionObserver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IntersectionObserver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "InputEvent", {
    get: function () {
        h_log("[v] window InputEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window InputEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "InputDeviceInfo", {
    get: function () {
        h_log("[v] window InputDeviceInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window InputDeviceInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "InputDeviceCapabilities", {
    get: function () {
        h_log("[v] window InputDeviceCapabilities value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window InputDeviceCapabilities value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageTrackList", {
    get: function () {
        h_log("[v] window ImageTrackList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageTrackList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageTrack", {
    get: function () {
        h_log("[v] window ImageTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageData", {
    get: function () {
        h_log("[v] window ImageData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageCapture", {
    get: function () {
        h_log("[v] window ImageCapture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageCapture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageBitmapRenderingContext", {
    get: function () {
        h_log("[v] window ImageBitmapRenderingContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageBitmapRenderingContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageBitmap", {
    get: function () {
        h_log("[v] window ImageBitmap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageBitmap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdleDeadline", {
    get: function () {
        h_log("[v] window IdleDeadline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdleDeadline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IIRFilterNode", {
    get: function () {
        h_log("[v] window IIRFilterNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IIRFilterNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBVersionChangeEvent", {
    get: function () {
        h_log("[v] window IDBVersionChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBVersionChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBTransaction", {
    get: function () {
        h_log("[v] window IDBTransaction value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBTransaction value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBRequest", {
    get: function () {
        h_log("[v] window IDBRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBOpenDBRequest", {
    get: function () {
        h_log("[v] window IDBOpenDBRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBOpenDBRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBObjectStore", {
    get: function () {
        h_log("[v] window IDBObjectStore value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBObjectStore value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBKeyRange", {
    get: function () {
        h_log("[v] window IDBKeyRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBKeyRange value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBIndex", {
    get: function () {
        h_log("[v] window IDBIndex value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBIndex value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBFactory", {
    get: function () {
        h_log("[v] window IDBFactory value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBFactory value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBDatabase", {
    get: function () {
        h_log("[v] window IDBDatabase value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBDatabase value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBCursorWithValue", {
    get: function () {
        h_log("[v] window IDBCursorWithValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBCursorWithValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IDBCursor", {
    get: function () {
        h_log("[v] window IDBCursor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IDBCursor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "History", {
    get: function () {
        h_log("[v] window History value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window History value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Headers", {
    get: function () {
        h_log("[v] window Headers value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Headers value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HashChangeEvent", {
    get: function () {
        h_log("[v] window HashChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HashChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLVideoElement", {
    get: function () {
        h_log("[v] window HTMLVideoElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLVideoElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLUnknownElement", {
    get: function () {
        h_log("[v] window HTMLUnknownElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLUnknownElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLUListElement", {
    get: function () {
        h_log("[v] window HTMLUListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLUListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTrackElement", {
    get: function () {
        h_log("[v] window HTMLTrackElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTrackElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTitleElement", {
    get: function () {
        h_log("[v] window HTMLTitleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTitleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTimeElement", {
    get: function () {
        h_log("[v] window HTMLTimeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTimeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTextAreaElement", {
    get: function () {
        h_log("[v] window HTMLTextAreaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTextAreaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTemplateElement", {
    get: function () {
        h_log("[v] window HTMLTemplateElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTemplateElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableSectionElement", {
    get: function () {
        h_log("[v] window HTMLTableSectionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableSectionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableRowElement", {
    get: function () {
        h_log("[v] window HTMLTableRowElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableRowElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableElement", {
    get: function () {
        h_log("[v] window HTMLTableElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableColElement", {
    get: function () {
        h_log("[v] window HTMLTableColElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableColElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableCellElement", {
    get: function () {
        h_log("[v] window HTMLTableCellElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableCellElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLTableCaptionElement", {
    get: function () {
        h_log("[v] window HTMLTableCaptionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLTableCaptionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLStyleElement", {
    get: function () {
        h_log("[v] window HTMLStyleElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLStyleElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSpanElement", {
    get: function () {
        h_log("[v] window HTMLSpanElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSpanElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSourceElement", {
    get: function () {
        h_log("[v] window HTMLSourceElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSourceElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSlotElement", {
    get: function () {
        h_log("[v] window HTMLSlotElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSlotElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLSelectElement", {
    get: function () {
        h_log("[v] window HTMLSelectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLSelectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
// Object.defineProperty(window, "HTMLScriptElement", {
//     get: function () {
//         h_log("[v] window HTMLScriptElement value [get]", "arg:", arguments);
//         return function () {
//             h_log("[v] window HTMLScriptElement value [call]", "arg:", arguments)
//         }
//     }, enumerable: false, configurable: true
// });
Object.defineProperty(window, "HTMLQuoteElement", {
    get: function () {
        h_log("[v] window HTMLQuoteElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLQuoteElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLProgressElement", {
    get: function () {
        h_log("[v] window HTMLProgressElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLProgressElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLPreElement", {
    get: function () {
        h_log("[v] window HTMLPreElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLPreElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLPictureElement", {
    get: function () {
        h_log("[v] window HTMLPictureElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLPictureElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLParamElement", {
    get: function () {
        h_log("[v] window HTMLParamElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLParamElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLParagraphElement", {
    get: function () {
        h_log("[v] window HTMLParagraphElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLParagraphElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOutputElement", {
    get: function () {
        h_log("[v] window HTMLOutputElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOutputElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOptionsCollection", {
    get: function () {
        h_log("[v] window HTMLOptionsCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOptionsCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOptionElement", {
    get: function () {
        h_log("[v] window HTMLOptionElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOptionElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOptGroupElement", {
    get: function () {
        h_log("[v] window HTMLOptGroupElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOptGroupElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLObjectElement", {
    get: function () {
        h_log("[v] window HTMLObjectElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLObjectElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLOListElement", {
    get: function () {
        h_log("[v] window HTMLOListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLOListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLModElement", {
    get: function () {
        h_log("[v] window HTMLModElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLModElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMeterElement", {
    get: function () {
        h_log("[v] window HTMLMeterElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMeterElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMetaElement", {
    get: function () {
        h_log("[v] window HTMLMetaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMetaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMenuElement", {
    get: function () {
        h_log("[v] window HTMLMenuElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMenuElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMediaElement", {
    get: function () {
        h_log("[v] window HTMLMediaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMediaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMarqueeElement", {
    get: function () {
        h_log("[v] window HTMLMarqueeElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMarqueeElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLMapElement", {
    get: function () {
        h_log("[v] window HTMLMapElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLMapElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLinkElement", {
    get: function () {
        h_log("[v] window HTMLLinkElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLinkElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLegendElement", {
    get: function () {
        h_log("[v] window HTMLLegendElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLegendElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLabelElement", {
    get: function () {
        h_log("[v] window HTMLLabelElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLabelElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLLIElement", {
    get: function () {
        h_log("[v] window HTMLLIElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLLIElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLInputElement", {
    get: function () {
        h_log("[v] window HTMLInputElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLInputElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLImageElement", {
    get: function () {
        h_log("[v] window HTMLImageElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLImageElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLIFrameElement", {
    get: function () {
        h_log("[v] window HTMLIFrameElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLIFrameElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLHtmlElement", {
    get: function () {
        h_log("[v] window HTMLHtmlElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLHtmlElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLHeadingElement", {
    get: function () {
        h_log("[v] window HTMLHeadingElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLHeadingElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLHeadElement", {
    get: function () {
        h_log("[v] window HTMLHeadElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLHeadElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLHRElement", {
    get: function () {
        h_log("[v] window HTMLHRElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLHRElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFrameSetElement", {
    get: function () {
        h_log("[v] window HTMLFrameSetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFrameSetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFrameElement", {
    get: function () {
        h_log("[v] window HTMLFrameElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFrameElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFormElement", {
    get: function () {
        h_log("[v] window HTMLFormElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFormElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFormControlsCollection", {
    get: function () {
        h_log("[v] window HTMLFormControlsCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFormControlsCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFontElement", {
    get: function () {
        h_log("[v] window HTMLFontElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFontElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFieldSetElement", {
    get: function () {
        h_log("[v] window HTMLFieldSetElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFieldSetElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLEmbedElement", {
    get: function () {
        h_log("[v] window HTMLEmbedElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLEmbedElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLElement", {
    get: function () {
        h_log("[v] window HTMLElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDocument", {
    get: function () {
        h_log("[v] window HTMLDocument value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDocument value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
// Object.defineProperty(window, "HTMLDivElement", {
//     get: function () {
//         h_log("[v] window HTMLDivElement value [get]", "arg:", arguments);
//         return function () {
//             h_log("[v] window HTMLDivElement value [call]", "arg:", arguments)
//         }
//     }, enumerable: false, configurable: true
// });
Object.defineProperty(window, "HTMLDirectoryElement", {
    get: function () {
        h_log("[v] window HTMLDirectoryElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDirectoryElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDialogElement", {
    get: function () {
        h_log("[v] window HTMLDialogElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDialogElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDetailsElement", {
    get: function () {
        h_log("[v] window HTMLDetailsElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDetailsElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDataListElement", {
    get: function () {
        h_log("[v] window HTMLDataListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDataListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDataElement", {
    get: function () {
        h_log("[v] window HTMLDataElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDataElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLDListElement", {
    get: function () {
        h_log("[v] window HTMLDListElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLDListElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLCollection", {
    get: function () {
        h_log("[v] window HTMLCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLCanvasElement", {
    get: function () {
        h_log("[v] window HTMLCanvasElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLCanvasElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLButtonElement", {
    get: function () {
        h_log("[v] window HTMLButtonElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLButtonElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLBodyElement", {
    get: function () {
        h_log("[v] window HTMLBodyElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLBodyElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLBaseElement", {
    get: function () {
        h_log("[v] window HTMLBaseElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLBaseElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLBRElement", {
    get: function () {
        h_log("[v] window HTMLBRElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLBRElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAudioElement", {
    get: function () {
        h_log("[v] window HTMLAudioElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAudioElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAreaElement", {
    get: function () {
        h_log("[v] window HTMLAreaElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAreaElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAnchorElement", {
    get: function () {
        h_log("[v] window HTMLAnchorElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAnchorElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLAllCollection", {
    get: function () {
        h_log("[v] window HTMLAllCollection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLAllCollection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GeolocationPositionError", {
    get: function () {
        h_log("[v] window GeolocationPositionError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GeolocationPositionError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GeolocationPosition", {
    get: function () {
        h_log("[v] window GeolocationPosition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GeolocationPosition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GeolocationCoordinates", {
    get: function () {
        h_log("[v] window GeolocationCoordinates value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GeolocationCoordinates value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Geolocation", {
    get: function () {
        h_log("[v] window Geolocation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Geolocation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GamepadHapticActuator", {
    get: function () {
        h_log("[v] window GamepadHapticActuator value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GamepadHapticActuator value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GamepadEvent", {
    get: function () {
        h_log("[v] window GamepadEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GamepadEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GamepadButton", {
    get: function () {
        h_log("[v] window GamepadButton value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GamepadButton value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Gamepad", {
    get: function () {
        h_log("[v] window Gamepad value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Gamepad value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GainNode", {
    get: function () {
        h_log("[v] window GainNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GainNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FormDataEvent", {
    get: function () {
        h_log("[v] window FormDataEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FormDataEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FormData", {
    get: function () {
        h_log("[v] window FormData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FormData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FontFaceSetLoadEvent", {
    get: function () {
        h_log("[v] window FontFaceSetLoadEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FontFaceSetLoadEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FontFace", {
    get: function () {
        h_log("[v] window FontFace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FontFace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FocusEvent", {
    get: function () {
        h_log("[v] window FocusEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FocusEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileReader", {
    get: function () {
        h_log("[v] window FileReader value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileReader value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileList", {
    get: function () {
        h_log("[v] window FileList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "File", {
    get: function () {
        h_log("[v] window File value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window File value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FeaturePolicy", {
    get: function () {
        h_log("[v] window FeaturePolicy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FeaturePolicy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
// Object.defineProperty(window, "External", {
//     get: function () {
//         h_log("[v] window External value [get]", "arg:", arguments);
//         return function () {
//             h_log("[v] window External value [call]", "arg:", arguments)
//         }
//     }, enumerable: false, configurable: true
// });
Object.defineProperty(window, "EventSource", {
    get: function () {
        h_log("[v] window EventSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EventSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EventCounts", {
    get: function () {
        h_log("[v] window EventCounts value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EventCounts value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Event", {
    get: function () {
        h_log("[v] window Event value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Event value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ErrorEvent", {
    get: function () {
        h_log("[v] window ErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EncodedVideoChunk", {
    get: function () {
        h_log("[v] window EncodedVideoChunk value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EncodedVideoChunk value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EncodedAudioChunk", {
    get: function () {
        h_log("[v] window EncodedAudioChunk value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EncodedAudioChunk value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ElementInternals", {
    get: function () {
        h_log("[v] window ElementInternals value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ElementInternals value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Element", {
    get: function () {
        h_log("[v] window Element value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Element value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DynamicsCompressorNode", {
    get: function () {
        h_log("[v] window DynamicsCompressorNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DynamicsCompressorNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DragEvent", {
    get: function () {
        h_log("[v] window DragEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DragEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentType", {
    get: function () {
        h_log("[v] window DocumentType value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentType value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentFragment", {
    get: function () {
        h_log("[v] window DocumentFragment value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentFragment value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Document", {
    get: function () {
        h_log("[v] window Document value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Document value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DelayNode", {
    get: function () {
        h_log("[v] window DelayNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DelayNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DecompressionStream", {
    get: function () {
        h_log("[v] window DecompressionStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DecompressionStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DataTransferItemList", {
    get: function () {
        h_log("[v] window DataTransferItemList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DataTransferItemList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DataTransferItem", {
    get: function () {
        h_log("[v] window DataTransferItem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DataTransferItem value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DataTransfer", {
    get: function () {
        h_log("[v] window DataTransfer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DataTransfer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMTokenList", {
    get: function () {
        h_log("[v] window DOMTokenList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMTokenList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMStringMap", {
    get: function () {
        h_log("[v] window DOMStringMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMStringMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMStringList", {
    get: function () {
        h_log("[v] window DOMStringList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMStringList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMRectReadOnly", {
    get: function () {
        h_log("[v] window DOMRectReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMRectReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMRectList", {
    get: function () {
        h_log("[v] window DOMRectList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMRectList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMRect", {
    get: function () {
        h_log("[v] window DOMRect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMRect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMQuad", {
    get: function () {
        h_log("[v] window DOMQuad value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMQuad value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMPointReadOnly", {
    get: function () {
        h_log("[v] window DOMPointReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMPointReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMPoint", {
    get: function () {
        h_log("[v] window DOMPoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMPoint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMParser", {
    get: function () {
        h_log("[v] window DOMParser value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMParser value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMMatrixReadOnly", {
    get: function () {
        h_log("[v] window DOMMatrixReadOnly value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMMatrixReadOnly value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMMatrix", {
    get: function () {
        h_log("[v] window DOMMatrix value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMMatrix value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMImplementation", {
    get: function () {
        h_log("[v] window DOMImplementation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMImplementation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMException", {
    get: function () {
        h_log("[v] window DOMException value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMException value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DOMError", {
    get: function () {
        h_log("[v] window DOMError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DOMError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CustomStateSet", {
    get: function () {
        h_log("[v] window CustomStateSet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CustomStateSet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CustomEvent", {
    get: function () {
        h_log("[v] window CustomEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CustomEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CustomElementRegistry", {
    get: function () {
        h_log("[v] window CustomElementRegistry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CustomElementRegistry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Crypto", {
    get: function () {
        h_log("[v] window Crypto value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Crypto value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CountQueuingStrategy", {
    get: function () {
        h_log("[v] window CountQueuingStrategy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CountQueuingStrategy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ConvolverNode", {
    get: function () {
        h_log("[v] window ConvolverNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ConvolverNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ConstantSourceNode", {
    get: function () {
        h_log("[v] window ConstantSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ConstantSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CompressionStream", {
    get: function () {
        h_log("[v] window CompressionStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CompressionStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CompositionEvent", {
    get: function () {
        h_log("[v] window CompositionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CompositionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Comment", {
    get: function () {
        h_log("[v] window Comment value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Comment value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CloseEvent", {
    get: function () {
        h_log("[v] window CloseEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CloseEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ClipboardEvent", {
    get: function () {
        h_log("[v] window ClipboardEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ClipboardEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CharacterData", {
    get: function () {
        h_log("[v] window CharacterData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CharacterData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ChannelSplitterNode", {
    get: function () {
        h_log("[v] window ChannelSplitterNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ChannelSplitterNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ChannelMergerNode", {
    get: function () {
        h_log("[v] window ChannelMergerNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ChannelMergerNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasRenderingContext2D", {
    get: function () {
        h_log("[v] window CanvasRenderingContext2D value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasRenderingContext2D value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasPattern", {
    get: function () {
        h_log("[v] window CanvasPattern value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasPattern value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasGradient", {
    get: function () {
        h_log("[v] window CanvasGradient value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasGradient value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CanvasCaptureMediaStreamTrack", {
    get: function () {
        h_log("[v] window CanvasCaptureMediaStreamTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CanvasCaptureMediaStreamTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSVariableReferenceValue", {
    get: function () {
        h_log("[v] window CSSVariableReferenceValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSVariableReferenceValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSUnparsedValue", {
    get: function () {
        h_log("[v] window CSSUnparsedValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSUnparsedValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSUnitValue", {
    get: function () {
        h_log("[v] window CSSUnitValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSUnitValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTranslate", {
    get: function () {
        h_log("[v] window CSSTranslate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTranslate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTransformValue", {
    get: function () {
        h_log("[v] window CSSTransformValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTransformValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTransformComponent", {
    get: function () {
        h_log("[v] window CSSTransformComponent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTransformComponent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSupportsRule", {
    get: function () {
        h_log("[v] window CSSSupportsRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSupportsRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleValue", {
    get: function () {
        h_log("[v] window CSSStyleValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleSheet", {
    get: function () {
        h_log("[v] window CSSStyleSheet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleSheet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleRule", {
    get: function () {
        h_log("[v] window CSSStyleRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStyleDeclaration", {
    get: function () {
        h_log("[v] window CSSStyleDeclaration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStyleDeclaration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSkewY", {
    get: function () {
        h_log("[v] window CSSSkewY value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSkewY value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSkewX", {
    get: function () {
        h_log("[v] window CSSSkewX value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSkewX value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSSkew", {
    get: function () {
        h_log("[v] window CSSSkew value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSSkew value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSScale", {
    get: function () {
        h_log("[v] window CSSScale value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSScale value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSRuleList", {
    get: function () {
        h_log("[v] window CSSRuleList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSRuleList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSRule", {
    get: function () {
        h_log("[v] window CSSRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSRotate", {
    get: function () {
        h_log("[v] window CSSRotate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSRotate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPropertyRule", {
    get: function () {
        h_log("[v] window CSSPropertyRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPropertyRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPositionValue", {
    get: function () {
        h_log("[v] window CSSPositionValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPositionValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPerspective", {
    get: function () {
        h_log("[v] window CSSPerspective value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPerspective value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSPageRule", {
    get: function () {
        h_log("[v] window CSSPageRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSPageRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSNumericValue", {
    get: function () {
        h_log("[v] window CSSNumericValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSNumericValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSNumericArray", {
    get: function () {
        h_log("[v] window CSSNumericArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSNumericArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSNamespaceRule", {
    get: function () {
        h_log("[v] window CSSNamespaceRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSNamespaceRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMediaRule", {
    get: function () {
        h_log("[v] window CSSMediaRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMediaRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMatrixComponent", {
    get: function () {
        h_log("[v] window CSSMatrixComponent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMatrixComponent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathValue", {
    get: function () {
        h_log("[v] window CSSMathValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathSum", {
    get: function () {
        h_log("[v] window CSSMathSum value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathSum value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathProduct", {
    get: function () {
        h_log("[v] window CSSMathProduct value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathProduct value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathNegate", {
    get: function () {
        h_log("[v] window CSSMathNegate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathNegate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathMin", {
    get: function () {
        h_log("[v] window CSSMathMin value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathMin value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathMax", {
    get: function () {
        h_log("[v] window CSSMathMax value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathMax value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathInvert", {
    get: function () {
        h_log("[v] window CSSMathInvert value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathInvert value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSMathClamp", {
    get: function () {
        h_log("[v] window CSSMathClamp value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSMathClamp value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSLayerStatementRule", {
    get: function () {
        h_log("[v] window CSSLayerStatementRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSLayerStatementRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSLayerBlockRule", {
    get: function () {
        h_log("[v] window CSSLayerBlockRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSLayerBlockRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSKeywordValue", {
    get: function () {
        h_log("[v] window CSSKeywordValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSKeywordValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSKeyframesRule", {
    get: function () {
        h_log("[v] window CSSKeyframesRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSKeyframesRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSKeyframeRule", {
    get: function () {
        h_log("[v] window CSSKeyframeRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSKeyframeRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSImportRule", {
    get: function () {
        h_log("[v] window CSSImportRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSImportRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSImageValue", {
    get: function () {
        h_log("[v] window CSSImageValue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSImageValue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSGroupingRule", {
    get: function () {
        h_log("[v] window CSSGroupingRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSGroupingRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSFontPaletteValuesRule", {
    get: function () {
        h_log("[v] window CSSFontPaletteValuesRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSFontPaletteValuesRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSFontFaceRule", {
    get: function () {
        h_log("[v] window CSSFontFaceRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSFontFaceRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSCounterStyleRule", {
    get: function () {
        h_log("[v] window CSSCounterStyleRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSCounterStyleRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSContainerRule", {
    get: function () {
        h_log("[v] window CSSContainerRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSContainerRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSConditionRule", {
    get: function () {
        h_log("[v] window CSSConditionRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSConditionRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSS", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "CDATASection", {
    get: function () {
        h_log("[v] window CDATASection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CDATASection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ByteLengthQueuingStrategy", {
    get: function () {
        h_log("[v] window ByteLengthQueuingStrategy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ByteLengthQueuingStrategy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BroadcastChannel", {
    get: function () {
        h_log("[v] window BroadcastChannel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BroadcastChannel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BlobEvent", {
    get: function () {
        h_log("[v] window BlobEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BlobEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Blob", {
    get: function () {
        h_log("[v] window Blob value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Blob value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BiquadFilterNode", {
    get: function () {
        h_log("[v] window BiquadFilterNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BiquadFilterNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BeforeUnloadEvent", {
    get: function () {
        h_log("[v] window BeforeUnloadEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BeforeUnloadEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BeforeInstallPromptEvent", {
    get: function () {
        h_log("[v] window BeforeInstallPromptEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BeforeInstallPromptEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BaseAudioContext", {
    get: function () {
        h_log("[v] window BaseAudioContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BaseAudioContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BarProp", {
    get: function () {
        h_log("[v] window BarProp value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BarProp value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioWorkletNode", {
    get: function () {
        h_log("[v] window AudioWorkletNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioWorkletNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioSinkInfo", {
    get: function () {
        h_log("[v] window AudioSinkInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioSinkInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioScheduledSourceNode", {
    get: function () {
        h_log("[v] window AudioScheduledSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioScheduledSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioProcessingEvent", {
    get: function () {
        h_log("[v] window AudioProcessingEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioProcessingEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioParamMap", {
    get: function () {
        h_log("[v] window AudioParamMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioParamMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioParam", {
    get: function () {
        h_log("[v] window AudioParam value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioParam value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioNode", {
    get: function () {
        h_log("[v] window AudioNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioListener", {
    get: function () {
        h_log("[v] window AudioListener value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioListener value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioDestinationNode", {
    get: function () {
        h_log("[v] window AudioDestinationNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioDestinationNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioData", {
    get: function () {
        h_log("[v] window AudioData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioContext", {
    get: function () {
        h_log("[v] window AudioContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioBufferSourceNode", {
    get: function () {
        h_log("[v] window AudioBufferSourceNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioBufferSourceNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioBuffer", {
    get: function () {
        h_log("[v] window AudioBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Attr", {
    get: function () {
        h_log("[v] window Attr value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Attr value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnimationEvent", {
    get: function () {
        h_log("[v] window AnimationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnimationEffect", {
    get: function () {
        h_log("[v] window AnimationEffect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationEffect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Animation", {
    get: function () {
        h_log("[v] window Animation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Animation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnalyserNode", {
    get: function () {
        h_log("[v] window AnalyserNode value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnalyserNode value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AbstractRange", {
    get: function () {
        h_log("[v] window AbstractRange value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbstractRange value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AbortSignal", {
    get: function () {
        h_log("[v] window AbortSignal value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbortSignal value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AbortController", {
    get: function () {
        h_log("[v] window AbortController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbortController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
window.window = window;
Object.defineProperty(window, "self", {
    get: function () {
        h_log("window self get [call]", "arg:", arguments)
        return globalThis
    }, set: function () {
        h_log("window self set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "document", {
    get: function () {
        h_log("window document get [call]", "arg:", arguments)
        return _document
    }, set: undefined, enumerable: true, configurable: false,
});
Object.defineProperty(window, "name", {
    get: function () {
        h_log("window name get [call]", "arg:", arguments)
        return ''
    }, set: function () {
        h_log("window name set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "location", {
    get: function () {
        h_log("window location get [call]", "arg:", arguments)
        h_log("window location get [call]", "_location:", _location)
        return _location
    }, set: function () {
        h_log("window location set [call]", "arg:", arguments)
    }, enumerable: true, configurable: false,
});
Object.defineProperty(window, "customElements", {
    get: function () {
        h_log("window customElements get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "history", {
    get: function () {
        h_log("window history get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "navigation", {
    get: function () {
        h_log("window navigation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window navigation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "locationbar", {
    get: function () {
        h_log("window locationbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window locationbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "menubar", {
    get: function () {
        h_log("window menubar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window menubar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "personalbar", {
    get: function () {
        h_log("window personalbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window personalbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scrollbars", {
    get: function () {
        h_log("window scrollbars get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scrollbars set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "statusbar", {
    get: function () {
        h_log("window statusbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window statusbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "toolbar", {
    get: function () {
        h_log("window toolbar get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window toolbar set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "status", {
    get: function () {
        h_log("window status get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window status set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "closed", {
    get: function () {
        h_log("window closed get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "frames", {
    get: function () {
        h_log("window frames get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window frames set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "length", {
    get: function () {
        h_log("window length get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window length set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "top", {
    get: function () {
        h_log("window top get [call]", "arg:", arguments)
        return globalThis
    }, set: undefined, enumerable: true, configurable: false,
});
Object.defineProperty(window, "opener", {
    get: function () {
        h_log("window opener get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window opener set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "parent", {
    get: function () {
        h_log("window parent get [call]", "arg:", arguments)

    }, set: function () {
        h_log("window parent set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "frameElement", {
    get: function () {
        h_log("window frameElement get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "navigator", {
    get: function () {
        h_log("window navigator get [call]", "arg:", arguments)
        return _navigator
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "origin", {
    get: function () {
        h_log("window origin get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window origin set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
let _external = {};
_external.__proto__ = {};
Object.defineProperty(_external.__proto__, "AddSearchProvider", {
    get: function () {
        h_log("[v] _external.__proto__ AddSearchProvider value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _external.__proto__ AddSearchProvider value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(_external.__proto__, "IsSearchProviderInstalled", {
    get: function () {
        h_log("[v] _external.__proto__ IsSearchProviderInstalled value [get]", "arg:", arguments);
        return function () {
            h_log("[v] _external.__proto__ IsSearchProviderInstalled value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
External = function () {
    h_log("_external.__proto__ constructor value [call]", "arg:", arguments)
};
External.prototype = _external.__proto__;
Object.defineProperty(_external.__proto__, "constructor", {
    value: External,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(_external.__proto__, Symbol.toStringTag, {
    value: "External",
    writable: false,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(window, "external", {
    get: function () {
        h_log("window external get [call]", "arg:", arguments)
        return _external
    }, set: function () {
        h_log("window external set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screen", {
    get: function () {
        h_log("window screen get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screen set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "innerWidth", {
    get: function () {
        h_log("window innerWidth get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window innerWidth set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "innerHeight", {
    get: function () {
        h_log("window innerHeight get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window innerHeight set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scrollX", {
    get: function () {
        h_log("window scrollX get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scrollX set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "pageXOffset", {
    get: function () {
        h_log("window pageXOffset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window pageXOffset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scrollY", {
    get: function () {
        h_log("window scrollY get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scrollY set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "pageYOffset", {
    get: function () {
        h_log("window pageYOffset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window pageYOffset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "visualViewport", {
    get: function () {
        h_log("window visualViewport get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window visualViewport set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screenX", {
    get: function () {
        h_log("window screenX get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenX set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screenY", {
    get: function () {
        h_log("window screenY get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenY set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "outerWidth", {
    get: function () {
        h_log("window outerWidth get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window outerWidth set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "outerHeight", {
    get: function () {
        h_log("window outerHeight get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window outerHeight set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "devicePixelRatio", {
    get: function () {
        h_log("window devicePixelRatio get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window devicePixelRatio set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "event", {
    get: function () {
        h_log("window event get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window event set [call]", "arg:", arguments)
    }, enumerable: false, configurable: true,
});
Object.defineProperty(window, "clientInformation", {
    get: function () {
        h_log("window clientInformation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window clientInformation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "offscreenBuffering", {
    get: function () {
        h_log("window offscreenBuffering get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window offscreenBuffering set [call]", "arg:", arguments)
    }, enumerable: false, configurable: true,
});
Object.defineProperty(window, "screenLeft", {
    get: function () {
        h_log("window screenLeft get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenLeft set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "screenTop", {
    get: function () {
        h_log("window screenTop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window screenTop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "styleMedia", {
    get: function () {
        h_log("window styleMedia get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsearch", {
    get: function () {
        h_log("window onsearch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsearch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "isSecureContext", {
    get: function () {
        h_log("window isSecureContext get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "trustedTypes", {
    get: function () {
        h_log("window trustedTypes get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "performance", {
    get: function () {
        h_log("window performance get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window performance set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onappinstalled", {
    get: function () {
        h_log("window onappinstalled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onappinstalled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeinstallprompt", {
    get: function () {
        h_log("window onbeforeinstallprompt get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeinstallprompt set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "crypto", {
    get: function () {
        h_log("window crypto get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "indexedDB", {
    get: function () {
        h_log("window indexedDB get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});

// khz
sessionStorage = {
  getItem: function (a) {
      h_log("sessionStorage getItem", arguments)
      return this[a] || null
  },
  setItem: function (a, b) {
      h_log("sessionStorage setItem", arguments)
      return this[a] = b
  },
  removeItem: function (a) {
      h_log("sessionStorage removeItem", arguments)
      delete this[a]
  }
}
window.sessionStorage = sessionStorage
// Object.defineProperty(window, "sessionStorage", {
//     get: function () {
//         h_log("window sessionStorage get [call]", "arg:", arguments)
//     }, set: undefined, enumerable: true, configurable: true,
// });

// khz
localStorage = {
  getItem: function (a) {
      h_log("localStorage getItem", arguments);
      return this[a] || null
  },
  setItem: function (a, b) {
      h_log("localStorage setItem", arguments);
      return this[a] = b
  },
  removeItem: function (a) {
      h_log("localStorage removeItem", arguments);
      delete this[a]
  }
}
window.localStorage = localStorage
// Object.defineProperty(window, "localStorage", {
//     get: function () {
//         h_log("window localStorage get [call]", "arg:", arguments)
//     }, set: undefined, enumerable: true, configurable: true,
// });
Object.defineProperty(window, "onbeforexrselect", {
    get: function () {
        h_log("window onbeforexrselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforexrselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onabort", {
    get: function () {
        h_log("window onabort get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onabort set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeinput", {
    get: function () {
        h_log("window onbeforeinput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeinput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforetoggle", {
    get: function () {
        h_log("window onbeforetoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforetoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onblur", {
    get: function () {
        h_log("window onblur get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onblur set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncancel", {
    get: function () {
        h_log("window oncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncanplay", {
    get: function () {
        h_log("window oncanplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncanplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncanplaythrough", {
    get: function () {
        h_log("window oncanplaythrough get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncanplaythrough set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onchange", {
    get: function () {
        h_log("window onchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onclick", {
    get: function () {
        h_log("window onclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onclose", {
    get: function () {
        h_log("window onclose get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onclose set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontextlost", {
    get: function () {
        h_log("window oncontextlost get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontextlost set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontextmenu", {
    get: function () {
        h_log("window oncontextmenu get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontextmenu set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontextrestored", {
    get: function () {
        h_log("window oncontextrestored get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontextrestored set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncuechange", {
    get: function () {
        h_log("window oncuechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncuechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondblclick", {
    get: function () {
        h_log("window ondblclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondblclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondrag", {
    get: function () {
        h_log("window ondrag get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondrag set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragend", {
    get: function () {
        h_log("window ondragend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragenter", {
    get: function () {
        h_log("window ondragenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragleave", {
    get: function () {
        h_log("window ondragleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragover", {
    get: function () {
        h_log("window ondragover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondragstart", {
    get: function () {
        h_log("window ondragstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondragstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondrop", {
    get: function () {
        h_log("window ondrop get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondrop set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondurationchange", {
    get: function () {
        h_log("window ondurationchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondurationchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onemptied", {
    get: function () {
        h_log("window onemptied get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onemptied set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onended", {
    get: function () {
        h_log("window onended get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onended set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onerror", {
    get: function () {
        h_log("window onerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onfocus", {
    get: function () {
        h_log("window onfocus get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onfocus set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onformdata", {
    get: function () {
        h_log("window onformdata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onformdata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oninput", {
    get: function () {
        h_log("window oninput get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oninput set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oninvalid", {
    get: function () {
        h_log("window oninvalid get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oninvalid set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onkeydown", {
    get: function () {
        h_log("window onkeydown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onkeydown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onkeypress", {
    get: function () {
        h_log("window onkeypress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onkeypress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onkeyup", {
    get: function () {
        h_log("window onkeyup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onkeyup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onload", {
    get: function () {
        h_log("window onload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onloadeddata", {
    get: function () {
        h_log("window onloadeddata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onloadeddata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onloadedmetadata", {
    get: function () {
        h_log("window onloadedmetadata get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onloadedmetadata set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onloadstart", {
    get: function () {
        h_log("window onloadstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onloadstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmousedown", {
    get: function () {
        h_log("window onmousedown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmousedown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseenter", {
    get: function () {
        h_log("window onmouseenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseleave", {
    get: function () {
        h_log("window onmouseleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmousemove", {
    get: function () {
        h_log("window onmousemove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmousemove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseout", {
    get: function () {
        h_log("window onmouseout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseover", {
    get: function () {
        h_log("window onmouseover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmouseup", {
    get: function () {
        h_log("window onmouseup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmouseup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmousewheel", {
    get: function () {
        h_log("window onmousewheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmousewheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpause", {
    get: function () {
        h_log("window onpause get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpause set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onplay", {
    get: function () {
        h_log("window onplay get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onplay set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onplaying", {
    get: function () {
        h_log("window onplaying get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onplaying set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onprogress", {
    get: function () {
        h_log("window onprogress get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onprogress set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onratechange", {
    get: function () {
        h_log("window onratechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onratechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onreset", {
    get: function () {
        h_log("window onreset get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onreset set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onresize", {
    get: function () {
        h_log("window onresize get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onresize set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onscroll", {
    get: function () {
        h_log("window onscroll get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onscroll set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsecuritypolicyviolation", {
    get: function () {
        h_log("window onsecuritypolicyviolation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsecuritypolicyviolation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onseeked", {
    get: function () {
        h_log("window onseeked get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onseeked set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onseeking", {
    get: function () {
        h_log("window onseeking get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onseeking set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onselect", {
    get: function () {
        h_log("window onselect get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onselect set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onslotchange", {
    get: function () {
        h_log("window onslotchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onslotchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onstalled", {
    get: function () {
        h_log("window onstalled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onstalled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsubmit", {
    get: function () {
        h_log("window onsubmit get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsubmit set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onsuspend", {
    get: function () {
        h_log("window onsuspend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onsuspend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontimeupdate", {
    get: function () {
        h_log("window ontimeupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontimeupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontoggle", {
    get: function () {
        h_log("window ontoggle get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontoggle set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onvolumechange", {
    get: function () {
        h_log("window onvolumechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onvolumechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwaiting", {
    get: function () {
        h_log("window onwaiting get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwaiting set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkitanimationend", {
    get: function () {
        h_log("window onwebkitanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkitanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkitanimationiteration", {
    get: function () {
        h_log("window onwebkitanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkitanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkitanimationstart", {
    get: function () {
        h_log("window onwebkitanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkitanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwebkittransitionend", {
    get: function () {
        h_log("window onwebkittransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwebkittransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onwheel", {
    get: function () {
        h_log("window onwheel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onwheel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onauxclick", {
    get: function () {
        h_log("window onauxclick get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onauxclick set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ongotpointercapture", {
    get: function () {
        h_log("window ongotpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ongotpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onlostpointercapture", {
    get: function () {
        h_log("window onlostpointercapture get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onlostpointercapture set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerdown", {
    get: function () {
        h_log("window onpointerdown get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerdown set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointermove", {
    get: function () {
        h_log("window onpointermove get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointermove set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerrawupdate", {
    get: function () {
        h_log("window onpointerrawupdate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerrawupdate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerup", {
    get: function () {
        h_log("window onpointerup get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerup set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointercancel", {
    get: function () {
        h_log("window onpointercancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointercancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerover", {
    get: function () {
        h_log("window onpointerover get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerover set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerout", {
    get: function () {
        h_log("window onpointerout get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerout set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerenter", {
    get: function () {
        h_log("window onpointerenter get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerenter set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpointerleave", {
    get: function () {
        h_log("window onpointerleave get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpointerleave set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onselectstart", {
    get: function () {
        h_log("window onselectstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onselectstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onselectionchange", {
    get: function () {
        h_log("window onselectionchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onselectionchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onanimationend", {
    get: function () {
        h_log("window onanimationend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onanimationend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onanimationiteration", {
    get: function () {
        h_log("window onanimationiteration get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onanimationiteration set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onanimationstart", {
    get: function () {
        h_log("window onanimationstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onanimationstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitionrun", {
    get: function () {
        h_log("window ontransitionrun get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitionrun set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitionstart", {
    get: function () {
        h_log("window ontransitionstart get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitionstart set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitionend", {
    get: function () {
        h_log("window ontransitionend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitionend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ontransitioncancel", {
    get: function () {
        h_log("window ontransitioncancel get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ontransitioncancel set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onafterprint", {
    get: function () {
        h_log("window onafterprint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onafterprint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeprint", {
    get: function () {
        h_log("window onbeforeprint get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeprint set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforeunload", {
    get: function () {
        h_log("window onbeforeunload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforeunload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onhashchange", {
    get: function () {
        h_log("window onhashchange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onhashchange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onlanguagechange", {
    get: function () {
        h_log("window onlanguagechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onlanguagechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmessage", {
    get: function () {
        h_log("window onmessage get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmessage set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onmessageerror", {
    get: function () {
        h_log("window onmessageerror get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onmessageerror set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onoffline", {
    get: function () {
        h_log("window onoffline get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onoffline set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ononline", {
    get: function () {
        h_log("window ononline get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ononline set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpagehide", {
    get: function () {
        h_log("window onpagehide get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpagehide set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpageshow", {
    get: function () {
        h_log("window onpageshow get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpageshow set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onpopstate", {
    get: function () {
        h_log("window onpopstate get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onpopstate set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onrejectionhandled", {
    get: function () {
        h_log("window onrejectionhandled get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onrejectionhandled set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onstorage", {
    get: function () {
        h_log("window onstorage get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onstorage set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onunhandledrejection", {
    get: function () {
        h_log("window onunhandledrejection get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onunhandledrejection set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onunload", {
    get: function () {
        h_log("window onunload get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onunload set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "crossOriginIsolated", {
    get: function () {
        h_log("window crossOriginIsolated get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "scheduler", {
    get: function () {
        h_log("window scheduler get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window scheduler set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "alert", {
    get: function () {
        h_log("[v] window alert value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window alert value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "atob", {
    get: function () {
        h_log("[v] window atob value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window atob value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "blur", {
    get: function () {
        h_log("[v] window blur value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window blur value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "btoa", {
    get: function () {
        h_log("[v] window btoa value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window btoa value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "cancelAnimationFrame", {
    get: function () {
        h_log("[v] window cancelAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window cancelAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "cancelIdleCallback", {
    get: function () {
        h_log("[v] window cancelIdleCallback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window cancelIdleCallback value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "captureEvents", {
    get: function () {
        h_log("[v] window captureEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window captureEvents value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "clearInterval", {
    get: function () {
        h_log("[v] window clearInterval value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window clearInterval value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "clearTimeout", {
    get: function () {
        h_log("[v] window clearTimeout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window clearTimeout value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "close", {
    get: function () {
        h_log("[v] window close value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window close value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "confirm", {
    get: function () {
        h_log("[v] window confirm value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window confirm value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "createImageBitmap", {
    get: function () {
        h_log("[v] window createImageBitmap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window createImageBitmap value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "fetch", {
    get: function () {
        h_log("[v] window fetch value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window fetch value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "find", {
    get: function () {
        h_log("[v] window find value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window find value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "focus", {
    get: function () {
        h_log("[v] window focus value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window focus value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "getComputedStyle", {
    get: function () {
        h_log("[v] window getComputedStyle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getComputedStyle value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "getSelection", {
    get: function () {
        h_log("[v] window getSelection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getSelection value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "matchMedia", {
    get: function () {
        h_log("[v] window matchMedia value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window matchMedia value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "moveBy", {
    get: function () {
        h_log("[v] window moveBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window moveBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "moveTo", {
    get: function () {
        h_log("[v] window moveTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window moveTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "open", {
    get: function () {
        h_log("[v] window open value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window open value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "postMessage", {
    get: function () {
        h_log("[v] window postMessage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window postMessage value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "print", {
    get: function () {
        h_log("[v] window print value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window print value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "prompt", {
    get: function () {
        h_log("[v] window prompt value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window prompt value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "queueMicrotask", {
    get: function () {
        h_log("[v] window queueMicrotask value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window queueMicrotask value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "releaseEvents", {
    get: function () {
        h_log("[v] window releaseEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window releaseEvents value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "reportError", {
    get: function () {
        h_log("[v] window reportError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window reportError value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "requestAnimationFrame", {
    get: function () {
        h_log("[v] window requestAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window requestAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "requestIdleCallback", {
    get: function () {
        h_log("[v] window requestIdleCallback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window requestIdleCallback value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "resizeBy", {
    get: function () {
        h_log("[v] window resizeBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window resizeBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "resizeTo", {
    get: function () {
        h_log("[v] window resizeTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window resizeTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "scroll", {
    get: function () {
        h_log("[v] window scroll value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window scroll value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "scrollBy", {
    get: function () {
        h_log("[v] window scrollBy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window scrollBy value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "scrollTo", {
    get: function () {
        h_log("[v] window scrollTo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window scrollTo value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "setInterval", {
    get: function () {
        h_log("[v] window setInterval value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window setInterval value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "setTimeout", {
    get: function () {
        h_log("[v] window setTimeout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window setTimeout value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "stop", {
    get: function () {
        h_log("[v] window stop value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window stop value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "structuredClone", {
    get: function () {
        h_log("[v] window structuredClone value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window structuredClone value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "webkitCancelAnimationFrame", {
    get: function () {
        h_log("[v] window webkitCancelAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitCancelAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "webkitRequestAnimationFrame", {
    get: function () {
        h_log("[v] window webkitRequestAnimationFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitRequestAnimationFrame value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "chrome", {value: {}, writable: true, enumerable: true, configurable: false,});
window.WebAssembly = WebAssembly;
Object.defineProperty(window, "fence", {
    get: function () {
        h_log("window fence get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "caches", {
    get: function () {
        h_log("window caches get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "cookieStore", {
    get: function () {
        h_log("window cookieStore get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondevicemotion", {
    get: function () {
        h_log("window ondevicemotion get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondevicemotion set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondeviceorientation", {
    get: function () {
        h_log("window ondeviceorientation get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondeviceorientation set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "ondeviceorientationabsolute", {
    get: function () {
        h_log("window ondeviceorientationabsolute get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window ondeviceorientationabsolute set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "launchQueue", {
    get: function () {
        h_log("window launchQueue get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "sharedStorage", {
    get: function () {
        h_log("window sharedStorage get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "documentPictureInPicture", {
    get: function () {
        h_log("window documentPictureInPicture get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onbeforematch", {
    get: function () {
        h_log("window onbeforematch get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onbeforematch set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "AbsoluteOrientationSensor", {
    get: function () {
        h_log("[v] window AbsoluteOrientationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AbsoluteOrientationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Accelerometer", {
    get: function () {
        h_log("[v] window Accelerometer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Accelerometer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioDecoder", {
    get: function () {
        h_log("[v] window AudioDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioEncoder", {
    get: function () {
        h_log("[v] window AudioEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AudioWorklet", {
    get: function () {
        h_log("[v] window AudioWorklet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AudioWorklet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BatteryManager", {
    get: function () {
        h_log("[v] window BatteryManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BatteryManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Cache", {
    get: function () {
        h_log("[v] window Cache value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Cache value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CacheStorage", {
    get: function () {
        h_log("[v] window CacheStorage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CacheStorage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Clipboard", {
    get: function () {
        h_log("[v] window Clipboard value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Clipboard value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ClipboardItem", {
    get: function () {
        h_log("[v] window ClipboardItem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ClipboardItem value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CookieChangeEvent", {
    get: function () {
        h_log("[v] window CookieChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CookieChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CookieStore", {
    get: function () {
        h_log("[v] window CookieStore value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CookieStore value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CookieStoreManager", {
    get: function () {
        h_log("[v] window CookieStoreManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CookieStoreManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Credential", {
    get: function () {
        h_log("[v] window Credential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Credential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CredentialsContainer", {
    get: function () {
        h_log("[v] window CredentialsContainer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CredentialsContainer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CryptoKey", {
    get: function () {
        h_log("[v] window CryptoKey value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CryptoKey value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceMotionEvent", {
    get: function () {
        h_log("[v] window DeviceMotionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceMotionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceMotionEventAcceleration", {
    get: function () {
        h_log("[v] window DeviceMotionEventAcceleration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceMotionEventAcceleration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceMotionEventRotationRate", {
    get: function () {
        h_log("[v] window DeviceMotionEventRotationRate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceMotionEventRotationRate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DeviceOrientationEvent", {
    get: function () {
        h_log("[v] window DeviceOrientationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DeviceOrientationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FederatedCredential", {
    get: function () {
        h_log("[v] window FederatedCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FederatedCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPU", {
    get: function () {
        h_log("[v] window GPU value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPU value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUAdapter", {
    get: function () {
        h_log("[v] window GPUAdapter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUAdapter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUAdapterInfo", {
    get: function () {
        h_log("[v] window GPUAdapterInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUAdapterInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBindGroup", {
    get: function () {
        h_log("[v] window GPUBindGroup value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUBindGroup value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBindGroupLayout", {
    get: function () {
        h_log("[v] window GPUBindGroupLayout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUBindGroupLayout value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBuffer", {
    get: function () {
        h_log("[v] window GPUBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUBufferUsage", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUCanvasContext", {
    get: function () {
        h_log("[v] window GPUCanvasContext value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCanvasContext value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUColorWrite", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUCommandBuffer", {
    get: function () {
        h_log("[v] window GPUCommandBuffer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCommandBuffer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUCommandEncoder", {
    get: function () {
        h_log("[v] window GPUCommandEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCommandEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUCompilationInfo", {
    get: function () {
        h_log("[v] window GPUCompilationInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCompilationInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUCompilationMessage", {
    get: function () {
        h_log("[v] window GPUCompilationMessage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUCompilationMessage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUComputePassEncoder", {
    get: function () {
        h_log("[v] window GPUComputePassEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUComputePassEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUComputePipeline", {
    get: function () {
        h_log("[v] window GPUComputePipeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUComputePipeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUDevice", {
    get: function () {
        h_log("[v] window GPUDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUDeviceLostInfo", {
    get: function () {
        h_log("[v] window GPUDeviceLostInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUDeviceLostInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUError", {
    get: function () {
        h_log("[v] window GPUError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUExternalTexture", {
    get: function () {
        h_log("[v] window GPUExternalTexture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUExternalTexture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUInternalError", {
    get: function () {
        h_log("[v] window GPUInternalError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUInternalError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUMapMode", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUOutOfMemoryError", {
    get: function () {
        h_log("[v] window GPUOutOfMemoryError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUOutOfMemoryError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUPipelineError", {
    get: function () {
        h_log("[v] window GPUPipelineError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUPipelineError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUPipelineLayout", {
    get: function () {
        h_log("[v] window GPUPipelineLayout value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUPipelineLayout value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUQuerySet", {
    get: function () {
        h_log("[v] window GPUQuerySet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUQuerySet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUQueue", {
    get: function () {
        h_log("[v] window GPUQueue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUQueue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderBundle", {
    get: function () {
        h_log("[v] window GPURenderBundle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderBundle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderBundleEncoder", {
    get: function () {
        h_log("[v] window GPURenderBundleEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderBundleEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderPassEncoder", {
    get: function () {
        h_log("[v] window GPURenderPassEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderPassEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPURenderPipeline", {
    get: function () {
        h_log("[v] window GPURenderPipeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPURenderPipeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUSampler", {
    get: function () {
        h_log("[v] window GPUSampler value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUSampler value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUShaderModule", {
    get: function () {
        h_log("[v] window GPUShaderModule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUShaderModule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUShaderStage", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUSupportedFeatures", {
    get: function () {
        h_log("[v] window GPUSupportedFeatures value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUSupportedFeatures value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUSupportedLimits", {
    get: function () {
        h_log("[v] window GPUSupportedLimits value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUSupportedLimits value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUTexture", {
    get: function () {
        h_log("[v] window GPUTexture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUTexture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUTextureUsage", {value: {}, writable: true, enumerable: false, configurable: true,});
Object.defineProperty(window, "GPUTextureView", {
    get: function () {
        h_log("[v] window GPUTextureView value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUTextureView value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUUncapturedErrorEvent", {
    get: function () {
        h_log("[v] window GPUUncapturedErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUUncapturedErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GPUValidationError", {
    get: function () {
        h_log("[v] window GPUValidationError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GPUValidationError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "GravitySensor", {
    get: function () {
        h_log("[v] window GravitySensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window GravitySensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Gyroscope", {
    get: function () {
        h_log("[v] window Gyroscope value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Gyroscope value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ImageDecoder", {
    get: function () {
        h_log("[v] window ImageDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ImageDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Keyboard", {
    get: function () {
        h_log("[v] window Keyboard value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Keyboard value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "KeyboardLayoutMap", {
    get: function () {
        h_log("[v] window KeyboardLayoutMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window KeyboardLayoutMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LinearAccelerationSensor", {
    get: function () {
        h_log("[v] window LinearAccelerationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LinearAccelerationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Lock", {
    get: function () {
        h_log("[v] window Lock value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Lock value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LockManager", {
    get: function () {
        h_log("[v] window LockManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LockManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIAccess", {
    get: function () {
        h_log("[v] window MIDIAccess value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIAccess value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIConnectionEvent", {
    get: function () {
        h_log("[v] window MIDIConnectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIConnectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIInput", {
    get: function () {
        h_log("[v] window MIDIInput value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIInput value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIInputMap", {
    get: function () {
        h_log("[v] window MIDIInputMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIInputMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIMessageEvent", {
    get: function () {
        h_log("[v] window MIDIMessageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIMessageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIOutput", {
    get: function () {
        h_log("[v] window MIDIOutput value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIOutput value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIOutputMap", {
    get: function () {
        h_log("[v] window MIDIOutputMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIOutputMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MIDIPort", {
    get: function () {
        h_log("[v] window MIDIPort value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MIDIPort value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaDeviceInfo", {
    get: function () {
        h_log("[v] window MediaDeviceInfo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaDeviceInfo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaDevices", {
    get: function () {
        h_log("[v] window MediaDevices value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaDevices value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeyMessageEvent", {
    get: function () {
        h_log("[v] window MediaKeyMessageEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeyMessageEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeySession", {
    get: function () {
        h_log("[v] window MediaKeySession value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeySession value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeyStatusMap", {
    get: function () {
        h_log("[v] window MediaKeyStatusMap value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeyStatusMap value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeySystemAccess", {
    get: function () {
        h_log("[v] window MediaKeySystemAccess value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeySystemAccess value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaKeys", {
    get: function () {
        h_log("[v] window MediaKeys value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaKeys value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigationPreloadManager", {
    get: function () {
        h_log("[v] window NavigationPreloadManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigationPreloadManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigatorManagedData", {
    get: function () {
        h_log("[v] window NavigatorManagedData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigatorManagedData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OrientationSensor", {
    get: function () {
        h_log("[v] window OrientationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OrientationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PasswordCredential", {
    get: function () {
        h_log("[v] window PasswordCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PasswordCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RelativeOrientationSensor", {
    get: function () {
        h_log("[v] window RelativeOrientationSensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RelativeOrientationSensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScreenDetailed", {
    get: function () {
        h_log("[v] window ScreenDetailed value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScreenDetailed value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScreenDetails", {
    get: function () {
        h_log("[v] window ScreenDetails value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScreenDetails value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Sensor", {
    get: function () {
        h_log("[v] window Sensor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Sensor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SensorErrorEvent", {
    get: function () {
        h_log("[v] window SensorErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SensorErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ServiceWorker", {
    get: function () {
        h_log("[v] window ServiceWorker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ServiceWorker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ServiceWorkerContainer", {
    get: function () {
        h_log("[v] window ServiceWorkerContainer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ServiceWorkerContainer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ServiceWorkerRegistration", {
    get: function () {
        h_log("[v] window ServiceWorkerRegistration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ServiceWorkerRegistration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "StorageManager", {
    get: function () {
        h_log("[v] window StorageManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window StorageManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SubtleCrypto", {
    get: function () {
        h_log("[v] window SubtleCrypto value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SubtleCrypto value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoDecoder", {
    get: function () {
        h_log("[v] window VideoDecoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoDecoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoEncoder", {
    get: function () {
        h_log("[v] window VideoEncoder value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoEncoder value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VirtualKeyboard", {
    get: function () {
        h_log("[v] window VirtualKeyboard value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VirtualKeyboard value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WGSLLanguageFeatures", {
    get: function () {
        h_log("[v] window WGSLLanguageFeatures value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WGSLLanguageFeatures value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransport", {
    get: function () {
        h_log("[v] window WebTransport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransportBidirectionalStream", {
    get: function () {
        h_log("[v] window WebTransportBidirectionalStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransportBidirectionalStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransportDatagramDuplexStream", {
    get: function () {
        h_log("[v] window WebTransportDatagramDuplexStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransportDatagramDuplexStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WebTransportError", {
    get: function () {
        h_log("[v] window WebTransportError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WebTransportError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Worklet", {
    get: function () {
        h_log("[v] window Worklet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Worklet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRDOMOverlayState", {
    get: function () {
        h_log("[v] window XRDOMOverlayState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRDOMOverlayState value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRLayer", {
    get: function () {
        h_log("[v] window XRLayer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRLayer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRWebGLBinding", {
    get: function () {
        h_log("[v] window XRWebGLBinding value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRWebGLBinding value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AuthenticatorAssertionResponse", {
    get: function () {
        h_log("[v] window AuthenticatorAssertionResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AuthenticatorAssertionResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AuthenticatorAttestationResponse", {
    get: function () {
        h_log("[v] window AuthenticatorAttestationResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AuthenticatorAttestationResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AuthenticatorResponse", {
    get: function () {
        h_log("[v] window AuthenticatorResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AuthenticatorResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PublicKeyCredential", {
    get: function () {
        h_log("[v] window PublicKeyCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PublicKeyCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Bluetooth", {
    get: function () {
        h_log("[v] window Bluetooth value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Bluetooth value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothCharacteristicProperties", {
    get: function () {
        h_log("[v] window BluetoothCharacteristicProperties value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothCharacteristicProperties value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothDevice", {
    get: function () {
        h_log("[v] window BluetoothDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTCharacteristic", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTCharacteristic value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTCharacteristic value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTDescriptor", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTDescriptor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTDescriptor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTServer", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTServer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTServer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothRemoteGATTService", {
    get: function () {
        h_log("[v] window BluetoothRemoteGATTService value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothRemoteGATTService value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CaptureController", {
    get: function () {
        h_log("[v] window CaptureController value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CaptureController value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentPictureInPicture", {
    get: function () {
        h_log("[v] window DocumentPictureInPicture value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentPictureInPicture value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "EyeDropper", {
    get: function () {
        h_log("[v] window EyeDropper value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window EyeDropper value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Fence", {
    get: function () {
        h_log("[v] window Fence value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Fence value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FencedFrameConfig", {
    get: function () {
        h_log("[v] window FencedFrameConfig value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FencedFrameConfig value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HTMLFencedFrameElement", {
    get: function () {
        h_log("[v] window HTMLFencedFrameElement value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HTMLFencedFrameElement value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemDirectoryHandle", {
    get: function () {
        h_log("[v] window FileSystemDirectoryHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemDirectoryHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemFileHandle", {
    get: function () {
        h_log("[v] window FileSystemFileHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemFileHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemHandle", {
    get: function () {
        h_log("[v] window FileSystemHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FileSystemWritableFileStream", {
    get: function () {
        h_log("[v] window FileSystemWritableFileStream value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FileSystemWritableFileStream value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FontData", {
    get: function () {
        h_log("[v] window FontData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FontData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "FragmentDirective", {
    get: function () {
        h_log("[v] window FragmentDirective value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window FragmentDirective value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HID", {
    get: function () {
        h_log("[v] window HID value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HID value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HIDConnectionEvent", {
    get: function () {
        h_log("[v] window HIDConnectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HIDConnectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HIDDevice", {
    get: function () {
        h_log("[v] window HIDDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HIDDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HIDInputReportEvent", {
    get: function () {
        h_log("[v] window HIDInputReportEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HIDInputReportEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdentityCredential", {
    get: function () {
        h_log("[v] window IdentityCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdentityCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdentityProvider", {
    get: function () {
        h_log("[v] window IdentityProvider value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdentityProvider value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdentityCredentialError", {
    get: function () {
        h_log("[v] window IdentityCredentialError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdentityCredentialError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "IdleDetector", {
    get: function () {
        h_log("[v] window IdleDetector value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window IdleDetector value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LaunchParams", {
    get: function () {
        h_log("[v] window LaunchParams value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LaunchParams value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "LaunchQueue", {
    get: function () {
        h_log("[v] window LaunchQueue value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window LaunchQueue value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Mojo", {
    get: function () {
        h_log("[v] window Mojo value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Mojo value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MojoHandle", {
    get: function () {
        h_log("[v] window MojoHandle value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MojoHandle value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MojoWatcher", {
    get: function () {
        h_log("[v] window MojoWatcher value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MojoWatcher value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigatorLogin", {
    get: function () {
        h_log("[v] window NavigatorLogin value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigatorLogin value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "OTPCredential", {
    get: function () {
        h_log("[v] window OTPCredential value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window OTPCredential value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentAddress", {
    get: function () {
        h_log("[v] window PaymentAddress value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentAddress value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentRequest", {
    get: function () {
        h_log("[v] window PaymentRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentResponse", {
    get: function () {
        h_log("[v] window PaymentResponse value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentResponse value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentMethodChangeEvent", {
    get: function () {
        h_log("[v] window PaymentMethodChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentMethodChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Presentation", {
    get: function () {
        h_log("[v] window Presentation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Presentation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationAvailability", {
    get: function () {
        h_log("[v] window PresentationAvailability value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationAvailability value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnection", {
    get: function () {
        h_log("[v] window PresentationConnection value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnection value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnectionAvailableEvent", {
    get: function () {
        h_log("[v] window PresentationConnectionAvailableEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnectionAvailableEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnectionCloseEvent", {
    get: function () {
        h_log("[v] window PresentationConnectionCloseEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnectionCloseEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationConnectionList", {
    get: function () {
        h_log("[v] window PresentationConnectionList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationConnectionList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationReceiver", {
    get: function () {
        h_log("[v] window PresentationReceiver value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationReceiver value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PresentationRequest", {
    get: function () {
        h_log("[v] window PresentationRequest value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PresentationRequest value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Serial", {
    get: function () {
        h_log("[v] window Serial value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Serial value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SerialPort", {
    get: function () {
        h_log("[v] window SerialPort value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SerialPort value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SharedStorage", {
    get: function () {
        h_log("[v] window SharedStorage value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SharedStorage value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SharedStorageWorklet", {
    get: function () {
        h_log("[v] window SharedStorageWorklet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SharedStorageWorklet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USB", {
    get: function () {
        h_log("[v] window USB value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USB value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBAlternateInterface", {
    get: function () {
        h_log("[v] window USBAlternateInterface value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBAlternateInterface value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBConfiguration", {
    get: function () {
        h_log("[v] window USBConfiguration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBConfiguration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBConnectionEvent", {
    get: function () {
        h_log("[v] window USBConnectionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBConnectionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBDevice", {
    get: function () {
        h_log("[v] window USBDevice value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBDevice value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBEndpoint", {
    get: function () {
        h_log("[v] window USBEndpoint value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBEndpoint value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBInTransferResult", {
    get: function () {
        h_log("[v] window USBInTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBInTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBInterface", {
    get: function () {
        h_log("[v] window USBInterface value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBInterface value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousInTransferPacket", {
    get: function () {
        h_log("[v] window USBIsochronousInTransferPacket value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousInTransferPacket value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousInTransferResult", {
    get: function () {
        h_log("[v] window USBIsochronousInTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousInTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousOutTransferPacket", {
    get: function () {
        h_log("[v] window USBIsochronousOutTransferPacket value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousOutTransferPacket value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBIsochronousOutTransferResult", {
    get: function () {
        h_log("[v] window USBIsochronousOutTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBIsochronousOutTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "USBOutTransferResult", {
    get: function () {
        h_log("[v] window USBOutTransferResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window USBOutTransferResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WakeLock", {
    get: function () {
        h_log("[v] window WakeLock value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WakeLock value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WakeLockSentinel", {
    get: function () {
        h_log("[v] window WakeLockSentinel value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WakeLockSentinel value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WindowControlsOverlay", {
    get: function () {
        h_log("[v] window WindowControlsOverlay value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WindowControlsOverlay value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "WindowControlsOverlayGeometryChangeEvent", {
    get: function () {
        h_log("[v] window WindowControlsOverlayGeometryChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window WindowControlsOverlayGeometryChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRAnchor", {
    get: function () {
        h_log("[v] window XRAnchor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRAnchor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRAnchorSet", {
    get: function () {
        h_log("[v] window XRAnchorSet value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRAnchorSet value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRBoundedReferenceSpace", {
    get: function () {
        h_log("[v] window XRBoundedReferenceSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRBoundedReferenceSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRCPUDepthInformation", {
    get: function () {
        h_log("[v] window XRCPUDepthInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRCPUDepthInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRCamera", {
    get: function () {
        h_log("[v] window XRCamera value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRCamera value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRDepthInformation", {
    get: function () {
        h_log("[v] window XRDepthInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRDepthInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRFrame", {
    get: function () {
        h_log("[v] window XRFrame value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRFrame value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRHitTestResult", {
    get: function () {
        h_log("[v] window XRHitTestResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRHitTestResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRHitTestSource", {
    get: function () {
        h_log("[v] window XRHitTestSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRHitTestSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSource", {
    get: function () {
        h_log("[v] window XRInputSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSourceArray", {
    get: function () {
        h_log("[v] window XRInputSourceArray value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSourceArray value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSourceEvent", {
    get: function () {
        h_log("[v] window XRInputSourceEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSourceEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRInputSourcesChangeEvent", {
    get: function () {
        h_log("[v] window XRInputSourcesChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRInputSourcesChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRLightEstimate", {
    get: function () {
        h_log("[v] window XRLightEstimate value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRLightEstimate value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRLightProbe", {
    get: function () {
        h_log("[v] window XRLightProbe value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRLightProbe value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRPose", {
    get: function () {
        h_log("[v] window XRPose value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRPose value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRRay", {
    get: function () {
        h_log("[v] window XRRay value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRRay value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRReferenceSpace", {
    get: function () {
        h_log("[v] window XRReferenceSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRReferenceSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRReferenceSpaceEvent", {
    get: function () {
        h_log("[v] window XRReferenceSpaceEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRReferenceSpaceEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRRenderState", {
    get: function () {
        h_log("[v] window XRRenderState value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRRenderState value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRRigidTransform", {
    get: function () {
        h_log("[v] window XRRigidTransform value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRRigidTransform value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSession", {
    get: function () {
        h_log("[v] window XRSession value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSession value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSessionEvent", {
    get: function () {
        h_log("[v] window XRSessionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSessionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSpace", {
    get: function () {
        h_log("[v] window XRSpace value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSpace value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRSystem", {
    get: function () {
        h_log("[v] window XRSystem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRSystem value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRTransientInputHitTestResult", {
    get: function () {
        h_log("[v] window XRTransientInputHitTestResult value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRTransientInputHitTestResult value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRTransientInputHitTestSource", {
    get: function () {
        h_log("[v] window XRTransientInputHitTestSource value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRTransientInputHitTestSource value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRView", {
    get: function () {
        h_log("[v] window XRView value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRView value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRViewerPose", {
    get: function () {
        h_log("[v] window XRViewerPose value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRViewerPose value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRViewport", {
    get: function () {
        h_log("[v] window XRViewport value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRViewport value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRWebGLDepthInformation", {
    get: function () {
        h_log("[v] window XRWebGLDepthInformation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRWebGLDepthInformation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "XRWebGLLayer", {
    get: function () {
        h_log("[v] window XRWebGLLayer value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window XRWebGLLayer value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getScreenDetails", {
    get: function () {
        h_log("[v] window getScreenDetails value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getScreenDetails value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "queryLocalFonts", {
    get: function () {
        h_log("[v] window queryLocalFonts value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window queryLocalFonts value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "showDirectoryPicker", {
    get: function () {
        h_log("[v] window showDirectoryPicker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window showDirectoryPicker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "showOpenFilePicker", {
    get: function () {
        h_log("[v] window showOpenFilePicker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window showOpenFilePicker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "showSaveFilePicker", {
    get: function () {
        h_log("[v] window showSaveFilePicker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window showSaveFilePicker value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "originAgentCluster", {
    get: function () {
        h_log("window originAgentCluster get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "credentialless", {
    get: function () {
        h_log("window credentialless get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "speechSynthesis", {
    get: function () {
        h_log("window speechSynthesis get [call]", "arg:", arguments)
    }, set: undefined, enumerable: true, configurable: true,
});
Object.defineProperty(window, "oncontentvisibilityautostatechange", {
    get: function () {
        h_log("window oncontentvisibilityautostatechange get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window oncontentvisibilityautostatechange set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "onscrollend", {
    get: function () {
        h_log("window onscrollend get [call]", "arg:", arguments)
    }, set: function () {
        h_log("window onscrollend set [call]", "arg:", arguments)
    }, enumerable: true, configurable: true,
});
Object.defineProperty(window, "AnimationPlaybackEvent", {
    get: function () {
        h_log("[v] window AnimationPlaybackEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationPlaybackEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "AnimationTimeline", {
    get: function () {
        h_log("[v] window AnimationTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window AnimationTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSAnimation", {
    get: function () {
        h_log("[v] window CSSAnimation value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSAnimation value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSTransition", {
    get: function () {
        h_log("[v] window CSSTransition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSTransition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentTimeline", {
    get: function () {
        h_log("[v] window DocumentTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BackgroundFetchManager", {
    get: function () {
        h_log("[v] window BackgroundFetchManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BackgroundFetchManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BackgroundFetchRecord", {
    get: function () {
        h_log("[v] window BackgroundFetchRecord value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BackgroundFetchRecord value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BackgroundFetchRegistration", {
    get: function () {
        h_log("[v] window BackgroundFetchRegistration value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BackgroundFetchRegistration value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BluetoothUUID", {
    get: function () {
        h_log("[v] window BluetoothUUID value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BluetoothUUID value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "BrowserCaptureMediaStreamTrack", {
    get: function () {
        h_log("[v] window BrowserCaptureMediaStreamTrack value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window BrowserCaptureMediaStreamTrack value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CropTarget", {
    get: function () {
        h_log("[v] window CropTarget value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CropTarget value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSScopeRule", {
    get: function () {
        h_log("[v] window CSSScopeRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSScopeRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "CSSStartingStyleRule", {
    get: function () {
        h_log("[v] window CSSStartingStyleRule value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window CSSStartingStyleRule value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ContentVisibilityAutoStateChangeEvent", {
    get: function () {
        h_log("[v] window ContentVisibilityAutoStateChangeEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ContentVisibilityAutoStateChangeEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DelegatedInkTrailPresenter", {
    get: function () {
        h_log("[v] window DelegatedInkTrailPresenter value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DelegatedInkTrailPresenter value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Ink", {
    get: function () {
        h_log("[v] window Ink value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Ink value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "DocumentPictureInPictureEvent", {
    get: function () {
        h_log("[v] window DocumentPictureInPictureEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window DocumentPictureInPictureEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Highlight", {
    get: function () {
        h_log("[v] window Highlight value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Highlight value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "HighlightRegistry", {
    get: function () {
        h_log("[v] window HighlightRegistry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window HighlightRegistry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaMetadata", {
    get: function () {
        h_log("[v] window MediaMetadata value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaMetadata value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MediaSession", {
    get: function () {
        h_log("[v] window MediaSession value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MediaSession value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "MutationEvent", {
    get: function () {
        h_log("[v] window MutationEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window MutationEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "NavigatorUAData", {
    get: function () {
        h_log("[v] window NavigatorUAData value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window NavigatorUAData value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Notification", {
    get: function () {
        h_log("[v] window Notification value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Notification value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentManager", {
    get: function () {
        h_log("[v] window PaymentManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PaymentRequestUpdateEvent", {
    get: function () {
        h_log("[v] window PaymentRequestUpdateEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PaymentRequestUpdateEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PeriodicSyncManager", {
    get: function () {
        h_log("[v] window PeriodicSyncManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PeriodicSyncManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PermissionStatus", {
    get: function () {
        h_log("[v] window PermissionStatus value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PermissionStatus value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "Permissions", {
    get: function () {
        h_log("[v] window Permissions value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window Permissions value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PushManager", {
    get: function () {
        h_log("[v] window PushManager value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PushManager value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PushSubscription", {
    get: function () {
        h_log("[v] window PushSubscription value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PushSubscription value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "PushSubscriptionOptions", {
    get: function () {
        h_log("[v] window PushSubscriptionOptions value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window PushSubscriptionOptions value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "RemotePlayback", {
    get: function () {
        h_log("[v] window RemotePlayback value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window RemotePlayback value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ScrollTimeline", {
    get: function () {
        h_log("[v] window ScrollTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ScrollTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "ViewTimeline", {
    get: function () {
        h_log("[v] window ViewTimeline value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window ViewTimeline value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SharedWorker", {
    get: function () {
        h_log("[v] window SharedWorker value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SharedWorker value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SpeechSynthesisErrorEvent", {
    get: function () {
        h_log("[v] window SpeechSynthesisErrorEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SpeechSynthesisErrorEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SpeechSynthesisEvent", {
    get: function () {
        h_log("[v] window SpeechSynthesisEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SpeechSynthesisEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "SpeechSynthesisUtterance", {
    get: function () {
        h_log("[v] window SpeechSynthesisUtterance value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window SpeechSynthesisUtterance value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VideoPlaybackQuality", {
    get: function () {
        h_log("[v] window VideoPlaybackQuality value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VideoPlaybackQuality value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "VisibilityStateEntry", {
    get: function () {
        h_log("[v] window VisibilityStateEntry value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window VisibilityStateEntry value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechGrammar", {
    get: function () {
        h_log("[v] window webkitSpeechGrammar value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechGrammar value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechGrammarList", {
    get: function () {
        h_log("[v] window webkitSpeechGrammarList value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechGrammarList value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechRecognition", {
    get: function () {
        h_log("[v] window webkitSpeechRecognition value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechRecognition value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechRecognitionError", {
    get: function () {
        h_log("[v] window webkitSpeechRecognitionError value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechRecognitionError value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitSpeechRecognitionEvent", {
    get: function () {
        h_log("[v] window webkitSpeechRecognitionEvent value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitSpeechRecognitionEvent value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "webkitRequestFileSystem", {
    get: function () {
        h_log("[v] window webkitRequestFileSystem value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitRequestFileSystem value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "webkitResolveLocalFileSystemURL", {
    get: function () {
        h_log("[v] window webkitResolveLocalFileSystemURL value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window webkitResolveLocalFileSystemURL value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "JSCompiler_renameProperty", {
    get: function () {
        h_log("[v] window JSCompiler_renameProperty value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window JSCompiler_renameProperty value [call]", "arg:", arguments)
        }
    }, enumerable: true, configurable: true
});
Object.defineProperty(window, "dir", {
    get: function () {
        h_log("[v] window dir value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window dir value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "dirxml", {
    get: function () {
        h_log("[v] window dirxml value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window dirxml value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "profile", {
    get: function () {
        h_log("[v] window profile value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window profile value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "profileEnd", {
    get: function () {
        h_log("[v] window profileEnd value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window profileEnd value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "clear", {
    get: function () {
        h_log("[v] window clear value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window clear value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "table", {
    get: function () {
        h_log("[v] window table value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window table value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "keys", {
    get: function () {
        h_log("[v] window keys value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window keys value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "values", {
    get: function () {
        h_log("[v] window values value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window values value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "debug", {
    get: function () {
        h_log("[v] window debug value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window debug value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "undebug", {
    get: function () {
        h_log("[v] window undebug value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window undebug value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "monitor", {
    get: function () {
        h_log("[v] window monitor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window monitor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "unmonitor", {
    get: function () {
        h_log("[v] window unmonitor value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window unmonitor value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "inspect", {
    get: function () {
        h_log("[v] window inspect value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window inspect value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "copy", {
    get: function () {
        h_log("[v] window copy value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window copy value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "queryObjects", {
    get: function () {
        h_log("[v] window queryObjects value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window queryObjects value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getEventListeners", {
    get: function () {
        h_log("[v] window getEventListeners value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getEventListeners value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getAccessibleName", {
    get: function () {
        h_log("[v] window getAccessibleName value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getAccessibleName value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "getAccessibleRole", {
    get: function () {
        h_log("[v] window getAccessibleRole value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window getAccessibleRole value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "monitorEvents", {
    get: function () {
        h_log("[v] window monitorEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window monitorEvents value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
Object.defineProperty(window, "unmonitorEvents", {
    get: function () {
        h_log("[v] window unmonitorEvents value [get]", "arg:", arguments);
        return function () {
            h_log("[v] window unmonitorEvents value [call]", "arg:", arguments)
        }
    }, enumerable: false, configurable: true
});
window.__proto__ = {};
Object.defineProperty(window.__proto__, "TEMPORARY", {
    value: 0,
    writable: false,
    enumerable: true,
    configurable: false,
});
Object.defineProperty(window.__proto__, "PERSISTENT", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false,
});
Window = function () {
    h_log("window.__proto__ constructor value [call]", "arg:", arguments)
};
Window.prototype = window.__proto__;
Object.defineProperty(window.__proto__, "constructor", {
    value: Window,
    writable: true,
    enumerable: false,
    configurable: true,
});
Object.defineProperty(window.__proto__, Symbol.toStringTag, {
    value: "Window",
    writable: false,
    enumerable: false,
    configurable: true,
});
window.__proto__.__proto__ = {};
Object.defineProperty(window.__proto__.__proto__, Symbol.toStringTag, {
    value: "WindowProperties",
    writable: false,
    enumerable: false,
    configurable: true,
});
window.__proto__.__proto__.__proto__ = eventTarget;})();$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=26763;$_ts.cd="qhTqrrAlhfaqJGGIqraDoqQqWSamJGVQqqqvrpaDJGGIqraloqVqWSZqoOQEoqWqEaAQq1LErcqIqrGroq3qWSamqcWcoaqQqSalqkWIqraDoqQqWSaltG9lpralqcWmoaqQrramqkWQquEEoaqQqpaDqkWQrk3Eoaq3qfakqkWQqs3EoaqQrSalrkWQqO3EoaqQqrarqkWkr1gtrclIqrakoqqqWSaDJGV3rAqOqfaqqcWmoaq3rfaoqkWQr1LPvGqCWAVmWsi8Ef1hGBamrubm7yMb.RVU.CQ9otYw4jPURHlKtc9pNqpqqqA0raQovn0pFmyZx1vihlRZW9ETH7f_suanKmxP.uA6woA2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xMrUAVmxH9StZ6rm1oJ8J0iaFuJQMVq2HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BcSXI60dpKMJQu2nYUENFzRK19ens032Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEkxDVD7CUwSCMD2HUCaN40SlM2RuQKFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXEOwGW0yK00eXRv0d1OkFF2JrUomA3HZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7xuWdI0HDADzDWKNmMi9nVDrAA9RaCDWPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20NxumLUwSGW9Rs1urBNONJFKmbFCMWY9lvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxsru4YNFF9rxpUU.FbyhF0fNAdptU0AvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xsdJwYNfp2m7H7eFwbrVMKxfelVTJoA2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xFR9iVJvRveV_ofgRmqnHbkzVCRnp0q2HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.Bkzvs2mLFTkiVYf7RTr7YXTEwoecYVq2Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEk2X1DxPYFzj3KfGJ9euZCY7A9L0JlFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXE9AnFK2GuVwERCRpps4bMu2jIUp7M8ZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7x0pmsbKbVVL6ATJOYer3FbmktUYuZvWPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20Nx0R6F8NBWb29UOeT0mYpVlfiYKUhUUlvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxVpT09mzVVmLRodDJnyp3lJtM7f0JCAvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xVD716fDUkRDYjQCiVNh3KNb5mYbYUA2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xw2lAswZRVyYuPSyVlreAk4IAUfwVo32HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BlYLtTWNRmIh10zLwkR3pXznKmYZV9q2Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnElwBMuACsH26W2aC3sJ80OzxWKQuAlcZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXE9TzYupPT0Z0V0fSRKUzYl2GQTfS18ZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7x0T5WkdzRoQ.AvRksJzXVlxWKlYYy6WPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20Nx0ytMdmpY2r.VlemebezQKyrQ0vxW0lvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxVT3T2rOHDSrJ049s9SCWCewWZRKpUAvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xVjLVVmTslpHsjNO19wrW2x.uTYpVbA2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xwJ6QVepWvRG_CYLMvrjWmMEFCmo1lq2HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BmWTYTpuFDsCFKZSslrwAwW0Q9xjQU32Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEmmNQYZS3zfVMsSjH0laS9lSJ0JusVFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXE2ww3vep_C26WK0Cp21BKbeZ1u3SJJ9Gi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7xTwzssHEY2xrMmfpVWyoMDzYskY75CWPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20NxTJpwF2oM2m9JC3adYA0JswrMUDj8DlvHTSQUhSQhTRl19xc60TxYPNKQbh78nZvtUJTQBzIhmgvtmpD00wmplNiYcOHwCY6IcfDwITjFUJGsbNb5KwmIUYLwUiaRbZvtUJTQBzIhmgvtmpD00wmplNiYcOHwCY6IcfcI5yzQvmlFCziZCJv3czOFcKnwvxa3mNFtdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXE2mGAKxjCOmVJuSw3st7w0NoR9S7VdZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7xTqSJo4rKmNPwueXUd9uMYw7QOE0SbWPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20NxTxiF_exKkTzRkmB5lNfwDg5YVuK89lvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxYxJ0URzHsSAV9hEw0yv1KyK1Xw0Y0AvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xYhDFurqA9ysVQATYTYx1VfSN9JgwVE2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xQRFpDTQsDeWN0eUsuxaVoIhFYluVv32HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BmfEUUR8RKbjwkfJsVyUsJSAQ9SB1K32Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEDxAVCyNwXyrJkTHM6RjCCyW16TkMVFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXEbwzpbVSZKT.1CxppV6zMOffJsyGYz9Gi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7xCRKMC4sFURbMlTT1zwSFCGSVbfkCbWPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20NxCJbYWyCKVxHW6J8uVpTUlpdVbB9WVQvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxKxlClACRb9aMl.ppT9TIVYNFJw9QlAvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xKhlRsrkIDGnRjNsQ9R9Vu3C.kVyplE2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xIGu3CwVwOrJ_D2f192z3OhHp0SCWD32HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BDpPt0z6UvHVRcyKpvxnFXSnMl2eFb32Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEDwDAl7dWHJlA0efKkJm50pPRCysFlFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXEbTlUue9n9LusoJJs0H0A0pzVTfJW8ZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7xCebVV6SRVpfUTrDQFSzJoTYJYeAZVVPHTyQUcUqhYJl1lxcpzmhVnNVQbxTyn0PtUmTQbhkh27vt2pD1zzoAVNWYcfK_CwnIcNDwKsCF6RGsDNb3Hzo8oYjwUWN5b0PtUmTQbhkh27vt2pD1zzoAVNWYcfK_CwnIcNcI6ISQoplFKziFBe2R1zfFcV._vrT3mfFtCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEDN.WkgTpwwT16mr1UWN5OJhUCTcV0FZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXEbflQYxhCY7SVkRGFC5NMTNSQomTFJZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7xCfupmM1wbZu3Cfewty3QUSqYbW6TlVPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20NxCNeFWeXMbRpVlpDS6wIV9wdtYIzMClvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxK2i0TWnYDy7sC.pJC0ZY6YfU5RhMbAvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xKvA8CWSwmyBtQ3SVvxGRUyNjKYLVCA2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.xIrNilyEQCG6CCrh3oTOVuklwV3nYVq2HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BDTAMTNLFKcBiOAnQuJDKiTkhvePFU32Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEorDYKEds50aJYJOKlJd0lLnYYwOMCFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXEvpkw02BuVruYv36YmkXAmJWVYyA3J9Gi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7x6pYRUMb3lxeQvxSwQRK1bJxF0YWj0VPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20Nx6RI1X9nYOSXwYwanlgTYsYJpVunsVlvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxUR8jbTNp9gNWYkrAKzAY0z7Me9S1CAvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xUU0wbYZpugaMdJ.w2eYFYfj.KNhQVA2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.x8N48b2TRYJTnTffF60CYC4VMDeEpC32HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BowJFblaUYo3RYmYIlTbtwZuQK2LMv32Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEoYQIkwtKHpXQDNeRVxpTUm3ACrxQbFZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZWXEvr.KlJ.S6pTA0pnJKUERkwzFoZdYJZGi2y.Qbz.7bSTFK9.FUhnMPS.QDz.tdr6MD9NFUx.Z2Z7x6r039kop9fuWVSfAjz9RCrPV6YS.oWPHTyNQbBnhbyaFK7.F8zXMc2.Qbz.7bSTFK9.FUhnM20Nx6qdM7ysQOw0YbzrSbyDw2T7ADoVpllvHTSNQBxXhDzaFC7.Zow7F12NQbBnhbyaFK7.F8zXMmGNxUrpeb9yRCJHI6t.Q0mIK9JKQzeO8VEvHYSN_Cy7tKznFCXnMoYNF1zNQBxXhDzaFC7.Zow7FYG.xU5v8OJJ36Z6pw7usbx6AoJIjkWuAlE2HYuawCSNtK2nFdEXMvrNFnzN_Cy7tKznFCXnMoYNFYL.x8RFpuYzV2JPe9ASVlrIYCF7YuE.Io32HQY7wK2NtC2nZbg7F6r.FnBawCSNtK2nFdEXMvrNFTL.BozCA2NjAo6tKOpHRkYlKJW_JvScH9q2Nm2XQD2.tCv.MbaNF6x.F4x7wK2NtC2nZbg7F6r.FTjnEoNWs2J1wwzgFlfEw9YH42waWlzk16FZimz.QDz.tdr6MD9NFUx.ZPyXQD2.tCv.MbaNF6x.FZJdhDzaFCzF2qWiWuJas26t1oG5YTrcU5pXAOV5QOwSybpWFTlZIvUT3CSuAsWZQBxHVux1U99Zd6fsw2pcW9vLQUrbHOJ6VXSGsvS7HTlddk2vsTwpJuhtWOY1W0WZJdfKRDxfFCxKC2xKtCRP3bDNWCA.M6AZRtfN8UTv1vJlS0JxtCRP3bDNWCA.M6AZ1XpnpVfHFOmBuUrstCRP3bDNWCA.M6AZMerlp92x1sWn.DzXtCe0HDv0VCLupvr9WzSopuyNIOwPdKTusDrJw9n2p6x.pkY1FdSowOVZHDrK5VzgR9SzWks0w1yb3DxfWtebhbeCHlGCZbRfWvxlJkkRF1yb3DxfWtebhbeCHc295CwbWOpOtK6zqGqmrkQorjaclbTSQ6QejOWuWuQTHOtzJsLeJAQrRHzvROE0raASjs3qkuA6Hu1BJs9TWsQoq_LnisWmm_1UaCgRKsj9meTmA4Kv7hGomCFBJpgAMvrPbRacrAqcqqc8EbfJqVZOCwq9NcezsKIPHc8jnEHsGj3aEKQCU2ITtuLVqqZ6Jk3ajsAuJuE5raFBqGL0WOQSWj90JO0urnSWaYYgV9J.RY6bKDx.VVYqQBmbsCTsIYgdyTRCwVJ8VokupurXF6ecRwpsqqVmrOWovuEqrkEDZkk9hbm9RPzbFXaX3URLtCRSenyPRDg.RKMjhbxLw1z2MBqX3n2bRbV.dUmutKR0Q1BeMK0NRvw6tdNOwc2fFC7.5bTOtKmLQnB_MKJetKxd3.xvM6lN3Kzb7bp7RP2fFDbnRDeStKmLF8LXRCmvtCrX5cyvIn2GMCPnFbSTtKe6w4xjwD3NMbpL7bzXMc2XFKDnFCyCtKy0FhxLQn2BRvV.eoxvtKe63bcnFoJjFnzzRXfOhD27R1z.ZKV7FDSOtC.XJPSLwK3.FjNOhDfTJczj4bV7FDyStC.SRPSLFvl.FBwBhDfTwnzj4K77FoYP3cBS3DLNFbpdtdm2Rn2jFCV.ZKy2tKNu31BX8nSTIDA.wdeShoYPFPz64bZ7wUY0t6IXwPST3Kl.w5yC8c2TFKq.4bzOtUY.MPBXQKANwDyft5eC8c26RPzTZnynRDG.wK.L3cS63Dq.wIzShowS31zTd6q7wbL.wDUnhvJOI1z0QHZXQ6xOt6pS51yuIo3.QCM7hvp9InzuMBGXwDSO31zuZUrn3Dzut6HbwPSSQKl.Q8TbhoJCwczS4UV7Q6TOt6kSRD3NQbff3FaXwCfut6rjdny6RoW.QoIzhvfvFczdwdWX8D2Ct6e.4UL7IUR.t6duMPSdtUTXw4xOQDgNwCzX4U37MoYbra88r2ZfMkEoqZlbUT0mqTGOe6qqqYLO3Ot8qulmruAaryZuqqA0";if($_ts.lcd)$_ts.lcd();;if($_ts.cd){



(function(_$c3,_$br){var _$_L=0;function _$_a(){var _$by=[55];Array.prototype.push.apply(_$by,arguments);return _$_8.apply(this,_$by);}function _$gX(_$dA){return _$_a;function _$_a(){_$dA=0x3d3f*(_$dA&0xFFFF)+0x269ec3;return _$dA;}}function _$_u(_$_a,_$hC){var _$a8,_$dQ,_$_f; !_$hC?_$hC=_$hs:0,_$a8=_$_a.length;while(_$a8>1)_$a8-- ,_$_f=_$hC()%_$a8,_$dQ=_$_a[_$a8],_$_a[_$a8]=_$_a[_$_f],_$_a[_$_f]=_$dQ;function _$hs(){return Math.floor(_$cK()*0xFFFFFFFF);}}var _$hC,_$a8,_$eT,_$$a,_$$M,_$_o,_$af,_$cK,_$aG,_$fB;var _$dF,_$gt,_$gN=_$_L,_$_c=_$br[0];while(1){_$gt=_$_c[_$gN++];if(_$gt<12){if(_$gt<4){if(_$gt===0){ !_$dF?_$gN+=2:0;}else if(_$gt===1){_$eT=[4,16,64,256,1024,4096,16384,65536];}else if(_$gt===2){_$dF= !_$aG;}else{ !_$dF?_$gN+=0:0;}}else if(_$gt<8){if(_$gt===4){_$$M=window,_$_o=String,_$af=Array,_$hC=document,_$cK=Math.random,_$a8=Math.round,_$aG=Date;}else if(_$gt===5){_$fB=_$$M['$_ts'];}else if(_$gt===6){_$fB=_$$M['$_ts']={};}else{_$gN+=2;}}else{if(_$gt===8){_$dF=_$fB;}else if(_$gt===9){return;}else if(_$gt===10){_$fB.lcd=_$_a;}else{_$_8(55);}}}else ;}function _$_8(_$a9,_$$5,_$_k){function _$ku(){return _$jI.charCodeAt(_$fP++ );}function _$hV(_$_a,_$hC){var _$a8,_$dQ;_$a8=_$_a.length,_$a8-=1;for(_$dQ=0;_$dQ<_$a8;_$dQ+=2)_$hC.push(_$am[_$_a[_$dQ]],_$gG[_$_a[_$dQ+1]]);_$hC.push(_$am[_$_a[_$a8]]);}function _$$j(){return'\x74\x6f\x53\x74\x72\x69\x6e\x67';}var _$_a,_$hC,_$a8,_$dQ,_$_f,_$hs,_$_L,_$gN,_$dF,_$by,_$gt,_$_c,_$ew,_$dg,_$bi,_$gG,_$$S,_$jI,_$iL,_$fP,_$$m,_$gW,_$am;var _$d8,_$$s,_$bo=_$a9,_$df=_$br[1];while(1){_$$s=_$df[_$bo++];if(_$$s<97){if(_$$s<64){if(_$$s<16){if(_$$s<4){if(_$$s===0){_$h9(35,_$dF,_$by);}else if(_$$s===1){return;}else if(_$$s===2){_$am.push(_$h9(21,_$ku()*55295+_$ku()));}else{_$_c=_$by.join('');}}else if(_$$s<8){if(_$$s===4){_$a8[1]=_$gG;}else if(_$$s===5){ !_$d8?_$bo+=-36:0;}else if(_$$s===6){_$d8= !_$by;}else{_$gt='\n\n\n\n\n';}}else if(_$$s<12){if(_$$s===8){return new _$aG().getTime();}else if(_$$s===9){_$jI="ȥĄ̧̨Ą༌\x00邏,ā[ā=ā(āā.ā;ā===ā);ā?ā),ā[48]](ā(),ā){var ā[63]](ā],ā !ā<ā+ā(){return ā;}function ā&&ā=0;ā=0,ā= !ā]=ā);}function ā(){ā:ā){ā[ --ā||ā==ā!==ā++ ]=ā+=ā&ā(){var ā>>ā){if(ā[ ++ā[20]];ā.push(ā):ā++ )ā[24],ā));ā[0],ā=(ā=new ā();return ā|| !āreturn ā=[],āfunction ā!=ā?(ā;if(ā[11]](ā){return ā[47]](ā[33][ā)ā();ā)return ā>ā||(ā<=ā[1],ā;return ā&& !ā);return ā>=ā&&(ā[16].ā-ā:0,ā*ā);if(ā;for(ā):0,ā>>>ā++ ){ā][ā[20]],ā];if(ā[33],ā= !(ā)&&ā[1][ā];}function ā){}ā)return;ā[3]](ā[9]](ā[12],ā[14][ā))return ā];ā](ā();switch(ā[60],ā()),ā[33];ā[371](ā|=ā|| !(ā<<ā={},ā+' '),ā,true),ā[48]]((ā[60]),ā++ ;ā[34],ā,0,ā[2],ā instanceof ā);}ā[41]](ā()[ā+1],ā;}ā[34];ā;function ā,true);ā]):ā&&( !ā();}function ā();if(ā[1];ā[60]]==ā++ ]=(ā/ā)){ā)?(ā;}}function ā)?ā[20]]>ā[0]](ā[20]]===ā);}}function ā++ ]<<ā=[];for(ātry{ā^ā[37])&ā[20]]-ā[60]]^ā=[ā[44]][ā):(ā))|| !ā in ā[25]?ā]===ā-=ā=1;ā[372](ā[52],ā[40]]);if(ā[21])&ā[4],ā=true,ā[1]=ā);else if(ā)):ā[48])&ā[3],ā({ā){case 61:ā[26]),ā=1,ā);}catch(ā[11]),ā[15]&&ā(142)-ā(){return +ā));}function ā[26],ā[42]),ā++ ),ā()?(ā=0;for(ā[37]+ā[49]),ā);function ā[32][ā[90]](ā)===ā[1]);ā[6];ā;if( !ā[53]](ā,this.ā[46]),ā)+ā[61]),ā[37];ā);}return ā[55]](ā[0]=ā[36]+ā<0?ā[28]),ā});ā){}}function ā[37])|ā[15]<=ā||( !ā]:ā))ā:1,ā[0]);return ā=( !ā){ typeof ā+=1,ā=[];ā)for(ā[50],ā()?ā[81]),ā,0);ā[36]);āfor(ā[31]),ā.y-ā++ ],ā[12];ā[39]](ā[54]]=ā[50]](ā[34]&&ā[34]),ā[34]?ā[6][ā[20]](ā))||ā={};ā(365,ā.length;ā(142);ā[13],ā[8]&ā[0];ā()){ā; ++ā[54],ā[37]&ā-- ,ā[9],ā=this.ā(0);ā[70]),ā.x-ā=true;while(ā++ ,ā[36][ā)):0,ā=((ā[41]](0,ā){this.ā[21];ā[21]&ā[42];ā[46]](ā[37]),ā[22]){ā]],ā=0:ā]+ā[1]||ā(753,ā[0]);ā[4];ā(142),ā&& !(ā[21])|(ā[16]](ā(110,ā[61],ā[51]),ā[48],ā[4]]=ā[7]);}function ā[43]][ā,1);ā[42]]=ā[38],ā[30],ā[28]);ā()||ā[36]),ā[89]]=ā]);}function ā[9];ā], !ā[32]](ā[37]]=ā.x*ā[29])<<ā[48]](' '+ā[26]+ā+=1:0;ā.y*ā);while(ā[31];ā[34]||āreturn;ā(866,ā[2]](ā[59]){ā[3];ā[7],ā[25],ā[42],ā[32]);while(ā(290,ā){return(ā[60]);}function ā[56]),ā=false,ā[62]+ā())break;ā ++ā=0;if(ā++ )],ā[6],ā[2]=ā;}return ā]|ā[20]]/ā[83]]+ā[43]+ā[27]+ā():0,ā%ā[0])<<ā[15],ā[15];ā[15]<ā[11];ā; typeof ā('as')?(ā(379,ā++ )if(ā[8]?ā[4]+ā+2],ā(748,ā++ ):ā[5]](ā].ā[34],0,ā:0;return ā[20]]-1],ā[48]^ā[23]](ā[29];ā[34]],ā,1),ā[(ā)),ā[39],ā.x)+(ā[19],ā=0;while(ā[4][2];ā[54]],ā[42]?ā[78]]=ātry{if(ā=null,ā;)ā(1,ā[18],ā[57],ā[25];ā[71]]((ā[2];ā[52]),ā[17]][ā);break;default:ā]&ā[20]]+ā+=2:0;ā===0?(ā[35],ā;if( typeof ā[87]](ā,false),ā[7]),ā+=1;ā[18][ā[16])):0,ā[0].ā[22]?ā[0][ā-1],ā[0]),ā[24]?ā[48])|(ā[42]][ā[14]?ā[33]?ā[20]]>1;ā[37],ā[6]||ā[30];ā[73],ā[28])+ā[34]?(ā[4]);ā[57]);ā[54]),ā[55],ā[76]](ā++ ;if(ā==1||ā[31]&&ā[5],ā[37]^ā[24];ā[77]);return ā[43]=ā[34]](ā[28],ā[14]||ā()*ā[24]]=ā[24]];ā[8];ā[80],ā.y),ā);continue;}else if(ā[60]]<<ā;}catch(ā);for(ā[76],ā.slice(ā[24]),ā+' ('+ā=false:0,ā[15]](ā[46]);ā)if(ā=true;ā[88]];ā)==ā[20]]-1;ā(718,ā]=(ā[59])){ā[3]=ā[17]),ā[7]&ā)):0;}function ā[374](ā-=3,ā[20]]>=ā[6])&ā[27]](ā[90]]=ā(708,ā.length,ā[72]]=ā[37]);ā[4]?(ā[24])]))&ā=0:0,ā(82,ā[17]);ā];}ā]^=ā.join('');}function ā)|0,ā[33]),ā[70]]=ā[10]===ā[21]);}function ā++ );while(ā,1,ā]);return ā):0;return ā)%ā)&ā[20]]%ā-=4,ā+=4:0;ā[51]](ā[27]*ā[12]);ā[23][ā[41]](0),ā[77]),ā);break;case ā[20]]==ā[35]))+ā[13];ā[19]);}function ā[15]),ā[28]);}function ā[25]),ā[373](ā]);ā[44]]=ā-=2,ā[40]]),ā]=107,ā()][ā[33]^((ā[29]?ā>0||ā[20],ā(156,ā[48]]^ā[65]+ā[65],ā[31]][ā>0?ā,'var'),ā[5]);}function ā&& typeof ā))&&ā]):(ā+1)%ā[16]),ā));return ā[88]);}function ā[49],ā[40]];ā>0;ā('');ā+=(ā[68]);}function ā(312,ā[54]?ā[33]=ā))&& !ā[8]?(ā[10],ā[37]?ā[77],ā[17];ā[39]&&ā[93]];ā[124];ā);break;case 43:ā[14];ā[94],āreturn[ā[57]){ā[27]:0,ā[50])|(ā){try{ā[55]);}function ā='';ā[9]](0,0,ā[48]](((ā[75]);}function ā.y)/(ā[34]]=ā[37]&&ā[375](ā[63],ā[33]]=ā[22]))return ā[23]];ā[42]||ā++ ];else if((ā[18]);}function ā[((ā+2])):ā;try{ā.x,ā.x+ā[33])return;ā){ !ā[20]])===ā[77])?(ā:(ā};function ā[6]);}function ā[27]);}function ā[16]=ā, ++ā[30]);}function ā(477,ā])):ā[31],ā[4]);}function ā){if( !ā,{ā[61]+ā++ );if(ā[24])<<ā[9]),ā+1]&ā[0]](null,ā[60]:0,ā[64];ā[35]&&ā,'var')):0,ā[3]][ā)||(ā,1):0;return ā[61]);}function ā[56]];ā,'var')):0;}ā){case 38:ā[54]](ā[40]);}function ā]=\"\",ā[1]);return ā+=5:0;ā[57]]&&ā)):0;return ā[10]](ā<arguments.length;ā[21]+ā[66]?ā));}else if(ā[6]);ā[36]);}function ā[13]+ā]!==ā[91]][ā+=4;ā+=3:0;ā[41]:0,ā[18]),ā[82]);}function ā()):0,ā]);else if(ā[34]){ā[22]?(ā[60]])===ā[58],ā[54]);}function ā(569,ā)):(ā[37])),ā[2]);ā[53],ā[28]);return ā)try{ā[95]];ā[31]<=ā[7];ā[94]]+ā);else return ā.x),ā[6]?ā;){ā[4][0]));ā){while(ā[52]);ā[46],ā){}return false;}function ā.split('');for(ā[35]];ā]]:ā[44])===ā[19]][ā[48]](arguments[ā[20]]),ā[20]]){ā]<ā[78]);}function ā)(ā();}ā){}function ā[29]);}function ā[0]===ā,'rel',ā[32]&&ā[4][0]|| !ā[28])):0;if(ā[43],ā+1])):ā[23]+ā,'as',ā[27];ā[60]?ā[41]);}function ā())return ā,'');}function ā[57]]?0:(ā);return;}ā);if( !ā[75]+ā+=-9;ā):0;for(ā[37])return ā[35])return ā= typeof ā[10]);}function ā[56]?(ā[15]&&(ā[37])[0],ā[25]);ā[54])||(ā[13]];ā[6]=ā[18]]<ā[18]]=ā[48]]('...'),ā[95],ā+=7:0;ā[60])|ā[48]]({ā=false:(ā[67]);}function ā[21]),ā[20]];for(ā);return;}if(ā[33]||ā++ )];return ā!=null?(ā[51],ā,0)===ā[92],ā;else return ā=this[ā()===ā:0;ā[0]+ā[61]]=ā){switch(ā[0]^ā[21]);ā>0&&ā();break;}ā());ā():0;}function ā[12]]===1)return ā[85],ā[38]);return ā[13]]=ā[18]);ā,0);function ā[59]][ā=false;ā[13]](ā[45],ā.charCodeAt(ā[57]);}function ā+=3;ā[41]?ā+'\",',ā[41][ā[1]=',\"'+ā[49]+ā())in ā[19]);ā);}}catch(ā[50]);if(ā[39]);return ā[63]);}function ā[92]){ā<<1^(ā[14],ā[93]](ā[50];ā[43]];ā[39]);}function ā[43]],ā[29])return false;return true;}function ā[82]||ā[33])),ā[22])return ā){return;}ā))for(ā[38]=ā[32]),ā():ā[45]),ā().ā[17],ā[35]),ā[17]+ā[20])*ā[17]?ā+1]=ā[22]?arguments[0]=ā];}catch(ā[74]]||ā[86]][ā[65]),ā):0;}ā):0):ā));else if(ā();for(ā[60]]==0?ā[50]),ā[88]),ā))return false;ā[49])<<ā[48]]('; ');ā[4]),ā.z;ā[40])===0)return ā[16]&&(ā[52])?(ā]+=ā)try{if(ā(1,0),ā[17]];ā)return false;return ā[24],0,ā[79]]||ā[12]);}function ā[38]);}}function ā[71]];ā[4];for(ā[36]){ā++ )this.ā[94]);return ā[44])return((ā[13]);ā[57])return ā[32]|| !ā[75]](ā[60]]==1&&ā+=11:0;ā[37]=ā[84]);}function ā!=='';ā[1]?ā[1]>ā[42]){ā):0, !ā[44]=ā[5];ā[5]&ā[20];return ā[40]=ā(), !ā[1]^ā[87]);}function ā[60]]=ā+1,ā(0)?ā[24]);return ā[59])&&(ā[48]));ā[20]+ā[20];ā]=28,ā[36]&&ā[67],ā+=8:0;ā[33]]();ā[64]]=ā[80]),ā<=86?(ā[21]],ā[21]]=ā>>(ā,1);if(ā[28]]&&ā[34]]&ā[56]||ā=[];if(ā[20]&&ā||0,ā[27]];ā[75]]([ā[20]]!=ā())ā[38]]&&ā[24]](ā(){return(ā>0)for(ā;return[ā[15];return new ā[24]]^ā[79]](ā[80]+ā(){return[ā,true);}catch(ā[54]];ā(767,ā+=-472:0;ā[35]);ā(29,ā[57])){ā[14]);ā[125]^ā(146);ā(12,ā);return;}return ā]=76,ā()];ā()));ā[24]],ā[12]]!==1|| !ā[55]];ā[65]||ā[39]){ā[27]=ā+3])):ā[43]);}function ā[62]),ā[12]]&&ā[19]]||ā?1:ā[68]]=ā[0]);else if(ā[79];ā[66]),ā+=6:0;ā[52]);}function ā[1])+ā]=1,ā[32],ā[32]+ā[32]?ā[59]?ā[85]]=ā>0?(ā[39][ā[13]],ā++ ):0):0;ā[36];ā[36]=ā):0;}function ā[56],ā[56])ā);}if(ā[33]?(ā[39]=ā[75]);return ā[10]),ā[33])){if(ā[31]+ā[1];if(ā[31]?ā[10]);ā++ ;else if(ā[20]]);ā|| !( !ā[57])&&ā[45]),'\\r\\n');ā[5]=ā[0]]===ā[91]);}function ā){}return ā-- ):ā))if(ā=arguments.length,ā){return false;}}function ā[59]&&ā[92]);}function ā[11]);ā?0:ā)switch(ā[28]));if(ā))?(ā[60]];if(ā[6]],ā-((ā[23]);}function āreturn(ā, delete ā=false;if(ā[62]);}function ā[72]){ā+=-120:0;ā[15]][ā[62])return((ā[116]&&ā[35];ā[59])(ā[59]),ā[78])return ā[48]]('as '),ā[63]]&&ā[60]]]^ā[14]));ā[36])this.ā[0]instanceof ā[12]](ā[69],ā=[],this.ā[69];ā[20]]-1,ā[40])return ā(){return this.ā[48]]<<ā[67]](false),ā();return;}ā[29]];ā>>>0),ā[21],ā[46]);}function ā,'');ā[22]]:0;if( !ā[50]][ā>=0;ā[21]^ā[12]|| !ā[3][ā[62],ā[46]=ā){function ā[89],ā,'var'):0,ā};ā[20]]):0,ā(142);if( !ā[33])|(ā.split(''),ā=null;ā+=-7;ā[40]])===ā.apply(null,ā[42]=ā)<<ā[64]);}function ā++ ), !ā++ ):0,ā[18];ā++ ;return ā[90]];ā){return[ā[4][0]||ā)!==true?(ā[20]]!==ā===1||ā[65])||(ā[73]]);ā[15]?(ā[10]][ā[80]]=ā];while(ā[80]],ā):'';else if(ā+=1:0,ā[37];}ā[25])return ā+1]<<ā]>=ā];}return ā[71],ā[57])|((ā[20]];while(āreturn false;ā[46]):0,ā[48]);}function ā[34]?arguments[2]:1,ā[84]](ā+=0:0;ā[22])return[];ā[84]];ā.x&&ā[79]]();ā[91]]==ā[93]?ā,'();',ā[34]);return ā[2]]('');ā[7]);}ā[36]||ā[62]?(ā[63]]([ā+(ā[32]);}function ā};}function ā[49])):ā});return;function ā[57])ā=\"\";ā[53];ā[89]](),ā+=-4;ā[8]){ ++ā[17]]?ā]!=ā[34]*ā[34]+ā[34]=ā[95]][ā[94]](ā[34]|ā[74],ā[33]);ā[44]);}function ā[50]])return ā[1]);else if(ā|=1;ā[68]](ā[72]];ā[73]]=ā[70],ā!==null&&ā[1]||'',ā[52]){ā[38]);}function ā[60],(ā[81],ā[2][ā[2]^ā[50];return ā[62];ā+1},ā[44]].ā[12]]===ā]]]=ā+3],ā[30])?ā[16]);}function ā[47]),ā[35]],ā[39]&& !ā]]=ā[30]))ā[59]||ā[24]]()));ā[60])):ā[17]);return ā&& !( !ā[13]]);if((ā]^ā===null||ā+=5;ā;}}catch(ā+((ā[34]&&(ā[20]];)ā[50](ā]>ā(){if(ā]-ā]/ā[33])],ā]*ā[63]||ā(1)?ā)*ā)-ā)/ā){return((ā[78]](ā();else if(ā[78]],ā)[ā[7])):0;else if(ā[78])?(ā[15]);}function ā[46]*(ā]);}}function ā[86]);}function ā[81]](ā[47]=ā[83]]=ā[66]);}function ā[83]],ā!==1&&ā[53]]=ā,0,0).ā[24]?arguments[3]:0,ā(){this.ā[123])&ā(625,ā[60]]&&ā[28]&&ā(176,ā[23]?ā){case 1:if(ā[54]);else if(ā[27],ā());}function ā.y;ā[60];ā[12])&ā<=35?ā)this.ā)):0;if(ā+=13;ā=0;}function ā[36],ā[98];for(ā[7]);return ā[26]);}function ā.y))*ā[86]||ā[71]),ā[76]),ā[75]](0,ā[87]];ā[52]||ā+=6;ā[11],ā[37])0;else{ā===1&&(ā[11]?ā[6]?(ā[52]);return ā[20]);}function ā={},this.ā++ ];}function ā]]):ā];}}function ā[85]],ā[40]])return;ā===1?ā[30]),ā);break;case 42:ā[16][ā[34]);}function ā[40])return((ā[1]+ā[33]]===ā-1),ā[15]);ā[66]&&ā={};for(ā[2])return;if( typeof ā[92]),ā[72]),ā[92]);ā[56]]=ā[23]]((ā[51]);}function ā[7])(ā[63]](this,ā[7]);ā[7]):ā[38]),ā[95]+ā]),ā[(((ā.y))),ā[16]]=ā<=4?(ā)>1?ā-1+ā(174);ā[51];ā[60];return ā(349,ā[20]]);}}function ā[60]);return ā){try{if(ā[93]&&ā<=46?(ā[63]][ā[8])ā);break;case 10:ā[42])return[ā]++ :ā[40],ā=2;ā[29]=ā[41]];ā[22];ā[51]||ā[14]&&ā=null, !this.ā+2]=ā[31]],ā+=2;ā[48]];ā[0]];ā,true):0,ā(722,ā[65]]=ā(9,ā]&&ā[83],ā+=-303:0;ā[4]],ā[28]);}ā;else if(ā[49]);}function ā[43]]===ā++ );ā[47]]=ā[74]],ā[95]);ā[60]];ā()):ā[33]);return ā<=89?(ā[378](ā[24];while(ā[15])):ā[34],( ++ā[31]);}function ā(138,ā[20]]>0;ā]);if(ā[37])[1],ā==='get'||ā[1]]===ā[45]=ā[45]];ā[58]](ā[44]];ā[38]]()===false&&ā[41]=ā[41],ā in this.ā]);}return ā=[[],[],[],[],[]],ā[19]),ā){return[(ā[4][2]&&(ā]++ ,ā[9]](0,ā.substr(ā)|(ā[51]])return ā[27])return ā);}}}catch(ā[2], typeof ā)||ā[40]],ā[41]/(ā[5]);else if(ā[26]]():ā[66])return ā+3])):( --ā[158]||ā[33])?(ā]=Number(ā[75]?(ā+=98:0;ā[36]))&&ā[84]])return ā]='b['+ā[29],'yield':ā+=270:0;ā[83]);}function ā[33]+ā[33]*ā[33]/ā[33]-ā!==null&&( typeof ā)||[];else return ā[14]=ā):0):0;function ā[21]))return true;else if(ā[50]=ā[20]]>1)ā:'\\\\u'+ā[45],'finally':ā[45]);return ā=false:0;break;case 4:case 36:ā-52:0):ā[172],ā[28])),ā[1].concat([arguments]),ā+=92:0;ā='protocol';ā[12]]+ā[34],1);ā.x!=ā[88]);return ā[37]/ā[37]-ā='href';ā[74]),ā[79]);}function ā,0);}function ā[34])return true;}catch(ā[4]&&ā[86]](\"\");ā[83]));}catch(ā[14]))&&( !ā[34]===ā);if(this.ā[51]?(ā):0);else{switch(ā)return;if(ā[29]));ā.x?(ā[45]);}function ā});}catch(ā===252?ā<=92?(ā[6],1):0):0;}}function ā[38]:ā[92]));ā[38]?ā[33])){ā[24],'&&');case 61:ā+=-83:0;ā[34];return ā[31]))&&ā[82]:0):0,ā[45]);ā[86]];ā<=76)(ā()%ā[54]){this.ā(132);ā[45])/ā[8]){ā,'let'),ā=true:0:0;return ā[20]),ā[24],'>=');case 62:ā[62]];for(ā?0:(ā[20]);ā>=40&&ā[48]](' '),ā[33]:0,ā+1);}ā[45]){ā[35])[ā[1]==\"?.\"?ā[12]&& !ā[30]));ā<=14?(ā());}ā[86]);return ā[45])[ā,\" \");if(ā[35]){ā[73]+ā]);}ā==''||ā[19])),ā=false:0;}while(ā[82]]||ā[69]),ā[23]]=ā){case 1:ā>0)return;ā[120]?ā];for(ā<=93?ā++ ])>>>0;}function ā))return;ā[51](ā;break;}}ā):0):0):0;return ā+1));ā(0,'',0,0,0,true));function ā[21]]))),ā[6]&&( !ā(213));ā[91]]);break;case 5:case 6:ā[13]]),ā>1)ā[3]);else{ā[30]);}ā()?this.ā[67]]===ā+1))[ā>1;ā<arguments.length; ++ā>1?ā+=-130:0;ā==='let'&&ā[124]?ā[48]));for(ā[124]=ā[81]);}ā[54])ā[40]]):0,ā()):0;}}function ā[86]])/ā,true);else while( !ā[6];}catch(ā[50]?(ā[4]){ā[34])===0;ā[33]);}function ā,'');}else return'';}function ā[59]];for(ā[0];}function ā]=1;for(ā<=90?(ā(),'>>=');case 62:ā<=12?ā);return;case 43:ā+=267:0;ā++ )];if(ā[14]]||ā[24]?( !ā[47]?(ā[145]||ā(152));if(ā[76]];ā[102]&&ā[48]]]^ā[31]||( !ā<=73?(ā[4])?ā(161,ā[11]);if(ā(857,ā[4])[1]||'';return ā[0]=[],ā[3]);else if(ā[43]]=ā[29]])return ā));}return ā= ++ā[8])||ā+=521:0;ā-- )ā[14],'ig'),ā+=29:0;ā=false;for(ā[94]+ā[20]]>1){return(ā[36])===0){ā[57]),ā+=-29:0;ā; !ā[60])):(ā[94]=ā<=101?(ā[94];ā[27]);}ā+=-51;ā[57])?ā+=-70:0;ā[86]):0;if(ā[31]||ā[20]]>0)ā[2];}}function ā(arguments[0]);}}function ā&= ~(1|ā<=83?ā);break;case 15:ā[20]]>0?ā[54]):ā[54]);ā[21]);if(ā[57]);return ā>>>1)):(ā[69],'gim'),ā+1));}}function ā[39]||ā[14]))||ā=1;}}if(( !ā[8]),ā<<1)+1,ā='#';ā++ )==='1',ā[11]];for(ā()];if(ā!==''){if(ā-=1):0;return[ā,false);break;case 37:if(ā<=50?ā();case'*':ā[110])break;}else if(ā[64];return ā[21]!==0?ā[85]], !ā,0);for(ā[203]],this.ā+=-26:0;ā[53])&&(ā<=16?(ā):0):0;return ā++ :0;}return ā[24],'**');default:return ā[33];return ā):0;}catch(ā[28]=ā[3]===ā[36])>ā[4]=2,ā[24],'!==');default:return ā=this;try{ā[71]][ā[48];try{ā>>>0);}}function ā[71]](ā[40]&&ā>=92?ā[20]]==1)return new ā;else if((ā[5]);ā])):(ā[24],0,0,0,0,0,0,0,0,0,0,0,ā[48]||ā[37])?(ā[22]);}ā[82];for(ā+=-576:0;ā[61]);else{ā()){case'/':ā[24],0,0,0,0,ā=0, !ā[73]])return ā[3]=(ā[65]);}function ā+1],16));return ā[50])).ā<=65?(ā[59],'img',ā())&&ā[1][0]===ā&= ~(ā[37]);for(ā<=61?(ā[39])){ā+=-30;ā,false);break;default:ā[114],'let':ā.substr(0,ā)!==ā[60],'gim');if(ā=[];function ā[20]]-1];ā++ );}function ā[22])return;ā(146);return ā==='`')return true;}}function ā='/';ā);return true;}}else ā[7]))( !ā[38])))return ā>=97&&ā+=235:0;ā[37])ā[78])){ā+=325:0;ā[8]]();}function ā[42]];if(ā[22]]||ā[2]]('');}function ā++ :0;return ā[0]=(ā[3]=[ā[77]]();}function ādo{for(ā[384](ā;while(ā=0:0;break;default:break;}ā[2]);else if(ā):0);else if(ā(),'^=');default:return ā(712,ā[30]);return ā[34]:0,ā[4]);}ā[9][ā+' '):ā[40],1];ā[0];for(ā+=296:0;ā=unescape;ā[26]]===false;}function ā[1]=[ā[153],ā,\"var\");if(ā]='c['+ā[26]]=false;}function ā+=-463:0;ā[20]];switch(ā[29](ā[9]?ā(),'**=')):ā[95]]&&ā<=13?ā|=1:0,ā('get')||ā[164]?(ā)?0:ā[1]:0,ā[123]?(ā.y>0?ā[20]]-1)!==ā+=-235:0;ā[71])!==ā[6]],this.y=ā+=-73:0;ā);}else(ā[20]]-1)&&(ā+='r2mKa'.length,ā[184],ā.fromCharCode(255));return[];}function ā[41])+ā[99]:0,ā++ );while((ā[41]),ā):0:0,ā;return;}return ā];return[ā,false);break;case 40:case 41:if(ā[40]+ā();return;case 26:ā++ ]={}:(ā){return typeof ā[67]](true),ā[10];ā[40]?ā[5]+ā[40];ā(627);ā+=-325:0;ā[118]:ā[41]){ā(949);ā[51]&& !( !ā[118]?ā[11]=1;ā[11]))&&ā[118],ā]=1:0;}function ā[68]]==0&&ā(881,ā[60]]);switch(ā[48]+ā);break;case 38:ā[60]],ā[24]];}ā[83];ā={'tests':ā[34]];ā[37]|0),this.ā==='img'||ā[84]),ā[6])return;ā=0):ā='//';ā);return;case 17:ā===\"`\"))return ā[32])+1,ā[65];return ā],0),ā=[], !ā[34]||( !ā[51]){if(ā[20]]<=1)return ā[24]:ā[19]]===ā+=35:0;ā[24]=ā[29]]=ā+=17:0;ā[88]];try{ā[0]]||ā[24]/ā(0))ā[33]&&ā[24]^ā[28])):0):0;}function ā});return ā[33]];ā[63]=ā[33]],ā(466);ā);continue;}else ā+=-108:0;ā==1&&ā=['top',ā[0]!==0?(ā[34]]/ā);return;default:return ā[168],ā,false);}return ā+1])):(ā+=242:0;ā[20]?ā[24]),((ā[34]);continue;}}ā[23]],ā[32]];ā>0)return ā[9]]!==ā[80])^ā[22]]=ā[22]];ā;if(this.ā[86]?(ā[29]]():ā[4][1]&&( !ā[37])^ā[64]];ā[0]):0;if( !ā+=342:0;ā[96]=āreturn new ā[0])+ā.x==ā)==false)return ā[64]](ā[34],'debugger':ā<=87?ā[67]]();ā[15])return;try{ā[9]:0,ā[64]][ā===1?(ā[31]));ā[55]]=ā=window;ā+=-3;ā[41]], !ā(322);ā+=-121:0;ā[43]='';ā[82]:0:0;return ā[130]?ā[51],arguments);}ā){case 1:case 2:ā?( typeof ā=0;}ā-1;}else ā[148],ā[88],ā);break;case 55:if(ā[63]]=ā[20]);return ā[12]|| !(ā+1)];}function ā[21]]-ā[21]]/ā[11]]||ā=0):0;break;case 3:ā[37])[0];}function ā+=1;switch(ā[82]]();else return ā[31]));else return ā;}}if(ā[57]]()[ā<=99){if(ā=( typeof ā[95];for(ā[46]):0):0;}function ā]>>>ā())){ā);}else{ā[38]);if( !ā[25];return +(ā[5]](\"_$\")>0;}ā[25]||ā)):0):0);else if(ā].y-ā.y);}function ā[8]);break;}ā<=82?(ā]+this.ā[48]&&ā[63])||ā[26]]?ā[89]]();}ā<=80?(ā[12])||( !ā[38]];for(ā[37]];ā+=-32:0;ā[1]===0||ā+=-25:0;ā[105])return 1;else if(ā={ā[92])===ā[69]);}}function ā[48]]('\\n');return;}ā<=77){ā),this.ā,0);if( !ā[24]]&ā[115],ā[51]]=ā[46]&& !ā[54]||ā[15];}for(ā[51]];ā[79]){do ā[72])){ā[79]];ā[380]());ā,1)+ā[33]](0);return ā+=-307:0;ā,1):ā[41]?(ā.x<ā[84]?ā[2]](''),ā),this[ā.x;ā[84]:ā+=-581:0;ā[0])||(ā[20]]),1);}catch(ā[62])==ā++ ){if(ā());else if( !ā);break;case 1:ā[125]=ā[58]);}function ā!=='get'&&ā[105]);}function ā[94]?ā+1))){ā[4][2]&& !ā[31]);ā[4]);if(ā):0;ā<this.ā())!==ā[46]&& !(ā[73]),ā]=1;return;}ā:0;}catch(ā>1){for(ā,'let');ā[68]+ā++ )try{ā[86])==ā);return;case 18:ā){case ā];if((ā){try{if( !ā[60];}function ā[31]){ā(860,ā[25]);}}function ā[31]])/ā+=287:0;ā<=42?(ā[14]),ā(483);ā);break;}ā[4][1]&&ā(),'?.');}if(ā<=51?(ā[40]])return ā++ );do{ā==='set')){ā!=true)?ā+=-100:0;ā[77]);}function ā<=53?(ā==null?ā[23]),ā[73],arguments);}function ā)))ā))(ā[13]),ā]]+1:0;for(ā<=55?(ā+=293;ā);case'number':return ā[29])))continue;return ā[24],'with':ā);}}return ā);return true;}return;}return ā={'false':ā<=57?(ā[24],'>>');}default:return ā[93];ā+=-313;ā[107]);ā+=145:0;ā<=9?(ā[16].jf=ā[36]&&(( !ā[45];ā[51]=ā+=-132:0;ā<=39?ā[43]);return ā)||\"\")+ā,0)===\" \")ā]-=ā|| typeof(ā.x),0<=ā[24])return;ā[80]);}function ā))[ā={'\\b':'\\\\b','\\t':'\\\\t','\\n':'\\\\n','\\f':'\\\\f','\\r':'\\\\r','\"':'\\\\\"','\\\\':'\\\\\\\\'};return ā[38])):0;}function ā<=69?ā=true:0;if(ā(1)){ā):( --ā[78])if(ā[54])?0:0,ā[16]);}}function ā+=40:0;ā||\"\";ā].apply(ā[66]);return ā=true;break;}}ā[58]=ā()==1?ā(144)+ā[20]]==0)return new ā[62]);ā++ ]= ~ā[7]];else return ā[47]);}function ā[4][2]||(ā[12]&& typeof ā[1]=arguments,ā(91,ā();return;case 10:ā=false;}function ā[25],'do':ā[57]);default:return ā);break;}break;default:break;}}function ā(16);}catch(ā[39]),ā+4]));}else ā[12]&&(ā[32]|| !( !ā=0):0;break;case 2:ā[21],'throw':ā:0):0,ā[0]===' ';ā++ ]= !ā[41]](0),this.ā+=13:0;ā[45]]);ā<=108?(ā[13]]&&ā[20]])];}while(ā+=-93:0;ā,0);return ā[1]]({name:ā[89]),ā<=3?ā.id;if(ā[1])||ā.length===8)return new ā].x-ā(),'&=');default:return ā||1,ā[3])?(ā[19])&&(ā+=15:0;ā[79]+ā[12],'const':ā[39])return ā+1?(ā,'id');ā[20]]){case 0:return ā[13]]+'.y',ā(767,this);ā(786);ā[21]?(ā){}return false;}ā]&1;return ā<=67)ā>=127?ā[122],'break':ā[36]):0,ā[373](1,1);ā[59]+ā[48]),ā,true,true));if(ā[59],ā[0],0);return ā<=11?ā[32]=ā[32];ā[59]=ā++ ;break;}ā++ <ā[4]);else if(ā++ :ā=false:0;break;case 42:ā[11]))|| !ā<=26?(ā=this,ā[24]);}function ā);else return[];}function ā<=45?(ā[93],'??');}return ā+=41:0;ā[60]+ā[0]):0;return ā[138];}else if(ā[4]=ā;}}ā){for(;;){ā[16]||( !ā.y<ā+=-217:0;ā-=1):0,ā[190],ā.y+ā[72]&&ā.y,ā,false);}function ā<=104?(ā)===true){ā[56]?ā[56]]=new ā[33],0,0,0,ā(){return((ā(679);ā[60])<<ā.length===3)return new ā[40]]!=null&&(ā[28]);if(ā[91])&&ā(854,ā[27]]];ā[39]+ā||this.ā[25]]=ā[39]?ā);return;case 19:ā<=102?(ā;}else return ā[11])?(ā+=308:0;ā[0]);return +(ā)return;try{ā[20]]<=ā))):0):0;}catch(ā[76]+ā<=0)return;ā(149);ā]];for(ā[91]=ā[1]:null;ā<92?(ā)try{return ā[12]=ā[32]?(ā[91],ā[91]+ā++ ]= --ā[61]=ā[50]|| !ā[20],'catch':ā[48]);return ā+=-344;ā);}else{return;}}catch(ā[18])[0],ā[99]<ā){case 2:ā[57]&&ā[57])&& typeof ā[36]);return ā++ ]=false:ā[72]?ā+=-72;ā==0?ā=true;if(ā++ ;}return ā[72]+ā(144)))return ā[72],ā[41]||ā[35]);}function ā?(this.ā){if( typeof(ā[7])===ā[40]),ā){}}return[false,null];}function ā()]()[ā[9]){ā(346,ā++ ]=[]:ā.length===6)return new ā]=1:0,this.ā[19];ā='$$_'+ā]===\"..\"?ā[36])));return this;}function ā[48]);ā[146]^ā[60]]?(ā[4][2]&& !( !ā[81]));ā+=8;ā+=262;ā[50]&& !(ā[58])||(ā[102]<=ā+=149:0;ā[9])%ā+3]));else if(ā(158);ā[27]);return ā[34]];if((ā[91]&& !ā+1)===ā[16]);return null;}ā[48]](this.ā]):0;}}ā+=-295:0;ā[16]])return ā<=7?(ā:0},ā[64],ā[53]);ā+=-380:0;ā[24];for(ā+=77:0;ā<=15?ā('set'))&&ā<=5?(ā<=33?(ā=window['$_ts'];ā:true};}function ā(339,ā+=-452:0;ā[40];return ā]=1;return;}if(ā[44]),ā+1]-ā[45]),'\\n'),ā[4];return ā[75]))return true;else return false;}function ā[69];case'boolean':case'null':return ā));}for(;;){switch(ā[6]]+ā[45]),'%0A');ā);break;case 53:ā>>=1,ā[6]]=ā[26]];for(ā[95]]){try{ā[27]),ā[20]]-1]==ā+1]=(ā):'';return ā(864);ā+=-74:0;ā[17]&&ā<=28?ā[44])==āreturn{ā]>>ā()):0;switch(ā+=12;ā[37])[1];}function ā());else break;}}function ā='hostname';ā[24]);ā[24]):ā[24]&&( !ā<=27?ā[48]](new ā)===0)return ā))return\"\";for(ā[4])[0];}function ā(451);ā; --ā[29]);ā<=47?ā);return;case 21:ā[36]]);ā[28],{configurable:true,value:ā[43]])return true;ā[56]);if(ā===0||ā[11];}function ā[16]);return ā.x)*(ā+2]));}ā[122])?(ā[27]|| !ā[49]);if(ā[51])break;ā='pathname';ā[8])if(ā[4][1];ā[20]]?(ā[52],'continue':ā<=41?(ā[160]^(ā[90]),ā(75,ā[31])){ā;continue;}}ā){case 52:ā[166]?ā[57],0);if(ā+=688:0;ā[24],'<=');default:return ā);break;default:if(ā]();case 1:return ā=[0,1,ā[26]||ā[59]);ā))try{ā,true);else if(ā[59])?ā,[{\"0\":0,\"1\":13,\"2\":31,\"3\":54}],ā)/(ā[20]]>0)for(ā],0)!==ā===1;ā[36]&& !(ā[9]))return ā[32]]!==ā<=103?ā+=-43:0;ā[4][2]|| !ā[6]&&ā[103]||ā[2]];ā[56]](ā[34]]<<ā+=24:0;ā(),'/=');}return ā();}return ā[57]))return ā[58]]=ā.y==ā){this[ā);try{ā])):0;return ā++ );return ā){return(new ā[4][2])||( !ā[87],ā=true;}}if(ā);case'object':if( !ā[68]]);break;}ā[49]);ā+=297;ā();return;}return ā>>>1));ā('\\\\n',ā[74]);return ā('of')){ā+=9;ā[59])?(ā[24])?(ā.y)return true;return false;}function ā+1));else return\"\";}return\"\";}function ā[12]];ā[8]];for(ā(786):0,ā,true);return ā){for(ā(213);ā[67]&&ā[24]:1]^ā[0]();return ā[20])<<ā[53]<=ā[27]]=ā+2);for(ā[24])):ā[24])),ā+=532:0;ā[82]:0):ā[47]};ā.y);break;case 1:case 2:ā[90],ā)):0);else if(ā()):0;if(ā[31]=ā(0,ā='';do ā[13]]+'.x',ā[88]][ā]==ā[20]]>1?(ā+=9:0;ā[38]]||ā[34]&& !( !ā[70]);break;case 52:ā[8]);return +(ā[24],'==');}case 62:ā++ ;for(ā[10]]);if(ā[17]===ā?(new ā[52]]=ā[66]](ā[24],0,0,0,0,0];ā[86]];}}}function ā[49]&&(ā[95]],ā]!==null&&ā[90]?ā]]:(ā[56]|| !ā[50],'extends':ā[48],'default':ā[65]];ā)):this.ā();break;case 42:ā)):0;}}function ā){try{return ā[29]],ā[38]];}catch(ā]=[ā]+'\\\\b','gim'),ā[20]]>0&&ā=false:0;break;case 44:ā[169]){ā[2]]!=ā;'use strict',ā[29]]?ā+=350:0;ā]||1)ā===0)return[];return ā[29]===ā(661,ā++ ;break;}if(ā<=110?(ā))):(ā+=-659:0;ā[3]+ā[186],ā[29]((ā[377]()),ā);return;}}ā();break;case 56:if(ā+=336:0;ā+=-106:0;ā[377]());ā[8]];ā[25]+ā[14]](ā?this.ā=false;do{ā[78])return true;return ā+=-722:0;ā[0]](this,arguments);}finally{ā[24])return 0;for(ā[66],ā,' ')),ā[36]]&&ā)];}function ā+'')[ā[29],{},ā[62]=ā<=31?ā){case 60:ā:0):0:0,ā[3]^ā:0});function ā[46]?ā[46];ā[46]:ā[17])[ā[21])return ā]]===ā[11])&&(ā+=-64:0;ā<=88?ā[2]);else return ā[40]);for(ā+=17;ā[1]);}ā[132],(ā){}}return{ā[7])):0,ā();break;case 36:case 38:case 3:if(ā++ ]=true:ā[136])):ā[22]))(ā[60]<<(ā[94]];ā):0;try{ typeof ā[89]+ā+=-419:0;ā[37]?0:(ā(668);}}function ā[57]]:\"{}\");ā:this,ā<=23?ā[173])return ā[109],ā[34])return new ā[13],'switch':ā.length===0)return new ā-- ;ā[2]===ā[37])|(ā+=96){ā[1], !ā,1):0;else if(ā]===1){ā[156],ā[15]||ā[24],'!=');}default:return ā[54]);if(ā[6]):ā<=25?(ā,1);return ā(434);ā[34]]=(ā[6]),ā[59]))return ā[20]]===0;ā+=109;ā[45]),'');}ā[20]]];function ā[59],'class':ā+=54:0;ā[19]]+ā+=118:0;ā[189],ā= typeof(ā[92]]?ā[92]]=ā[192])/ā<=21?(ā[92]](ā[16].jf;ā[80]):0):0,ā.cp;ā[51]||(ā++ ])>>>0;else return ā[36]));ā[9]);}}ā(394);ā))return[true,ā.length=0,ā[15]));}function ā=1<<ā[45])while(ā[79];return ā.length=54;ā]>0;}function ā<=29?(ā+=218:0;ā[4][1]|| !ā<=78?(ā[91]];ā[33],0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,ā[91]]=ā:0):(ā()){ !ā[62]]&&ā[4]++ :ā(61,ā[42]];}function ā[34]]:0):0;return ā-1].x,ā[1]++ :ā();}else{for(ā=String;ā[15]=ā[70]](new ā[86]),ā+=86:0;ā[70]);}ā[18]?ā[18]=ā[15])||(ā[19]&&ā-1]===\"..\"?(ā[74]]){ā=0; !ā<=32?(ā[49]]=ā[7])):0;}else ā[68]]==0){ā[11]);if((ā[11]<ā]()*ā[89]);return ā<=109?(ā[69]);}function ā()==ā[91]]^ā;switch( typeof ā<=79){if(ā[20]]];}function ā.length===7)return new ā], typeof ā[0])return true;else try{ā[12]]===1&& typeof ā<=74?(ā[69])>0&&ā,0)!==ā=Array;ā));else{ā;continue;}}while(ā)return\"\";ā]<=ā[77]]();function ā[29]]);ā[2])+ā[37])break;}else if(ā[3],'ig'),'$1'),ā[68]))return true;else if(ā[89]);}function ā[383](ā[56])(ā]=1;ā]());else if(ā[41]](1);ā[74]){do ā&1)?(ā+=-369:0;ā[34],'null':ā[0]=arguments,ā[18]){ā[54]])+ā);break;case 5:ā[123]=ā[2]);default:return ā+=-359:0;ā[1]+(new ā[6])if(ā;return;}ā[60]]==1?(ā[71]]){ā[60]]){case 0:case 3:case 4:case 1:case 2:return true;default:return false;}}function ā[176],ā[34])));ā[37]);return ā[20]]),1):ā[20]]),1);ā=[0,0,0,0],ā= delete ā[25])return[ā+=192:0;ā:0))/ā[4][1])&&( !ā[33])&&ā<=51?ā[34]):ā[34]);ā]);else return ā(625,0,ā[83]],''),ā[34])+ā++ ;}if(ā[8]&&ā){throw ā-30:0):0,ā[78]);return ā[127];ā]='\"':ā[20]](this.ā[20]]:0,ā+=-70;ā[15]===ā[37])+ā[5];return ā[26]);ā[5]),ā[63])|((ā[24]};if(ā[34];while(ā[2]){ā[48]]('??'),ā[95]);return ā[62]);}}function ā+=-751:0;ā+=-190:0;ā[16])):0,(ā[386]();ā+=-651:0;ā);return;case 16:ā[205],ā,'\\n')>=0;return ā.charCodeAt(0)-97;for(ā[34]&& !(ā[2]=',\"'+ā===(ā[20]]);return ā[22])||(ā)):0:0,ā]):0;return ā[84]]=ā+=23;ā[79]]();}function ā[2]):ā-1].y),ā[48]]('try'),ā,1);}catch(ā<=10?(ā[54]?(ā[1]);}function ā[29])?(ā,'let')):ā[2]),ā?1:0);ā=[0,0,0,0,0,0,0,0,0,ā=true:0,ā=Object;ā[37])));ā[93]=ā[54]];}}}if(ā[38]?(ā=parseInt;ā[47]](\"id\",ā+=-324:0;ā[79]]()/ā[21]-(ā[93],ā[193];}}function ā[3].concat([ā[74]]-ā))continue;else if(ā[56]](0);if(ā+=-299:0;ā[24]&&ā[36])));ā[79]);}}function ā[9]&&ā[24],{keyPath:ā(),'|=');case 124:ā[23]?(ā[157],'=>');default:return ā,1);try{ā(144);for(ā<=52?ā-1; ++ā[30]]={};ā[20])&&( typeof ā[22]);ā[58];ā[34])if(ā));}break;}}function ā[41];return ā[77], !ā[33]+1)continue;if(ā[1]),ā[4][2]));ā[185]){ā);return;case 6:ā);break;}}function ā[3]||(ā=true;}if(ā];else{ā[21]-ā[52])];for(ā[4]);return ā);return false;}}function ā(334);ā[49]));ā.y<0?ā===1&&ā[3](ā<=63)ā)):0;break;}ā[37]));ā<=97)(ā;}if( !ā<=106?(ā[57]+ā[4]);return{ā[179],ā===0)return'';ā[196],ā+=166:0;ā[4]))return true;else if(ā)):0):0,ā[57];ā[1]!==ā(645,ā[63],'return':ā]();}catch(ā[53]+ā+=255:0;ā[53]=ā<=7?ā.x||ā[36]);}}function ā[20]]-1);ā[128],ā(117,ā()]){ā[50]];ā+1];if(ā[90]+ā[95]]=ā[43]];}function ā[26];ā>>=ā]);if( typeof ā=true;}ā.PI-ā[25]);}ā[34]:ā[14]);return ā[15]);break;default:if(ā[94]]-ā;if((ā[54],true);ā,false)):0;}function ā[24]));}}function ā[48]))===\"get\";ā[34]^ā[34][ā++ )]+ā-- :0;return ā[62]])return false;if(ā[31]&& !ā[37];}for(ā[74]+ā[33],'ig'),ā[70]](ā[33]):ā.x)+ā,'\\n'));}function ā[37]]^ā[78],ā,false);break;case 54:if(ā==\"\")return true;else if(ā[24])?ā):0):0);else if(ā[33]]||ā(){}function ā<<(ā:0;function ā[26]&&( !ā[9])];}function ā(263,ā[42]],this[ā[2]=null;ā[6]);else if(ā[6]+ā):0;if( !ā)||( typeof ā];return[0,ā.split(ā,true);break;case 6:ā[2]=', \"'+ā(),'%=');}else return ā[20]-1)?0:ā(864),ā[85]||ā+=676:0;ā[24])return new ā[48]](0);while(ā[36]|| !ā[70]+ā.length===2)return new ā<=17?(ā+=-232:0;ā(743,ā[199],ā[42]?(ā[46]:0):ā=':';ā[21]&&ā+=687;ā[82]),ā=true:0;return ā[2]?ā]));}function ā(),'case':ā[72]](ā+1];if((ā[2]+ā[4]];}ā];function ā<=15?(ā[43]),ā[43]?(ā+=-5;ā[52]):ā[62]]===ā[20]]):(ā<127?(ā++ ])&ā[79]?ā[52])(ā)return[true,ā[45]),\"\"),ā[28]):0):ā(),'*=');case 42:ā<=68?(ā[34]|| !ā]?(ā[20]]);if(ā[7])||[];return[];}function ā[0][1]?ā[66]][ā[89]);ā[58]);return ā[42]===ā)){if(ā===1)return ā<=62?(ā[20]];}function ā[84]],ā);case 15:ā[97]){ā='on'+ā);break;case 44:if(ā):0):0):0;}catch(ā<=64?(ā[30]][ā));}ā[62]];else return ā<=60?(ā]]],ā[38]]=ā):0;else if(ā+=221:0;ā++ ];}ā[4])[0]+ā[18]||ā[4])[0],ā=[];for(;ā||[];}function ā[45]),\"\");ā)):0):ā,0)-ā[21]]),ā[49]]){ā(545);ā[73]];ā,true);}if(ā[67]))return true;else if(ā+3]=ā[62]](ā<=66?(ā[75]);}}function ā,true);break;case 25:ā[11];return āreturn'';ā[26],0,0,0,0,0,0,0,ā[35]]+ā))continue;ā[83]];ā[9]);ā]='';}ā[67]](0);ā[83]);ā[70]);}}function ā<<1,ā[20]]>0){ā;while(1){ā[20]]));}}function ā[33],'delete':ā[0]])));}catch(ā,true);}}}catch(ā[7]);}}function ā[70]);return ā==='on'+ā[75]]!=ā)===false&&ā[48]='';ā[32]&& !ā[57]]){ā)&& !ā(18);ā<=75)ā?0:1))+ā]][ā[84]||(ā[110],ā[42]));}}catch(ā[108]||ā[2]++ :ā(582,ā[21]])),ā[60])),ā[39]):0,ā();break;case 43:ā[37]);}function ā[86])):ā)return true;}function ā+=-98:0;ā,false)):0;return ā==null?this.ā[126]?(ā)):0);return;}else if(ā[4][1]>=ā]===0?(ā):0;return[ā=false;break;}while(ā[42])!==ā[7])):0):0;}function ā<=18?ā[93]);ā[47])!==ā[56]);return ā+=-37:0;ā[194],ā);}finally{ā+=406:0;ā[91])?(ā[2]=(ā=0^ā[3]);ā)|0;}}function ā[45]()[ā())!=ā.substr(1)):0;return ā[43]]&&ā[16])):ā(new ā))return true;return false;}function ā]?ā,false);break;case 56:ā]%ā)){try{ā++ ;while(ā])ā)>ā[376](ā];}}ā).ā[20]]:ā(){ typeof(ā+=392:0;ā[163];for(ā){this.x=ā[20]]<ā<=107?ā+=105:0;ā[20]]*ā[385](ā);return;case 33:ā[53]);}ā==1?(ā[78]];ā[87]+ā('',ā[22])return false;if(ā(692,ā[25])return;if(ā[16]);}ā[87]?ā];}if(ā++ ):0;for(ā[20]]>1&&ā[76]],ā[0]=this,ā[4]=(ā[20]]-1);}return ā[76]]=ā[32]))&& !ā[20]]-1)return ā[51])):(ā<=43?ā[44]]=new ā-1]===ā[4],'ig'),'$1'));return ā[36]]===ā[78]](),ā();while(1){ā[87]in ā().concat(ā[63]);ā[91]);return ā[2]),(ā;}return'';}ā++ ]=null:(ā+=269;ā={};if(ā[2];}}}function ā));for(ā[89]],ā[29],'for':ā[51]))break;ā,0)):0;}function ā[20]]?ā+=628:0;ā[33]);for(ā(668);return ā+=38:0;ā[10];if(ā[20]]; ++ā[2]]('\\x00')+ā[150],ā]='\\'':ā[28]:0,ā[47]+ā[7])==ā=[]:0,ā++ ]=((ā+=-225:0;ā-=4)ā[43];ā[28]]*ā+=-80:0;ā[93]);}function ātry{if( !(ā[1]];}function ā[134],ā[62]):0,ā[35]][ā.length;return{ā[53]][ā<=81?(ā[8]&1)&&( typeof ā||0);ā=encodeURIComponent;ā-1]),ā(244);ā)return true;}return false;}function ā(96);ā[152];}else if(ā[28].ā[0]>>>0;}function ā+=259:0;ā<=85?(ā[28]?ā[65];function ā.charAt(0)==='~'?ā+=-30:0;ā],''),ā(649,ā[15])&&ā[200]);}}function ā[23];ā[141]?ā='',ā[23],ā=1:0;function ā+=344:0;ā[15]);break;case 43:ā[19]]==ā[106],ā[60]));}function ā[82]:0):0;return{ā=String.fromCharCode,ā[27]:ā[60]^ā[27]?ā[25]);default:return ā+=-151:0;ā[89]]||ā())&&(ā[18]|| !(ā]()):ā[60]=ā+=37:0;ā[12]),ā[20]]-1]=ā+=-336:0;ā==0||ā[15]),'');}function ā(85);}catch(ā===null;ā<=19?ā[60]}),ā,'*/',ā[24]]();return ā+=100:0;ā[39];return ā[48]](this):0;}function ā[29],'new':ā[6],'--');case 61:ā,1)===ā[4],0);for(ā[48]]('...')):0,ā[9]](1,1):0,ā[39]===ā[70];}}return ā++ );}break;}ā:false;ā,'\\n',ā+=110:0;ā(34);ā=null;}}catch(ā.length-2;ā[64]^ā[35]+ā+=-331:0;ā[12]||ā[44],ā[11]){ā[90]],'\\n');ā+=-78;ā[41]](0);for(ā(146)));ā+=-246:0;ā[61]);return +(ā){case 42:ā):0;}}}}function ā[55]);if(ā-- >0)ā+=-304:0;ā[180]?0:ā[5]],this[ā+=153:0;ā[2]|| typeof ā[24],'<<');}case 61:ā(31,ā[41]](0);}function ā[74]]);}else if(ā[0]++ :ā<=54?(ā<=96)(ā]instanceof ā[53]; ++ā[11]);return ā[34]==0?ā[56])){ā);return;case 11:ā[129],ā))return true;}ā[8]&& !(ā+=261:0;ā[15]+ā++ ]= ++ā[62]]=true;}function ā);}}ā[22]):0,ā<=58?(ā[15]:ā.length===5)return new ā[206]],this.ā[74]];}catch(ā[59])&&( typeof ā()){if(ā[29]&& !ā[0];if(ā[24]])){ā+=-67:0;ā[30]];ā[24]):(ā===\"\";ā[7])&&ā!==\"js\";ā)return true;ā+=647:0;ā():0;return ā='port';ā));return;case 20:ā[38]))){ā.charAt(ā){if((ā,1): ++ā[37],'in':ā[33]&&(ā[23])return true;}function ā[11]+ā[14]&& !(ā[0][0]&& !ā[68]],this[ā[11]);}return ā[11]?(ā(353,ā[35]){if(ā[24]&& !ā]:0,ā[50]||ā=[]:0;if(ā+=643;ā+=365:0;ā[111],'void':ā[1]);case 3:return ā++ ];if((ā+=0;ā-=5,ā[21])+1,ā.push(parseInt(ā+=-354:0;ā[60]]);ā+\".x\",ā[85]](ā[7])return((ā++ );}if(ā<=84?ā+\".y\",ā[60]]),ā<=1?(ā[3]='\")'):0):0;}function ā[52]?ā[30]);ā[16];ā[22]&&ā):0;}return ā[18]&&(ā,(ā[16])ā[16]+ā[16],ā[40]])if(ā+=175:0;ā[85]]==ā[31]?(ā[54])&&ā[41]:ā,true,true)):(ā+=337:0;ā[82]])return ā<=55?ā[30]){ā[8])?(ā[37]:0;return ā= -ā[126]=ā[8]]('on'+ā[85]][ā])&& typeof(ā[183]){ā[174],ā,''];return[ā[1])||(ā[87]],ā,this[ā-1)*ā[58]],this[ā[60]]){case 0:case 3:case 4:ā[87]]=ā[87]]?ā[0].y):0,ā[34])|(ā[381]();ā);return;case 47:ā[170],ā[75]];ā).split(ā,value:ā&1;ā[1]=(ā);break;case 33:ā[56])break;ā[12])&& !(ā[2]]-ā<=105?(ā=',\"'+ā[24]?(ā<=59?ā[45]);return;}ā)>=0;}function ā[50];}ā-1){ā)return false;ā<=2?(ā(),'<<=');default:return ā[37]?(ā(),'');}ā,true));ā]:0;return ā]+'\\\\b','gim');if(ā);break;case 9:ā[9]+ā[151]*(ā.y)*(ā[36]?(ā[43];else if(ā[3]++ :ā():0;break;}if(ā();return;case 39:if(ā[8]&1);ā[37]-(ā[31]===ā[22],'...')):ā[34];else return 0;}ā+=641:0;ā[68]]===ā<=8?(ā[54];}ā[7]?(ā[25]?(ā+=-36:0;ā[86]]===ā[18]](ā));if(ā+=172:0;ā[188],ā+=-312:0;ā[4]===0?(ā.lastIndexOf('/'),ā[20]]&&ā++ ):0;}ā[25]){ā<=91?ā)!=ā){case 5:if(ā[0]]():0,ā);return;case 12:ā('\\\\r',ā[58])[ā[90];else if(ā+=319:0;ā){case'string':return ā[39]?(ā();}}function āreturn\"\";ā[44]],ā[16]][ā[8]&&(ā[54]:0;}function ā)):0;break;case 46:ā[32]){ā+=111;ā+=310;ā+=529:0;ā[81]);}function ā[31]>ā)return false;else if(ā[24],'>>>');}default:return ā[45])])|0,ā<<1^ā(509,ā+=-14:0;ā[37]);}ā<=79?ā<=36?(ā[133],ā){case 43:ā]in ā[1])&&(ā])return true;return false;}switch(ā[60]);ā[25])+ā<=100?(ā[42])>>>0;}function ā[58]),ā+=-66;ā[16]]?ā+=-227:0;ā[60]];}function ā[8])){ā<=6?(ā]]&&ā[12]));ā==null?(ā=null):ā);}else if(ā<=0?(ā[31]&&(ā<=30?(ā(1))if(ā+=1)ā[26])?(ā,1):(ā[202],ā[24]& -ā[34]];}return[0,0];}function ā[60])|((ā-=2)ā<=34?(ā[25])):ā+=109:0;ā[32]||(ā-1,ā[16]]){ā<=38?(ā-1;ā], !(ā[58]](new ā[48]]('=>'),ā[76],arguments.callee);}function ā='\\r\\n';ā[51]?ā[29]&& !(ā<=70?ā[0]);}function ā[51]+ā===0?ā[51])ā[3];return ā===0;ā+=631:0;ā)return[ā[46]){ā[91],'var':ā[21]));return ā[57])?(ā[34]||(ā[3],'instanceof':ā[1]===ā[33])):0,ā(): !ā[52]=ā<=94?(ā[92]](),ā?0:0,ā+=-110:0;ā[18]];ā===0||(ā,false);}ā[79]);ā[42];for(ā[55]+ā){case 15:ā[93]](new ā,this.x=ā[161]?(ā[79])(ā[79]),ā,false));}ā[62]];}function ā[40]]);ā()):0;break;}ā,'let'):0):0,ā[60]];return(ā);}return null;}function ā+=-120;ā[32]]),ā(),'-=');default:return ā<=37?ā.y));}function ā[89]]();}function ā[34]:(ā[33],'else':ā().getTime(),ā+=-55:0;ā[2])return;ā[22]||ā[11]||(ā=1:0):ā[50]);}ā[91]];}function ā+=246:0;ā[17]))&&ā+=626:0;ā[26]<=ā[0]),(ā+=114:0;ā[3])];}function ā[41]](1));ā(){return !ā[70]]){ā^=ā=false;else{ā[89]:0):ā)>0?(ā[2]);}function ā[63]];ā[38]))return;ā[44]?ā[0](),ā[34]],\"; \");for(ā[45]),'%0D');ā[4][0]|| !(ā[135],ā.length-4;ā[24]]),ā<=44?(ā[57],'while':ā<=95)ā[38];}function ā[16]);ā[36]&&(ā[19]));ā)0;else{if(ā[0]);case 2:return ā[29]+ā(){return new ā+=284:0;ā[29],ā[11]){for(ā[25]]||ā[23]]);ā[48])?(ā<=40?(ā]):0;}ā+=32:0;ā]))return true;return false;}function ā[3]);}function ā]-- :ā[1]]&&((ā[0]]))return ā!==''?ā[18]===ā<=48?(ā);break;}}else(ā[71]);}function ā=Function;ā==0){ā[37]]-ā[37])[1];return ā[4]?ā) !ā[14])!==ā[33],'export':ā[26]?ā();function ā=false;break;}ā+=217:0;ā);}while(ā[67]](ā-- ;}this[ā[5]++ ;for(ā);try{ typeof ā[53]||ā[62])===ā++ ]));return ā[6],'++');case 61:ā[28]||ā[75]](1));}function ā[1],1));if(ā===250?ā[12]);if(ā[31]|| !ā[4]=1,ā+96));}ā=\"\";}ā+=-74;ā[66]);ā[187]];ā[15]])];ā=Error;ā[31]](ā[181]){do ā[25])continue;ā[47];return ā===0)return false;if(ā[12])):0,ā[3]&&ā[39]];ā[39]]=ā(347);ā.length===4)return new ā)return 0;ā);return;case 8:ā+=-54:0;ā[82]]());}}function ā(468,ā[48]]=ā[159],ā+'\")'):0;}function ā[32])?(ā[0]]?ā+=636:0;ā[0]],ā);}else{if( !(ā[155],ā[0].x,ā[105])return ā(arguments[ā[40]]|| !ā[45]));ā[379]());ā[65]](ā=='var'?ā[78])&&ā[8]]=ā=false;try{ā[3]];ā);break;case 55:case 2:ā+=2)ā[1]];ā();return;case 22:ā();break;case 2:ā[15]]&&ā,1);}function ā[19]+ā;}}}function ā[32]&&(ā[18]);return;case 7:ā(657,ā]='\\\\':0;return ā(385,1);ā[56]===ā[4][1]>ā]&=ā[20]]-1];return ā<=71)ā[144],ā<=49?(ā[4][2]||ā[49]];ā[120]&&ā[79]+( ++ā[106])),ā[50])],ā,false)):(ā[49]][ā=true:0):0;if(ā>0)if(ā[33];for(ā());else if(ā+=292:0;ā[25]));ā,this.y=ā[59]);return ā,false);break;case 59:ā<=56?(ā[25]:0):0,ā[121])|(ā[88])return ā=Math;ā)):0, !ā[1]);for(ā[6]&& !ā(6,ā<<1)|(ā===''))&&ā[106]));ā[50],'');ā[48]?ā[5]][ā=0;return{ā=\"\"+ā[14],'if':ā[69]];ā[29]);return ā=\"\",ā+=10;ā[13],unique:false});}function ā[1]),(ā[5]]=ā[5]];ā+=-28:0;ā[96]){ā[84];}catch(ā[382]();ā[51]);}}function ā()).ā())/ā[20]]-1){ā[18]?(ā))|(ā)return false;}return true;}function ā[37])===ā+=-213:0;ā]=\"$_\"+ā[6])|(ā[51]){ā[26],'try':ā[34],'true':ā;}else if(ā[16].cp;ā[8]);}function ā);return;}else if(ā[74]]=ā[40]]&&ā[49])):0,ā(66,ā+=-44:0;ā[19]);return +(ā){case 45:ā[19]])&&ā[84]&&ā+=82:0;ā[58]);ā;}else{ā[116]<=ā(668)+ā(),'function':ā]<<ā.reverse();return ā[87]];try{if( typeof ā[16]],ā[0]();ā[103];ā[46]);return ā[0]){ā[42]]&&ā+=10:0;ā!=null)return ā<=24?(ā[20],'typeof':ā,''));ā-=1:0,ā){for(;;){while(ā[38])){ā[38],\"\");return;}return ā[84]);return ā===251?ā[58])+ā[20]);}catch(ā[24],'^');}}function ā[4]=0,ā[4]=[ā[24],'||');default:return ā<=22?(ā})):0,ā[51]&&ā[59]]=ā[34];break;}ā[59]];ā[7]);break;case 10:ā[46]];ā):0, typeof ā;continue;}ā));function ā[20];while(ā+=-155:0;ā=1:0;ā(366,ā()):(ā<=20?(ā[82]]&&(ā+1]);ā,false);if(ā[6]||(ā]|=ā+1),ā[11]);}function ā[58]];ā[10]]);ā())){if(ā[47]:0):ā));}catch(ā.y||ā[41]|| !(ā[82]]){ā[33]))||(ā={};}ā[24],'===');default:return ā=Date;ā);return{ā.charCodeAt?ā={};for(;ā[4][0];ā[41]+ā[16])[ā[20]]-1], typeof ā))||((ā.length===1)return new ā[76]];}catch(ā[57]]?ā){case 0:ā+=-81:0;ā<=72?ā[71]);return ā++ :0;}function ā[89]](ā++ ):0;while(ā[76];return ā(248,ā[49]=ā(677);ā[82];ā;switch(ā[45]][ā[36]);if(ā)|( ~ā[82],ā[33]][ā[101],1);ā[36];for(ā=1):0;break;case 1:ā[90])return ā<=98)debugger;else(ā[34]];}function ā[47]];ā[93]])&&( typeof ā)|ā[60]]];return[ā[40]]);return(ā[12]))&& !ā[0]])))||( typeof ā):0;}}}function ā[79]);return;}ā>0)ā('-->')&&ā[61]?(ā(222,ā,0);if(ā[40]](ā]):0):0;return ā();}if( !ā[87]]||ā())break;}}while(ā[32]||ā[175];return ā[40]]=ā(307);ā[18]));ā[61]){ā]: ++ā[26]);switch(ā[40]]+ā+=-58:0;ā, typeof ā[0]](new ā[20]]+1),\x00霞(\"r2mKa0\\x00\\x00\\x00aǅ\\x00ja(/8;):92'+*1%BV0\\n7\\x007Q\\r>\\r\\x007R\\rE1\\r7\\x003\\x007S\\x00\\x000a\\x007Z\\x00\\x004\\x007\\\\\\x00\\x007]>\\x00\\x00\\x00\\x00\\x00\\n>\\r\\x00\\r\\r>%\\x003\\r\\r>5\\x003\\r\\r>(\\x003\\r\\r>\\\"\\x003\\r\\r>ä\\x003\\r\\r\\r\\x003\\r\\x00\\x003\\r\\r>%\\x003\\r>\\x00\\r>Ý\\x00\\r>9\\x00\\n7\\r;\\rEI\\r>E13\\x00\\x00·\\r\\r>?6\\r>\\\"\\x00\\r\\r>%l8\\r\\r>?6\\r>\\x00\\r>\\\"G\\r\\r>Ó<6\\r>*\\x00\\r\\x003\\rF6\\r\\x00\\r\\r>%lG3:\\r\\x00\\r\\r\\x003\\r\\rK\\rE\\r>383\\r\\r>Ö?6\\r\\r>(\\x003\\r\\r>\\r'\\r>\\\"=83\\x00\\x00\\x00\\x002QJÿ\\r_Ҳ7\\x00\\r\\r6\\x00VҲ\\r>I\\x00\\r>[I\\x007K\\r>I\\x00\\r>rI\\x007J\\r>4I\\x00\\r>\\\"079)78\\r>H\\x00#6u\\r\\r7?\\r7,3\\x00#\\r7\\r>?6\\x00\\x00\\x00	\\x007A\\x00\\x00\\x00\\x00\\r\\x007F\\x007G\\r\\x007H\\x007I:\\x00\\r>/H\\x00#6\\r\\r7?\\r7,3\\x00:;\\x00\\x00\\x00\\x00;\\x00#\\x00#\\x00\\x00#\\r>!<60#\\x00\\x003#ª\\x00#\\r>-\\x00#\\x00\\r7<6@\\x00\\r7'\\x00#\\r>?6\\r>\\x00#a\\x00#\\x00^3\\r>8#M\\x00*\\x00\\x00	\\x00[\\x00\\x00#\\r%&8&<\\x00#\\x00\\r(7\\x00\\x00\\x00¯\\x00\\x000#\\x00#0#\\x00#\\x00\\x00#<6#0#\\x00#\\r>!\\x00M0#\\x00)#*	/\\x00.E*\\x00\\x00/0.\\x00#0.\\x00#8#/\\x00\\r7),3\\x00#\\x00.*\\x00\\x00\\x00\\r>\\\"87QQS\\x007RRQ=\\x007S\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00\\x00*\\x00\\x00$\\n7\\n7	\\n7\\n\\n7\\n7\\n7\\r\\n7\\n7\\n7\\n7\\n7\\n7\\x00\\x00\\rK\\r7'\\x003\\r>%a*\\x00\\x00´;\\x00#\\x00\\x00#\\r>%<6\\r\\x003# 7\\x00Q7\\x003\\x00\\r>?6!R7	\\x003\\x007\\n=\\x003:S7\\n\\x003\\x00\\x00#\\r>%<63\\x00<6I\\x003\\r><?6\\r><\\x003#=*\\x00\\x00	²\\x00\\x00\\x00\\x00\\x00#\\x00#E\\r>%R\\x00#Ej\\x00#\\x00\\r7),3 7\\x00\\r7)3\\x00\\x00\\n707\\x00#\\x00)¨\\x00#;\\x00#\\x00\\x00#\\r><6@\\x00#E\\x00#\\x00#E\\x00#\\r>%Rj\\x00#\\x00\\r7),3\\x0038##J*\\x00\\x00\\x00,\\r;\\rE\\x00#\\r;\\r<<\\x00#\\r;\\r<\\x00#\\x002QJ\\r>:I=\\x00.\\n.\\n.\\n.\\n.\\x00\\x00\\x00o6j\\r7,\\x00#6O\\r73\\x00\\rE\\x00\\r\\\"\\x00#\\r\\r>+\\\"\\x00#(6\\n.:\\r73>\\x00\\x003\\rE>\\x003:\\r;\\rE>\\x003\\x000\\n\\x00.\\x00#&I\\x003\\x00&#\\x00#\\r\\r7\\x00\\x00,3*\\x00\\x00!\\n\\x00\\x00\\x00\\x00#\\x003\\r\\r7\\x00\\x00,3*\\x00\\x00\\n-\\x00..*\\x00\\x00[\\r>\\x00#(e6\\r>L9#ҳ\\x00-.\\x00#\\r:D(\\r:D\\rB]x6\\n\\r>\\n9#:\\r>e9#*\\x00\\x00\\x00#6\\r;\\r<>\\x00\\x003\\r;\\r<\\r7>\\x003\\x00\\x00ƒ\\r6\\x00#\\x00\\r76D.\\x00#\\x00.\\x00#&I\\x00\\x00(\\r7\\r6\\r7\\r7#\\x003:/\\x00&$((\\r7\\r6\\r7\\x00&$\\r7#\\x003\\x00&$6\\x00&$\\x00#$	=6\\r7\\x00\\x00;\\x00++,3*	'6±(\\r7E6D\\r7E\\r;\\r<1[6\\r7E\\r<=\\rE<\\r7U13:\\r7E\\rE<\\r7U\\x003:_6?\\x00\\r7E6\\x00\\r7E\\r<=\\rE<\\r7U13:2\\r;\\r<12\\r7U5-35E\\x00:\\r7E\\r;\\r<12\\r7U5-3\\x003\\r7\\x00\\x00;\\x00++,3\\x00#\\r;\\rB@>\\x00-3\\x00#*\\x00\\x00\\rED>\\x003\\rED>3\\x00\\x00\\rAA	3\\x00.\\x00\\r7U	3*\\x00\\x00ã\\x00\\r7\\x00`6 Y\\x00\\r	\\r7$\\x00#\\x00j6³\\x00Q.\\x00#\\r;\\rC-3\\x00#\\r;\\rDA2\\r7E5E\\r75\\rEP5°-3\\x00#\\rY\\rB22_Ӏ5w%5Ұ5Ӏ2\\rC.5w%5Ұ5ю2\\r9,5w%5Ұ5̬2\\r7<5w%5Ұ5<2\\r975w%5Ұ5̷13 Y\\x00: Y\\x00\\x00\\x00\\rA-*\\x00\\x00\\x00\\r;\\r<<6\\r;\\r<<>\\x00\\x003\\x00X.\\x00#\\x00.\\x00#&I\\x00\\x00(\\r7\\r6\\r7\\r7#\\x003\\x00-.\\x00#\\x00$*\\x00\\x00Y\\x00(6O\\x00\\x00#\\x00\\r7<6=333\\x00\\x00#\\x006ҳ:\\rE:-8\\x00#\\r7536%*#J4*\\x00\\x00J\\x00&F\\x00&1\\x00#\\x00&A\\x00&V\\x00&>Q¬\\x00#\\x00(((.6%*4*\\x00\\x00\\r\\r>D\\\"6%*\\x00\\r>.*\\x00\\x00\\r\\r>D\\\"6%*\\x00.*\\x00\\x00	\\x00\\x00.*\\x00\\x00\\x00\\r\\r>\\\"\\x00#\\rG$\\r\\r\\r>(6c;\\r:>+\\r@+\\rU\\r+\\rAX+\\rD?+\\rA++\\rB5+\\rD+\\rD+\\rMO+\\rC-+\\rU+\\rC +\\rMT+\\x00#\\r;\\r7W>\\x00\\x003\\x00D\\x00\\x00#\\r7<6\\x00x6\\x00-G.*#g+6	\\x00-G*\\x00-G*\\x00\\x00ʠ\\x00\\r7\\r7\\x003\\x00\\rEP\\rEP\\x003\\x00\\rE+F\\x003\\x00\\rDI\\x00&2&,\\x003\\x00\\rE\\r<&(\\r&6h\\r7\\r7\\x00?(\\r\\r>+\\\"6K\\x00\\r7\\r7\\r7\\x00&2Q.\\x003$$\\x00\\rE\\rk\\rET\\x00\\r73\\x003\\x00\\rEF\\x003\\x00\\rE\\rE\\x003\\x00&.ҳ6ƍ\\rE\\r6$\\rEҳ$\\rE\\r7U6ţ\\r7\\rE\\x00#\\r7\\r7\\x00?(\\r\\r>+\\\"6Ĳ\\x00\\r7\\r7\\r7\\x00&2Q.\\x0036\\x00\\rE\\x00\\r7\\x003\\r:\\rC[3\\x00#\\rE\\r6$\\rEҳ((*\\r7\\rCF3\\r>*$\\r7\\r::3\\r>*6 \\r;\\r:X6A-\\x00-\\r<@\\x00\\r7\\r::,3\\x00#\\rE\\rCU3\\r7\\x006\\x00\\rE+\\x003:U\\r;\\r7W6K\\r;\\r7W\\rU-3\\x00#\\r7N4\\x003\\rC!\\x00\\r73\\r?	\\r?\\x006\\x00\\rE+\\x003\\x00\\r7\\r7\\x003\\x00\\rE\\rE\\x003\\x00\\rE+\\rE+\\x003\\x00\\x00Ā\\rE\\x00#;\\rCQ+\\x00#;\\rBH+\\rE+\\x00#\\x00&-6\\x00\\x00#\\r7<6}(\\x006W\\rE(\\x00\\r<&6)\\\"\\\"\\\"\\x00\\rE\\rE\\x003\\x00\\r7\\r7\\x003:\\x00\\x003#\\x00\\x00#\\r7<67(\\x006\\x00\\x003#D\\x00\\x00\\x00©;\\r:,+\\r:+\\rM\\x00+\\r:+\\rD9+\\r9^+\\r:-+\\r<?+\\rA#+\\rMS+\\r@=+\\rCS+\\x00#\\x00\\x00#\\r7<6K\\x00#67\\x00#\\x0036(\\x00\\r'\\r7?3\\x00\\x003\\x00\\r!\\r7?3\\x00\\x003#X\\x00>\\x00*\\x00³_d\\x00R//\\x00	3\\x00#:E//\\x00\\x003\\x00#:3//\\x00\\x00,3\\x00#://\\x00\\x00o3\\x00#:\\x00/\\x00\\r:6+/\\x00\\r7/\\r7\\x003/\\x00\\r7/\\r7\\x003/\\x00\\r:-$	/\\x00\\r<?6/\\x00\\x00\\x00.*\\x00\\x00\\x00k#Me```\\rEP$\\r76\\n\\x00ҳ\\x003:B\\r76\\n\\x00\\x00\\x003:.\\rM?6	\\x00F\\x003:\\r76:\\x00\\x003\\x00\\x00\\x00ê\\n\\x00\\x00\\x00\\x00U\\rG\\r6(\\rG[\\x00#\\x006\\r>u:\\x00.\\x002\\x00&2&I\\x003\\x00\\r7\\r>n6:%\\x00-\\x00).\\x00&-(\\rE\\rE6\\rE>\\x00\\x0036\\r\\r7\\x00,3*:L\\r7\\r>6$\\r73\\x00\\x00&-c3*:\\r73\\x00\\x00&-o3*\\x00/\\x00\\rE6/\\x00\\rE\\r7?/\\x003\\x00\\x00^\\n\\x00\\x00&2\\x009\\x00#6\\r:,\\rE<13\\x00).\\x00\\x00&2\\x00#\\x0036\\r\\r7\\x0013:\\rE\\x003\\x00\\x00\\x002\\x00#4\\x00#;\\x00*ҳ\\x00.\\x00).\\x00%!.\\r73\\x003\\rE\\x003\\rAD\\rC\\\\h3\\x003\\rD_\\r9Eh3\\x003\\x00\\r7X\\x003\\x00\\r78\\rE6\\x00\\r78\\x003*D4\\x00./\\x004C.\\x00#/\\x00\\r7X\\x003/\\x00\\r78\\rE6\\r/\\x00\\r78\\x003*\\x00\\x00/\\x004C.*\\x00\\x00h\\r7/\\x00\\r7\\x0036/\\x00).\\r%\\x00.\\r7865\\r\\r>+\\\"6\\r78\\r7?\\x0013:\\r78\\r7?\\x00\\x0013\\x00\\x00}\\r7/\\x00\\r7\\x003\\r7\\r>!66/\\x00).\\r%\\x00.\\r7X69\\r\\r>+\\\"6\\r7X\\r7?\\x00D3:\\r7X\\r7?\\x00\\x00D3\\x00\\x00\\x00©\\r$\\r7?\\x00\\r7,3\\x00#\\r7\\r><6\\r>\\\"\\r:R&I)7ҳ*Tii7,\\x00#&T\\x00(	&T&T63\\r>!\\rDU&T\\r?\\n&Tҽ&I)7\\r\\r>\\\"\\\"6ҳ*&B*\\r>\\\"\\r:R&I)7ҳ*\\x00\\x00s\\r	\\r7$\\x00#\\x00j6\\r\\x00Q.*:R&L(\\r>=6?\\x00§\\r7\\x00#`6)\\r>\\rM\\r9S&I)7\\r\\r>\\\"\\\"6ҳ*\\x00*\\x00\\x00\\x00ħjjj\\r;\\r7H\\rE6\\r;\\r<:\\x003\\r;\\r<	(\\r;\\r<	\\r7,\\r76.\\r;\\r<:\\r7,\\r7>\\x00\\x003\\r;\\r<:\\r7,\\r7\\\\>\\x003\\r;\\rE\\x003,,\\r;\\rE\\r7,\\r;\\r<:-\\x003\\x003\\r;\\rE\\r7,-\\x00#\\x003\\r;\\rE\\r7,\\r73>\\x003\\r;\\rE\\r7,\\rE>\\x003\\r;\\r<	(\\r;\\r<	\\r7,\\r76.\\r;\\rE\\r7,\\r7>\\x003\\r;\\rE\\r7,\\r7\\\\>\\x003\\x00\\x00\\x00#-\\x00.\\x00#\\x00\\x003\\x00;\\x00*\\x00ҳ\\x00.4\\x00#\\r7X>\\x00\\x003\\rE\\n>\\x003\\r78>\\x003\\rEV>\\x003\\rEB>\\x003\\r7J>\\x003\\r7C>\\x003\\x00).\\x004!.\\x00f\\r7\\x00\\r7\\x003\\x00\\r764\\x00.\\x00\\r7\\r>!(6\\x00).\\r%\\x00.\\r7X6\\r7X\\r7?3\\x00\\x0054\\x00.\\r7\\x00\\r7\\x003\\rE\\n6\\rE\\n\\r7?3\\x00\\x00F\\r7\\x00\\r7\\x0036\\x00).\\r%\\x00.\\r786\\r78\\r7?\\x0013\\x00\\x00\\rEV6\\rEV\\r7?3\\x00\\x00B\\r7\\x00\\r7\\x003\\r7\\x00\\r7\\x003\\rEB6\\rEB\\r7?3\\x00\\x00B\\r7\\x00\\r7\\x003\\r7\\x00\\r7\\x003\\r7J6\\r7J\\r7?3\\x00\\x00 \\r7C6\\r7C\\r7?\\x0013\\x00\\x00\\x00\\r;\\r7H\\rE6\\x00\\r;\\r7H-\\x003\\x00(\\x00\\r;\\r7H\\x00(\\x00\\x00#\\x00&(\\rEB>\\x00\\x003\\x00&(\\r7J>\\x003\\x00&(\\r78>\\x003\\x00&(\\rE\\n>\\x003\\x00&(\\r7C>\\x003\\x00&(\\rE>\\x003\\x00&(\\rEV>\\x003\\x00\\rEB6\\rEB\\r7?3\\x00\\x00\\r7J6\\r7J\\r7?3\\x00\\x00\\r786\\r78\\r7?3\\x00\\x00\\rE\\n6\\rE\\n\\r7?3\\x00\\x00\\r7C6\\r7C\\r7?3\\x00\\x00\\rE6\\rE\\r7?3\\x00\\x00\\rEV6\\rEV\\r7?3\\x00\\x00\\x00\\x00&36 \\r;\\r7H\\r7,\\r7\\r7\\x00\\x0013\\x00#\\x00\\x00#\\r;\\r7H\\r7,\\r7\\r7?\\x00&3\\x00N32\\x00#\\r7I\\x00\\x003\\rE\\x003\\r<\\x003\\x00&*\\r703!\\r7\\x00\\r7\\x003\\r7?\\x0013\\x00\\x00\\x00«\\x00&36 \\r;\\r7H\\r7,\\r7\\\\\\r7\\x00\\x0013\\x00\\x00#\\x00&*\\r7<6p\\x00&*\\x00#\\r7I\\x00(\\rE6A\\r;\\r7H\\r7,\\r7\\\\\\r7?\\x00&3\\x00\\r<N3\\x00&*\\r7	13#\\x00\\x00\\x00\\x00&3%C.*\\x00\\x00\\x00\\x00&3%C.*\\x00\\x00\\x00^\\x00#\\x00\\x00#&3\\x00#\\r7\\x00D32\\x00#\\r7I\\x00\\x003\\rE\\x003\\r<\\x003\\x00&*\\r703\\r7?\\x0013\\x00\\x00\\x00p\\x00&3\\x00#\\x00\\x00#\\x00&*\\r7<6U\\x00&*\\x00#\\r7I\\x00(\\rE6&\\r7\\\\\\x00\\r<13\\x00&*\\r7	13#d\\x00\\x00\\r>\\\"079)780­$\\x00.\\n6*6*\\r7$	\\r?>$	\\r768ҳ\\x00\\r>:\\x00I=\\x00#\\r7`6\\r	\\r7$Q7+\\x00*\\x00\\x00\\x00)\\x00\\x00#	\\n#2	,\\x00I#9='\\nT4L*ĉ/\\x00\\r76ҳ8Y\\x00/\\x00s\\x00./\\x007/\\x00Y\\x00\\r>2 F$&7\\r>n6.6&F\\x00#/\\x00V\\x00#/$\\x00\\x00Y\\r>59Y\\r\\r>+\\\"6	\\r>(9Y4\\x00#\\r\\r>:\\\"\\x00#$\\r\\r>\\\"\\x00#\\r69}6\\r%\\x00#\\r>9Y}(\\r\\r>%`$	/\\r>u\\\"6	\\r>9Y6	\\r>9Y072\\x00.\\n/\\nQ7)&I\\x00Y\\x00\\x00\\x00^\\r	\\r7$\\x00#\\x00\\r7(\\x00q6/\\r$\\r7?\\x00\\r7,3\\x00#7,\\x00#&B\\x00\\x00ҳ\\x00\\x00\\x00/\\nC.*\\x00\\x00\\n\\r6*\\x00\\x00¯\\x00\\rE\\x00#\\r!\\r7?\\x00&U3\\x00#0.(\\rE;(\\r\\\"(\\r\\r>+\\\"((&7\\r><(.	6U&56\\x00%\\x00L:F\\r6$F$ҳ6\\r7U\\x00#\\r7U(\\x00&.ҳ$\\r<&(\\r&6	\\x00%\\x00L*ҳ*\\x00\\x00<0.(\\r\\\"(\\r\\r>+\\\"((&7\\r><(.	6\\x00%\\x00L%*4*\\x00\\x00&5*\\x00\\x00\\x00\\x00\\x00I\\r>H\\x00#\\r\\r7?F\\rEG\\r7c3\\x00#0#8#\\r=\\r76\\n#:\\r;\\r<!O\\x002\\r>9H\\r>E\\x00R/*\\x00/\\x00)T\\x00/){\\x00\\x00\\x00\\r\\r\\r>;0.+,:7 *\\x00\\x00\\x00B\\r=\\r77\\r7#3\\x00#\\r7\\x003\\r=\\r7\\r73\\r78\\r7X>\\x00h3\\x003\\x00S\\x00\\r7$\\x00\\r7\\rA*$\\x00\\r7\\rC\\\"6(\\r7_\\r7Z3\\r78\\r7XFh3\\x003\\x00\\x00\\x00\\r>oI\\x007V0\\\\\\x007W\\x00\\x00\\r>i\\x00#\\r> \\x00\\x00\\n0\\\\VW'*\\x00\\x00\\x00\\x002QNJ>\\x00\\x00\\x00Q\\r>H\\x00#\\r7j6\\r\\r\\r<B\\x00.:\\r\\r\\r?\\x00.\\n.	0.\\x00# .&P).>\\x00\\x00\\x00/\\x00\\x000.\\x00#/\\x00!\\x00#0zC7 \\x00#).\\x00\\x00A\\n.\\n\\r>\\\" \\r=\\rE4%AO\\r=\\r<7%AO\\r=\\rE%AO\\r>ß)Z\\x00\\x00\\r> \\x00\\x00'\\x00\\r7D\\x00#\\r>5$\\r>6\\r> \\x00\\x00\\r>! \\x00\\x00\\r> \\x00\\x005\\r>oI\\x00#\\x00&C(\\x00&C`6\\x00&C\\x007V\\x00&O\\x007W:\\x007V0\\\\\\x007W\\x00\\x00RMMM\\r;\\r< \\r;\\r7V6:\\rD)\\r\\r\\rC\\x00.\\r=\\r7\\\"0[\\r7^\\r76\\r<:\\x003\\x00\\x00êååå\\r;\\r< \\r;\\r7V6Ò\\r\\r7?\\r=\\r7\\\",3\\r>*?\\x00#-\\x00J\\x00#\\r9%\\r7O	3\\r>d'3\\r:8\\r<Z	3\\x00#\\r=\\r7\\\"0[\\r7^\\r76\\n\\r<:\\x003$$\\r(\\r=\\r7\\\"\\r7?$\\r;0P\\r?*6\\rB)7\\r\\r>\\\"\\\"(\\r\\r>\\\"6\\r;\\r?\\r@3:\\x00\\x00\\x00.;\\x00#\\rK\\r7V3)R\\rK\\r7W3)RX)u*\\x00\\x00LEEE®\\x00#(\\r7\\x00?6+0z7\\\"\\x00#6 r2nCnO¦P*2*\\x00\\x00j\\x00\\r>â=\\x00#0a\\x00#\\r:8-J\\r<Z	3\\x00#\\r \\r7?\\r7',3\\r<B6\\r<8#\\r>I6\\r@08#*\\x00\\x00ҳ*\\x00\\x00&\\r=\\r7\\\"\\x00\\r7$0.\\rCMJ.\\r\\x003\\x00\\x00$ҳ\\x007X\\r;\\r7+\\x00#\\rE)\\x00#6\\\"\\r7^\\r76\\n\\r7R\\x00#:\\rE\\x00#\\r\\r7?\\x00\\r71,3\\x00#7606)X\\r7\\x00#\\r>l<6\\x00?6\\r787X87X\\x00\\x00\\x00\\x00\\x00<X66\\r\\r7?X\\r7,3\\x00#\\x00\\x00#\\r7<6\\x006%*#4*\\x00\\x00*\\x00(\\x00\\r7\\r>a\\x006\\x007;\\x00\\x00\\x007:\\x00\\x00\\x00*\\x00\\x00Î\\x00#(\\r6(,\\x00#\\r7\\r7<6\\r\\r>\\\"\\x00#\\x007\\x00\\x006;\\x00\\x00;+\\x00#\\x00)m\\r>\\\"µ\\x00#)m\\r7\\r>n6\\r>!0w\\x00Q|)m7\\x00N\\x00#;\\x00#)R)]6\\n|\\x00#\\rE1f*\\x00\\x00U\\x00\\r7)3\\x00\\x00\\x00\\x00#6\\x00#6\\r*\\r7)\\r>!3N\\x00# rn6\\r**\\x00\\x00.\\x007!\\x00#6 \\x00#(\\r>\\\"6`*\\x00\\x00\\x00C7$\\x00#\\n*\\x00\\x00Ï\\x007!\\x00#6\\x00#(\\r>\\\"6`\\x00#`\\x00#`\\x00#0w\\x00Q\\x00#\\r>!\\r>\\\"6/\\x00#6  rÀ6K\\x00#`\\x00#\\x00\\x00#		\\r7<6'	\\x00#\\n\\n&H6 r\\n6#	4R%*\\x00\\x00\\r\\x00;\\x00#\\n;\\x00#2Q@J!:\\x00#\\n#	\\r;\\r<!O 7 Ä ¾ 7 7 7& 7> ¹ 7< 7? º Â Ã ¶ 76 ¼ · 77*?\\n\\rE\\r3\\x00#\\x00\\x00#\\r7<6\\rKQ# \\r>)Z\\x00\\x00B\\n.	\\n\\rE\\r3\\x00#\\x00\\x00#\\r7<6&N\\x00#\\r66\\n##&\\n\\x00\\x00\\n\\r70\\x003\\x00\\x00\\r70\\x003\\x00\\x000a)½\\x00\\x00&6\\rE\\r;+3\\x00#:\\x00#\\x00.*\\x00\\x00¡;\\x00#\\x00\\x00#\\r7<6\\x00#&E\\x00\\\"6rmmmF\\x00#&R\\x006\\r:&HS\\x00#61;\\x00#/\\r7(&R\\x006&R\\r:&H!Q\\r76&H)T)m#*\\x00\\x00f\\r=\\rE\\r7#3\\x00#\\r7'\\x00#\\x00n65\\r7\\r<,3\\r<6\\r:\\r7Z3#T<\\r>\\\"079)78\\x00\\x00\\x00\\x00\\x002QNJ\\x00\\x00\\x00+\\r>I6!\\x00\\x00#\\r\\r>\\n\\\"6\\r>=\\x00#\\n7')F\\x00\\x00\\x00\\x00U\\r>\\\"i\\x00#\\x00i\\x00#6>\\n70[\\x00#\\r\\r7?\\r7^\\rEA\\r<f3\\x00#6	)#: #¶0[\\r76\\r7%\\x00#0[\\rE\\x00#\\x00\\r7\\x00#6m\\r;0P\\x00#\\r7\\n\\x00#(\\r\\r7?\\rEG,3\\r>*$69\\r\\r7?\\x00\\r7,3\\r>*6\\n\\r7>8\\x00:\\r78\\x00I\\r7$0a8\\x000[\\r7.\\x003\\x00\\x00\\r=\\r77\\r7;3\\x00#\\r7/\\rE0\\r<$13\\r74\\x00\\x003\\r=\\r77\\rE3\\x00#\\r7\\r\\r	\\x003\\rE\\x003\\r73\\x00S\\r7\\rE!\\r7@\\x003\\r=\\r7\\r73\\r7!K3\\x00\\x00\\x00s\\x00s\\x00#F(&7\\r>\\\"$&7$\\n&7\\r>!6A(&\\\"ҳ(\\n&D06&\\\"6&\\\":&%*:$\\x00\\x00\\x00Q7)&I*\\x00*\\x00\\x00Ɛ\\n\\x00\\x00&56\\r>%9\\r>\\n9\\r>ei@\\r>\\\"\\x00#\\r>\\n\\\"69#\\x00&F\\x00#\\x00&+7.\\x00#\\x00#\\r>\\\"6ҳ\\x00#:ҳ\\x00#6072\\x00\\r>k9\\x0075\\x00#\\x00\\x00#\\x00C\\x00#\\r\\r,!\\r\\\"C7 \\x00#	\\r	\\x00#\\n\\r>5\\\"6A\\x00#\\n\\n\\r7$	\\x00#6\\r7>\\x00#ҳ\\x00#\\r\\r>L\\\"(<\\x00&%gҸ(\\r>*\\x00&%\\r7\\r73(\\r>*\\x00&%\\r7\\r7%3(\\x00&7\\r>\\\"$\\x00&76\\x00&;p\\x00&\\\"\\x00#:\\x00&%gp\\x00&\\\"\\x00#2I\\n\\r7$	0T*\\x00\\x00}\\n\\x00\\x00&1V7-\\x00#\\x00\\x00#\\x00#64*\\x00&Ftl\\x00#tl\\x00#&4\\r>\\\"673\\x00#&4\\r>\\\"674\\x00#N\\x00#&?*\\x00\\x00-\\r>p9\\x00\\r6C\\x00#\\r\\r\\r>!,!7 \\x00#*\\x00\\x000»\\x00#\\x00\\r6;+C7#6*\\x00\\x00æ\\x006;\\x00+*\\x00\\r72\\r7>3\\x00\\x00;\\x00#\\x00\\x00#\\x00\\r7<6`\\x00\\x00#\\r72\\r7$3\\x00#\\r7\\r>\\\"(\\x00\\r	$\\x00A66;ҳ+*\\x00#:\\r703#m6=\\x00\\rh\\rE\\r7)36;\\r+V+*7,\\x00#6&B6\\r\\r70&B3;\\r7\\r7>3++*\\x00\\x00	\\x007-\\x00*\\x00\\x00\\x00ҳ6\\x00*\\r$\\r6$	\\r7B6\\x00s\\x00F6\\x00*&7\\r>?670*&D061&F&+p&\\\"\\x00#&76*:\\r\\r7?&;,3*70*\\x00\\x00'\\x00&+6\\x00&+7.\\x00#\\x00&%gp\\x00&\\\"*\\x00&%*\\x00\\x00\\x00V\\r	Á*\\x00\\x0060\\\\\\x00#Z?6\\x007Z:7ZZ\\r>	\\\"\\x00U0\\r>Û=\\r>=*\\x00\\x00ҳ\\x00#\\x00\\r7\\x00#\\x00\\x00#<6g\\x00\\x00#\\rE7(\\r>\\\"<6>\\r:48\\x00#\\x00\\r7:3(\\x00\\r>\\\"\\r7:36\\n\\r>8#:8##n*\\x00\\x00ҳ\\x00#\\x00\\r7\\x00#\\x00\\x00#<6x\\x00\\x00#\\rE7(\\r>\\\"<6@\\r:48\\x00#\\x00\\r7:3(\\x00\\r>\\\"\\r7:36\\n\\r>8#::\\r76#:8##*\\x00\\x00č\\x00&F\\x00#\\x00&+7.\\x00#\\r(\\r>*\\x00&%\\r7\\rEA3$F\\r\\r>L\\\"(<\\x00&%gҸ(.\\r>*\\x00&%\\r7\\r73$\\r>*\\x00&%\\r7\\r7%36#\\r>q9\\r7.\\r98\\r7-8ҳ,3\\x00#tl\\x00#\\r>\\\"6\\r7.\\rM\\r7-8ҳ,3\\x00#tl\\x00#\\r>\\\"673\\x00#\\r>\\\"674\\x00#\\x00#;N++*\\x00\\x00\\x00%2\\x00#\\x002\\r>\\\"HE\\r>\\\"RQ/@ .\\x00\\x00=\\x00\\r70\\r>ÒH	3\\r>yH	3\\r>1H	3\\r>5H	3N3\\x00\\x00\\x00\\x00>\\x00\\x00 \\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>	\\x00\\x00>\\n\\x00\\x00>\\x00\\x00>\\x00\\x00>\\r\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00\\x00>\\x00$\\x00\\r>\\\"<6*\\x00'.\\x00\\r>\\\"'.*\\x00\\x00\\x00\\r>\\\"<6*\\x00\\x00'.=*\\x00\\x00\\x00\\x00#\\x00#\\x00<6\\n8##g*\\x00\\x00\\r>.\\x00\\x00\\r>\\x00#\\r;F6*\\x00*\\x00\\x00\\r=6\\x00:*\\x00\\x00\\r=\\r77\\r7936\\r>w:\\r>*\\x00\\x00\\r(	\\r;\\rE6\\r>M*\\r>B*\\x00\\x00U\\x00\\x00\\r>\\\"\\x00\\r>\\x00\\r;0P\\r7\\n\\r76\\\"\\x00==\\r>\\\"=\\r>!.*\\x00=*\\x00\\x00\\r>.\\r>*\\x00\\x00\\r>.\\r>.\\r>\\\"='*\\x00\\x00\\r>2.\\r>l*\\x00\\x00\\r>.\\r>!'*\\x00\\x00\\r>.\\r>!.\\x00.*\\x00\\x00%\\r>.\\x00\\x00\\r>\\x00#\\r;\\r7VF6*\\x00*\\x00\\x00\\r;\\rEX6\\r>:*\\x00\\x00\\r=\\r77\\r7;36\\r>w:\\r>*\\x00\\x00\\r(	\\r;\\rAT6\\r>M*\\r>B*\\x00\\x00X\\x00\\x00\\r>\\\"\\x00\\r>\\x00\\r;0P\\r7\\n\\r76%\\x00==\\r>\\\"=\\r>!.\\x00*\\x00=*\\x00\\x00\\r>\\x00\\x00\\r>\\x00.\\x00*\\x00\\x00 \\r>.\\r>.\\r>\\\"='\\r>.*\\x00\\x00\\r>2.\\r>!l*\\x00\\x00\\r>.\\r>'*\\x00\\x00$\\r>.\\r>!.\\x00.\\r><\\\"*\\x00\\x00\\x00	\\x00!\\x002\\r>HE\\r>IRQ/@\\r6\\rE8S\\x00.\\n.\\x00\\x00P\\r6\\x00\\x00#\\x00\\r7\\x00#\\x00)T6\\r9#\\x00)u0.\\x00#6\\r>\\\"9#\\x00){\\x00\\x003\\x00\\x00\\r;\\r<\\rU,ҳ\\x00D3\\x00\\x00*\\r;\\r:W6\\r\\r;\\r:W\\x00#:\\r@-^\\x00#*\\x00\\x00/ҳ\\x00#\\\"\\\"\\\"\\r;\\r<K6\\r\\r;\\r<K\\x00#:\\r@W^\\x00#*\\x00\\x00\\x00p\\rE8S\\x00.6\\r>zH\\x00.6\\r\\rE8!Q0.\\x00#6\\x00.\\rE8!Q\\r;\\r:[>\\x00\\x003\\r;\\r:<6	\\r;\\r:[K3\\x00\\x00P\\r;\\r<6\\r;\\r:<\\r?,\\x00#2\\x00#\\x00#;\\x00#\\r;\\r<>\\x00\\x003\\r;\\rCG>\\x003\\r;\\r93>\\x003> .\\x00Æ69\\r=\\r77\\rE3\\x00.\\r7\\rC/\\r@(\\x003\\r=\\r7P\\r73Ҷ.E\\r:6-\\x00J\\r7O	3\\x00#2\\x00#\\rA \\x00\\x003\\r<\\x003\\rB-\\x003\\x0036\\r7\\r9*\\rk\\rE23\\x003:\\r703\\r7\\rC3\\x003\\x00\\x00\\rk\\rE23\\x00#;\\x00.*\\x00\\x00\\x00\\x00#6 #\\x003H\\x00\\x00\\x00\\x00.\\rE8\\x00!Q\\r>% \\x00\\x00\\x00	6\\x009\\x00\\x00\\x00¨\\\\6%\\x007\\\\\\x00)F\\rd(-\\x00d\\x00#6\\rES\\x00#6\\r7	3\\x00#\\r\\r7?Ҿ,3\\x00#\\r7Y	3\\x00#ҳ(\\r7\\x00?6\\r7Y	3\\x00#\\r\\r7?\\rB=,3\\r>*$\\n\\rD,q$\\rC6%*4\\x007\\\\\\x00\\x00\\x00n\\r;\\rE[\\rE]\\r;\\rE[\\rE	3\\r>=3\\x00#\\x00\\rE\\r0\\\\Å3\\x00\\x00\\x00\\x00#\\x00\\r7<6\\r\\x00^3#\\r>\\\"079)78\\x00\\x003\\x00*\\x00\\x00\\nć\\x00\\r7)\\x003\\x00#\\r7\\r><6\\r7Y	3\\x00#\\x00\\x00#\\r7\\x00#<6#E^3\\r7\\r>!'\\x00#0\\\\\\r7)3¿\\x00'\\x00#]?6\\x007]\\r7)\\x00,3\\x00#\\r>Ù?6*\\r=0¸\\r7@6*\\r;0Ñ0É3\\x00#l0Ó.\\x00#	\\r7\\x00#\\x00\\x00#<6	#Ej\\x003\\r>%	)78*\\x00\\x00\\x000\\x00\\x00#0Ï\\x00#\\n#\\x002\\r>HE\\x00RQN/@\\n.\\n.\\n.\\n.\\r\\n.\\n.\\x00\\x00\\n.\\x00\\x00»6\\r>;H\\x00#\\r>YH\\x00#\\r4\\r7	3N\\x00#\\x00\\x00#\\rL\\r7,\\r7\\r7\\x000Ô3\\x00#\\r7\\r>.l_\\x00#\\r7K=,3N\\x00#m\\r>)\\\"\\x00.\\r>\\\"079)78\\r>!)78\\x00\\r)R\\x00])R\\x00)\\x00)\\x00\\x007\\r_Һ\\x00#\\r>Þ?$\\r>Ü?(\\r\\r$\\r\\r>?6)78\\x00\\x000[\\r76\\r?4q6\\n\\rh\\x00;\\r=\\x00h\\x00\\x00\\r;\\r7]0Ò3\\x00#$\\x00.\\x00\\x00b\\x00\\x00!-\\x00J\\x00#\\n.$\\r-\\x00J'\\r>.?\\x00.\\x00\\x00	\\x007-\\x00J\\x00#\\x00#\\x00#\\x00\\x00#\\x00 #$\\r-\\x00J'\\r>?\\x00.\\x00`>\\x00\\rE\\x00\\rME\\r?0a\\x00\\r7,3 O-\\x00J\\x00.'\\r>.?\\x00.\\x00.6\\x00\\x00\\x00\\x00\\r>-<6\\x00] .\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00.\\r>-I6!\\r>|)Z	\\r>Ñ)Z\\n\\r>M)Z\\x00\\x00q\\r>-I6d;\\r<'+\\r<+\\rEL+\\rE4+\\r:+\\r:\\n+\\r<7+\\rE+\\rE+\\r:U+\\x00#\\x00\\x00#\\r7<6\\r=	!O#\\x00\\x00\\x00 \\r\\r>\\\"(\\r\\n6;+\\x00+\\x00+\\x00#\\n#H\\r9\\\\-8\\x00#\\r7	3\\x00#\\r753\\x00#63W\\x00#:\\n\\x003W\\x00#.*\\x00\\x00\\x00$\\r560.:\\x00*\\x00\\x00i\\x00\\x00#\\r7\\x00#<6Q0\\r>=\\x00#3\\x00#\\x00#\\r703\\r7\\x00#\\r7\\r>ã?6 Ð#X\\x00\\x00\\x00\\r>FI6\\r>Ø)Z\\x00\\x00\\x00y>\\x00\\x00.;+++\\ro+\\x00#\\r\\\"\\r7(\\r\\r(\\r\\r>%`6\\r70\\r;\\rE@3;\\x00#\\x00\\x00#\\r7<6\\x00#\\r7	3N\\x003#g,\\x00E@@@\\x00\\x00#\\r7<6-\\x00#\\r7	3N\\x00#6%\\x00.#g;\\x00\\x00\\x00>\\x00\\x00\\x00\\x00\\x00(60.:0o.\\x00.$	>\\x00\\x00F\\x00.\\x00\\n\\r6h.\\x00.\\x00\\x00K\\r>FI6>\\r^\\r;\\r7]).\\rL\\r;\\r<>).\\n.6\\r\\r6$\\r\\r>%?6\\x00)F\\x00\\x00\\n\\r=\\x00;\\rh\\x00=\\x00\\x00IDDD\\r*\\r7\\x00\\x003\\x00#0Ë-8\\x00#\\x00\\r7$\\r753$\\r6(\\x006%\\x00.\\x00\\x00\\x00\\r>FI6>\\x00*\\x00$0o/\\x00'\\x00#\\r>E?6\\x00)F0o.*\\x00\\x00\\x00K`\\r66`*33\\r;\\r7W0-3\\x00#\\r;0P0\\x00#0Ç\\x00#(0Î\\x00#\\r6h7`*\\x00\\x004\\x00Y\\x00\\x00#)ҳ\\x00#*\\x00\\x00#+\\x00\\x00#,\\x00\\x00#-\\x00\\x00#.\\x00\\x00#/\\x00\\x00#0\\x00\\x00#1\\x00\\x00#2\\x00\\x00#3\\x002\\r>HE\\x00RQN/@'U\\n. \\r6\\n.#\\n.\\r\\n.\\n.\\n\\n.\\r=\\r76!\\r=0Æ!O\\r=0Õ!O\\r=0Ì!O\\r;\\r<U!O\\x00\\x00\\n. \\n.\\n.(\\n.\\x00\\x00j\\n.\\n.\\n.\\x00\\r\\n)T\\x00-)\\x00+)\\x00,)T\\x00))R\\x00*)u\\x003)R\\x001)T\\x002)T\\x00/)T\\x000)T\\x00\\r)R\\x00\\x00\\n\\r>\\n)78\\x00\\x00	\\x00\\r6*\\x00\\x00:\\r\\r7?\\r7,3\\x00\\x00\\x00#\\r7<6\\x00\\r66*#\\\"\\x00\\x00,$\\x00\\x00\\x00#M\\r7n(\\r7536*\\x00\\x00\\x00#M\\r\\r7?,3\\r>*6*\\x00\\x00«\\r>J\\x00#\\r>W\\x00#\\r>W\\x00#;\\x00#\\x00\\x00#<6\\r70\\rK\\rE	338##&l\\x00#\\rK\\r7\\r>.=3\\x00.1\\x00\\x00#\\r7<6'\\r>\\\"28##%l\\x00#\\rK\\r7\\r>.=3\\x00.2\\x00\\x00@2;;-\\x00J\\x00#\\x00\\x00#-\\x00J'\\r><6#\\r>d?6: \\x00.3\\r>	\\x00.3\\x00\\x00!\\r^\\x00#\\rD\\x00#\\x00#6\\r>:\\x00\\x00./\\x00\\x00\\x00)\\rL>\\x00\\rE\\x00$\\rL\\r7>\\r76	\\r>\\x00.0\\x00\\x00\\x00\\x00\\x00\\x00\\x00!\\r;0Ê.6*\\r;#M\\r0Èq6*\\x00\\x00\\x00\\x00).\\x00\\x00\\\"\\r\\x00#\\x00)78\\r>\\\"(\\r\\n6:\\x00\\n\\x00\\x00\\x00û\\r6%\\r=0Í$\\r=0ä6\\x00..\\r>\\r>1).\\x00\\x00#0\\x00#0â\\x00#0ß\\x00#;0á+0Ú++\\x00#\\r;0\\x00#\\r;0Ý\\x00#	\\r;0å\\x00#\\n0×\\x00#0Þ\\x00#(\\n\\r;\\rM%(0#\\r7\\rMW3\\x006\\r>\\r>3).	(	\\rE53$\\n(\\n\\rE536\\r>\\r>Q).\\r\\n#6\\x00..\\r>\\r>1).\\x00ļ\\r;.\\x00#\\r=.\\x00#\\x00\\x00#\\r;0Ü\\x00#(6\\r6\\x00#\\r;0P\\x00#\\r7\\n\\x00#\\r7:0-83\\x00#\\n\\n(\\n_\\r>h<60.(\\x00#	:0.(\\x00#	$$$$	\\x00.60Øһ-8\\x00#\\r=#M.\\x00\\r:](\\r753(\\r=\\r9U6\\x00.\\x00\\x00#\\r\\r\\r7<6#\\r=\\r7P\\r7\\r36\\x00.#\\r10#6\\x00.ą\\rY\\r:.,36%*\\rY\\r:.\\r@6,3\\x00#6F\\rE6%*0à-8\\x00#\\r7L\\r7(\\r75\\r7L\\r7	336%*:\\r7:0ã36~\\r7:0-83\\x00#(_\\r>hn6%*\\r7:0Ù-83\\x00#(_\\r>Cn6%*\\r7:0Ö-83\\x00#(_\\r>9n6%*4*\\x00\\x00\\x00\\x00\\x00>\\x00\\x00#0Û*\\x00\\x00\\x00\\x00\\x00D4\\x00#2\\x00#>\\x000O\\x00#0¡\\x00#(\\r7Z3\\rES\\x00#(0.*\\x00\\rd*\\x00\\x00/\\r=\\rE0ç36%*0æ\\x00#0ê\\x00#\\r;.$\\r=.*\\x00\\x00Y0.(\\r;0ñ6I\\r;064*\\r;0\\r7	3\\x00#\\r\\r7?0é,3\\r>*(\\r\\r7?0ó,3\\r>*6%*4*\\x00\\x00\\r;0ì.\\x00#\\r;0ë.\\x00#$*\\x00\\x000ïһ-8\\x00#\\r;\\r>5Q.*\\x00\\x00	0èL0O*\\x00\\x00l4\\x00#0ðL0O\\x00#6%*\\r;\\rE(\\r;&K(\\r;&K0õ6%*\\r=\\rE(\\r\\r=0\\r76\\r=00íF,3\\x00#&G$0ô6%*4*\\x00\\x00\\x00\\rL\\r7,\\rL\\r7,\\r7\\x00\\x00&\\rL\\r7,\\r7\\x00>\\x00\\x003\\r=\\r77\\r793ҳS\\rL\\r7,\\r7\\x00\\rL\\r7,&&\\x003\\rL\\r7,&Hҳ\\x00#\\r70ò3\\r>*$\\r70î3\\r>**\\x00\\x00\\x00'_ұ\\x00#6\\r@&\\x00.\\x00\\x00,&*\\x00\\x00\\nƥ\\r6%\\x00#\\r=0¤\\r6(\\r=0¤\\r7\\x00#4\\x00#\\r\\r7?\\r=\\r7;,3\\x00#0£\\x00Vҷ\\r740Ą\\x003\\r=\\r766\\r\\r7?\\r=\\r713\\r;0£\\rE\\x00#\\r1\\r7?\\r=\\r7134\\x00#\\r\\r7?\\r=\\rE,3\\x00#0ă\\x00Vҷ\\rE-\\r74\\x003\\r7\\r\\r74\\x003\\r\\r7?\\r=\\rE,3\\x00#\\r7\\r0X\\x0030ü\\x00Vҷ\\r\\r7?\\r=\\rE,3\\x00#		0\\x00Vҷ	\\r7<\\r7!\\x003	\\r7\\rҷ\\x003\\r\\r7?13\\r\\r7?13\\r\\r7?	13\\r74\\x00#$	0X\\x00#$_ҷ	\\x00#$	0	\\x00#$$6\\r>0Ā).\\x00\\x00i\\x00\\x00#\\rB-d\\x00#\\r\\r7?\\rC\\r7,3\\x00#\\x00\\x00#\\r7<6\\r66R9##'0¡\\rd6\\r>R9#*\\x00\\x00\\r;0P\\x00#0\\x00#0\\x00#0y\\x00#\\r7\\n6\\r7\\nN\\x00.)6\\x00.*\\r;\\r7]\\r7	3\\r7\\x00.+6\\x00.-:6\\x00.-:\\x000.\\x00.,\\x00\\x00Ϟ\\r;0P\\x00#\\r7\\n\\x00#0ú\\r66Â09\\r>k9\\r>q9\\r;0Ă.6\\r> .:\\r\\r7?\\rEG,3\\r>*6	0 .:t\\r;0ö.6\\r>\\\" .:^\\r;0û.6\\r> .:H\\r;0ÿ.6 .:5\\r;0ø.$\\r)\\r7?0ù,3\\r>*6\\r>o .:	\\r> .\\r\\x00#\\r>2n630ā).\\r>n6 \\r;\\rEJ(\\r;0$\\r;0¢6\\x00#\\r;0ą.(	\\r;0÷.60þ\\r>!).\\r;\\rEJ6\\x00#0ý6Ż0ĕ)78\\r;0Ĕ.6\\r>\\r .:°\\r\\r7?0ď,3\\r>*6\\r>4 .:\\r\\r7?0ċ,3\\r>*6\\r>! .:n\\r;0~(\\r\\r;0~\\r7B(\\n0ć\\r;0~$\\r)\\r7?0Ĉ,3\\r>*6\\r>0Đ).:'\\r;0ē.$	\\r;0Č.	6\\r>/ .: .\\r;0c(\\r;0c0č6\\r;0c0Ē6:\\r;0\\r6(\\r;\\rEX0\\r6(\\r;0ĉ(\\r;0đ6\\r>0 .:P\\r;0 (\\r;0Ć6:=\\r;\\rE0Ċ(\\r;0Ď6:$\\r;\\rE0ĝ(\\r;\\rE0Ě6:\\x00..0¥\\r=\\r7P\\r76\\r>L\\r>\\\").\\r;0ĥ.6\\r> .:\\r;0Ė.6\\r> .:y\\r;0ě.6\\r>? .:c\\r\\r7?\\rEG,3\\r>*6	0 .:B\\r;0c(\\r\\r;0c0Ĥ.6\\r>r .: \\r;0(\\r\\r;00ę.6	\\r>0 .\\r;0\\x00#(06\\r>q\\r>).\\r;0ė\\r660907=60Ĝ9\\x00\\x00ʃ\\r;0P\\x00#\\r7\\n\\x00#\\r;0Ę.6\\r>\\r>y).:ɔ\\r;0Ğ.6\\r>\\r>;).:ȹ\\r;0ģ.6\\r>\\r>).:Ȟ\\r;0ġ.6\\r>\\r>Y).:ȃ0.6\\r>\\r>5).:ǭ\\r;0ğ.6\\r;0Ġ6:\\r>\\r>F).:ǈ0.6\\r>\\r>R).:Ʋ.6\\r>\\r>1).:Ɲ\\r;0 (\\r;0Ģ6\\r>\\r>).:ż\\r;0Ĭ$\\r;0ĳ6\\r>0Ĩ).:Ş0Ī8\\r753$	0İ\\r06\\r>\\r>H).:Ĳ0ī8\\r7536\\r>0Į).:ē0.&6\\r>\\r> ).:ý0.$6\\r>0Ĵ).:é0.%6\\r>0).:Õ\\r;0ı(\\r;0ĵ(\\r;0ħ6\\r>\\r>).:­\\r;0ĩ.6\\r>0ĭ).:0į\\r;6\\r>0v).:~0.6\\r>\\r>).:h0.6\\r>0Ĳ).:T0.6\\r>0°).:@0.6\\r>\\r>\\x00).:*0.6\\r>\\r>t).:0.6\\r>\\r>$).\\x00\\x00\\x00\\n.\\n.>\\x00 .'\\x00\\x006\\r>S9\\x00\\x00\\r>\\x00).\\r> \\x00\\x00	Ȩ\\x00#\\x00\\x00#\\x00\\r7<6ȑ\\x00\\x00#\\r<#\\r7<6¬\\r7\\rE$\\r7\\rE\\rE/6:Ǌ\\r7\\rE\\rE/	3\\r7(\\r:M0Ħ6\\r>n .!:I\\r:M\\rU(\\r7\\r<((\\r?8\\r75\\r7\\r<(36\\n\\r> .!:ň\\r<^\\r7<6ĸ\\x00\\x00#\\r<C\\r7<6Ġ\\r<C\\x00#\\r76Ā\\rE$\\rE\\rE/6:â\\rE\\rE/	3\\x00#\\rE64\\r7\\r73\\x00#(\\rD;8\\r7536\\n\\r> .!:\\r7#6w\\r=\\r7P\\r70Ļ3\\r:&6\\n\\r>& .!0X(0X\\r7\\r><65\\r?(8\\r750X3$\\rB	8\\r750X360 .!:\\r?E60° .!#ĳ#Ȟ\\x00\\x00\\n¯\\r;0ļ\\x00#\\r;0Ń\\x00#\\r;0\\x00#\\r;0Ĺ\\x00#(	\\r7\\x00#(	\\r7\\x00#((6\\r>\\r>n).6I\\\"-#\\x00#2\\x00#		\\r<#%\\x003	\\r<^%\\x003	\\r?5%\\x003\\rAG\\r=\\r7P$\\r=\\r7	13\\x00\\x00C\\r;0ķ\\x00#(	0Ľ.\\x00#(\\r;\\r73\\r7	3\\r70Ł3?\\x00#$*\\x00\\x00\\rY\\r9+\\x00#\\r;0ľ\\r6(	\\r;0ŀ\\r6(	\\r;0Ņ\\r6(\\r;\\rEM(\\r;\\rEM\\r7	3\\r70Ŀ3?\\x00#...\\r;\\r73(!\\r*\\r7\\x00\\r;\\r733\\r70ĺ3\\r>*?\\x00#$*\\x00\\x00:3330.6-0łL0O\\x00#0ńL0O\\x00#0ĶL0O\\x00#((*4*\\x00\\x00\\x00đ>\\x00\\x00#>\\x00#ÿĂĂ\\r;0P\\x00#\\r;0©(0«(0ĸ8\\r750«36\\r;0©\\r;0ŊN3:»0¥\\r=\\r7P\\r76/\\r;\\rEJ\\r73\\rE3\\x00#\\r7J\\x003\\rEF\\x003:x\\r;0(\\n\\r;006A7::\\r;\\r7T\\r76\\n#:\\\"\\r;\\r7T\\x00Vʃ\\r;\\r7T\\r:B0ň3\\n#\\n#:#\\r;\\rEJ(\\r;0$\\r;0¢6\\n#:\\n#\\n#\\x00% Y\\x00\\x00\\x004 Y\\x00\\x00\\x00\\x00.\\r\\r>\\n\\\"6$\\r;\\r?@-\\x003\\x00#\\r78>\\x00\\x003\\r70Ō\\x003\\x00\\r>\\r>C).\\r>\\\" \\x00\\x00\\x00\\x00\\x002\\x00HE\\x00RQN/@<\\r:	S\\x00.\\r:;S\\x00.\\r:S\\x00.\\r:S\\x00.\\r<!S\\x00.\\x00\\x00\\x00)F\\x00\\x00\\x00\\x00#\\x00\\r7\\x00#\\x00)T6\\r9#\\x00)]6\\r>\\\"9#\\x00)]6\\r>!9#\\x00)]6\\r>%9#\\x00)]6\\r>59#\\x00)]\\x00\\x003\\x00\\x00¶6\\n.60.	\\x00.\\r>7\\r:;!Q60.\\n\\x00.\\r>7\\r:!Q$	\\r<;S60.\\x00.\\r>7\\r:	!Q$	\\r<;S60.\\r\\x00.\\r>7\\r<!!Q((6\\r>7\\r<;!Q\\x00\\x00\\r\\r>%?6~6*;\\x00.;0+0ŉ+0Ŕ+0ō+0Ő+0œ+0Ň+0Ŏ+0ŋ+0Œ+0ő+0ŕ+0ņ+\\x00#\\x00\\x00#\\r7<6\\\"\\\\G\\r703#/*\\x00\\x00.6\\r9\\x00\\x006\\x00b\\x00.\\r>7\\r:!Q%*4*\\x00\\x00\\x00Ɋ\\r;\\rB[\\x003\\r6§\\r=\\r77\\rE3\\x00#\\rE0ŏ\\x003\\r=\\r7\\r73\\r=\\rE\\rM43\\x00#\\r<6K;\\x00#\\x00#\\r<\\rM@<6\\r70\\r<33#,\\r\\r7?\\r7,3ҿ).\\r=\\r7\\r7Z3:Ɠ07=6\\r=\\r77\\rE3\\x00#\\r>H\\x00#\\r7/ҷ\\r: 13\\rE\\r@PH\\rCF\\rEH\\rEE\\x003\\r=\\r7\\r73\\x00\\x00#4\\x00#\\r;\\rEI>\\x00\\r>.,3\\x00#	:ćĂĂĂ-\\x00ş\\x00#\\n0š\\x00#0Ť\\r72\\r73\\x00#\\r=\\r77\\rE3\\x00#\\r7\\rE!\\r7@\\x003\\rE0Ř\\x003\\r=\\r7\\r73\\r@\\r\\x00\\x00#\\r\\r\\r:@\\x00#\\r\\r<H\\x00#\\x00\\x00#\\r7<6A\\r\\r7\\rA>\\x003\\r\\r:@$\\r\\r<H6\\n\\r703#gN\\r\\r7?\\n\\r7,3Ҵ).\\r=\\r7\\r7Z3\\x00>>>\\r=\\rEH3\\x00#(\\r<\\r76\\r<\\rML3\\r<.\\x00..$0v?60\\r\\\"\\r7?\\r;	13\\r=\\rE\\r: 36\\r=\\r7\\r7Z3\\x00\\x00åààà\\r=\\r77\\rE^3\\x00#(\\rEQ6Á\\r<\\r>=\\x003\\r<\\\"0v\\x003\\rEQҹ3\\x00#\\r7W\\x00#\\r@8V\\x003\\r9\\r?L\\x003\\r<\\rC@\\x003\\rC7\\x00\\x00\\r>.\\r>yN3\\r<\\rD'\\x003\\r:\\r>\\r>D3\\r<\\r9D\\x003\\r:\\r>\\r>?D3\\r:2	3b*\\x00\\x00\\x00̎233\\r=\\r77\\rE^3\\x00#\\rEQ\\rB\\r3$\\rEQ\\rM3\\x00#ʽʽʽ;\\x00#\\rA_\\x00#\\r?\\x00#	\\r9:	3\\x00#\\n\\rMF\\r:I\\n13\\r;\\rD;\\r>Ú+\\r>á+\\x00+\\r>Õ+\\r>Ô+\\x00+\\x00+\\r>×+\\x00+-3\\x00#\\rD\\r:I\\rDD3\\n\\r:\\\\\\r>\\x003\\n\\r<_\\r>\\x003\\rU\\n	3\\x00#\\r:*\\r:T3\\x00#\\r\\r:(\\r13\\r<*\\r3\\r:*\\r:F3\\x00#\\r:(	13\\r<*3\\r:Q\\r13\\r:Q13\\r?]3\\r@	3\\r<T\\r9I\\rU$,3\\x003\\r<L\\r?-\\rB_,3\\x003\\rBT\\rDK3\\rD%\\r<T\\n\\r:\\\\\\r95\\x00\\x00B3\\rB,\\r<LD3\\r@\\rU.\\x00\\n\\r<_D3\\rE^F6\\r70\\rE^\\r:2	33\\n# #\\r:+6µ;\\r:T+\\r:F+\\x00#;\\rD+\\r?Y+\\r9C+\\r@C+\\r@+\\r@+\\x00#\\x00\\x00#\\r7<6S\\x00\\x00#\\r7<6<\\r:+,3\\x00#\\r70\\r9G\\rC\\rAQD3#I#`\\r\\r7?\\r71,3b*_\\x00#MY\\r'\\r7?36I\\x00\\r76;\\r@Z\\x003\\x00#\\r66\\\"\\r7(\\r>àn6\\r703\\x00\\x00M\\rM	3\\x00#\\x00\\x00#\\r7<6.\\x00#\\r?3\\x00#\\r703 .#;\\x00\\x00\\x00ì\\r;\\rAR\\rA-\\x003\\rA	3\\x00#;\\r:E\\r66\\n\\r:E:ҳ+\\r:V\\r66\\n\\r:V:ҳ+\\r:\\r66\\n\\r::ҳ+\\r<I\\r66\\n\\r<I:ҳ+\\r<]\\r66\\n\\r<]:ҳ+\\r:\\r66\\n\\r::ҳ+\\r<\\r66\\n\\r<:ҳ+\\r<[\\r66\\n\\r<[:ҳ+*\\x00\\x00\\x00в;\\x00#\\r;0P\\x00#\\r700ŝ3\\r700Ş3\\r700Ŝ3\\r7003\\r700Ţ3\\r700Ś3\\r700ţ3>\\x000O\\x00#\\r703\\r700.3>0O\\x00#\\r703\\n0.\\x00#	ҳ\\x00#	\\r70	3;\\x00#\\rC1\\x00#\\r=\\r77\\rE?3\\x00#\\r\\r(\\r\\rE(\\r\\rEe6?\\r72\\rE33\\x00#\\x00\\x00#\\r7<6\\r70\\r\\rE33#)\\r703;\\x00#\\rDD\\x00#\\r=\\r77\\rE$3\\x00#(\\rE(\\rEe6?\\r72\\rE33\\x00#\\x00\\x00#\\r7<6\\r70\\rE33#)\\r703\\r;\\rE=(\\r;\\rE=e6œ;\\x00#\\r?%\\r72\\rE33\\x00#\\x00\\x00#\\r7<6<\\r70\\r;\\rE=\\rBҵ6\\nҼ:ҳү3\\r<3#I\\r703;\\x00#\\rM\\r72\\rE33\\x00#\\x00\\x00#\\r7<6<\\r70\\r;\\rE=\\rBҵ6\\nҼ:ҳү3\\r<3#I\\r703;\\x00#\\rDB\\r72\\rE33\\x00#\\x00\\x00#\\r7<6<\\r70\\r;\\rE=\\rBҵ6\\nҼ:ҳү3\\r<3#I\\r7036\\r70f3>0O\\x00#\\r7036\\r70f36\\r70f3>0O\\x00#\\r703\\r70030±$0ŗ$\\r;0±\\x00#\\r703\\r700Š30ř\\x00#\\r\\r7?\\r7,3\\x00#\\x00\\x00#\\r7<6\\r70#6:\\x003#+\\r\\r7?\\r71,3b*$\\x00.$\\x00$\\x00\\rE53*4*\\x00\\x00\\\\\\r\\r7?\\x00\\rE,3\\x00#\\r;\\x00#\\x00\\x00#\\r7'<6.\\x00#64*#g*\\r7'.*\\x00\\x00\\r\\x00*F*\\x00\\x00w;\\x00#\\r@Q\\x00#6`\\x00\\x00#\\r7<6N\\x00#\\r\\r7?;\\r7\\r+\\r</+\\rA+\\r9!+\\r7,3\\x00#\\r703#[*\\x00\\x00g;\\x00#0\\x00#6R\\x00\\x00#\\r7<6@\\x00#\\r70\\r\\r7?;\\r7<+\\rBM+\\r</+\\r7,33#M*\\x00\\x00l\\x00\\x00#0\\rE60\\x00#:0y\\rE6\\n0y\\x00#\\r=\\rB \\r?U3%\\x00#4\\x00#\\rU\\r;\\x00#;+++*\\x00\\x00{;\\x00#LL\\r?9 ^\\r70\\r:3\\r70\\rA]3\\r70\\r</3\\r70\\rB3\\r\\r;0\\r@\\\\3\\r70\\r:3*\\x00\\x00Ǧ6ҳ*;\\x00#\\r;0ś\\x00#\\r70(0W3\\r;0ť\\x00#\\r70(0W3\\r;0Ŗ\\x00#\\r70(0W3\\r;0Ų\\x00#\\r70(0W3\\r;0ū\\x00#\\r70(0W3\\r;0Ū\\x00#\\r70(0W3\\r70\\r;0Ů3\\r;0P\\x00#	\\r70	\\r7\\n3\\r70	0´(\\n	0´0ů3\\r70	0²(\\r	0²\\r7	33\\r70	0³(\\r	0³\\r7	33\\r70	0ũ3\\r;0Ű\\x00#\\n\\r70\\n0ŧ3\\r70\\n0Ŧ3\\r70\\n0ŭ3\\r70\\n0ű3\\r70\\n0Ŭ3\\r70\\n\\r<\\\"3\\r70\\n\\r<3\\r70\\n0Ũ3\\r7\\r73b\\x00.*\\x00\\x00\\x00\\x00\\x00\\x00\",ÿþĀā˵̝Ăă\x00úûüýȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰ:È$É&ÊŮËĦÌÍÎÏÙÚŸÛŻáƃâΑãΔä΅æɢçɥèɧéɪêÎƜēƝ¨ƟǤƱɃƲȅƳ͉ƴ̔ƵMİǧĉ XÃĢ`ÚğćØ?Ç\r>©üÜ>2ĖĮĬL2Tď>©¼µĬÌ22pä\"ġĬA22pđ½>2Ė¸Ĭ2»öÕ>2ĖĬ,2Ĭģ2mĬì2+ĝ>©ħ(FĬc2p´ĦøĬc2ºp~Ĭ2ÞĬ2ÆhĬs2ó¾jĬc2ēp'Ĭ2ÏĚ¶ßĬc2op0Ĭ}2°³ĬĂ2Ĉ×<>2Ė=å>2ĖDĬé2­>©§ĬĊ2JKõý>2ĖęĬþ2Ĩě>©@Ĭ62¡Ĭ2ī)ĬÖ2ÊĬY2®IĬÐ2i÷Ĭ¨2¤ÒĬĤ2ĪzĬ2ãxĬ2ràĬ322pÛĥbĬÁ22pfĬy2Ä¦ĀZĬ22p!ĬĠ2¢ËątĬc2npĬ2\x00Ĕëê>2ĖĒ²e>2ĖĬC2;7Ĭ:2ÙĬ%28ĩĬè2aÀ>2Ė1ĬÔ2ĄÉÎ>©ÂBRĬc2ĭp*5Ĭá22pĬ29ÅĬÍ2uMN>2ĖĬ42¿-Ĭ2ÝñČĬ\\22pÑ«>©gUæq[¬âíòdHĆ/E>û|OĞðċĕôāÿ{ăÈªPĜ$S^GĐWïį¯Vč ¥.&îùwkė£v_Ó·ĎQ#\n±úl¹Ę	ç]+ő6Ą\r\x00	\x00\n\x00\x00\x00\rǐ\n1ȭҾ੟\r\rö\r>	˩\r\n	տ	ࡊ	#\x00	ت		Ն	ٖ	ଧ	#\x00	ࠀ		੄\n\"	EȬϸ\ną\rϴຌǚĆ\r\x00	\x00\nʓ\n౏\nϧ\n൝	\n\n\ny\n̏	Eǚć\r\x00	\x00\nʓ\n඾\nϧ\n௻	\n\n\ny\n̏\nѕ\n୛\nŜ\nӬ	EǚĈ\r\x00	\x00\nϴ	\n\nð\nว	ಫ\nĎ\nؼȬϸ	ĉ'@Ą೤ȮࠖɩćȷޖɧćȻƧɩɧɨĆȽҤɦȲ઴ȴہɨɦ	ɚȸΧȸ໤ɨĆȹऔɚɨ\nɉąȸߨɦąȶ໗ɉɦąȸ˶Ćȷ֩y6\rɰćȼҷɨȶΧȼ൲ɰɨĄȸǳąȽɣɧĆȹƞɨȺছȹؒɧɨćȻϻĈȸҠąȺϻɨćȶଖɧĆȶƧɨɧĄȶߋɚȷʨȼƟɰąȺ୳ɚɰĊĆȷ҄ċ±ĄȾЦa6Č±ĆȾΆĆȽ৿ĆȶɊąȾɊčĈȶβćȷ˪ĎɨȹΔȺòɛćȺࡀɨɛĄȸݥĆȶпɦĈȻ͖ɩĈȸˡɦɩąȷػąȺඥ6 Ĉȶʬ!ąȷӻ\"ɉȽݶȶƟɧĈȹˡɉɧ#ąȺ޴$ɉąȶষɨȼ࠷ȸ੍ɉɨ%ɩąȸÝɨćȹધɩɨ&ąȹʠ'ɉĆȽބɛĈȷՏɉɛ(ĆȺї)ĆȻˈ*ɩąȸǴɚąȼҟɩɚ+ɧĄȷңɚĄȺѠɧɚza6,ĆȻȫ-ąȷȖ.ćȷɎ/ĆȷȺ0ćȷɣ1ćȷпď±ćȵȺ2ćȾЫ3ąȹ̫4Ćȸǵ5ɩćȸ֔ɦȼࡏȼ̓ɩɦ6ɦĈȻళɩȷ્Ȼ໛ɦɩzy67ɩĄȼ̚ɰĈȶ੕ɩɰ8ɛćȸڕɦĄȽ৽ɛɦ9ĆȺΐ:Ćȷ˽;ɩąȽੳɛćȹՄɩɛĐ±ąȷφ<ɦĈȷŀɚćȽޭɦɚđćȼĿ=ĆȽɾ>ąȺɊ?ĆȽү@ĈȽ૕6AąȷȉBĆȼ҄CĈȾੰDɩȶ֎ȻԖɉąȶຝɩɉĒɉćȽĊɛĆȻܖɉɛEɚȸиȳɽɩćȷƧɚɩFąȾʠGĆȼޏHɚĆȶ৬ɦĆȶ੅ɚɦIćȻҀJɉĄȷ̋ɰąȹ̱ɉɰKɨćȻώɧĄȺ๟ɨɧza6LćȶɇMĄȽɞNɛćȼ̔ɉćȸਰɛɉOćȶʠPĈȹʜQĆȹȫRĈȹ͇ēąȹӈSĄȶ̫TĆȼˈUɰćȸࣞɚĈȸ׿ɰɚVćȻӹ6WĈȶιXćȷɷYćȽɯZɰȻ௃ȼ˹ɩȺࠚȹୠɰɩ[ɉĆȼώɩĆȼ࣐ɉɩĔɛąȵ؆ɚąȾກɛɚ\\ɦąȸՓɩĄȸΤɦɩ]ɰȶࠄȾ/ɦćȹசɰɦ^ɦĆȹޒɨĈȺ૗ɦɨ_Ćȹȉĕɚćȵ़ɚɚ`Ćȹׯy6a±ćȻʜbĄȽʬcɧĆȼˉɩĆȶ࡜ɧɩdćȼലeĈȸࡧfąȹ̺gɨȽ̌ȹʑɦȹōȻిɨɦhɧąȷ«ɨĄȷ๊ɧɨiąȼඵjɦćȼںɛĆȸҮɦɛkćȺࠕlĈȷைm6Ėɰȷӎȷ̊ɛĆȹ௟ɰɛmćȻԉnĄȹɯoąȻਗpɩąȸңɛĄȶຑɩɛqĄȻΐrɚąȹ´ɰȹ˰ȹ࢝ɚɰė±ĄȻςsćȺɾtąȶʸuĄȺǟĘ±ąȽزU6vąȶӈwćȻĿxąȼȐyĆȸʸzćȾҺ{ĄȽԉ|±ĆȺȉ}ĆȺ͇~ĆȽ˶ąȻɯĄȼЙɨȾ̌ȻġɧȹĮȷ؝ɨɧzy6ɦȽӎȸƙɧąȻ͋ɦɧąȷЙĆȾȉĈȺ˪ɧćȺǶɛĆȷΤɧɛɚȸૼȼòɰĈȼଷɚɰĆȼȖćȻȯąȺȐĆȼԶɧȽɰȺ˃ɛĆȹҮɧɛĈȶ৮m6Ćȼ๺ąȼǵęąȻǳɚȹࡄȻ³ɩȽĮȹคɚɩĚɨȽಗȵŷɧąȻ౛ɨɧɦȻڡȸˠɰĆȺФɦɰąȹɷąȹїĄȺȯąȸɇĆȽʸĆȷЦa6ɰȶ૦ȶܓɧąȾ˵ɰɧąȺɆě±ĈȼֿĄȼιɨćȶΎɧćȼ֊ɨɧĜćȾʬĆȹෝĄȷҀĝ±ąȻ෕ĞąȾբĄȹǳąȽ٭y6 ćȺɷğąȺɞ¡ɨćȶଡɰćȸѠɨɰ¢ćȶ˽£ćȼɇĠąȷʜġąȸˈĢɦćȶҤɉĈȸ̱ɦɉ¤ĄȺς¥ɰĆȸÃɧȾ¸ȷܫɰɧ¦ɛȶࡣȴȅɧąȸ߂ɛɧ§ąȹீ6¨ĆȺՔ©ɚȼʨȻòɰćȸӛɚɰªĈȻɣ«Ćȼȯ¬ąȺ̺­ĄȹҺ®ɩȽુȸ-ɰȷ͎Ⱥચɩɰ¯ɰĆȺ®ɦȹԷȶࢢɰɦ°ĄȷΆ±ɦȷ൯Ȼ÷ɚąȶӛɦɚģćȻϣĤɚąȺࢭɛąȸࡔɚɛzy6²ĆȾъ³ɰȼ౑Ƚưɦąȹҟɰɦ´ćȺ௿µɨȺښȸటɩąȺʄɨɩ¶Ćȷǳ·ĆȹɆ¸ąȶȖ¹ĈȷβºɰĄȽ੏ɦćȻࢅɰɦ»ĆȸȐ¼ɰȼץȽнɨćȺƧɰɨ½ćȷֵs6¾ɛĆȷÃɩĄȺˡɛɩ¿ĆȹǟÀɦąȺպɩąȺ˵ɦɩÁĆȷɾÂĆȸφÃɉąȶ̚ɚȻڱȽ৕ɉɚÄĆȾүÅĆȾɎÆćȽɆĥ±ćȻ˪ÇĆȽ൮;ɬȲåǤȯЏȗ6ħɤȲ૏Ĩ%\x00ɤȲ˾šȲŰȲ෡ȲʉȳȄȴࢦȲŌɇōĩ%\x00\x00	ɤȲ˾šȲŰȲԍ	ȳ܇		ɳȳƓ	ȳనɳȲǿ	Ȳ܋ȲʉȳȄȳୣȲ˰	ȲŌɇōĪ%\x00ɪȳƻȲ̋ȲţȲкȲ¼Ð\r\x00	\x00\nȲҝɇëȲɪȲය		Ȳ)	R\n	UŜ\n\x00aɑȲ\n\x00ȲӚī%\x00\x00	\x00\n		ȯƘ	R	O\n\nȯÆ\n,ăਞȯࣝ؀ऒ	ŉĬ\r\x00	\x00\n\x00ŖȲƌŚPɇJ¨BɇJ¨īf	஡ȯĻ\nȲˊ\nŵ	0	Qȯ۲ũ	ନȯඕ	ȯ൅ĭ\x00\x00	\x00\nȲൈȲĖ\x00	\x00\nୀ\x00ȴw\x00	²Į\x00\x00	ȲৃȲে\x00	+Ⱦ೐\x00	į\x00\r	\x00\n	Ȳˊ\n\n	\nř\n஋İ\x00\r	O	>		Zı\x00\r		ݻ	$ȯ̡	૚	$ȯʖȯһ	$ȯőȯÏଜ	$ȯ෰ȯ̲	$ȯ̝ȯĕБȯÏȯࢆ	$ȯࡪȯϊ	$ȯĬȯƑБȯĕȯࣾȯÏȯڴʛ6Ĳ\rOȲ)řȲ]றȯಖĳ\x00\x00	\r\n\x00\n	Ȳ),\nٸȲͫɷȲŸȴϮȻ¢ȸ௶ɇ`Ȳ\n\x00ȲƚȲӉ\x00\x00	Ĵ\x00\x00	˘	Ȳ߸ࣨc	෈c	/	ದc	/	D	ਦĳ\x00\x00	ĵ\r\x00	\x00\n\x00\x00ɇëȲ\x00ȳ౞ȲۆO		Ȳ)	R\n	U\nȲǋȯɺɑȲ\nsȯéɤȵͭ\x00ȯ׾ȯथCȯି	ɔȵϖÄɑȲ\n\x00ȯۦ	ȳඉ	Гɇ`ȲʮÑ\rळ\x00ĵı7@ɇΙȲĶ\r\x00	\x00\n\x00\x00\x00\r๠	Š\x00Ȳ̟	Ȳȯê	څ\n	ƍȲçȳ®\nȲT\nௗȳෳ\n৳\nɤோŵ\nࡵƂ\nɤŞҶ\nȲ^൘\nȲ^ൢȯéδ\nȳఔƂ\nɤŞ\nȲ^ݕq\rɇ`Ȳ\n\x00ȳ®Ȳ׻\r#ȲśŢ\rķ;ɝȲ½ȵ࣏ĸ\r\x00	\x00\n\x00\x00ȲŋȯV	\nȲT1ȭı	>\n௹	ȯƑ	ȯĕ	ȯ঩	෱Ĺ\r\x00	\x00\n\x00\x00\x00\rȲT	\nȲ஽ȯV\r1ȭı	>	ã\r\nQȯ§ȯe\r\nQȯ¡ȯe\r\nQȯȯe\r\n\"$ȯӘ\rĺԛQȯ§ȯыQȯ¡ȯыQȯȯe$ȯൊĻ\r5ĸG఑ļ%\x00ɪȻ̒ɪȷοɇ=ȲN!Ⱦঈ௡ȱ6Ľ\x00॒Ȳ๽ɇ=ȲȲϷƴ	ηÒ%ɤȳٜȳ೉ɤȳƒȳܟ̝°ʃľ\r\x00	Ƅ7ȲН		Ȳ)	,ȲəȲ\x00	ȏĿ\r\x00	\x00\nŠ\x00Ȳࡗ	ɇˮȲ\x00ȳ࠳	!ȯ̾\nɇˮȲ\x00ȳ৺\nȯȸ\n	X	Ȳ௓ɇ=ȲɑȲ\x00	؂ŀ\rȽĿGį\x00ɇຠ	ηŁɋłł%\x00\x00	ɪȳƻȳӄŮȲʚ	SȲ:Ȳ঱		،ɇ¯ɇÐȯ૶ŝ	\x00ȳ՚ŝ	\x00ȲޛŌ	\x00ŋ։ࡢŋŃ\x00'!ɥԻȲජȲ಄ෙś̿8ɋłɋǣŌ\x00ඖń%Ŵȯ˴ƽʀʀȳԲʀȳЛԼɶȲɑȲଳŅ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x00\x00\x00Ȳॠ	\nȵէ\nȳȑń/\rΨŒŲ\nɺɺ	ŪUଫொ\rÚ\rȲ)R\rUȲ஺ȯજงؠ	՗ন\nʅ1ɫݬȲÁ৐̑࡬ņ\x00\x00	\r\n\x00\x00\x00\r\x00\nŅ\x00\x00	N\nਇŴȯ෷ɇëȲ\x00ȲࣕȲȯઘفȴ൶\r1ɫɇāȲ෵\rȲÁaɇԅ	ܩĬѺȲఽർɇԅ	ԣʒÓͨɇóȯീɇǇȯഺӟ6ŇѶȯࢀCȯІȯຈCȯ৒ňľȯʇCȯъŉ\r\x00	\x00\nəȲ݆Ňࣃ		Ȳ)	R\nəȲ\x00	NŇ\nԥň\nɜȯే\nɜȯิ\nɜȯी\nઅȯේ\n@ɇ=ȲɇāȲs	चŊ\x00\x00	\r\n9!ȳӪ!Ȳ൬ɺ̜\nŉ	N\n\n!ȳӪ\n!Ȳ˿ŋ%\x00\x00	ħɳ	ɕĨ	8ȳƓ	ȳȨȲǿ	Ȳద%ȲŰDĩ;ȲʉɴȴπA\x00Vɻ>	\x00FȲ҅1ɇʦ\"ȵѹ5࢚Ō\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00	l	%\x00	D	;	A	V	>	F	1	\"ɇĚ	5Ł	ÅɇĚ	+ɇئŜ\x00ɗ	7ȯց\nħ\nɕĨƂ\nɳȳƓȳȨ\nɳȲǿȲկɇ๙DL	+ƕ\nɪȲÈȲרɌ\x00ɌɌUɌɱɇܴŝɌȺǄ	7ȯя	z\rɳU\rȳ࡮	7ȯ̓	લŊ\r\x00ɇŒ	%	7ȯя	zƐ\nսŝ\x00AɇāȲ\x00AȲϱɇ»Ȳːɢ	ɇ»Ȳృɢ8£ɌA+Ɍ;Ŝ\x00ȲהɌ;FŜ\x00ȲرɌ;F1\x00	+ƕ1¦Ɍ;ƑFÄ\n	Aɳ	VɻɕɇذɕஒɳȳƓ	>ȳȨɳȲǿ	>Ȳफ	>ɕɇ»Ȳɜࣲɢ		FɇƉȲɢ\x00ɜ~	Fɜ	1ȳ॓	\"ȵѹ	;ɇƉȲ	A\x00ɴ\x00	V\x00ɺ\x00	>\n	DɇƉȲ	;\x00	F\x00	1\x00	\"\nɇƉȲ\nȳљɺ\x00\nɇƉȲ	V\x00ɺ\x00	>\nņ	A\x00	V\x00	>	5!\x00	ÅĶ	F\nŀ	F	7ȯۇ		7ȯ૖	77ȯƔ	7ඤ	7ȯֻ	7ȯೲȲॗȲࢮȲȝ	\"Ȳ್	ō'ʀʀȳрʀȳçºʱ\r\x00ʳɫȹɽȲ̈ʳ޶ȲȄɏȲ\x00\x00	ÄȲక	\r\x00	ʳ	əȲߦ	ՂɇāȲȺł	Ȳͧȯˉȯఛʲ\r\x00	\x00\n\x00ਂഥʱޚɓɔ+ȴࢤɔऍ@ȴϙɝȲ\n\n͟ȵ෍Ȳ)ൖ\nʲǢȲĮɇ`Ȳ\n\x00ȲƚȲ݌	>ɾȲȳఆȲ\x00	\nȲʱ	ÄȲ˰ʲ	इȲΔɇ`Ȳ\n\x00ȲƚȲైʲÔஶɿǀȲŚɿ˞Ŏ;ɬȳìɣƬŏ\r\x00	1ȭ\n	Ů	>	\"Ŏȯ٫Õʱ;|ʱȯ೾ʱ$ȯڒȯༀʱŐ\x00\r	\x00\n\x00ת	L	ȲЖ	֧	ùճ	\x00\n		\n|ɬȳìɣƬȯৎћ6ő;ŔȲ෴Ö%\x00OCȯҖ,ʉȯඈʊȲ),əȲʊۂʄkȯrʅ&ȯVʆǃ$ȯĬȯVʇ&ȯrʈǃ$ȯɓȯÛʉŒ\x00\r	\x00\n\x00\x00\x00\r\x00ŖȲƌŚPʊ\x00\nȲT	1ȭɬȳ˺MȯԹȯऩȲȯ੒\n>\r\nã	\"\r&ȯŧ\nã	\"Ȼ\r$ȯɓȯϳ&ȯѯ\r\nã	\"Ȼ$ȯĬȯ೟\r&ȯเ	\"\r$ȯӰ\nȲࣚ\r\n	\"\r&ȯŧ(\n	\"Ȼ\r$ȯɓȯϳ&ȯѯ!ɥ		\"ũ$ȯĬȯ৥ɇ`Ȳ	ʮœ\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00ÀޱഝȲНȲT	1ȭɬȳìMȯۏȯ́Kȯ࢓ŵ\nəȲ\x00µəȲ\x00µəȲ\x00µ\rəȲ\x00µ	\"ʄ\nŊʅ	\"ʆŊʇ	\"ʈŊʉ\rb8\nəȲ\x00µəȲ\x00µ	\"ʄ\nŊʅ8əȲ\x00\n	\"ʆŊʇ໻	Ŕ\rœGŗŕ\r\x00	\x00\n\x00\x00\x00\r	ȲT\n1ȭ	ҾəȲ୔ȯس\r\r	ö\r>əȲ\x00\r\nHȯ฽ȯ઎#\x00HȯҐȯඳHȯϋȯț#\x00HȯŚȯເHȯƣȯ๮#\x00Hȯ৯ȯํ\n\"EȬȲɖ\nŖ\r\x00	\x00\n\x00\x005əȲȲౄ		Ȳѩ\n	\nȯڠ\n\nȯම\nȯШă\n$ȯőȯȩ	ɕȯƏ	Ş\nȯഎă\n$ȯĬȯЕ	ɕȯőȯȩ	ȯ͝ȯƏ	#ȯ਻\nȯۯă\n$ȯतȯ੐	ɕȯőȯЕ	ȯ͝ȯőȯȩ	ȯ݇ȯƏ	#ȯࢾ\nȯڃ\x00	#ȯ૩\nȯඍ\x00	#ȯল\x00	ĀAȯݖȯȜȲo&ȯൃȯ঑ŐȯຟȯখȲGŗ;ŘŖ²Ř\x00\x00	\r\n\x00\x00͡	ɥ		Ȳ੉\n1ȭɱȲŋȯ฿	KȯతŮ>\n\"ȬȲɖȲw\x00#ȯ๗		\n\"ȬȲɖȲw\x00	ɨɇ`Ȳ\nʮř;ɘɒ²Ś\r\x00	\x00\n	ř\n\nȲT1ȭ\n\n\nȯԆ	\n>	əȲ\x00	µ	əȲ\x00	µ	əȲ\x00	µ	əȲ\x00	ӽ\n#ȯԆ	\n>	əȲ\x00	ईś;ʁ	ʁȲ+ɏȲ\x00ɫȶȑȲ঻ԃ6Ŝ\x00;ɇāȲsȲɂŝ\x00\r	À3೴	ɇāȲsȲ੣ɇ=Ȳ	½ɇ=ȲŞ\x00ɏ3̨ɑȲ\x00ȲȲɂş\x00ɏ3̨ɇ=Ȳ½ɇ=ȲŠ\x00\r		ɇYȲ\x00N	ȯӢژɑȲs	\nɑȲ\x00	ܘš\x00\r		ɇYȲ\x00N	ȯӢೕɑȲs	\nɑȲ\x00	ॻ×%ʱ\x00ʲ\x00ʳʲʳlʴʲɐL࢏ʳ\nʱʳ\nɇ̀	\x00ɇ҂\n|%ʷ\x00\x00	\x00\n\x00ʷȯҖ,ʷȲˆkÔpÍʷȲˆkȯÛpȯ఻ʷȲˆkȯΟpঃ\rOʷȲ)řkCʷŠkʷȲ^sʰʷȲ෪ʷȲՁ	ʷȲĄȯé\n	/	DʷʷȲwȯé©k\nkk\x00|\n\x00۔ʷׂʴ\x00\x00	p൏ʴ|ɐ୫ё	\nʴɐɄ؇ё	¦	p\rOƽŠHȯʵŠ͚ŠKȯஉʵ\x00\r	\x00\n\x00\x00\x00\r\x00	5\nȲT·\r\r\n\rR\rČ0k໮\x00#٥Hȯ٘	Ȳ͚KȯʁقȯঘKȯʁȯЏȇ	Ȳo૴ȯՑ๯ʱ&ɨ	ʶ\x00\r	\x00\n\x00\x00\x00\r\x00	5\n\x00ȲT\r·R\r৓ȯະ\r໵$\r	\n\n\n\n|\x00\rࢩ\npˎ	Ȳ\np\n\n಻		;ʵ\x00ʳ\n;ʶʲ\x00Ţ\x00\x00	\r\n\x00\x00\x00\r\x00\n/D\rȯҞȯб,\n0\nѧkȯǾ&ȯǌȯǱ	ũ$ȯǔȯú0\rǥȯú0ѧ\nkȯǾ\n&ȯǌȯǱ\n	Ӑ&ȯҗȯҋȯǔȯħȲ\n\x00ţ\x00Ё˙/͆ఁŤ\x00\r	\x00\n\x00\x00\x00\r\x00\x00ĸ\n	ɬȳìȲŋȯĊ55\rȯആȲǦȯĊĸŏȯʁȲౘ\n\n	\n,ȲĸȲw\nMȯƖ\nMȯ¸ȯ੸Ȳw	Mȯك\n\n\r\n,Ȳ\rȲĸ௦\n\nȲ)\n,Ţţ\n\n\x00\nȲwȲȯФĹť\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00	1ȭȲȯĊ\nĸ\nĸ\n/DȲϚȯҞȯ{ʍyȯஸ\r\rȯ౭\r>0ρkȯǾ&ȯǌȯǱӐ&ȯҗȯҋȯǔȯú0Kǥȯú0ρkȯǾ&ȯǌȯǱũ$ȯǔȯħ\x00\x00	\n&ȯ§ȯe	\n&ȯ¡ȯe	\n&ȯȯe	\nǥȯe	\n&ȯ§ȯe	\n&ȯ¡ȯe	\n&ȯȯe	\nǥȯeãୌ	\nƎ	Ȳ^\nK\x00G	Ø%ʱ\x00ʲʱԙʲԙʋ|Ёʱ\x00ʲளַ6Ŧ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\n\x00ȲǦȯؓ\nɇǉPĸ\n\n¢ȲT¬ȲǭȯԸȯຐ,ƎŐඅȯȲŐȯԭQȯϝȯŤ&ȯćȯƳȯϨ&ȯøȯƳȯƥ$ȯڳŐƂkȯƥQȯŤkȯĚ˸&ȯ̍ȯ৉KѣO\r\rĀס\r$ȯƐKȯۗCȯˌ\rȯƔ\r\r	ƍQȯב	Y&ȯćȯϒ	э&ȯøȯϒ	Ϫ$ȯ໯\x00Zŧ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\n¢	¢5ȯƘ,ũ˸&ȯ̍ȯ۫O\r৵\n\rb\rන߯फ़ഷkȯ૟kȯےkȯV&ȯƥ$ȯ఩ȯՇ\n\r\x00\r\x00\r֙ȯƘ,\nћO\r\rȯƘ\rR\n\r\rୈMȯࡸMȯ౐Mȯ͸\rMȯ˃Ѱȯ͸Mȯܥȯg,S\rkȯŤQȯƖ	SkȯŤQȯ૥ȯ¿,SȲǭ		SȲ౧Ũ\x00\x00	\x00\n\r\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00	˙/\r		ȯढDюt	Ίȯͬ¨ȲŋȯԺȯrȯVਲ਼\n/\nD\nt\n¨\n̮,Qȯȃ\r&ȯćȯ&ȯøȯ$ȯ\rQȯȃ&ȯćȯ&ȯøȯ$ȯyQȯȃ&ȯćȯ&ȯøȯ\r$ȯȯŧQȯȃ&ȯćȯ\r&ȯøȯ$ȯȯͿ#ȯV\x00\r\x00Oȯg,		ȯ൚QȯϝȯŤ\r&ȯćȯƳȯϨ&ȯøȯƳȯƥ$ȯã\x00\r\x00\r\x00\x00Eũ\x00ԛ˙ණ͆๣ю௠ংතŪͯŎȯɔŎȯɔŎȯɔŎȯ૷ū\x00\r	\x00ʱ\x00ʲ\x00ʳ\x00	ʋʱ	/ʲ	ফʱಙʱ଴ŧ\x00ʱ\x00ʲPʳŦ\x00ʱ\x00ʲº\n\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00	ɬȳìȲŋȯಪ5\rȯ઀ȲǦȯˉ	ŪŏȲǭȲƀ\rO\nȲ)\nŵ\n\"\rĸƵ\n\n	ʍȲw\nkȯԈ\nϺȯé	ũ\x00+\x00Ũʳ\x00sʱƵȲ),ȲԘĹ\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x005ĸ\n8ȲĄȯǜȲwȯൽ	Ȳŋȯๅ\n\n	ʍ\rȲw\nkȯԈ\nϺȯéŨʳ\x00\rǡʲ\n	ũ\x00ʴȲ),ȲǸ\rzĹ\nȲืȲĄȲvl\n\x00¢EŬ\x00\x00	\x00\n\r\x00	\x00\n\x00ŖȲƌŚPζ	AȯК\nAȯ҉ū\x00\nG\x00	ŭ\x00\x00	\x00\n\r\x00	\x00\n\x00ζ	AȯК\nAȯ҉ū\x00\nG¢\x00	Ů\x00;ŒŬ\x00²ů\x00;ŭœ\nŰ\x00;ŗů\x00²űҊûQȲߟuϘܐŃ6Ų%\x001ű̘ɪ,_ผǢmxȲĄȯǟųउű๫_ழmŴ\rɇǬU@Řŵ;ɇǬZŶ;ɯŘɇǬଙŷ\x00Ɂ	ǕbEÜ;bȲ଼Ÿ;bұŹľbȯÏbұź\rbಧ$ȯ̡ج$ȯࢵȯһ$ȯőȯÏbȹ$ȯݠȯ̲$ȯ̝ȯĕbȯÏbȹ$ȯ௷ȯϊ$ȯĬȯƑbȯĕbȯÏbȹ$ȯݸȯರbȯƑbȯĕbȯÏbৌŻѶbȯƑbȯĕbȯÏb֛ż;ŻѳȯอŻvɵ6Ž\r\x00	ź\n	b\x00b#EȲw	\x00bÝ\r\x00	Ÿ\n	b\x00b#EŗȲw	\x00b²ž\r\x00	ź\n	b\x00b#EŗȲw	\x00b²ſ\x00×!ȲďËčAȯʫȯɗȲƀ\x00×!ȲďËčAȯʫȯɗȲƁ\x00AȯˬȯɵƂ\x00Ƃ\x00×!ȲďËčAȯٽȯ܀CȯҐȲ+CȯஏȲȮ&ȯȯ˅ȯ࡫Ȳ$ȯџCȯچȲȮ&ȯ¡ȯ˅ȯ࢟Ȳo&ȯȯpȲ$ȯџCȯԯȲȮ&ȯ§ȯ˅ȯ·Ȳo&ȯ¡ȯpȲo&ȯȯpȲ$ȯ׫ȲȯƇȲo&ȯ§ȯpȲo&ȯ¡ȯpȲo&ȯȯpȲ$ȯథƃ\x00×!ȲďËčAȯˬȯɵȲ&ȯĊȲ$ȯĿƄ\x00×!ȲďËčAȯˬȯɵȲ&ȯĊȲ$ȯĿƅ\x00×!Ȳ̼ǕȲo&ȯ§ȯpȲo&ȯ¡ȯpȲo&ȯȯpȲ$ȯĿƆ\x00\r	\x00\nŖ!ȲďËǕ	ȯŭ\nŐȯŭȲo	&ȯ§ȯpȲo	&ȯ¡ȯpȲo	&ȯȯpȲ	$ȯpȲo\n&ȯ§ȯpȲo\n&ȯ¡ȯpȲo\n&ȯȯpȲ\n$ȯĿƇ\x00ŚȲҥȯஆſ\x00ȲʙƊ\x00vˍ6ƈ\x00Ś\nƂ\x00ȲʙƊ\x00Ɖ\x00Ƃ\x00ȲʙƊ\x00Ɗ\x00\r	\x00\nO		Ȳ)	,\n	ਆ\n!Ȳď\nË\nč\nAȯʫ\nȯɗȲ	ĦƋ\x00\x00	×	!Ȳ̼	Ǖǃ	&ȯ§ȯeࢯ	&ȯ¡ȯeȯশ	&ȯȯeȯƭ	$ȯݽÞJ©QЮʐʱʱ%ʲ\x00ʳʲlʳŁʏ\nʎºʴ%ِ̝ɇǉѺȲĄȯǟ\r\x00	Àࡁȴɢȶż8œ\n	ĻȲĄȯ́ȲwȯǜĬǀ	8ť\x00ʴfŘ\nɶȲɑȲƇȊ Ȳɬİʲ\x00ୂ\nÎʵ%\x00\x00	\x00\n\x00\x00ll	̝ઑ\nʲ>ʲ\n/ ȯƐ\n7ȯè̽		\n˕ʶ\x00ʏ\nʶ\x00ʎ\nʳߑʶ\x00\r	Ƚ8	ō\n	Ȳȯƛ	Ś	\n	Ť	\x00ʴf	ĺĬ	޵ȳ˧	\nȴɩȶŒ	ࡃ\n঒Â\x00{	Ʌ\x00\x00	\r\n\nAȯƐ\n̝߆Lʲॕ\x00\n\x00	Ĩʳ7ȯƛʳ£ɮʵ௪	\rʲUIܽ̝̽ࡤ௥ƌ'ʐ@ʐ{ƍ\x00\x00	'ʐ	ຕʐÂ\x00\x00	ß\x00\x00	\r\nO\n\n	\n,\nǙ\nZƎ\r\x00	\x00\nŠ\x00ȲĊ	/\nшŠ	\x00Ȳવj/+ш\"\nЬƏ\rj\x00+	#Ȳś+L\"	#Ȳ¸\"ŢƐ\r\x00	ȶϗȹ¨ȺॸȺࢫ		Ȳ)	řŝ\x00	ුƑ\rŠŠ\x00ȲʻȲ୏ɇˮȲ\x00ȳ౮ɑȲsւር6ƒ\x00'@ȲśEƓ\x00'@Ȳ¸EƔ;ŠŠ\x00ȲʻȲࣄà\x00\r	\x00\nȲçȲ·#Ȳ໧		Ȳ)	R\n	UŜ\n\x00a\nȲ̶ȲӚƕ'@ŠŠ\x00ȲʻȲטƖ;š\x00ȲࢺƗ;š\x00ȲܝƘ\x00;ƗǀƗå\rʱ\x00\x00ʲ\x00ʳ\x00ʴ\x00ʵ\x00	\x00\n\x00ʶ\x00ʷ\x00ʸ\x00ʹ\x00ʺ\x00ʻ\x00ʼ\x00ʽ\x00ʾ\x00ʿ\x00ˀ\x00ˁ\x00˂\x00˃\x00˄\x00˅\x00ˆ\x00ˇ\x00ˈʱ¬ʲʳ¬ʴʵ¬	ȯ੝\nȯȞʷȯĻʼˉ	\nʽˉ\n\nʾ5ˀ̝ēˁȺ_˂˄˅ˆ̝ēˈl@©HÔEÔRLQ\x00N\x00/\rЮ૳ʺ˓ʻ1˔ȯÃʸŶĔfʹħxȲ҅ĭɪ\x00ȳƶ\nĭɪ\x00ȴū\nĭɪ\x00ȴ¢	\nĭɪȲЌȽƃ\n\nĭɪȲЌȺ¨\nĭɪ\x00ȳ\nĭɪ\x00ȵū\r\nĭɤ\x00ȸȑº˙ल˙Ŷ	˙ȯr\n˙ȯ-˙ȯV˙ȯŇ\r˙ȯÛʸ8˛ன˕ȯॽ˗ȳ֢˝ָ\r'ʺɥ\\˚ʳ\nʶ	Ɗ\x00ʶΞˉ\r˟\x00ˠ\x00ˡ\x00ˢ\x00\x00	˟\x00ˠˡˢ5l	\n\x00Z\x00µ\x00¤\r\x00n\x00\x00t\x00w\x00s\x00\x00\x00{E|\n࠮ˡȍ˟ ˠˡ ˠ%ӫZ¶ˢˠˠ0ˠȍ˟ǣ\r%ӫZ¶ˡ0ˡӕ˟Ǥ˟\x00ˢˡ੦ą֪µŏˢˡ\x00ˡ0ˡȍ˟ͨˡKˠ˟Ǥ˟ˠˡҜˠˡľȍ˟ľӕ˟Ǥ˟;ˢҳˊ\x00\x00	\r\nO\n\nö\n>\n	ˋ\x00' ɥ ɥഴ۹Пऄङˌ\x00;ɬȲźþ࣑þŬâ೿âඛˍ\x00;ɬȲåþ૪ɬȲåâܰˎ\x00\r		0īȿİȰɬȲźīŬİҡɬȲźīŬİӑɬȲå	Ӕ	ɯ	ǣɬȵ<	ˏ\x00\r	\x00\n	0īȿİȰɬȲźīŬİҡɬȲźīŬİӑɬȲå	Ӕ	ɯ	P\nɬȵ<	\nફ\nȯзɬ૔\nŢ\nː\r\x00	\x00\n\x00\x00\x00\r5	1˖̦\nٱȲ),\r1˖þ\nȾâ\nƱȲˏ\r\x00	Ū\nEˑ%\x00˟\x00ˠ\x00ˡ\x00ˢ\x00ˣ\x00ˤ\x00˥l˟5ˣ5ˤ5˥5\x00	\x00\n\x00¥\x00~\x00\r\x00«\x00É\x00\x00´\x00¯E|\r\x00	ˠˢˡˤ5˥5˟5ˣ	w?	7s?		ହ	7wõ˟ˠˍ{	\n\nˠĀ˥Ȳ{	ഓˋ{	\n୤ˣˢˌ{	\n\nˣˢʛȯ໷ˡ#ˣˢˢച{	\nˤȲ	ͯˡ\x00ˢZ\n\r\x00	\x00\n\x00\x00ȯÛ	5\nˊ	\x00ؕˢö>ˣCȯê	౩Cȯ	১CĔÜ	ஃCĝÜ	ംCȯॉ	ৢ	෭ö>	஫\nٟ\n\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00ȯĺ	\nl\rŅˠ@	Ůˠೳ55\n໋ˠઓ˟y˟UశAȯ༄ॢෟ#ȯຩK\x00į\x00ЃΒ\nŞԝ\x00ੁȯฃӁ൥,ࢠį\x00ЃΒŞԝO>ѮȲȯఝາ\nA	\r\r\n\x00	ɬȳĩ\r\x00	Ç	\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00£\rŁŅˤȲȯ৔˥Ȳ๭୐˥ȲǁR	˥\n˥ૌˋ	\x00\nࠍ	Վ\nա0	â\nȰ	þ\n޲ȯݘȯݜȯࡘËȯړȯکȯڥAȯ঄ȯ଒	â\nڇȯআȯڬȲΡȲȯഛȲвȻඁ·Ȳ),#bȲT·Ȳ),ɬȲåѭ\n#ࡠȲவ0ȲƀѵȯrAȯࣣƺ\rऌ\r൵\x00૿ȯ৤\r\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00ȯ෌	£\n££ࡡˤȲ\r¬·ˤȲǁ,ˤˤyݗȾ	78\rØAȯê\n	L	+Øࠡࠧ78\rØAȯêL+ØAȯè\n7	8\n	\x00\rࠣAȯè78\x00\r؍\r\x00ˤȲȯ൛%\x00\x00	\x00\x00\x00\r5	ŅˤȲࡂȯਵ\x00Ȳ়\n\x00'KAȯܿKAȯปȯഉːˤ\n\n/๒ȯ{Ȳ),\r\nఋ!\r8Ø	Aȯʌນ	ڼ	Ø\rͪ\x00Ȳ਄\x00\r	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00	ȯฒ\nˤ\x00ɯ	MȲ་ɥ\x00ŅȯॷȲǁHȲࣆ>1˖߭০ܯ੫7ɥ8ˎ\x00\n#\x00ɬȳĩ\x00ĂăKࣰ೙ȯ໎ȸݓ\x00\x00	\r\n\nυ7ʱฌ߅	Ȳ̷ˋ{wf	\nչ\n%\x00\x00	\x00\n\x00\x00\x00\r\x00\x00ˤ/1˖̦	ɥ\x00\n·\r\rˤȲǁ\r,ˤ\rˍ\x00ප1˖þȾâƱ\nˏ\x00\n	!ɥ\n!		ЎØ	\n\x00ஓ\x00Z\r\x00	\x00\n\x00\x00\x00\r\x00	\nظˈ	ˈ1˖ˤบˤೞˈ	ˈˈ\x00ˤȲˊ\r\r\r,ˤ\r	ȕþˈʋ\nȕâˈƱˌ\x00\nˈͪ	\x00\n\x00\x00ҳ˒%\x00˟\x00ˠ\x00ˡl˟5ˠˡ\x00	\x00¿\n\x00^E|\r\x00	ˠˡ·w?7s?Ó	{\n	ȲȯƗ	Ȳȯּ˟ˠ	\x00ˠϽ	Ȳȯʌˡ໘	ˡ\n\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00ȯʑ	ȯල\nŴ5\rŅˠݴˠö>˟Ȳȯҭ\nˎȳܙ\nȳ͘Ͻ\nʴö>ʛ	\r؛\r\r\x00	\x00\n\x00	פ\n\nˠö\n'\n˟\nUȲȯಡȲȯ਩ȲڮȲ৹	߃˟\nГ	˓%\x00˟\x00ˠ\x00ˡ\x00ˢl˟ˑˠ˒ˡˢȵӳE|\x00\x00	\r\n\x00\x00\x00\r\n௤ ʲट˟>˟ȳÁ˟cʼ\x00\x00	\n!ɥ8\n\x00ˡΛʼt২ˠ>ˠȳÁ\rˠcʽ\n\r!ɥ8\n\r\x00ˢΛʽtँ\n˔\r\x00˟\x00ˠ\x00ˡl˟ˠˉ\nˡˉ\n¸	\x00¬\n\x00\x00³E|	\x00\x00	'ࡅ ʲ8ˠn	\n˟Şˡn	݅³\n\x00' ɥ@E;ɯMȯಿȯݧ%\x00\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00 \x00!\x00\"\x00#\x00$\x00%\x00&\x00'\x00(\x00)\x00*\x00+	\n\rʷ\x00 ʷ\x00!ˠ\"ˡ!ͩ#ˠw?#7ˠs?#ˠ#Ó$ˠ{#\n%$\x00	#%/#%Dɬȳĩ$\x00\nɬȳĩ$¥\x00\n$~7ɥ8&$~\x00&۝Ø#&D&/	ЎȯѾ\nȯѾ઻'$«\x00#'/#'D($´\x00#(/#(D)$¯\x00#)/#)D#)t#)¨\rɬȳĩ$É\x00\r\n$7ɥ	 ʷ	$$˕ȇɬȳìMȯИȇɬȳìMȯИAȯഏăѴȯնȯࠇăѴĝ๬ĕ0Kȯ৅ȯࠤɬȲťMȯÃɬȲťMȯÃɬȲťMȯൟŅ\"ͩ#ˡw?#7ˡs?#ˡ#Ó*ˡ{#\n\n#*\x00#*¿\x00*^7ɥ	 ʷ	 *^  *^˕ ʷ	ƺ  ʷ	 ƺ#ʶ5+	+ځ 	+iȯ٬ſʶ\x00+\nƄʶ\x00ɬȲť	ŪƄʶ\x00\nƄʶ\x00˟\nƄʶ\x00\nƄʶ\x00\nƄʶ\x00\nƄʶ\x00\nƄʶ\x00\nƄʶ\x00\r\nƄʶ\x00\n\nƄʶ\x00\nƀʶ\x00\nƅʶ\x00ϡƅʶ\x00ϡƅʶ\x00ا˕\x00\x00	अȲ͈ඌȻڋȷ೚ȳ͙	೘Ȳ΋Ȳಚȴ๤ȴౢȲ৞Ȳඦ˖\x00ஹ้˗;̝°ˆ˘˘Ȳਭ˙\x00\r		1˕\x00\x00˗ȳஅʸ	˛	૽˘	ޕˇ ʲ	˚ʲPʽn	\nˇʳ\x00ʽÜ˚ʳ՞˅໔	Ȳ̙ʼn	+	Ȳਫ˚ʲ\x00ʱ\x00	\n	ȲСʴ	˅ȯඝ˄˅ȯन	Ȳȯ΢˃	\x00˅໨	Ȳȯ׋ˋ˃\x00	˚ʲP˅ߚ	Ȳȯê˅č	Ȳ̷	ȲСʵ8˅ȯ-˄ܜ	Ȳ̙˄ࠐ˄˄Hȯê˅٦ˇʲ˚\x00\x00	\r\n\x00\x00ȶȥȶT ʲ	ʼ̇ʽΘ\nʺȵภ\x00\x00	\nʻ¸\x00\x00\nǈ˛\r5ȲȲڰȲ೛ȲʋȲभȲʋȲƱȲȲ֥ȲȲऎȲȳ୕ʾȲɇ`ȲॹʾȲങ̝°ˀHȯֲ˝˞˜%\x00\x00	\x00\x00\r\x00Ŵȯદ		Ȳ)	ݷ		ી\n	୧ɇ`Ȳ\x00ȲʄŒųຯ%9ɤȴਬɤȴإȼ৫ɤȸìȯ൸ɇ`Ȳ׀ɬȳٛ\r්ɠxȲ੩ɤȳຓɤȳƒȳຶɤȳƒȳฏ˝%ۃʿ	ʿ˜ŏ˂ĀȲʿ\nȲ˂\nȲʹ\nȳ˧ʾ\nʾ5ˀ̝ē˞ɇ`Ȳ૫˞\rŴɤȳܶ1ɤȳԩɤȲೝ1ɤȲƅȵఃˎȲǩȹtˁnȳϖ॑ƙ%ʱ9ʒ\\ʒ¬ĭɪ\x00ȼʦƜ\nɋłʱŃ̝ŘȯؽD!ɋD\x00ɇǷȯrɇ३ƛɪȲӭº\r\x00	\x00\nɇ=ȲȲ ȲЯƞ\x00ȲҒȲύƞ\x00Ȳżǰ̗ʱȃ\x00Ȳќ̝ɿ¥ȲಞȲ:ȴʖȴ੓ȵ๚Ȳ¼ٓȲΩɇ¯ɇŔȯঝ	Ȳ:Ȳŀ	܏	ȲŚ	Ǿ	P\nư	ŨNȲࠬɷ\n୓Ș\x00Ȃનƚ\x00\r	\x00\n\x00	Ȳ:ȳܪ	ɏ\\	̝٪v\nʕ	Ĩ\n8\nlʕ	\n\x00ɇ»Ȳ	਋Ȳഀ	̝Ǐ	\n\n%̝Ř	\nŃ\n%\n\n77ؚ\nƛ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\x009Ѥɥ\\\n1ȭȯെȲ_\rȻࡎȹછ		P\rЋȀʏ'ভUࠪ࣡\n\"\x00\rǘΘ\nࢋȋ6ƞ\x00'Ȳ:ȳභ̝Ľ\x00\x00Ȳ:²Ơ\x00\x00	\x00\n\x00\x00ą7ÂÂ 	Âº\nÂvÂơą୑ƢąiƣąeҰqҰϘaÂr	rঠ	ȲీƤ\x00\r	\x00\n\x00\x00	̝ɋȯÃ\n·෣e଱i	\nã\nH	Ȳ௫̝ɋ	Ȳƀȯܦƥ;į\x00ʛƦ;į\x00ʝƧ\rƄ ȲċȴઆȲ΂ȴҢّƨ\r\x00	\x00\n\x009Ȳͤȯ޳	/\nΨ\n!Ȳ͑\n!Ȳே	uƢ>	iȲଢ˯\n˭ȲȭɇJÇȲÅȲȲѻ	7ʨ		9	Ȳͤȯɀ		ȲȯŧuƢƧXƦƪξ	Ȳ^	Ȳȯ-ȯƸ˯\n˭Ȳ^ȯš\x00ȲÌȲȭɇJ}ȲÅȲȲ৸	7ʩ8		\x00		ȲţƦȲȄȲȅ	Ȳ^	Ȳȯrȯé˯\n˭Ȳ^ȯš\x00ȲÌȲȭɇJ}ȲÅȲȲ஖Ʃ\x00'Ȳຄȴॴį\x00ʜƪ\r9Ȳȯɺɇ»Ȳ໹ɇ»Ȳ\x00ȲڎȲ΂ȴҢڿɹȲǡȲௐzΙ6ƫ\r\x00	\x00\n\x00\x00\x00	ಃ	uƢ>	iȲ՝ÉɇJ\x00Ȳ^ȯšȽஊ	iȲӝȲǋȯ΢Ȳ^ȯšɇJÃȲĘ	\x00ȲÌȲȲѻ	7ʩʝ\n	\x00\nt\n/Ʃ\nƋi\x00೭ȲȅȲȯƐ#Ȳ௵ÉɇJf\x00Ȳ^ȯš\x00य	7ʨ\n	9\nȲЄȯɀ\nt\n/ƧXƩi\x00ƪξÉɇJf\x00Ȳ^ȯš\x00Ȳƪ\x00ȲÌȲǰȯƐȲ^ȯզƬ\r\x00	\x00	t	Ȳƛň/ÉɇJX\x00¤ȲĘǅȲӌƥ	¤/ÉɇJȲĘ੡	ณƭ\r\x00	9ȲЄȯɀ	tƧ		ƪ	\n	Ȳƛň/ÉɇJX\x00¤ȲĘǅȲӌƥ	ƋƋȲௌƋօƋȲె¤/ÉɇJȲĘଂ	\x00ಶƮ\r\x00	\x00Ȳǋȯҭ	D	iȴШÉɇJª\x00¤ȲĘň	\x00Ȳ^ȯ̩ȲۓƯ˘7ݺʨƭǯʩƬǯʪƫǯʫƮǯʬƨડư\x00\x00	\r\n\x00\x00\x00\r\x00\x00Àਏ\n̝ēȩ\n\n̝ϲ	°O\r\rȲ)\r,\rŠg	Ư\rි\n̝ēɇóȯݨƤÈ\x00¹P\n̝ē½Ȳݙ\n̝ϲɤȲ˺GŉƶȪƛ\x00	Ͱʟ	\rÀȲ΀Ȳҵɇ=ȲȲǻȘ\x00\nȲΖǰPȂë\x00\x00	'ƺa̝ȗ\x00	\x00NȲА#	E	Ʒ\rɤȽຍȲԪчȲ࠲uĽ\x00ȳܠȊȲӀчȲΈȳ෗ȲਈȳԏȲ੤Ȳѓȯߍȳԏȹՙ	ʒƸӜȲΈȲѓȯՖʒƹ\r\x00	\x00\n\x009ɤȲ࣌ۜȸȅȻ؊		Ȳ)	ݡɤ	്ɤ	୾ȲӼಋ\nɤ	ࡇ\n\nȴɛȲ)ř\nȴɛӵ\nȴɛSȲӼ఍ƺݼȲฝȳૣɇ¯ɇŔȯʵħģȳଥħxȳ୆ƹ૾ȳαȲੂɫȼইȲÁʞȲȳ໲ȳαȲӀɫȾքȲÁɝȲȳ୰߽ʋ6ƻ\x00\x00	\x00\n'ƺ	೒\n½Ȳ̝̂ȗ\x00\n\x00	ĦƼ\x00\x00	\x00\n'ƺa̝ȗ\x00\n\x00¥ƷXĽ\x00ȲͶȲ\n0̝ǂޮ\nL̝Ľ\x00	\x00\nG\n๸ƷXĽ\x00ȳݏȲ\n#	ಠ	\n\x00ț2\nƽ\x00\x00	\x00\n'ƷXĽ\x00ȲǄȲ\nȍ\x00	Ä\nL̝Ľ\x00	\x00\nG\nƾ\x00\x00	\x00\n'ɪȲ\n̝ຉ\nL̝ఙ\nG̝ঞƿ\x00\x00	\x00\n\r9ƷǕ\n\nȲ	ĎL	\x00ƶG\nǀ\x00\x00	\x00\n\r\x009ƷǕ\n\nȲ	ĎLȲे	\x00ƶG\nǁʱ\x00\x00\x00	'ƷʱXĽʱ\x00Ȳ࡛	Ȳշʱ	\x00ʱ\nE	\nǹʱ\nʱ׷ǂ\x00\x00	\x00\n\r\x009Ƹεɇ¯ɇŔȯҪȴӿɇ=ȲȲѢĽ\x00ȲήȲʽĽ\x00Ȳ͌ȲҧȲಐ Ȳ\nȍ\x00Ä\nLȈ\x00\x00\nG\nฮǃ\x00\x00	\x00\n\r9Ȳ͑ƷXĽ\x00Ȳಀ\nȲോƚઐ\n\x00Ȳ୉ɥƴγ\nì\x00\x00	\x00\n\r\x009ɥɇӂ	ȲċʠȲ¸	U!ɥ\x00\x00	\x00\nN!ɥ@ܡ ȲА	̤\nE	\nǄ\x00\r	\x00\n9Ʒ	ɇ=ȲȲ 	 Ȳķ\nUƷ\na\n9\nFŜ\n\x00ȳࣵɇ\n\n̝ǂN\n7ɥ@̝ા\nޝZǅ\x00\x00	\r\n\nȳϞȖ\nN	@ɇ\n਽\nǘǫ6ǆ\x00\r	\x00\n\x00\x00\x00\r\x009Ʒ	ɇ=ȲȲ 	 Ȳ̴ǅ\x00࣭	ȴщ\nȜʢȯ´Ȝʩȯ´UȲə\nȴԢ	̝ĵЍ\nȳȠ\rȳϞȎ\n\rȲ<Ȳ÷G\rȲ੺ħʭĨƺaɇǢZǇ\x00\r	9Ʒ	ɇ=ȲȲ 	 Ȳ̴ǅ\x00ۡZǈ\x00'Ʒaȗ\x00GZǉ\x00\r	9Ʒ	ɇ=ȲȲ ȃ\x00aɇɹ	Ȳʶ̝ĵԘZǊ\x00'ħʭɇഁƷXĽ\x00Ȳंǅ\x00ञZǋ\x00\r	\x00\n9Ƹεɇ¯ɇŔȯҪ	ȴӿ\nɇ=ȲȲѢĽ	\x00Ȳή\nȲʽĽ	\x00Ȳ͌\nȲҧ\nȲٕȍ	\x00\nÇZǌ\x00;ZǍ\x00' ɪ@̝ŘȯԃZǎ\x00\r	9ƷXĽ\x00ȲǄ	ƚN	@	ŉZǏ\x00'ɪ@ĨƺaɇǢZí\x00\r	9ɥɇӂȲċ	ʡȲ¸U	!ɥ@	\x00ÇZǐڝȲ಺ȲşȺÊȻɫȳਊȲܬɇ6Ǒ\r\x00	\x00\n\x009ǐ̜ȲŸȲƃȲؿȴȳɍȵԖȽռ		Ȳ)	R\n1ɫȳʲ	೻\nȳ¼౳1ɫȽًȳ¼பǒ\r\x00	\x00\n\x00\x00\x00\r\x00ȲŸȲƃȳɍȲׁ		Ȳ)	R\n1ɫȳʲ	ॖ1ɫȳʲ	Ďȹ͎	Ďȳ؁\rŮ\nȳ¼Ó\rயȳ¼Óơ\r˛ฅ\r˛ไ\r7๰Ǔ\x00'ɫȼĠȳഢȲÁۺ8ȲĉɫȶעȵęȲĉɫȶ૧ȵ௔ȲĉɫȷਕȲĉɫȼ௘ǔ\rɇЈǓnɇÐȯȝȵʨߜɪȲÈȳǶȳě\x00ȟ\nȳӸɇЈɇÐȯȝɇāȲ\x00ȵǬȲϱǓ஍Ǖ'Ǒ࣬ǔ­γǖ\x00\r	ʟ#Àǒʟ֜ɇ¯ɇÐȯ෦ʟǕʟ+Ǒʟ	1ɇதȴۻʟ\x00ȼӄȟ	\nʟ	Ƚଵȴ༇	ȲȆȴַȴҁʟ\nʟఞƶǗ\x00\x00	'IȴഋȲ୿ɇੋȯȲ̝࡯½Ȼඨȴࢍǯ2Ĵ\x00\x00	ǘ\x00\x00	'ɤ@ƴȲɤ\x00	GĴ\x00\x00	Ǚ\x00\x00	'ɤ@ƵȲɤ\x00	GĴ\x00\x00	ǚ\x00\x00	'ɤ@ȔȲ\x00	GĴ\x00\x00	Ǜ\x00\x00	'ɤ@ȕȲ\x00	GĴ\x00\x00	ǜ\x00\x00	'ɤȊ	ʡȲ̂ư	ࠈĴ\x00\x00	vƟ6ǝ\x00\x00	'ħģɡ@̝࠵\x00	ÕĴ\x00\x00	Ǟ\x00\x00	'ħģɡ@̝ח\x00	ÕĴ\x00\x00	ǟ\x00\x00	'ħʭ̝ݿ\x00	ÕĴ\x00\x00	Ǡ\x00\x00	\r\n\x009ħģɡ\nšȲŰȲԍŠȲŰȲ୍ɇō\nEŉĴ\x00\x00	ǡ\x00\x00	'ɪĔɇఈ	ʡȲȶǖ\x00	ÕĴ\x00\x00	Ǣ\x00\x00	'ƷXȲ˟Ȉ\x00	/	ɥĴ\x00\x00	ǣ\x00\x00	'ƷXȲ˟ȍ\x00	ÕĴ\x00\x00	Ǥ\x00\x00	'ƷXȲ˟ȏ\x00	ÕĴ\x00\x00	ǥ\x00\x00	'ɤȴр̝گ\x00	GĴ\x00\x00	Ǧ\x00\x00	uɤȷॺ	ϕɤȳеǻ	ࠛĴ\x00\x00	ǧ\x00\x00	ɤȵ͜uɤȵ͜	ϕɤȳеǻ	۴ʑƷXşȲԦȲǄɇण̝ͲÇĴ\x00\x00	Ǩ\x00\x00	'ƷXĽ\x00ȲসǱ\x00	ÕĴ\x00\x00	vǣ6ǩ\x00\x00	'Ʒaȑ\x00	ÕĴ\x00\x00	Ǫ\x00\x00	'ƷaȒ\x00	ÕĴ\x00\x00	ǫ\x00\x00	'ƷaȐ\x00	/	ɥĴ\x00\x00	Ǭ\x00\x00	'Ʒaȓ\x00	/	ɥĴ\x00\x00	ǭ\x00\x00	\rʱ9Ʒʱȳ෫	ƏȖʱ\nƛʱ\x00\n\nȟʱGʱŉĴ\x00\x00	º\n'ʱ\\ȖǮ\x00\x00	'̝ຳȴෘǷGĴ\x00\x00	î\x00\r	\x00\n\x009ɥɇඡ	\nȯ{\nɪ\n,	Ȳʘ\n૒ȲċʢȲ¸U!ɥ@\x00\x00	ÇĴ\x00\x00	ï\r\x00			ɪ	,Ȳʘ	ԌɤȲԡƴȲɤ\x00¥ɤȳފƵȲɤ\x00¥ɤȴԡȔȲɤ\x00¥ɤȳعȕȲɤ\x00GȲɤ\x00ð\x00ಒɤȲ໭Ȳȶư঴ñ'ɪ@̝௮Ȳ໫ǯ%\x00ʎȴຎʎȴ௚	ʎȴӒŢǰʱ\r\x00Àʱhʱh5ĭʱ\x00ȲV	\nƚʱN\\ʱȲ:ȲӍȈʱ\x00ȲĠ	̝ெʱ\x00౹ɳ6Ǳ\x00\r		ƚN		ࡋ		Ȳϑ	Ȳ\x00­\nÎǲ\x00\r	\x00\n\x00	h9		Ȳࣱ\n\n	Ȳ௱\nʅ	\nȲϑȲ\x00­Îǳ\x00\x00	\r\n\x00\x00\x00\r\x00\x00\n	/	D	ԤȲɬȵϥƽ̝Ȃ\n\x00ȳٔx	x௸xȲ\nĽ\x00Ȳ൹\rŁȲ:Ȳ´8ɇ`ȲЩɇJYУɇJW\x00ȵਿ\rȯସɇYȲ\x00๑\r	Ȃ૱̝Ȃ\n\x00ȲժĽ\x00Ȳ࣮ǰ̿h	hಢȲಾhȲ¥ȴڦhȷಯޞĴ\x00\x00	Ǵ\x00\x00	\r\n\x00\x00\x00\r\n	/	D	Ԥ Ȳɬȵϥƽ̝Ȃ\n\x00ȳಉxÚ\r\rxȲ)\r,x\r	xȲ^\rব̝Ȃ\n\x00ȲΦhÚ\r\rhȲѩh\r	hȲ^\rಓ\rڗĴ\x00\x00	ǵȴड़ȴ۰ȵٹǶ'ȴלȻߊȵٴǷȴตȴടȶ౸Ǹ;ȶඑǹʱ\r\x00ʥʱ\x00ƚʱʱ377Hȯڻɇඹɇh%nɥɇଘ̝ŝʱ\x00Ȳ׼ʱȲ<Ȳ÷\nɮ	ˤ	ǺʱǺ\r̝ǂ\nʥɥ\x007ɥ	Ȳæȳബǻʱ\r\x00ʦʱ\x00ʱȲ:ȲżFŜ\x00ȳ޽̝ǂʱ\n ɥ	̝ŝʱ\x00ȲତʱȲ<Ȳ\nɮ	ˤ	ǼʱǼʦɥ\x00Ȳूȳ഍̡6ǽľɫȽġȲ֋ȲÁ²Ǿ\r\x00	\x00\n\x00ŖȲțʞȲ\n	ɵȲ\x00Ȳۀ\nȲϚɹȲ\x00	\x00\nɨǿ\r\x00	\x00\n\x00ʱ\x00\x00ʲƚ\n	ƚ͛	ਪ	\n	Ʉ\nȲ:Ȳ´	\n෮\nȲŚ\nǾ\nP\nư\n੭\n෻ʱɇ`ȲЩɇJYУɇJW\x00ȵӶ\nఘɇ¯ɇŔȯ೷ȷиȹ߳ȷƟʱưݒʱ\x00ȲğɷʱʀʲȲğ\rº\r%\x00\x00	9ʲ֗˓Ȳ:Ȳ´˓ȲૹȲ<ȲĻʱआʲĀ	˓ȲƒȲॶʲ෬Ȳ<ȲĻݚȲğE	Ȁ\r9ķx̄xȲ),Į\x00ȳĹxĦȁ\r9ķx̄xȲ),ĭ\x00ȳĹxĦȂ\r\x00	\x00\n\x00\x009şȲԦȲͶǿʰȲĻȲܺ		Ȳ)	R\n	Ȳ:\nNǽ\nȲűȀচȲŚǾPȳúŝ\x00ưɑȲ\x00Ȳ਱ưŨ\nɷ­\r[\nȲűȁ໳ȃ\x00\r	9Ȳೋ	ɇ=ȲȲ໰	ȵࡦ	ȳ״	ڹ	ȳѱ	ȼ౓	ȳЧ	ȶࡿ	ȳ৲şȲ:Ȳpȴ૝Ȅ\x00\x00	\r\n\nɇ=ȲȲ \nȲȧ̝Ľ\x00\x00	๻\nȳχȲ<\x00	\nțऑȲ<\x00	ȅ\x00\x00	\r\n\nɇ=ȲȲ \nȲȧȲ<\x00	\nǿͻȲ<\x00	Ȇ\x00\x00	\r\n\nɇ=ȲȲ \nȲķ̝Ľ\x00\x00	ͻȲ<\x00	ȇ\x00\x00	\r\n\x00\x00\nɇ=ȲȲ \nȲķƚŨฤ[	༉	Ȳț£	Ǿ	Ă	ư	ŨȲ<ȲĠुɷ	¦	\nȲ॔\r[Ȳ<ȲຜȲ<\x00	Ȉ\x00\x00	\r\nƄȲċ\nʣȲ¸U\n!ɥ@\n\x00\x00	ÇȲ<\x00	vɇ6ȉ\x00\r	\x00\n\x00\x00\x00\r	ɇ=ȲȲ 	Ȳȧ\nƚN\n\n%@\n%˒ɇȲ:ɭ	ȴщȜʢȯ´Ȝʩȯ´\rȲ:NȲəȴԢ\r	̝ĵ\rЍȳȠ\r@Ȏ\rÇȲ:Ȋ\x00\r	\x00\n	ɇ=ȲȲ 	Ȳķ\nƚN\nI\n%ɇ౤\n%Ȳȶ\n%˒ɇȲ:םȲ:ȋ\x00\r	\x00\n	ɇ=ȲȲ 	Ȳķ\nƚ͛\n\n[@\n[ŉȲ:Ȍ\x00\r	\x00\n	ɇ=ȲȲǻ\nȲ:Nȃ\x00aɇ\n¥	Ȳʶ\n	̝ĵ\nࢰȲ:ȍ\x00\r	ƄȲċ	ʤȲ¸U	!ɥ@	\x00ÇȲ:Ȏ\r\x00	ɇ\n	ɇYȲ\x00ɇĮȲ໢	!ȯ̾	֯	ૢɹȲs	Çȏ\x00\r	\x00\n	ɇ=ȲȲǻ\nƚ\n\n8	Ȳ࡚Ȳʽ	ȲθỴ̄\n%ɇt\n7ɇ੪	ȲθȲ੻\n[ɥ\x00\nɥږ	ȳࠦȲȘț಍̝ŝ\x00Ȑ\x00\x00	ɤȳɧuɤȳʯȚ\nȟȏȾͧ\x00	ȑ\x00ɤȳɧuɤȳʯȚ\nȟȏȲǍȒ\x00\r		Ȳ¼\nț2	ȓ\x00\x00	ɤȳɧuɤȳʯȚ\nȟȏȹ໙\x00	Ȕ×Ȳ̐ưɝĴɤ\x00ȴ܍Ώ6ȕ×Ȳ̐ưɝĴɤ\x00ȳޓȖ\rƚ\n87ɥ	Ȳ<ȲĻP7ȯƗ7ȯۤĽ\x00ȲױȲ<Ȳ÷%+Ľ\x00ȲगȲ<Ȳ%\nh	hɥঁ[7ɥ	Ȳ<ȲĠ[P̝ŝ\x00ȳ޷ȗʱ\x00\rʲ9ɇ¯ɇÐȯȲʱȲುɇ=ȲʱȲϷȲʶʱતʲɪȲÈȳǶʲȳěʱȖʲ\nƛʲ\x00GʲȳଞʱʱȳڞȖʱ\nƛʱ\x00	Gʱଟ'ʲ\\Ȗ	'ʱ\\ȖȘ\x00ʱ\r\x00	\x00\nʱȲࡹɇ=ȲʱȲ಴	0Ȳǜ\n0ȴۥȳ߱	\n໐Ȳ࠴	ĭʱ\x00ȳĹԾʓȳ૎ʱ\x00ʓȴˁ̝ēʓȲхșࡩيȲ௅૯Ş\x00ȶԿŞ\x00ȸਖŞ\x00ȹ୚Ş\x00Ⱥ઺Ş\x00ȽࢣȚ\r\x00	\x00\n\x00\x00\r\x00\x00\x00\x00\x00ÀȲ΀Ȳҵɇ=ȲȲǻȘ\x00NȲ:ȳປȲΖǰPȂˋȲЯƞ\x00ȲҒȲύƞ\x00Ȳżǰ̗ȃ\x00ȲќȲ:Ȳі̝ɿ୊Ȳ֍	Ȳοș	ம\nȳӸ\nư\nŨȳě\nƴ[ȞڍȲ:Ȳҷ8̝ĵ\nȲ<Ȳġஐȳඎ\rȲ:ȼÅȲ:ȳ̈\r\rȹઋ8Š\x00ȲĤȲषɏȲDɫȵVȲବ˖ȲÊɇh\nȲ<ȳ˨ܮȴପȜʢȯ´Ȝʩȯ´ȲəȴపȞ+ȳ࠺ȝ٨ȳχțϟȂțѬʧ\\ʧɋ\x00ɮˤɋłͅƘʧD\x00ɋD̝झʧɇ׶Ȝ\x00\x00	\r\n\nȲ:\n\n8\nś\n\n	8	Ë\nɇ=Ȳ\nP	ȇ\nɇΙȲ\n֟\nȝ\r\x00	Ȳ÷	Ȳ:ʱ	\\̝ǖ\x00\x00	ฬȞ\r\x00	Ȳġ	Ȳ:ʱ	\\̝ǖ\x00\x00	ՕȟȪƛ\x00ȚͰÎò\r\x00	\x00\n		֮	>Ȳʘ	Ԍ ɤȴৡȲ୬\nȲ໏\nȲƌȲఴư\nɝɷȲ༊ɷΡȲ߇ѸȲثΌȲǰȯত/сȲǰȯଈ/D঍Ƞ\x00vᬫ6Ƞ\x00\r	\x00\n	\n\nȲ)\n,	\nԳ\nȲͫɷȲŸȴϮȶ౶ɇ`Ȳ	\x00ȲƚȲӉ\x00ȡ;ʭZȢ;ʮৗȣ;ʯȲşೱȤľHȯאCȯІHȯϋCȯৱHȯȐȥ;HȯƣCȯසȦ'ȯϛʰſȯխȤȧ'ȯϛʰ߾ȤȨ\rʱ\x00ʲ\x00ʳ\x00ʴ\x00ʵ\x00ʻ\x00ʼ\x00\x00ˊʱɏȲ\x00ɫȷƙȲࢡʲʳʴ£ʵɇ»ȲʱːȺΕʲఠʶɇ»Ȳʱ\x00ʲʷəȲʱ\x00ʲʸ%əȲʱ\x00ʲµȯʴଗʹʏ౟ʸʺ;ɑȲʱ\x00ʲ\x00Ȳɂzʻ5ʼ·ȯ͏,ʻȲࣁƠ֡ʽ\x00\r		ʻʼʼ0ʼȯ଄ʼ͉	7\x00	\x00	vʳ\x00	ʴ\x00ʴŁʵE	ʾ\x00੃ʿ\r\x00	\x00\nʲ୭	əȲʱ\x00ʲɒ	ȯݾ	əȲʱ\x00ʲɒ	ȯஂ	ȯข	əȲʱ\x00ʲڔʰ	ſȯ๱ȯਔ	ȯ׍	ȯݎ	əȲʱ\x00ʲǠȯʇ		Cȯؑ	Ęģ	ȯਝ	əȲʱ\x00ʲǠȯഇ		Đ໾ȥ	Ó	əȲʱ\x00ʲɒ	ȯњ	əȲʱ\x00ʲǠȥ	Ó	əȲʱ\x00ʲಱ	ȯԬ	ȯટ	əȲʱ\x00ʲµ	ȯ͞	ȯ̎	əȲʱ\x00ʲ໚ȥ	Ó	əȲʱ\x00ʲ౉	 ȯౡȦ	ʾȹӃʲδʲù\nɹȲʱ\x00\x00ʲ\n	\n\nŢʽȯr\nˀ%\x00\x00	ʲ\x00əȲʱ\x00ʲދ	əȲʱ\x00ʲϼ		ȯʾȸ׳	ȯдʲ਎	!@ʽȯrɹȲʱ\x00\x00ʲ²ˁ%\x00ɇYȲʱోʲ\nȯ଑ɑȲʱ\x00ʲ\nʲʱȲଦɹȲʱ\x00ʲ\x00\nʲGˉ˂%\x00ɇYȲʱ఼ʲ\nȯűʾȽஇɹȲʱ\x00ʲ\x00\nʲȯrʴʴɇYȲਫ਼ˉ˃%\x00\x00	ʲ\x00əȲʱ\x00ʲǠȧÓəȲʱ\x00ʲӽʲù	ɹȲʱ\x00\x00ʲG	˄\r\x00	\x00\nʲ\x00\nॳ	əȲʱ\x00ʲϼ		ȯʾȻ౺	ȯ܌\n޹	ȯдʲຮ	ȯ֘\n֒	!ȯ݋\n>˃2ʽȯrɹȲʱ\x00\x00ʲ²˅%ʵ9ȯөȯƗЅȯĳĐģȯө ȯѝ ȯࣻ ȯ˿ˆʲܞʶضʸ2ˁؐʸ2˂໼˅ಁʶ˔Ȳ̯ʸ2ʽċऀʽȯ-ȳಛ˄ȳຼˇ%ʲØʷȥaʿȳʄȯȠʱȲ]ʲ࢈ȯദʸʸʽȯഈʽȯūȳǵˈ%\x00˃ʵȯߵʽŶʮU۩ʽ\x00GʽŶ	%ˊйˊΣˀ\x00ˊϬˇ\x00ˊ҂ˆ\x00ˊș\x00ˊ̹	\x00ˊ̅\n\x00ˊϹ\x00ˊƨ\x00ˊԐ\r\x00ˊఱ\x00ˊࡑ\x00ˊॾ\x00ˊۖ\x00ˊ׬\x00ˊ۶\x00ˊִ\x00ˊ೏\x00ˊ̈́\x00ˊԕ\x00ˊ̀\x00ˊ߄\x00ˊࠌ\x00ˊࡈ\x00ˊ੹\x00ˊਥ\x00ˊݤOȯڢ,ʰſȯêˊˈHȯƣCȯթˊʿ૵%ʸʷdªʸʷdªʸ2ʽȯأʽȯরʽȯVȷ̬	%ʸʷ ĥõʸ2ʽċଃʽȯ-ȳȫ\n%ʸʷdɡʸ2ʽȯիʸ2ʽċ߮ʽȯ-Ȳ੖%ʸʷdªʸ2ʽċମʸ2ʷ˔ĥ¶ʸʽċپʽȯ؜ʽďȳ޾%ʸʷdാʸ2ʽȯෲʸ2ʽċȲఫʽȯƪȴઊ\r%9ʺ໶ʴʹȯ͋ˁʞʸʷdຂʸ2ʽȯూʸ2ʽċ඙ʽȯƪȴހ%9ʺȾ࣠ʹȯԃˁʞʸʷdঀʸʷdªʸ2ʽċ೶ʽȯ౥ʸ2ʽȯࣦʽȯ-ȳ୞%ʸʷdªʸʷdªʸ2ʽȯ໇ʽȯऽʸ2ʽȯએʽȯΓȲ૆%ʸʷdªʸ2ʽȯջʸʷdªʸ2ʽċׅʸʷdªʸ2ʽċȽߓʽȯവʽȯޡʽȯ-ȳ݂ʲơʷ˔ȯњȥʱȲ]ʲݩʸ2ʽěވʷ਀ȯຒʸ2ʽȯ࠘ʽȯࡥȲɎ%ʸʷdªʸ2ʽċ٩ʽȯມ%\x00ʲ\x00ʸʱȲ]ʲıʲʱȲʚʲơȯӠʲΫȯҎʱȲ]ʲ½ȯ˷ʲϿʽȯ஀ʱȳƩ\x00ʲɭȯϏʽȯьʱȳƩ\x00ʲ.ʱȲ]ʲvʾȵĜ%ʸʷdªʸ2ʽċઍʸ2ʽȯ຤ʽȯ-ȳ๪ʸ2ʽȯVȴϣʸ2ʽȯҩȲɞʸ2ʽȯˏȲĜʸ2ʽȯΟȲǵʸ2ʽȯɍȲӻʸ2ʽȯ÷ȲȺʸ2ʽȯ¢ȲҠʸ2ʽĐȲѽʸ2ʽȯ̊ȲЫʸ2ʽĝȲ୪ˉ%\x00əȲʱ\x00ʲıȯ෯ȯඪCȯઢAȯةȣޔȯʴ੶əȲʱɉʲʳʲ\x00ˊU@Aȯ๏ʽŶ˃ݢ@ʽüʾȷໍȬ୅ˊ5	ˉ·ʾ\x00ˉ\n\x00ˉ±Eˉ|\nʵҜ%\x00ʲ\x00ʱȲ]ʲıʲʱȲʚʲơȯӠʲΫȯҎʱȲ]ʲ½ȯ˷ʲϿʽȯĠʱȳƩ\x00ʲɭȯϏʽȯŷʱȳƩ\x00ʲ.ʱȲ]ʲvʾȵ୲ȩ\x00\x00ʱ\rʲ\x00ʳ\x00ʴ\x00ʵ\x00˜\x00˝\x00˞\x00˟\x00ˠ\x00ˡ\x00ˢ\x00ˣ\x00ˤ\x00˯\x00˰\x00˱\x00˲\x00	ʲȨ\nʳŴʴŴʵŴʳʸ෧ʶ;ʳ7ʷʵBʵʲҔʸʴʳ\x00ʵ8ʳʵ\x00ʵ൐ʳʲ2ʳʹ\x00\x00	\x00\nʲ·\x00\x00	\x00\nʺ\x00ʹ\x00vʻɁ	ʳLʺ\x00ȷ෉7ƹȲĜʼ'ʶaʸ?ʺʳ\x00ȴͮʳ7ƹʳȵɰƹȡÄȲĜʽ'ʾaʸ?ʺʳ\x00ȴͮʳ7ƹʳȵɰʾ;ʳ7ۛʳ ʿදʱIʳʳ7࣎ʳ7ĝҔˀȲȲɶʳ7ȯȘʸൾʿÜʻ˞ˁ\x00Ȳ\nʼȯ®˪\x00ˢnʲʼȯęȲȲĜ˂\r໠ʳ7ґʾȳم˅ˋʾȲٙȲʳmʸϟʷ̉7ȯΩˆ+ˇׇˎೡʸȲȲะȲʳ\nʸˈญʸȲȶ̔ˀݹȲȸ͖ʸ˂\nʼȯżˁ\x00Ⱦǜˀ࠻ʸˁ\x00ȽӍ˂ھȲȽݱʸ˫ˉ\nˬߐȲȴ®ʸʳ7 ď¶ʸȲȳƊ˛Ȉˋઠˌ౱ʸˍࣉʸʳ7ȯ੯ȲȵƸʸԂʿÜȲȵಇȲȻƏ˪\x00ˢnˀಏʸˁ\x00ȹΥ˫ˏ\nˬษʸȲȸӃ˪\x00ˢnˀഠʸ2ːାʳ\x00Ȳmʸ˔\x00\nˀੜʸˁ\x00ȺΥ˫˲\\£˂\nˬڛ˄ிʷ7 ȯ؃7 ě¶ʳ7¬ˇ¦˃۟ˇ˃ʸȲȻ˴ʳȲ݃ʳ7ď¶ʸȲȳநʳ7 ȯ໿ʳ7 ċ¶Ȳʳ\nʸɸ˪\x00ˢnˀ˄\rȲȺࠅʸdʳ7ɡʸȲȳȎʾŗʸȲϐ˛ɚʽȲǮȲȲÝ˪\x00ˢ\nˀȣʸȲȲļʳ77ĝõʳ7 ȯʹʸȲȲʥʳ7 ĝŃ˛\nʾŗʸȲȳÃ˛ɠʼĝfȲȲýʾȲɃʸȲȲÝ˪\x00ˢĂˀ׺ʳ\x00ʸȲm˔\x00\nˀӡʸȲȴ®ʳ7ď¶ʸȲȳƊ˛Ȉˋ೼ʸȲȴ༆ʳ7ඊʳ\x00ʸȲm˔\x00\nˀӡʸȲȴ®ʳ7ď¶ʸȲȳƊ˛Ȉˋž˪\x00ˢ\nˀߔ˅\rʷ ȯ΃ʸȲȳߖʸȲȳÌʽȳඏȲȳ໴ȲȽ̛ʸdʳ7࡙Ȳʳ\nʸˀڲʸȲȳȎʾŗʸȲϐ˛ɚʽȲǮȲȲÝ˪\x00ˢ\nˀȣʸȲȲļʳ77ĝõʳ7 ȯʹʸȲȲʥʳ7 ĝŃ˛\nʾŗʸȲȳÃ˛ɠʼĝfȲȲýʾȲɃʸȲȲÝ˪\x00ˢĂˀࣧʶ޺˛ٷʶȯ౰Ȳʳ\nʸdʳ7ɡȲȳȎʸʾŗʸȲȳÃ˛ɚʽȲǮȲȲÝ˪\x00ˢ\nˀȣʸȲȲļʳ77ĝõʳ7 ȯʹʸȲȲʥʳ7 ĝŃ˛\nʾŗʸȲȳÃ˛ɠʼĝfȲȲýʾȲɃʸȲȲÝ˪\x00ˢĂˀොʽȲǮȲȲÝ˪\x00ˢ\nˀઙˆ˛ȈʼȯáȲȲ¹˂ˇ˪\x00ˢnˀˈɁʿÜʳ7܂Ȳր˛੥ˀˉ\rʾȴೌȲʳmʸɸʼȯזʳ7ȯֶȲȲصʶȯੱʳ7\x00ʳֱ҆!ȯࢳ ȯǓʳ7¬ȲȲÅ˪\x00ˢೇʳ\x00ȲȲɑmʸ˔\x00।ȲȲÅ˪\x00ˢࠆʳ7ȯƫʾकȲĭʳmʸ˪\x00ˢnʲʼȯęȲȲƇ˂४ʼȯƞȲȲɶʳ7!ȯȘ˪\x00ˢӱʼȯƞȲȲɶʳ7!ȯ൫˪\x00ˢӱʲʼȯęȲȲƇ˂ˊ\rʼȯ®ȲȲÅÿʳ7!ȯ൱	ˇʼȯŀȲȲՈʳ7ȯɻʸȲ˂˛ੲ˓ݵʼȯęȲȲĜˋ\x00˭ʶѲ˛ϯˊ\n˭ˎ\nˮˮˌ\x00Ȳȷјʸͅ	˛ϯ8˫ʶѲ˛ඔʳ7ȯ׌ʸȲȹ̛˪\x00ˢĂ˭ʼȯǆȲȲļʳ7!ĝõʾȽ̣ʸȲȻƊʾȲѼʸȲȸฆʳ7ď¶ʸȲȳਖ਼ʾڂʾ࢖ʷ̉7!ȯಜȲʳmʸࢸʳ7܎ʾȲѼȲʳmʸȲʳ¦Ȳʳ\nʸॐȲȲ«ʸ˪\x00ˢnʼĐfȲȲ૘ȢʳȲʳ\nʸ˜ʻʳކˋvʼĝfȲȲý	ˬŏˮˍˁ\x00ȸƞ˂\nʶȯ࣓Ȳȶ´ʸ˂ǈˎ˫ʼȯǆȲȲļʳ7!ĝͥʶ͊ʻŏ˂ȲȲýʸˬˏʼȯǆȲȲļʳ7!ĝͥʶ͊ʻŏʶȯැȲȷ®ʸ˪\x00ˢnʼȯáȲȲЭʶȯൗȲȴ«ʸʼȯáȲȲЭ˂ȲȲýʸːȲ੬ˎ\nʶȯ߰ȲȻΎʸʶȯ࠾ʼȯ®ȲȲÅ˛ոʼȯęȲȲওˎĂʶȯடȲȶԚʸˎǈˑ˳\x00˴ϭ%ʷ7 ȯೄ˳ȲʳȲ¹ʸʸ˓˳\x00˴¦7 ȯࡍ˳ȲʳȲ¹˛˳\x00˴\nʸ˳ȲȲĤ˪˳\x00ˢแ˳ȲʳȲ¹˛˳\x00˴ࢥʳ7࣢˳Ȳʳ\nʸ˛˳\x00˴ݣส˳Ȳʳ\nʸʼȯá˳ȲȲ¹˓˳\x00˴Ҹ˳ȲȲ«ʸ˪˳\x00ˢnʼĐf˳ȲȲǴʼȯá˳ȲȲ¹˓˳\x00˴žȢʳഃʳ7ȯਙ˳ȲȲÌʸࢻ˒\x00ບʳ7 ȯΠȲȲÌʸʳ7 ĐŃ˓\x00˓\x00ϭ	\r\x00	Ȳ૭ȴज		Ȳ)	ř 	ുʳ7ґ	ʳȲʳ\nʸ˜˛\x00ҸʸȲȲ«˒\x00\nʼĐfȲȲఢʸȲȲ̆ˑ\x00\nʼĝfȲȲऻȲʳ\nʸ˛\x00žȢʳȲʳ\nʸඓʶȯดʸȲȲĤ˪\x00ˢ૜˔\x00ࠟ˓\x00Nʳ7!ȯ೩ȲȲÌʸധ˕\rʸȲȲÅÿʳ7!ȯۅ>඲ʼȯ࣍ʳ7ȯࣖȲȲӹʳ7ȯɻʸȲ౅˪\x00ˢආȲȲƇʸ˖\r\x00	ÿʳ7!ȯ๵	ˇʼȯŀȲȲνʶȯগȲʳ\nʸๆʶȯ௩	ȲT˪\x00ˢƆ˨\x00	˗\r\x00	\x00\n\x00ʼȯǆȲȲ̆ÿʳ7!ĝৠ8	ʼȯŀ		77ĝÜȲȲଭυʳ7ĝŃ\nʳ7\x00ʳ\x00	ʷʾȲย	7ுȲmʸर\nҫ	7ȯ͞	7ĝܨȲȲ¹˛Ʋ\nҫ	7!ȯƣ	7!ȯঊԎތʸȲm˚\nˋƲ\nબ	7ȯമȲȲ¹˛\nʸȲȲĤ˪\x00ˢƲ\nȯċʸȲ˂˪\x00ˢƲ\nďõʸȲȳȎʳ7ȯǓʸȲȲ«˪\x00ˢnʼĐfȲȲԇ˚\nˋۙ\nȯǓʸȲȲ«˪\x00ˢnʼĐfȲȲԇ˚ʳ7ȯҬˋʼȯáȲȲ¹˪\x00ˢඐȲȲýʸ˘\rʸȲȲ«ÿʳ7!Đõ	ˇʼȯŀȲȲνʳ7ĐŃʳ7ȯɻʸȲ˂˪\x00ˢ¦ʳ7!ȯࠫ˪\x00ˢ̕ʸȲȲѽ˙Ȳʳmʸ௛˪\x00ˢnʳ7!ĝÜʼĝɸʳʲ±ȲȲଋʳNʳ7ȯਢʸ˜ʼȯ̬˚ʳ7ȯĳʳ7ЅȢʳȲʳ+ʻʸ˛\x00\r	\x00\nÀʶൕʳ77ȯķʹȽࢉ	ʳ9	 ȸ̯Ȳ	\nʸ2	z\nˣ	൦\nuƢ\n1Ƣ	\nˣ	\nP	ม˱e	\n˲e	\n˲q	\n\x00Ȳ\n\nʸ2\nz˜ȯ˝ȯȴ˞ȯò˟ȯϢˠȯÛˡȯŇˢˣlˤٌ˥\x00\r	\x00\n\x00\x00\x00\r	Ł\n˲aOȲ),g	gɥLuƢ8˱eiτ\nqi~uơ8\r/\ruƢ8˱e\ri\rτ\nq\ri~\rȲ࣪\rȲΕ	ใ	ÚȲ),˦Ħ˦\r\x00	9uƢ>˰eiӺuơO		Ȳ)	,˦	ѿ˧ʏ>`£a˨\x00\r	Ȳ߶	1ơȲwŪȲ^\x00Ȳ\nȲ	ǈ˩\x00\x00	\r\n\n1ơȲwŪȲ^\x00Ȳ\nȲ\n\n\ng£\n7	\x00ˤȲ\n˪\x00\x00	\x00\n\r\x00\x00\r\x00\x00\x00\x00Ȳٻʳ7֖\rʷʳ Ȳ޼\r7 ȯܭ\r7Ƣ\r7 ȯĳ\r7 ȯౕȲĭʳmʸ˪\x00\x00	\x00\nˋʳ ȴࣘ\r7 ȯѝ\r7Ƣ\r7 ȯɺȲĭʳmʸ˪\x00\x00	\x00\nʰ˛ฦȲʳ\nʸஈˤȲT˗Nʳ7 ȯʣˤȲÚˤȲ),ˤ7 ʩ7 ʨ	gࠑˤȲT˘Nʳ7 ȯʣˤȲÚˤȲ),ˤ7 ʩ7 ʨ	gक़ʸȲȲÅȲT˖\nʼȯęȲȲຫʸȲȴ®ʳ7 ď¶ʸȲȳƊˋଁˌୟʸʳ7ȯ΃ʸʽȲԚȲȺܱȲȽઝȲT˪\x00˜Ɔ˨\x00\nʳ7ȯҬ˕P˩\x00\x00ʫਤȲĭʳmʸˤȲT˪\x00˞ຸˤȲÚˤȲ),ˤ7 ʩ7 ʨ	gՅȲĭʳmʸ˪\x00˞஬˙೨Ȳʳmʸ˪\x00ˢهȢʳʳ7¬˛યÿμʳ7౜ʸ˨\x00\nȲȲ«˪\x00ˢnʼĐfȲȲǴ˩\x00\x00ʨࢨȲʳ\nʸʳ7ƢȢʳȲʳ\nʸ˩\x00\x00ʩ¦ʳ7 ȯǓʸ˨\x00\nȲȲ«˪\x00ˢnʼĐfȲȲǴ˩\x00\x00ʨഭʳ\x00ʸ˨\x00\nȲ\nʳ7ƢȢʳȲʳ+ʻʸ˩\x00\x00ʩୁH˝\\˨\x00\nȲţg	gɥLuƢiȲТ˧˲P˕\n˩\x00\x00ʪܔH˝\\Ȳʳ\nʸ५H˝\\˙ž෨ÿμʳ7ഞʳ՟H˝\\Ȳţg	gɥLȲʳ\nʸঔH˟\\ʳȸ௉ȲĭʳٯȲʳ\nʸ˪\x00˟؎H˟\n\\ȲȺáʸ˪\x00˟૮H˟\\˭˥\x00\nȲ൨ʸʳ7ȯ̎ˎ+˪\x00ˢƆˮഄHˠ\\ʸȲȲ̟˪\x00ˢƆʼȯáȲȲ¹˪\x00ˢ๋Ȳ੔ʸ˪\x00ˢڙAˡ\\Ȳţg	gƺȲʳ\nʸȲT˪\x00ˡƆ˨\x00\n˩\x00\x00ʬžஔ	ʳ7ȯΠȲȲÌʸ˪\x00ˢࠨ˫˯Ȳ˲\n˲1ƣ˲ˬ˲˯Ȳග˭˯Ȳ˱\n˯Ȳ˲\n˱1ƣ˱\n˲˱ˮ˲˯Ȳв˱˯Ȳܷ˯5˰1ƣ˱˰\x00˲˰\x00	͟>˪	\x00ˢֺʶې˂	້È˰\x00½	\x00¹ˣ\x00°ˤЬȪ%ʱ\x00ʲʱ5ʲ๛l\x00yɅѬʲय़ʱʲZ৑ʱʲ\"ȫʱ\x00ʲ\rʳʳʱఅb\x00Áʴ\x00c\x00z	\x00²\nɅʴʱ˩ʲَʲ%\x00ʴષʱԟʲ\x00\nʲ#E	%ûc@଀ɔڑ\n\r\x00	ʱ\x00ʳǐʲ	ʲʳ	,	ʴ2ࠞᒟ6ó\x00ʱ\x00ʲ\x00ʳ\x00ʴ\x00ʵ\x00ʶ\r\x00ʷ\x00ʸ1ɠඟ	\nʶ̹\x00ʸʷ²\x00\nº	\r\x00	\x00ʺ\x00ʻ\x00\n	lڏ	Æ಑؉	Æංʷȫ\x00\nʺʷÁ\x00ʻʷc\x00\nʻ\x00	£ʱ\x00	ʳ\x00	§ʲ\x00	ʷz௝ʷzf	Êʺ	Äʺ	8ʼ2	|ʼ%\x00\x00	\x00\n\x00lMʺʺ)ʻ	ʺ\n1ȭ	ध	,\nӬʼ?	ʺ1ȭ	Ƶ	,ʼ?<\n\x00®Eʹ\x00'দѸ໑Όଌ/с࠱/D٧ซ/Dtך౽/Dt¨ࠏࡱ/Dt¨¢Ԩਅ/Dt¨¢Ƥૻ߬/Dt¨¢ƤŇĜ\n\r\x00ʺ\x00ʻ\x00	\x00\n\x00ʼ\x00\x00\x00\r\x00ʽ\x00\x008\x00ʺ£\x00ʻ§\x00	\x00\n\x00ʼȪ̘	ð,ʾ	ӏ\rഘ	ɫى\r\nԟ\r֠ʽ1ȭM\nʽÉɤ\x00ʽÊɤ\x00ʽÄʶ\x00\n\n5יٵทňʽ\x00١ʽ<Oӥð,ʽˀ)ʸ)\nˁs)ǐº\rOð,ʾĦʾĄ\nఖʿ஦ʿ\r\x00	\x00\nʓ		ð	,\n˩	\n\n෶	ੇ\nພ	௴\nդ	าǚˀ˃\x00˄;|%\x00\x00	\x00\n\x00\x009˃ʝʼlʼl¤˄Dǅ˄֨51ȭ˃M\n¤˄Չǅ˄ઃӏ	˃<O\nӥ\n	ð\n,\nˀ	\nvਡň\x00௎ߎ˃)໊˃)ʸ˃)Pˁ˃s˃)ǐ\n¢Ƥ˃8ʼy\nʼyҚ଺ˁ\x00\x00	\x00\n\r˃\x00\x00˄\x00˅\x00\x00ˆ\x00\r\x00ˇ\x00ˈ\x00ˉ\x00ˊ\x00ˋ\x00ˌ\x00ˍ\x00ˇ)\x00ˈ\ntˉ\n¨ˊ\n/ˋ\nDˌʼlˍ·˃˃	˃Rˇ˃Uમ࢕ߩ൒ˌˍ˄˅+ವˌˍ˄ˌˍƎ˄ʴˇ(˃є+೵ˌˍˌˍश\x00ˌˍ\"+ˌˍ\"ˈˇ(˃ʕૄӓˇ˃Ǽ˅ʴˇ(˃Čˇ˃˅\x00˄ˌˍ~ࢗˌˍˌˍж\x00ˌˍ\"+ൌˍǺˍ\x00˄˄˅ˌˍ\"˄ˌˌۢ˅ˇ(˃˄ˊ+ࠉഌˌˍ˄ˌˍˌˍ\"˄~ަˌˍ\"˄˅ర੮˄˄˅˄ິˍùˍ\x00ˌˍ\"˄˅cˌɌ׆˄˅ӣڀˌˍ\"ʶˇ(˃ʕֈ˂\x00ˇ(˃ˇ(˃\rˇ(˃ˇ(˃˃͉ˈ\x00\n\n\n෢˃	˃#\r˅ˇ(˃˄ʶ+ॿ఺ؙ\nآ˃	+଍ˌˍˌˍ\x00ˌˍ\"+஗ˌˍ\"ʽˇ(˃ॊˍùˍ\x00˄˅cˌɌডີˇ˃͐˅ˇ(˃ʻ˅ˇ˃\x00ˌˍ\"+৆ˌˍˌˍി\x00ˌˍ\"+ລˌˍˌˍɱ\x00ˌˍ\"ˌˍˌˍĎ\x00ˌˍ\"+ࣀຖ\rˇ(˃˃\r+঳ˇ˃͐˅ˇ(˃ʺ˅ˇ˃\x00ˌˍ\"+ࠓˍùˍ\x00˄˄˅ˌˍ\"˄ˌخˆˇ(˃ˌˍ\"ˉˆSˇ(˃Ҳࢴˌˍ\"ˇ(˃Ò৘ʷˌˍˌˍ\"+ൔˌˍˌˍߞ+ˌˍ\"ˊˇ(˃ʕࣈҘ৶ˍùˍ\x00˄˄˅˄ˌɌ࢘ˍǊˍ\x00˄˄˅˄ˌˌyˌȼ൞ˌˍˌˍſ\x00ˌˍ\"˅ˇ(˃˄ˈ+ެ഼˅ˇ(˃ˌˍ8˃#˅ɉˍ̖කˌˍক൤ˇ˃ͼ˅ʴˇ(˃Čˇ˃˅\x00ˌˍˌˍ\"˅Ȍˌˍˌˍѭ\x00ˌˍ\"+௕ෑ˅ˇ(˃ˌˍĨ8˃#˅ɉˍ̖ࣜˍǺˍ\x00˄˄˅˄ˌˌʧރˌˍ\n෹\nΰ\x00˃	ˌˍ˄ˌˍƎ˄*¦වˍǺˍ\x00ˌˍ\"˄˅cˌˌʧࠗ\rˇ(˃ˌƷˍK\r\x00ˍ\nˍ\r\x00ˌˍ\"ʹ˄˅¦Ӟˆˇ(˃˅ˇ(˃˄ˉˆȌˆˇ(˃ˌˍ\"ˋˆSˇ(˃Ҳ਺ෛ˄˄˅ˌˍ\"˄ԂฺˍǺˍ\x00˄˅cˌˌʧ؏ˌˍڜ˅ˌˍ˄ˌˍ~ೊ઒ˌˍ࡝ސˌˍ˄ˌˍƎ˄ʺˇ(˃є+౪ˌˍ\rˇ(˃λ˃#\r˅ˇ(˃˄ʽ+೯์ˌˍ˄˅̤+ޠˌˍ˄˅຺+౻\rˇ(˃˃#\r+ˌˍࡰେˌˍˌˍʛ\x00ˌˍ\"+لˌˍˌˍѰ\x00ˌˍ\"+଻˅ˇ(˃ˌˍ\"ˀ®˅\nʀˌˍˌˍѫ\x00ˌˍ\"¥ਃ߿ୃˌˍ˄˅ึ+ؾˍǧˍ\x00˄˄˅˄ˌˌyˌŜˌ΅ଢ଼\rˇ(˃ˍ\r\x00ˌƷˍ\x00ˍ\r\n˄˅߁˄\x00ʀˍǧˍ\x00˄˄˅ˌˍ\"˄ˌˌyˌŜˌࢃุଯˍǊˍ\x00˄˅cˌˌyˌȼ޸ˌˍ\"˄˅ӣ൭ˌˍ௢ˌˍ˄˅ް¥୼໖਴˄˅Òד೎ˌˍˌˍ\"+ਉ˅ˇ(˃ˌˍ˅Ȍ˄˅ਛղ˅ˇ(˃ˌˍˌˍ\"˅ɹ݄\rˇ(˃ˌˍ˃ाˆ˄˅ˆ\x00ˁ\x00˃\x00˃\r\x00\nN\nֽ˃	֞˃#\rܑ৛ˍǧˍ\x00˄˅cˌˌyˌŜˌԫˍ\x00˄ˌ\x00˅ˍ൑ෂ׹ܸ˅ˇ(˃˅~ఇˍǊˍ\x00˄˄˅ˌˍ\"˄ˌˌyˌȼܲˌˍˌˍ຋\x00ˌˍ\"ˌˍˌˍĎ+۽ಲ˄˅ූఓˌˍˌˍܧ\x00ˌˍ\"+͗ˇ˃Ǽ˅ʺˇ(˃Čˇ˃˅\x00˄ˌˍ~ˌˍࡐ˄˅Òജঌˇ(˃ÒԄˆˇ(˃˅ˇ(˃˄ˋˆ~ׄ˅ˇ(˃ˌˍĨ	˃#˅য়ˌˍˌˍ౬\x00ˌˍ\"+ե\rˇ(˃ˌƷˍK\r\x00ˍ\nˍ\r\x00ʹ˄˅¦֚ˌˍ౷˄˅Ò඀ˌˍ˄˅Ǚˇ˃ͼ˅ʺˇ(˃Čˇ˃˅\x00ˌˍˌˍ\"˅ɹܣ౫ˌˍˌˍਐ\x00ˌˍ\"¥઱ˌˍˌˍ஭\x00ˌˍ\"¥໪ˍ಩ˍ\x00ˌˍ\"˄˅cˌˌyˌŜˌѕˌߗࣷൄˌˍ˅ˇ(˃˄ʵ˅\r˄\r ɥ	\rˇ(˃༅˃\x00˃#\r+׭˅ˇ(˃ˌˍ\"˅~࠼ˍǧˍ\x00ˌˍ\"˄˅cˌˌyˌŜˌ΅מ˄˅Ò஻ࠩˌˍ˄˅\x00ˌˍ\"+೬ˌˍˌˍ߉+ળˌˍˌˍŊ\x00ˌˍ\"˅ˇ(˃˄ˌˍ~ߢˌˍˌˍѮ\x00ˌˍ\"+৾ˌˍˌˍѣ\x00ˌˍ\"+ॣˌˍˌˍВ\x00ˌˍ\"ˍǊˍ\x00ˌˍ\"˄˅cˌˌyˌ࣒ʼyˌº%ˇ(˃Ҙӓˇ˃Ǽ˅ʴˇ(˃Čˇ˃˅\x00˄ˌˍ~ࢎ˅ˇ(˃˄ˊ+ଠ˅ˇ(˃˄ʶ˅ˇ(˃˄ˈ+഻Ӟˆˇ(˃˅ˇ(˃˄ˉˆ~މ˅ˌˍ˄ˌˍ~ޘ˅ˇ(˃˄ʽ޻ˍ\x00˄ˌ\x00˅ˍ+͗ˇ˃Ǽ˅ʺˇ(˃Čˇ˃˅\x00˄ˌˍ~Ԅˆˇ(˃˅ˇ(˃˄ˋˆȌ˅ˇ(˃˄ˌˍѿ˂\x00\x00	\x00\n\x00\x00\x00\r\x00\r\x00\n	\x00	Ƚˁ\x00\x00#\x00­\r\x00ˁ\x00\x00	\x00஝Ƥ¢ຢ#	\x00ˁ\x00\x00\n\x00\nഗࠝ\x00ΰౝôҊ_ÂmÂQȯูȯমȯஜȯนȯؖpȯਮȯસȯ۠ȯ౾]	|\r\x00	ŖȲƌŚʴȲ)̰uȲǸ	ûuÂ#ȲЖ	Ȳǋȯϔ]ĸ	ȲԞȯࡶ%\x00\x00	\x00\n\x00\x00\x00\r	ûu\x00\nû\x00Ȳȁ	Ȳȯ঎	Ȳƀȯзȯg$ȯô,	Ȳଉ	Вȯϔ]ĸ	ȲԞȯઉ	ĸ	\n	ȲɬȳੈMȯՐȯ֑	ȲࢊMȯڸ]	\n\nȲT1ȭMȯ௭ŵ\r\nã\rQȯ§ȯe\rQȯ¡ȯe\rQȯȯe\"\r$ȯӘ	\r\x00	\x00\n\x00\x00\x00\r\x00\x00\x00\x00\x00\x00Ȳǭû\x00ȳȁ\n/Dt\r¨̮Cȯ΍,Hȯ߼KȯͬKȯ૬KȯਁKȯ͘ǃ๕Qȯ๾0\nkȯ๴\nQȯјCȯಷ0$໣$\r+Cȯ࡞\rCȯТ0$Ԡ$\rԠ$\r+Cȯ଩\rL	0ܳpɬcȯശ\r\x00\r\x000kȯ๎Qȯé\n\x00\n	٠˖\nǛ೧ҼǛ஠ଝǛغ०\rǛ௏śணõʱ\rʲ\x00ʳ\x00ʴ\x00ʵ\x00ʶ\x00ʷ\x00ʸ\x00ज़ʲʱȳۍʳʱȲΚʴʱȲଽʵʱȹљʶʱȵ்ʷʱȳ̒ʱȾ෎ʱȽ֓ʱȺ౿[ʸڶȯੑʱȲ഑ʱȪˁȵĚʳ\n!ɥ	ʱȲˢݳ	[ĭʱ\x00Ⱦŷvʍ\n|\nąÀʸÂໆ\nȲȲ௑\x00\nȲȳ೜\r|ʹ˄\x00˅\x00ˆ\x00ˇ\x00ˈ\x00\rˉ\x00\x00	\x00\n\x00\x00ˉࠔˇˇ͡ˇƂˉ»ʺ˄\x00˅\nˉʻ˄\x00˅\nˉ¶ʼ˄\x00˅\nˉ©ʽ˄\x00˅\nˉ¾ʾ˄\x00˅\nʿȲˉ\x00˄\x00˅Қ˅!ɥ෇IʷIˉoɥˉo๖ˇࠎˉÀȼໄɮ\r\x00ȯ೰ˉ\x00	5\nˉӁ>ӵैжɥ		ћ	উɥΊ	ޗ	>	ѫ\n8\n	ݭ!ɥIˈɥˈލˉȳƅ˄\x00ອˆȲŚˆ\x00Ξ\rʹȲˉ\x00˄\x00˅\x00ˆ\x00ˇ\x00ˈʺ\x00Ӝ!ɥ>ʳˀʳ\x00\x00ʊˁ\x00ʳ­	Îʻ\x00'ʶ̥!ɥ>ʶȴɩ\x00ʊʶȴɢ­	Îʼ\x00\r	9ʵʅ	˂!ɥ>ʵ	S˒ʵ	S̑\nÎʽ\x00'ʴ̥!ɥ>ʴȴɩ\x00ʊʴȴɢ­	Îʾ\x00\r	Àɇۿ	˃ȳĺȲࣤ	ȶൣ	ȲŽȻӆȷ௰!ɥʝ	Ȳ<\x00\n	ȼѷ਍	ȴॱG	Ȳ:ԣ\nÎʿ˄\x00˅\rˆ\x00\x00ˆؤʷ8¬ʷȲǩȳ-\nȲ๼\n\x00Ȼх\x00˅!ɥ	ȳǝȳǝ\r؞	ʟ\nʟ\r\x00	ȲʗȳҴ	ȻഒȳઌȲ๢\r\x00	\x00\n\x00ȲʗȳҴȵӟȵÁȳघ	ȵͣȳͿȾ«\n	ȵĶȳƸ\nȹߧ˄೥˅຦ȳ٢\r\r\x00	\x00\n\x00ˇȲʗȳؔȵӟȵÁȳ૰ˆoɥɄ	ȵͣȳ඿\n	ȵĶȳƸˇ\nȲƠ˄\nˇȳǝ\nȳ਑ˇȳೃɥ	ˆoɥˆoˇȳ೑Ⱥॅˀ\x00\x00	\r\n\x00\x00\x00\r	ʱȵÈ	NɇYȲ\x00ȲłȲءȯȸɇYȲ\x00Ȳק\nɇYȲ\x00ȲłȲĤ\nȯű\nɇYȲ\x00ȲࠂɇYȲ\x00Ȳϫ\nົ\rɑȲs\n\n!ȯű\rɑȲ\x00Ъ\n୽ȲłȲÊ	\rȲłȲÊ	E࠽ȲłȲÊ	ˁ\x00\r	\x00\n\x00\x00Ƅ!Ȳُ	ȲҝɇëȲ\x00ɫȹֳ\n\nȲ)\nR\nЋɇ»ȲޯɹȲǡȲଲɇYȲ\x00	ࣂʱȸѷɹȲ\x00	ȲTȲ୮˂ɏȲʱȲĝȴπɫȼష˃\x00\x00	\r\n!ɥʲȳĶ\nʲȳĶ+\nʲȲÈ\n\nȲŽȳȵȲ࢐\nȲŽȼ݉ȷư	\nȲ੽P		ʲȲȆȲǍ\nǣ\nʳˀʳ\x00ȵĚʱȲ֦ʱȲˢʳ\x00\x00	\x00\nʹȲӊ\x00ɥ\x00\x00ɥ\x00	\x00\n\r\x00ʹȲӊ\x00\x00ɥöϜȲٞ÷Ϝiø\rۮ`ąre࢞ʡȵӝઽȵմreݲûeஎaࡨ\\ॲreࡲadॏeڭù%\x00Oԗqҙd՜`࠸\\Úԗeҙre׃ݮȲ)̰ŠʞİɇΣɊȴ୥	ơȲȲƭöĀWɇൡɯFɱíɞʢîĀɕ3ɸɺଓĀɇ಼ɪɇ๓û.Āɇœɖɤȵ΁%ʯȯুȯ౲ȯʦȯ೔ȯˠȯДȯণȯڐȯ൙ȯഽȯૈȯంȯશȯകȯܒȯ௳ȯ෾̝ఌĀɖɎɶĄȳحĀ0ɔBɇˌɍíɺ̝ୗĀÖɇࠠɸɠɪɲɤȲ˼Āɇ୎ɏĀÖɚɛɾíɣɘٳɱɬȳȡɸɤȳ୘ɇ৖ɈÙɓɮəĄȳƜɻĄȳǫɇໝɪȲЀɗ؈̝༂Ā	ÿ˄ĀɜFɴ	ʞɷȲȲƮĀɵFɔɬ๐ɇ؟ɇਗ਼ʣîɇۊɪȲ΁ɤëĀɨĔɇฯɇ̵ɇ༃	ɡɤȲ̓Ȳ˼ĀɧɲĀ0ɌBɧɹíɨɒĄȳǗɸĄȳɮĀɇ̵ɏɤì	ʊɇëȲȹ๘Āɇࡾɇࢿɬɭ.ĀûIɨέɌFɴ.ÿƈɏȲɳՋĀɗɊɇɈɤȴಆĀɖɇӗɺɺɇɈĄȳӋ	ɇԽȭȲȲࣼ	ɇϹɷȲȲƮĀɑúɶɤȲȡĀ	ÿįɇൿɈĀ0ɭɺɭíɜɇ΄ĄȳǗɢْɇΝȲƯĀɇଊɇӗÖ?Āɇ̢ɢBɇࡒɇϓ{ʭȷƪȽ౔ȹ-ȻцȼΓȶƃȽғȻमȼʑȷнȶĹȶĺȷDȾӤȾҩȶDȹưȻȥȽĚȸÛȾŒȺŭȻDȼrȸӤȼ/ȷʃȸ/Ⱦ_ȽɽȹϫȹĘȻˏȻȑȼДȻȜȻŒȶʃȾғȷϢȸӶȻȴȹьȹцȻƖȼưȻĺȹઁȺƃȺ˨ȽĹȺƶȼऋȼƙȽȥȻϗȷ͒ȻúȹġȺ฼ýȯŒȯ१ȯ͒ȯɟĀɢBɡɗɇՠɻĄȳΪĀɜFûɎȲŻɌՒĀɩɴĀ	ÿࣿ̝ठɽɇ*ɥ\x00Ȳ\x00ɫ\x00Ⱥ\x00ȵ\x00ɤ\x00ȴ\x00ɪ\x00ȯ\x00ȼ\x00ȶ\x00Ȼ\x00ȸ\x00Ƚ\x00ȹ\x00ȳ\x00ɮ\x00ü\x00Ŵ\x00Ŷ\x00ɠ\x00ɬ\x00ɷ\x00ȷ\x00Ĭ\x00ĭ\x00Ģ\x00ƍ\x00ƅ\x00ƌ\x00ſ\x00Ⱦ\x00ƕ\x00<\x00m\x00ɾ\x00Ë\x00ħ\x00Í\x00Ɗ\x00ɶ\x00ɯ\x00Ž\x00Ì\x00ų\x00º\x00ú\x00Ê\x00Œ\x00Ɣ\x00ɲ\x00Û\x00ŝ\x00ʀ\x00Ñ\x00Ɖ\x00Ż\x00Ò\x00ƒ\x00Ŝ\x00ŷ\x00Ń\x00ɒ\x00Ƈ\x00ĝ\x00Î\x00ş\x00\x00Ï\x00ƈ\x00Ŭ\x00Ĳ\x00z\x00ß\x00µ\x00Ÿ\x00,\x00œ\x00Õ\x00\x00*\x00Ş\x00ƀ\x00o\x00Ô\x00¹\x00ĩ\x00ɣ\x00\x00Ƙ\x00ç\x00ŭ\x00Ķ\x00ƃ\x00š\x00n\x00ė\x00ĕ\x00\x00ě\x00\x00E\x00Y\x00/\x004\x00\x00l\x00\r\x00\x00½\x00O\x00>\x00Ý\x00ř\x00Ù\x00­\x00Ĺ\x00#\x00Ņ\x00Ó\x00Ð\x00Ŗ\x00a\x00\x00;\x00s\x00\x00ŵ\x00å\x00á\x00\x00â\x00é\x00ê\x00æ\x00Ő\x00Ú\x00ĸ\x00Ü\x00à\x00ã\x00è\x00Þ\x00ĺ\x00^\x00t\x00\x00j\x00§\x000\x009\x00¿\x00i\x00É\x00ä\x00F\x00³\x00\x00È\x00c\x006\x00Q\x00\x00$\x00¦\x00`\x00\x00Ä\x00e\x00=\x00!\x00N\x00\x002\x00S\x00\x00\x00Â\x00u\x00´\x00Å\x00\x00C\x00k\x00M\x00\x00(\x00[\x00K\x00\x00d\x00À\x00\\\x00Z\x00\x00Æ\x00y\x00\x00Ğ\x00B\x00Ě\x00\x00|\x00Č\x00«\x00\x00f\x00\x00\x00¾\x00 \x00\x00\x00]\x00\x00\x00¨\x00¡\x00Ĕ\x00\x00.\x00\x00\x00Ď\x00\x00+\x00\x00:\x00X\x00\x00¥\x00¢\x00)\x00_\x00R\x00&\x00®\x00L\x00¬\x00\x00%\x00A\x00ď\x00ª\x00¼\x00¯\x00©\x00Đ\x00Ę\x00J\x00W\x00\x00ĥ\x00\x00ċ\x00w\x00\n\x00Ã\x00g\x00'\x005\x00£\x00\"\x00\x00\x00v\x008\x00H\x00I\x00h\x00°\x00\x00 \x00Ç\x00ġ\x00¸\x00@\x00b\x00~\x00¤\x00\x00x\x00±\x00¶\x00²\x00V\x00\x00T\x00r\x00\x00\x007\x00\x00D\x00Á\x00\x00U\x00ȭ\x00Ĝ\x00P\x00\x003\x00p\x00»\x00\x00{\x00G\x00}\x00·\x00\x00\x001\x00?\x00q\x00\x00\x00	ĀəBɵIɇࣺɹ.ʤîɋϵ	ɇ̅ʀʀȳО	ʜxȲçȲĢĀ	ÿۉ̝üɇɈȲĸĀɇʣɇŦ	ɇຣȯȴȯʃȯٰɗĄȳͷĴʨ¬ʩȯrʪȯ-ʫȯVʬȯ¿ʕîąȔɇ΄ɪȲ͢Āɧɟÿ˫̝঵ĀɹIɇڨɘ3ú.ĀɩɱɿɤȹЀĀɇಘɇළɇƗɫ.ɇșĄȳκɇӦɬȳ)ɤð	ƣȲђùɒఊɲȲɴȲĒÿʳɇާɥɪɇϾɇުɬȲȷĀɇಂɨĀəɇʪĀ	ÿ஛ɤ	ïĀɋjɹIɻ3ɠ.ɌȲäĀ0ɺBɖɍȋɨɤ\x00òĀɺɇԜɺɇʎɞɬȲ̭ĀɝBɉɨFɓ.ɇ܊ɇԐɤȵƿɇϬɬȽூɳĄȳʂɏɊȲຬĀɱɗɚɶĀɶBɎέûFɌ.ĀÖɘjɇƫɕíúĀɮɧĀɾĔɇॆɡFɑ.\ró༌Ȱ\x00ȯ\x00ȱ\x00ɼ࣯ɇɽɬȲจüɤȲ೗ʀɤȻഩʁɊȽॎĀɇƫɚʘÙĀɖFɱĀɴ3ɝĀ0ɇߙɇЧɫíɪĀɛFɩɭɊɇࠊɊȴɟGʮޟȯ๷ȯਠȯۼȯಔȯ๝ȯߴȯ௨ȯথȯՃȯ൷ȯుĔຊȯߒȯિȯಥȯඞȯࠁȯࡓȯൻȯޜȯߛĕଚȯ्ȯ๶ȯශȯࣛȯທȯ୯ȯ෥ȯوȯԴȯঽȯौȯबØ?ɤ܅ɇૃɇৈɠ່űȲ௖ô?ĀWɷIɓɇ؄ɇࠋĀɦ3ɩ̝ڧĀɲɱIɉ3ɻ.Ā	ÿɦȮȬఎɬĄȳκɹɊȳڷĀɈjɫIɗɲ.ɫĄȳƜʟȬĀɷFɇgĀɇ݊ɇʪɇ¤ɊȲ๥ÿгʡîĀɵjɲBúɇપɇڪɭɤȼ඄əɊȲล	ʛ-xȲçȲĢɪĄȳǫ	ƢȲȲƭ÷	ɝɾȲȲƮĀ0ɇোɘɴȚɴĀ0ɇൺɠFɇ௒ɻú฀ɇՀɬȻݐʗɥĀɮɖĀɇ૤ɪɍȲʈĀWɇໃɲ3ɞȚɎĀɱjɬjɊɤ.Āɋ3ɖĀɬɺɟĄȳǗĀɉúɷɒĀɗɑĀɇʿɊȲોĀɳBɇູɋ3ɒ.ɇ¤Ąȳ¾ɇૺʠîɇйɤȳ۳ĀɧɹĀɎɋɬĄȳǫɴڽĀɯɉɻĄȳ˲ɇৰɊȳʾɜࣗĀɮɗʖîɇňɇ{Āɇ֣ɚɲɤ.ɛɠĀɭɷɇÙĀɪÑɸjɊFɌ.ĆȔĀɜɬɔ৩ɻࢼɞȲĒĀɇࣔɻɵɊȳϠɇ¤ĄȳͷɇऱȯĈûɊȲຽĀɇಟûĀɟIɝÑɦFɉ.ɇ୷ʰੵȯVȯVȯVȯVȯঢ়ȯ࠭ȯدȯ³ȯ³ȯ³ȯ³ȯ³ȯ³ȯ³ȯ³ȯ³ȯୢȯ_ȯ_ȯ_ȯ_ȯ_ȯ_ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯطȯ̩ȯ_ȯ_ȯ_ȯ_ȯ_ȯ_ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯ-ȯॄɇʿȲœɇӦȲȤĀɮɓ	ɟȭȲȲӯɷෞɇࡌȯŹɤíʌÙɤƙɕಎʂɯɗɇΜĀɇඣɸɈɸ.ɓɤȺศɾ੷ĀɸѡɘBɇວɉ.ĀɧBɴIɩ3ɔ.ɤî	ƣȲђdø×?ĀɗFɺĀ0ɤBɷɨíɇŦɇʿĄȳ˲ɤ\rǹɑɊȲೣĀ	ÿలɮɤȴݍɤɇôɍÙɇșɊȳ໬\rʄ5ʅ5ʆ5ʇ5ʈ5ʉÙĈȔɢȲȬధȭ਌ɎɤȽɟʓîĀɭɔ	ʝʛȳ˧Ȳ਼ʙĀɬɮĀɈIɊɭɪ.ɯ੼ĀɶÑɇయɬɡ.ɇ¤ĄȳӋĀɮɇŦʔ˦ÿ϶ɤñĀ	ÿగĀɵɫĀWɎIɭ3ɷȋɪĀɛɇ̝܈ɪɤȳƿõɤ.ćȔɪȲäĀɺjɾjɌɖ.Ā	ÿǨəȲȟɾĄȳƜɇΝɊȲӧɣɬȳ९Ā0ɚjɖɇԱɤɫɤȹۭĀɇ୸ɮɇԕɊȽƮɊɔȲԓĀ	ÿƁɝȲǲĀɱɇ̢ɗ3ɭ.Ā	ÿש0/12̢̝34̛̙̜̚ #$%&'()*+,-.̖̗̘̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̕L\n	ƒ\nƖƠǖ\rǗāĂì˶ʅ˷ʉ˸ʌ˹ƭ˺ƴ˻ǰ˼Ǵ˽Ƿ˾˿̀ǨǪẤɶ̂ʠȩɪɫ¤¦¨°ȏřˋˍ ˏˋφÄɶÇȮÖɹ}ŚɹʸE=¾ǎɾÌȭšʖɮˇ2·ǒžđŵ~ʝŹáɹɎɹķɹŨ²ƿ.ÁǉƀɪxTɓg¢ǴǄĿŇʎňɹǯɹʮÃȪɹɼɝƅňˈƝȥĮțȰɹȢ4ňǋɹ˃ȥɲɹɳȥŶțRȨǛƷ×ȦöPıŐǊ{ċǩ!ǠċŜșfǃǣĝŁƋKÊnĸȌĨ¯ƑşƭɹƵ\nĚɹȯɹðňjɹįɹʾɹơƭɹòƭɹÒɋǡɹQɹſňɹʬǄPřľģɹùºĩčF+ȶɂęȉŬBʆõňħ¿SʀǁŃɡŃAţɰɍȑu@ȗŷɹɹþʧǫʠƻūɹǔȐɸɕƤŭȲaćʩŘȡǹˀʽňɺƇňǼȇʞƟØƱʲüȹŃDɹȻǓ	ɹʁĄÀƠĵƖğƩŪňíÝɹʫǏŴʣŻȥʫțɹé˅ɹǬɀɚǤGPñɹțǽÏɔĲɹ˃ŪňɹȽPǥɲXȴʕ5ʍŒCɹŰʃ$ʐɹĂňd§ňʥÎŠëɹ\x00ŀť6eǇÆƦ˄ǸɠɊňǷɆȼƮňǺɅ3ńɹǗĈɹĪňǖ'ȧNňņĚʳňʼ˂ňȋɹŞƚʶȥʛȞǚăɹŕɹɹȆǄňƂĚɹĻɹó8ȱɖȏƯɹěǂǭŉƾ°ƒʺůʉ­ǨɬȠȈʻʟäɈHǧôÍŤʊȖ1ǾƏɢŝĞƘÐɹƼĖȒǵɭƔLǶȥɐțĕȾňʦĚɹɉ®ĜǜɤĴʈȝňkǟ]ȥɦǰɹŲňɹ_ƈňȘɹƄPƶ ƥȀɹ*ŃĊAʂ[ĐƍƴʯĺĘǢň%ˊȥȕ\\èʌú,\"ÂƆ-ȥ«ț£,ɹŖǑȥǮǊČňɃƨɫ,Ľª>ɧsǑzǕø»ʏˁçæɹÉ#ĠĦŋ¼ÕȥɁǪȎȥɲțĥǷÑɆȥŋ¼ɲɹïĳɣPȳȫțƎɹİJ ±ǑňŽʚȼyġƐƍƴŮĺ(Ǣň%ˊȥȕ\\½ʿǝǚmɹʇɹɹwɹƹɹɹìMƽɱÿµĭǌtɑûɛǍpʱŗÞ<ŢȼOň¡o˅ɹ´/ōɹ|LǙƁǿĿēÈġɩțȄʒȥŌ?ɵZɹʰƃȣȂÛĶĚɹǀɌňɥƺǅêËƛŅňũɲɹȩȬƳňv^ÚŧȟȔɴɹțĢɹå:ɹīďŎȜĚɹƓȤ˃Yˆȥ¸ňƕɳƆ©÷ɒňŅàãßǈɽɹʗĒƗɹɹɇȚňȁɹbňĚąbňĚʹ7ňǻʓɹýňɹĉʵiųʔʭȥ¬ɹȃ&ÓňƣɹʷɹȷʙɟňĹȊƸ;ɄIȼőȥîɗWȥțɘʜɨȓȺʡÜȅƙPɗƫĢÏɗƢż¤ʪǪǳȥāțÅʨ¦,ɹʫɿʤʚǆƉʑŏ¥ƧĚɹʋɹȸ¨ɹ0ŔɻɹĆɹŸǱȿʶǐǷĤȼ-ȥǦɹǐɹʢȍ¶ĎʄȥʴțÙʅɞ`ɯưźɹɹˉɏUĔŊśhłȵɹɹƌɹɹƊœƲ\rėʘqňɹƞȥĀĬƪƆŦP9ǲǞǪ)P¹ňVɜļcɹâƜƬəǘlɷrȥű³ÔɹŽ6̙Ȳæ̅\x00Įɪ\x00ȳ൩̃%\x00\x00	\x00\n\x00̆̙Ȳ]̅׉Cȯ໩Ӻ ȯঢ̆̙Ȳ]̅ૡȯണ ȯ๧̆̙Ȳ]̅ņ	̆̙Ȳ]̅ˍ	MȯŎȯఏ ȯख़̆̙Ȳ]̅ņ	̆̙Ȳ]̅ņ\n̆̙Ȳ]̅ˍ	MȯŎ\nMȯǪȯŎȯࠜ ȯ೓̆̙Ȳ]̅ņ	̆̙Ȳ]̅ņ\n̆̙Ȳ]̅ņ̆̙Ȳ]̅ˍ	MȯŎ\nMȯǪȯŎMȯǪȯǪȯŎȯં̄\r̙Ȳ̶̅\x00\n̅#E!%\x00\x00	\x00\n\x00\x00\x00\r̃\r1ȭƵ,Őȯ౯̃̇૑ȯ-	$ȯȁ\n̃	൰\r̈\nÒ	ȯ೮̄\n\n̈Ȳ\n\r+	Ҷ\r̇\nÒ	ȯê\rɐ\nÒ	ȯƔ\rʚȲĮ\nȲ౼	ȯʌ\r̛\n೺\r\"ȃ\x00Ȳі̝ɿ̕ˋʢȼۋǗǱ̙\x00̚୶ǵ̚Ɉ*&̝ࣅ1	0࠙'1ȭ$Ⱦ#äʠȳĪƽɈ*ɇఐQ?1	0ٗ	ɪȲȆȲ¼̆ʢȼ৷Ǧ1	0๦ʢȷ˗Ǭ1#$\r#ɇëȲɪȲŧȲˣ1ɲ3Ɏ0ޙ1ɢ3ɳ#ÙʠȳǹƱ1	0̸1WɡIɪɳɌʑȲ̆\r̙ɹȲ̙ǡ̙Ȳે'Ȳ%1	0ਜ਼	$ɇȳ%҈I1ɕɇůʡȼӾǏ1$Ȳƕ	#̙Ȳ:̛	̢ï̆\x00*/*¾0ࡼ1ɺ3ɇ໌ʤȳĥȋ%iȯ́ɋł?10ɇളɇਸɕ3Ɍ&Ǝ̜	1%7ȯ{̅#̙ȲT̈5&5'Ù\r̆Ȳ<ȳˑ̝Đ̙\x00ȳը4̜	1ș̙Ȳಭ##Ȳæ̙#Ĩ?Ɉ*ȼ#ڟ0඗1ɤȳȒ1	0ටʢȺˁǚ1$1	0נ'Ǝ$4ı̙Þ	̆ȲŽȳȵȲɘ\r#ɇYȲ̙\x00ɇɫȲßȲ#ô1	0࠿$Ȳ̙¾̆̇̈$̃?'̢ߏ̙ʣȳǹƳ̝ฐ(à$$Ȱð$প#*ȰƷ$\x00$෺\r̆Ȳ<ȵ˹̝Đ̙\x00ȵϓ1ʖ̙bɈ*	1Wɇ¯ɇÐȯǒ1	0ڌʡȵěǊ1	0߲1	0জ1&C#1#֭1	0ɴ	σ̙̚B̙୴̚.̛Ȏ̛̇̝ɋ$	1&#Ȳ)%ɣƬȯ¿1	0ͳ1ʑ0௣	$Š̛\x00Ȳǒ	ɤȳवȲȱ̙1	0ӷ%iȯŻ\r1ʷɇ՛Ȳ౴ɇ¯ɇÐȯǒ+à$̙Ȳʆ$FǸ̚$$Ȳࢬ$Ȳͦ$ȲԔǵ̚­%[ǲ$\x00̚#$z1	0ܼ̒̓̔1Ɍ3ɇů1ʷ#ȲӨɇJYɐĆ̛ħ?ʢȸğǛ1	0ଇ$#ɬȲå#&Ǹ1ɴ3ɇĲ1'	4ɇૠȲɤ\x00̙ʎȴ҇ȴбʎȵृȴ࢑ʎȴ΋Ȳ๨%ʎɥz1ɪɇŕ#qʡȵЊǋ̙ɹȲ̙s#ʢȳĥǨ1%1Ƕ̚$Ǝ#ʢȶĥǣ1	0޿0ࡽࢶHȯ_EȯмȯVRL/ϰ&1ÖɮBɮFɇګɜ1	0ٲ̆Ȳ<ȲƔ%%Ä%\"1ɇǇȯgȯĉ̙Ƀ#ȟɈ*	'10̆Ȳణȸो̆Ȳ຃%\"ĔɇযɇǞȯਹƔ%DǀƔĩـ%1ɇ௼Ɉ*̙@©HȯVEÔRLQ\x00N\x00/Í1WɲBɻɇࠒɇĲɇ৪̝ໞ̙̝Ǐ̙̚ɇh̚}1	0ढ़\r̅̆̇̈̉̊̗&iȯ੆	̢ï̆\x00ɇú,Ɉ*1ɳ3ɖ1	0ඩǲɤ\x00̚'Ȳɇ`Ȳ&ຘɮĞ0˫1#1̻1	0७ɤȴϦ̙c#\x00$#̙̚b1#Ѥ#7AȯƦ1ɊjɡBɜɇʎ#ࣩȯrȯ-ȯVȯŇȯÛȯ)ʣȳŲȄʠȳŲƼ̙ɇ̙ɇJ}ɐŕ̆Ȳ͔̛#Ȳѐ$̙K##ধ1Ɋ3ɴ	̙Ȳ<̛\x00̜1	0॥#̚	̝Ľ̙\x00Ȳ÷%1̙ ȲŹ̙ȳଡ଼̚̛#ɇɫȲÊŴȯƝ	1Ľ̙\x00ȲƝ	̝ǖ̙\x00̛\x00̜ÞʔƾɈ*˸1ɤȴࣶɤȲձ1ɺ3ɇäɈ*$ɇ##ǵ̚	#ɪȲÈȲƝʢȷৄǠ%̚ŻȽ#ŕ\r1$ƍȴࣽ$ƍȲڈȲĒ1ɇா$1	0ൠʢȺܕǪ	%7#7̙̛ɇh̜s%ȳ#1	0ߥɇJɐĸ#	1Ľ̙\x00Ȳʹ̙Ȳæ̚#࢙$+̜ʢȷदǳ̝Ӵ$đ1WɲIɜɮɇĲʣȵǎȅʡȵȱǋ1	0౒ȶ#ĒɈ*1ɖ3ɮɇǷȯrɇ८̢ü%ƚ̙1ɖFɲ1ɋD7(DǷ̚1ʥ̙ȱĉ$ɮ&iȯગ)&'Ń%1#੢̙Ⱦ׊ɪ୺Ǹ̚1	0࢜\r%Ń$ಽ$	ɥŋ;\r4#%!ɥ	#%̚1	0஌1	0ච0װɆ#͏ʠȸӒƻ1ɇ৚ɳɈ*˿̙œ̙ʢȼӆǟʢȸכǮ	̛ɇh̛s%0ʳ1ɡIɇѨɻɇʎʡȸฉǏ1ɺÑɮBɇݪɺ.4̚ɇࠃ1Ɉɸ	1į̙\x00ɍɇǷȯՍ#ŵȯ̳1WɎBɶɫɊɈ*̂1'%+(	%Ŀ#F1	0็1ɺFɇĲ1	0ತʢȻǑǥ1ɮjɇ൓ɇ฻ɭ.1ʗ ̙1ɳ3ɗʢȺӳǞ$ȳ೽ưɑȲ%%\x00ȳٮȲݟ&̃	$+̜Ȳਜ1̛à%#$%Ā#R̙#Ǚ̚%ǘɇJÇɐĲ	#̙Ȳ:̚4ɇ॰ȴ΍1	0ۚനʗ̙̆ʉ	)ɇȳ%\x00&Þ1ɇ»Ȳ̜ːȲĒ\r̆Ȳ<ȳĚ̝Đ̙\x00ȳ͍&ɇh%}	$ȳȁ%ȳƯ̛̝ә̙\x00$\x00̛Ɂ#œɤ\nƝ	$Ȳ#/Ȳß%ɇ֝%#ɶȲɤ\x00̙ɐ#\r#Ȳġ$̙Ȳ:#&Ǝ̛̆̙ȳ୨4#Ɉ*1	0ୋʡȵ˗ǈɈ*1	0ࣥ1	0ౚ1	0МЗ$Ȳȵ 1#Ȳό	̙Ȳ<̚\x00ȳ׽%ƚ̙Ğ&iȯ׮ʡȳĥǎ	̆ɪȲÈȲ࣫1̛ŝ̛\x00ȸʂ#ȲΜ0қʢȽ͙ǡ4ɤȲǩ̙\x00̚\x00̛۷ɠxȲР1Ʒ̙Xȃ̙\x00̛X̜̆Ȳ<ȲƔħxȲਣ%\"Ī?#Ɩ̛̝৏ɇJɐħ$̢ͺɤȲ̓ĢǽȲि$##$Ѧ%[4ʂʡȶ͕ǌ+ħxȲŌ)I1	0͓4ʌ̙bɇJWɐǲ0രʑ$Ȳە1	0ɦʢȺӾǘʡȵǑǈ1	0ౠ)̝ñ4ɇ`Ȳ'Ϥ̛ɇh̛4&$ƚ#1	0įɈ*&̙%b	%%#%$ȲȲˣ4#Ȳͱ٣&&ȯ¿&,##ʊɬ$cɬ%ৼʊȲߤʕ#ர1	0ਧ	̢ಝ̆\x00ħxȳ਒	1̝°#Aȯϙʣȳĥȇ̏̐̑#ɇh#	̙J©QÍ1̙ħ?1Wɇגɖ3Ɉȋɸ$$#Ȳԓà##ȯð#Rȯ#Ԯȯ#֏̙Ȳ&+)IɈ*#ূ̙½Ȳഫ̙ॼȲşȷ෤ȯĈ#ŵȯ˚1	0റȸ#¿1#!ȯĈà%%$%R'%ɇ`Ȳ!೸Ɉ*ʢȽğǙ1ɇ٤%1	0ఒ\x00#̛#Ȳ¸$1#ʠȳĥǃ&ʡȸǝǇ1ɇʺĽ̙\x00ȳܵĽ̙\x00ȳ্Ɉ*˶ʤȳŲȉ̝Ͳ̙	1̙ɥ̙ಈ1	0ດ1	0˄ɂ#ಹ̛̝ĵ̛̙@©HȯÛEÔRLQ\x00N\x00/Í1̙Ʌ#ࡳ̘ϵ	1̙̙ȲȒ1ɢIɴBɇֆɪ.̜$̜ɀ#Ȥ1Wɇഅü#Š̙/ȲĤ$5%̝͹#ŗ#(̝͹	1̙HʘȲ)1̙̻1	0Ώ	1Ŝ%\x00ɇ̳	1$!%%$ɇ̙Ȳ:Ȳև	̋̌̍̎ʡȳǹǉ̙@©HȯĺEÔRLQ\x00/\rÍ0ࢹ4ɇh̛Ɉ*\r̙̛̝ә̙\x00$\x00̜1	0ਸ਼Ɉ*1ɇèɊ1ɎIɳѡɺɇઞ̛#ȲĒɇJÃɐȟ\r̙J©Q\x00NÍɈ* -1%̙SB̅ݦ̝Đ̙\x00ȳ݁ȶݞ%I%7҆%7!ȯè%7!ȯ໅̅ȴࣴɇǇȯર10ɌĔɇއɲɇŕ̛#ɇĮȲÊŴȯƝʠȶΗƾ1̛1%7ȯ͠ǽ%%1	0ాɇJfɐ¿#ŵȯ௞	1ɇ¯ɇÐȯÆ̝߻ʡȻΗǇ3à%#%C̙%R&0ɇټɣƬȯࢂ$Ä#̢Ӳ%̢Ӳ&'ʘ%bʘ%ʘ&bʘ&'zʢȸěǳ̛Ȳæ̚̜ħxȲŌȲś̜#ƚ̙1%7ࣳ̢ૉ̙\x00$ʠȵ˗ƿ4ɇல#1'Ȳԋσ$$ȯ൜%$ȯ࠰ȯǒ̖-˦1ɺɊ1ɇŔȯૐ%#$̙Ȳ̙ȲǦȯÆ#ʘȲ)1	0ߠ\r,ɇਘ(\x00&\x00)T̙@©HȯƖEÔRLQ\x00N\x00/Í1#AȯgʠȵЊǂ#ɇ๹ʢȷğǴɈ*\r##ȯ-$ɪȲÈȳǶ%$ȳƻȳຆɤʚ̚ȲçȴƼɈ*\nʡȸ࠹Ǉ1#1	0੾1	0ಬʢȽຨǜ̅݀Hȯ_6ϰ#0ɳ4ɤȳ໺̙\x00̚\x00̛ʢȻรǢʢȸ܄ǧȴ#Ż1#!Ȳ઼	4̙Ȳ<̚\x00̛1̚ȲŹȿ#ǲ̝ໜɇĢʡȳĪǄ1ɇԜɊBɫɢ.4̛#๜̙$ɇëȲ#֌$Ȳצ$YȲĄȯ஁%[ʠȵěƲ	̙Š̙\x00Ȳˣ$̙Ȳ)\r1ɇ=Ȳ̝Đ̆\x00ȳ૞1ɮFɗ1	0ގ$Ə'ʃ̝ñ0କ	4̙ȲΉ̙ȴƿ	1Ĳ&jʡȷǑǇ1	0൉/$ȳħ̛$ưɑȲ#%\x00$Ȳਲ%ƚ̙Ğ%%#%%7#7ƴ&[	̝ǖ̙\x00̚\x00̛ÞɈ*́Ɉ*˹*Š)0\x00Ȳß0ѥʠȵǎǁ1Ƕ̙Ɉ*̜ħxȲŌɇō̜̝ৣ#\x00ɇh$%.	ɤȳ܁Ȳƭ1	0௺'+ɇȳ%҈0	1Ŝ̜\x00ȲƜ1	0६ɇ̈́#ĸ1ɤȵ̭0Ҩ1ɊFɗ1	0ী'Ȳ̞4$ȳȷ0঺ʖ̙ਚɈ*1#Ȳƕ4ʘ̙ȵл̚Þ1ÖɌÑɢ3ɻɖ(ɋ$Ȳ#đ\r̅ɇ=Ȳ̝Đ̙\x00ȳ͍#ʌ̙b	&Š%\x00ȲßɈ*˼̝ŝ̆߷	̆Ȳ<Ȳ+4ȯäʡȽˁǍ$̚1ş̚\x00Ȳ೅#7ȯg0ࡕʡȳŲǆ1Ɉ3ɸɼɐɮÞ1ÖɮjɻɗȋɊ%iȯɈ*̊	̙Ȳ<#\x00$10ɭIɫɡȚɫ1̙̚b0ƈ	̙Ȳ<ȳĠ#1ʎ0г\rɤȲͦɤȲԔǵ̚Ɉ*˻	1$#Ȳ)̙ɇh̙+̝ࢱ1	0ٺ1	0Ɓ	%1ƒ௄(1	0෩1ɇʤɪ$̙	ĭɪ\x00ȳƶ4ƓƗ$\n#Ȳථǲ̙\x00̚ȷ#́̝๔$ʂɍȲɸ̙\x00̚.	4ɤȲǩ̙\x00̚%#ɬȲå#&ືʡȻ҃Ǉ	$̙Ȳ:Ȳಸ	1#7ȯ¿̙@©HȯŇEÔRLQ	\x00N\n\x00/Í\r̆Ȳ<Ȳŭ̝Đ̙\x00Ȳෆ1Ɋ3ɕ̚ɇh̚1	0Պ#̝ñ̝ଏɇĢ1	0Ǩ1#7ȯ͠ǽ#%1ɟ!ȭȲȲӯ1ɫɗ1	0ࠢ̙Ȳ<̚\x00ɇh̛೹0Ӯ	̜ɑȲ̜Ğ	ɪȲȆȲǍ̆$q1%̙ȵл̚ÞɈ*̀#̢ͺɤĢǽȲ຾1-1	0ؗ10$ȳěȸ฾#ÄȶŸ%đ('ȲХʂ̝1	0ࢌ	#ɤȵب̙ʢȶ҃Ǥ1%%ಊ1	0۵	ɪȴҁ̝Ř̙.ʡȺŲǇ&#ȯ{ɇભȯվ10ɇǞȯĳɇచ̆ȲۈȹǲʠȵǑǀ	#̝૸̝๿̙.ʢȻ҇ǥɇJªɐô1	0৭1	0ψ1%%1	0ނ&!?Ɉ*\r1̚#Ƙ̚\x00̛1	0৙0܆ɤȳ͕Ħ	#ǅ̙\x00Ȳ૛1	0ඃ$Ȳ̝ଅĬ#ΑȴĺŮ#D%ແ&$Ȳ#ঐ$%	̙Ȳæɇh̜Ɉ*˺్̝Ⱥ#Ư̕Ő'ʢȾࢪǝ	̙Ȳ<̚\x00̛1̜൳1	0ૂ	̙ɇ`Ȳ$Ϥ$#৊1	0੗ʡȺǎǇĴ	%ɑȲ%Ğ̙Ȳĉ#1ɊɕBɡFɸ.4̅ȵ#ĸ1ȃ̙\x00̚X̛ʚࡴʙqɇJXɐœ1WɇߌɴɢɫʤȳĪȊ1&̚ȲǰȯƦ1ɲɢ('ô̙@©Hȯ³EÔRLQ\x00/ÍʎɤȲОʏɤȵ໒$[Ɉ*˷Ɉ*̙Ȳĉ̚1Wɇ৻ɇऊɈɭʣȳĪȆ1$3$7$7Hȯ¿ʢȼǎǫʤȳǹȌ1ɶFɮ1̙Ȳƕୡɇƨ'11	0౵ȹ#ʈɤő%Ń$1	0ॵ	1Ľ̙\x00ȳݫà%%ȯÆ%Ā#R̙#Ǚ̚%ǘ1ɗIɸIɇЂɈ.Ʉ#Ͼ1&ȲƕɈ*˾ʠȵȱǂ$̢ॡ̙#̚ô̙̙Ȳʆ1	0ף̚ħxȲŌɇō̚	ȭȲȲฑɟ1	0प%Ə$,ȸ$+#̜#ɇ=Ȳ̙Ȳඒ#ɤȳ̧1ʒ̅̙Ȳͱ\r1ɇʺ#ȳѱ#ȳß'ÙʢȾ۬ǩ[ųŜ)\x00+ԥŜ)\x00,)ɹȲ)\x00+Ȳά)Š)\x00ȴʼ*)ô)Ű)D(ธɇǇȯΦ'Ȳ׵'Ȳ̞'Ȳ%v-ણɯ*½Ĭ)%&˖ȲÊ)ງ%౎.ɇǷȯ໦-૓1ɤȲҦ\rɤȴϦ̙c#\x00$\x00&1ɇܗɴBɌɈ.1	0ډ	ƛɪȲӭ\"Ȱĉ̙	$̙ȴఄ̚bɈ*Ɉ*˽4ȯŹ1%ߝ\r4ɤȳɲȳඋɠxȲ੿ȯහ1ÖɴÑɈ3ɇծɇࣙ%#$bʢȻःǭ\r1ɤȾ۪ɥȲ௜ɤ#Ń̛ʢȽ੧Ǵ4̙̛$ôȻ#ħ̙ɇh̙	#$̙Ȳ)	1Ĳ&+̢̤ !̡̞̟̠	K\nS%\rjAȌ˖xÐśǍſ%Ǟ±ńŹǁŹōpºǠaƧ¢aœŹĂƣoŖâ£paøǈÿ5ŕǼrŖǾ¸ƴƏǤǩŖǯÝŌ¬ǒƀ»ĥȈu7ƍǪǑĈǕ/aeîĬŮnałƤº.a¿I¿Mȇƴı êHƬĽaȂLŹǓùŖ¤'áũź¥čàǃØĐ?uaŜ>´ÁĶŹP²¨ÒǛĎ_2żƑ{ŽŹūƛǂ2ų>ƠÃŹȉ=ŹƕÅǌƂ2ĢŅÚŹüŖéOŹwāŹcŹ,ŹòǄĔǢFíŹǶ¦ƺǻȃaőƎa#Ǉůaţ×ŹòňĔ8ǽĦįŉażǦ4ÆÄB9gŹƩÉŖŦåŹ}aŹƳė`ñȁĿÑŊŹ[ǳđ0ŤïŖǽèǬŖäæŪŖzČŹŹŎßȆƽŗAŨǥŚǘŖż®ĝķǹƘġÈŖ·£ȀaēďNäD¹bǕyŖ®ĖǇŇǱÔĵňĔĭŖż©¶2ǽóKĴŖäóƝžǣǕơÓiKŖŇiČŹ÷aŹĉŹhǖŹŹǮ2Ƽ'ŹǫaŹEƱCŶĊpaĬŹ«GƷƖǙXƪĲǡaftĆ\x00ĕ1àǃƌȄÂºýa¿ņ¾ŋ]ȊŒǅƇqŹƶǺŧŹűaŹƅaĳŁaŹaŹò¯ǚºƗ½ŻŹƄº) dŹƥ³ŐúŖôħŖ(ŏÿƞǜÍǵŘ!ƻƒ2ŲƆƸõŹ§ĹŹŹŹòňĔǀšçvÏǸÞŹŹęĩŞSŹĤŹÖľ-ĪŹěĄŹƔŹR2ƙċĚŹÌǝ$ƦƭaÕŰaǎUaªJaǭŹȅÙjƚ;YVŖëŖǲƿŖ\nưǐŖûIòöŹƓƨĒăťƻĀġŃaĮÜƆ:ƉQ*ŭŖƁ£ǟaÇĮŹƈĸÿ2ƜƮƟǏÿģŝǴƫ°aǊÛ|\"ćŵƐŖŠzǨŖğ^ĘaǷŹŹT¼ËČŹǋŹī6ŹƯŀĜĠ ŷµƵƢŬƲ\\ŹlȋŹmŹƹǔļƾŹÀ\rWŹĨ@ÿǉ~İ+ãǗþŹşºǧ­ðŹĻŴřƋĺŔsǯ>kÊìŖąŮ3ŖƃŢ	ŖI<ǿZŹǆ2ŸI¡ŹƊŹŹ&ĞŹǰaÎŹ\x00Ȍ	ઇƅ̡\x00ɇખ	ஷɫȼԀ	ȲȸʈŶȯĢ	܉	Ẇ̅̆ɇǉܤ̡ȲҽȲן3ɤȳ̧ȯgiȯÆƁ̡\x00̊ƛ\x00\r}̝ࢄ̢ۘ̝ࡆ̌̡ȵʔ̙Ȳæ̅	ࢁ̡Ȳ͔	̅Ȳȯg	̅Bž̡	డ̡ȼබƁ̡\x00̈Ȋȵ֫ȲƯļ?̅q	ְŻ̡	ී	1ȭȲά	຀ÖɗjɪɕɕɎFɪɈ*ɇຏನ̛iȯ{̏YȲƀϪȲ)̆ݛ̢յ̏̝ñʓȳٿ̝°ʓȴˀȯȢȳ˥SȶȡƁ̡\x00̇Ȳԁ	ɴ̡¼	຅	ೂųȵ৴̤ࣟȵ౨Ĝ૊Ĝ࡭ȳу	ࡖ[	൴̍ɋł?ʳ\rɤȳŽȲȲ໥Ȳ̡̢സ̡­̡[Ӯ̤ėಳ¾ƚ̡ɫɈ\rɾȷกɪ\x00ȹ࣋գ[	Š/ȲßƄ̡\x00̅	ɑȲĞ	ฎȲˢɢÑɻjɇЂɡ.ƈ$Ě?ɳ4߀q	ࣸƉ̡\x00̆0ɡĔɳɜɗq̒ȓń̖	ͳ$Č?	Ȳȶజ4̞	Ȳ:ȷଶএɮÞ̅Ȁ̗Ȁ̕Ȁ̖ȓƁ̡\x00̘ޑȯೆ̘ɇʤɌſ̡\x00ɇҿ̉̉ȲȯÆ	ĭɪ\x00ȵೀ˻}	įWɇóȯޤ̢ޅ	̐ɯ̑̆̤ė\x00ȳ˥Sȳۧ̟൪	ĭɤ\x00ȷ˨ŁWɊBɫɕɇůƊ̡\x00̆ɤȴୄȴĪɇҹȴܻ	̢ï̡\x00ġđ̈q̇qĞ?ɥàRʌŽv̡S	ັ	WɇǞȯĳɇҿ	๲	̆ľŕ̡.Ɉ*7ɥ	Ɖ̡\x00ɇǉ̝ౙƄ̡\x00̊ఉɸɇѨɡɫ.̡ɲBɶɇରɗ.̢ชƁ̡\x00̎	వɈjɲIɫɜ.ࠥȴ۞ȯ{\rȲ:ȴʖȴŻƙ?̙	Ώ1ɠxȲР੨̘ɯɞɇѪ̡ȼ઄\x00ȯੀɇѪ̡ȷ૙\x00ȯਯƊ̡\x00̇ń̌Ҩ̢࠯	Ƌ̡\x00\x00̛	̞̡Ȳ:Ȳʐ	া̡œ̡̞ȬƄ̡\x00ȯ{	̆ȲȯĆAȯۑȯä̟Ȳѐɤȳ༁̝°̏	ψ\rɤȴSǸɇèɫखɔȵछ̑#	Ȧ̡ȵ௧̡ȵ࠶̡Ȳşđ஥ȯĈ˫	̡ȶĩȷ୦ɇ੠ɇߘɗɊ.	̅¡Ź̡̟̅ɥλɤȳɲȲӇK̅ѵȯƼ̅Ž̡	ɪȲÈȳ˲	ഊ̋̡ȴҦſ̡\x00ɜ3ɭ\rȯĳSȲহɈ*	լ	ƃ̡\x00Ŷȯ่̤ėġđƁ̡\x00̗	सȳʪ	̡Ȳ<ȲƄ̡\x00̉	Ǩ	ถ\rƃ̡\x00̢Ҍȯೢȯ݈̋.	̎ɯ̍̌	Ŝ\x00ȷ஘	̤ė\x00\x00̞˦̤ėȴȞ¾ȴ̀ȵŦ\r0ȽিȲֹȯ{	࢔	ೈWɇ஑ɇܹɪɳ\r4ਨȭȯથ֬Ȳ௲ĸȳȤ	Ȳٍ	̢ï̡\x00ȴȞ¾\rƃ̡\x00̢ҌȯଐȯŒ̌.̡ȲΉ̡ȴƿ	̢̡࢛­̃ʘ̡๳̡̅̝ñɈ*	ĭɪ\x00ȳŭ̀}Ƅ̡\x00	Мɫɕ	̅ž̡0ɇีɇ೪ɇʇɇǫ+ఀɇóČమɇ͂ė຿ɤȺग़ɥ̅ɤȲĖȶŕ୙ɤȶ୵ɥ̉ɤȲĖȷŒ̂ୱ[ɤȴઔ	ĭ̞\x00ȸˏ\n\rSȲçȲएSSࢷȯੌSſȯൂಣ̤స[	ĭɪ\x00ȴ¢˸}ȲʾȬɇƨɲȳϠ̇ҕiȯg4ȳԑƈ̡\x00ɇʹɈɇŕƇ̡\x00ȲҥȯพƉ̡\x00̅	̢ǏʓȲЇқʑ	̞ȲƠȶŷqņ\x00\x00ń̉	ĭɪ\x00ȵȜ˼}Ɗ̡\x00̅̛т44ɤĢǽȲЉȲşĒݯȯȸɤĢǽȲЉȲşȳڊȯĈɇƨȲś̡ȶۨ̚7ɥȯ¿̅̆ȹ๞ń̅SȲ)ɇ๩̢໸̢֤ƅ̡\x00̛̒̝ñʑȲ̡	̡Ȳ)̛iȯgȳ˥Ȳ)/ųɤȴหɤȴωȴධɤȴωȴ૨vɤĢ؋ȴ஧ȴĝȴ୹ȴĝȴܢȳу˳[	̔ɯ̓̉̡	׈ſ̡\x00̈ੴÖɇۄɇèɳɭ̤ėಮđƁ̡\x00̆̡Ȳ)Ȳໟſ̡\x00	̡Ⱦപb̊7ɥ̋7ɥ̌7ɥ	હɇǞȯಕɇ͂Ě˝̞1ʍ?̒̉q	௯	ɤȲĝȳʔ̝ߺ̛iĚ?ɶɈ	˄̅̝ำ	ഹń̗̢ï̡\x00Ȳऴđſ̡\x00̍ƅ̡\x00̚	̡Ȳ:Ȳʐɇʤɢ̆qɤĢͽ϶̇̇ȲȯީЗƄ̡\x00ɬȲť̏.	ݝ!Ȳҍɇ=ȲȲɼȴઈ̢ั\x00̡X̝°ʓȴˀȯȢ	̆Ȳ<ȳˑ̠̢઩	̅ȲȯĆ	തȦ̞\x00b	ɤȲĝȲঙ̡ȲԒɫȺࡻ̤ߕ[	బɤĢͽȲ͈Ȳɘ	7Cȯ¿	ӷ	ĭɪ\x00ȳĹ˾}̆7ૅ̇7ໂ̈7̠̅3̆ƾSɤȵͭSȯ˚̤üɇೠޣiȯĆ̡Ȳ)̎	ĭɪ\x00ȵˠ˿}	ڤ\rɇ=ȲȲɼȴƦ̡Ȳ൧ɫğ;	ĭɪ\x00ȴū˶}ƈ̡\x00̙Ɔ̡\x00̜	̅?Ż̡ŷ4ȯäɇèɲɖ3ɳ	Ɓ	ĭɪ\x00ȵū˹}	͓	ޫŶȯࡷɈ*	̤ė\x00	ഖ̊7̡ȵێ̋7̡ȴ໽̌7̡ȵʔ̛iČ?ƅ̡\x00ɇฟ\r0ɇÐȯક̡ȲҽȲ෽̢ڣɢFɫɗ3ɻ	ȲкȲ¼̆ƌȵԀ	ഐɇóȯ0ɗBɈɇ໱ɇĲƁ̡\x00̐ȯĆ๡Wɇóȯ୩$ȯڵWɇóȯß\rəȲ\x00ȿȴܚȯ{ȼܛȻ૲ȸ׏ƈ̡\x00	̢ï̡\x00/¾Ɓ̡\x00̉Ȧɽ̡ȶ෠ȷ඘ɽ̡ȶ೫ȹ෿Ĵ	Ե̋т̡	̸Ɉ*Ȳʾ4Ҽĸ̞̡¼?̏ȓ̇qʌ1ȭɭĔɇࡺɫɇ܃SȲХʗɥ	ȲȽ˻!Ƚड!ȲࢇȺфɡÑɈBɖFɇൎ$ȯ{Ȳҍ̝°ʓȴˀȯȢ0ɇóȯೖ̛$ơؘ̇$ȯΪƊ̡\x00̉	Ȳ)̛׸ȯмȯо̊qɇϩɮɎ3ɫ̍ȕ̝°̋̓ȕ̝°̒	੘ȵ۾	ƍȲçȳĢ̆	ౣ	4ȲȯƔొ\r0ȽՌȼށȯ{Wɇऺɳ3ɜɖƁ̡\x00̖̝Řȯࢽ\rɇ=Ȳ½Ȳgɳɪ	࢒4̛iȯĆ	ɪȳƻȳඇ	̠ȵÆ	ܾ	ی$ȯg۸Αਓ஢̡Ⱥ̡ٝȹԁѥ	Š\x00Ȳ߈Ɓ̡\x00̔ɕ3ɮʓȳʆƁ̡\x00̕̇ƌȵɮȳ֕ଣɇϩɕ	̅¦Ż̡̞ɤȳȒ	ĭɪ\x00ȳ˺}̡ȲǍ	ȲȽޢſ̡\x00ɇǗ4ȺħПҕȳȷ̡Ȳ)źɥ̡ȵభɥ̡ȵ͢	ٚ̝Řȯо	شن\r4ɇ२K̡ѳȯԧK̡.	̞ɪȳĶȼßɈ*\nž̡	̡ȲԒ	ȲȶӨ	̢ǏʓȲЇ	̡Ȳ:ȳӅ	଎	ɦ	ۣ̈̠	˛ȯÆ	෋̋ȓɤȳɲȲӇ̇Ъ̈	K̆਷ȯƼɇ۱ɶjɺɕ.	ਟɈ*\rȯଔэȲԋɯ¾̅ȴިȵ߫ȵ¾ɈÑɇ඼ɴɻ.	̆Ȳȯg	ಌƆ̡\x00ɇݑ̅7ɥ̉7ɥ̊̡ȵӰɇœȲߣɇ=ȲȲɼȲg	௬	֐ȲĒɇόŸ̡ɤȳȒ\r̢ï̡\x00ȲΚȳාʘ̡bƃ̡\x00̢ਾȯٶ̊.ȯƦ	ஞȯgIȲȯˌȲȯ˚̅4̛iĎ?̆̅	ɤȲĝȳӧ̅ƌȴӅ	̅Tż̡	ഔiȯ{ɇh̡­ƾȲŦ	ĭɪ\x00ȴƟ˽}%೦	ݔɇҹȴĪƟ	ĭɪ\x00ȳƶ˷}ऐ̢ï̡\x00Ȳ߹¾ń̕	ť̡\x00̋̝ñ̤̥	̣		\n\r\"·<;bAMf$je$$$[D_$/$'q_o$a${G_3x$_|@L~d!	V2%4\x00~&09lp\"$i#,+lS g$w^nlO$h$=lWulKT`lJzl):y$U_$8_(?]_4Hs>_QF_$N~\\0tl}$c5~S .k\rI1RE0ld7$Y6_Z\n_vrC-Xm$*$BP$\x00	̅Ԏ̠ȵÆ̤Ӗ	԰	ɪȲĖč\rɏȲ\x00ɫഡȲරɈ*\nɪɇů̝ŝ̡\x00Ȳʐയ	̏ɯȵ࣊ɸ3ɫ̞ƾ	ޥ	ࢲ̉̣Ȳɘ	̡Ȳ<Ȳ̞	ʀȳЛĤ˝േɈ*ɒ̤͵̤Ӵ̞ȼæɇ෸ɇ{1ɫȶ੎	ɪȲĖę̞#̟4	̞ȲƠȴò	̞#ȲÊ	ඬĴɏȲ\x00ɫȴ_Ȳίɒ̇ɇœ౗ɮ\n\x00ȯհȲȯŹɪFɇä̞1࡟ɻ3ɇŕɳ̊	஼ɯŔ\nȯʼɏȲ\x00ɫȴ_Ȳί	Ȳȯg	̞ȲƠȴò\r̞Ȳ)ɇʺȲଆȴ̀ȵࣇ	໕Ɉ*	Ɉ*̣ɪȳ¼\n	ࡉ	ǨŴĕ˝Ɉ*ɇࣹɫ	ঋ\r̞ȳƅȴòŒ̊Ȳў\rȸƫȷ˻	ɤȴɫFɇů	௾෼	ɪȲĖĠɈ*\r\rɇYȲ\x00ȾகȯĈ̏	༈\rȲĉɫȵVȲ୒	̞ȳƅȶŷ	ƍȯƙ\x00੊̡	ɪȲĖē̞ȹ՘ɇh}аɤȼ̪ɤȻहɤȺড়̅̤Ԋȴˑ\x00̅Ⱥঅ̎ȸສ	į	0̣ģ˱ɪųů\x00̝׎ȲȯʵѦ[Ɉ*	ಅ̉K·Ȳ)Rbȶ̪ߪȲȯփų9>؅3X̇ƍŶȵŇ˳[̥ü4̢ו̞ȵ໓̞ȵট̞హ̇	ȲȯĆ	Ɓ	̞ȹଛ\x00	ȵ௙ɤȽф̥୻\rɏȲ\x00ɫओȲࢧ	ɪ̣ɱɥɌBɢɫ3ɕ.	ײ\rɇYȲ\x00ȻஙȯĈ	0̣Ė˱ɪа̍ɯȶ௽ȯƼ4	4̞\x00\x00	0̣Ċ˱ɪ	ɯ\x00ȯʼ̤͵̆̤Ԋȵ˃\x00̆	ɴƈ	ౌ̢஄\r̥̦\n	$\r\n\x00	\x00\n ̈̊qɈ*̞Ƚ^\x00\x00̊ɤȴ̊ڄ̊̤Ӗ̟ȯݰ̆̅Ɉ*		Ɓ̇#̝°̆̟qĴ\nɪ̣b	̤ҏȴ໡ȴߡ̈ų̞ȵୖ\nɇëȲ̞ȵโȽౖ\nȷĶ	˳[̊̤౦ȴԑ	į̦ü̈\n̆̝ñ\r̞ȳƅȴòŒ̊ȲўƈɈ*	\n̦\x00\r\x00\x00\x00\x00\nɇYȲ\x00Ȼ־\n		įĴ̤ҏ";}else if(_$$s===10){_$gW=_$ku();}else{_$dQ=_$ku();}}else{if(_$$s===12){_$a8[6]="";}else if(_$$s===13){_$gN=_$ku()*55295+_$ku();}else if(_$$s===14){_$$S=_$fB.aebi=[];}else{_$am=_$jI.substr(_$fP,_$gN).split(_$_o.fromCharCode(257));}}}else if(_$$s<32){if(_$$s<20){if(_$$s===16){_$d8= !_$am;}else if(_$$s===17){ !_$d8?_$bo+=44:0;}else if(_$$s===18){ !_$d8?_$bo+=43:0;}else{ !_$d8?_$bo+=35:0;}}else if(_$$s<24){if(_$$s===20){_$_f=_$ku();}else if(_$$s===21){ !_$d8?_$bo+=2:0;}else if(_$$s===22){_$by.push('}}}}}}}}}}'.substr(_$_L-1));}else{_$_u(_$hC,_$_k);}}else if(_$$s<28){if(_$$s===24){_$d8=_$$M.execScript;}else if(_$$s===25){_$a8[5]=_$_8(53)-_$_a;}else if(_$$s===26){_$a8++ ;}else{_$h9(71);}}else{if(_$$s===28){_$a8[2]="j-*`(*([.)`)-/+*,+,-`(*`+)`(*+)(..)/`,`)+[`0)`+)0+0-.)0,`-,,*-`++`((`(.`*.`0[`([[[`+*`,/`+)0+0-.)0-`.`(-`,)`().`*`([`0`/-`*-`(,`),-`+/`+[`+`)`(*+)(..).`-+`/`,.`+-`()/`-,,*,`X(`/(0)`(0)`)[`([[`).`)+`*(`-`,(`(0`*)`+.`-[+/[[`+,`()`([)+`**`),,`)[[`))+`(/`-,,*.`())`)[*`-[`*).-/`,[[[`*,`/(0,`*0`*[[`0/`)-/+*,+,,`**,,++*)`)[(`0-`.0`)/*`,,`-/`)-)(++`[Y[(`/(0+`)+/`[Y[`(.[`*+`/[`(+`()*`,0`+[0-`(-/+*[[/`/)`()-`)-,++*,.-0`X[Y[(`([[[[[`,()`0.`)/`/0`[Y,`+[0-[`([+/,.-`()[`/(0-`,-`)(`)[0.(,)`-.([//-+`)-`(/[`-,`+(0+*[+`X([[`([)`0*`*[`)*`)[0.(,(`)[[[`),.`(-*/*`)[+/`/)[[`-(,/`0(`*[[[[`,,)0-`/(00`/)[(`[Y/`,-*)[`([[[[[[`.,-[`[Y)-`(/[[`[Y-`X[Y)`X[Y0`(.*),/+(0*`(((`(-/+*[[0`(-+`/)*0`[Y/(*)-+,+*`/)/.`(,-.0`(-,`*-[`,[[[[`).(.**/./`+[)*)**+(.`,+`([(`[Y*,`*0//)0)*/+`),+`[Y)`***.,-,0/+`),)`[Y0`[Y(`.)`)+[[0,0.[/`/*`X(/[`(-...)(,`00`/(`/(0*`),*([((`(,(/,[[)+0`)[+.`[Y+`/)[)`(([`//`)0`/+`/(0.`-0`.,`())//`/)[*`(-[`(()`)[[[[`,[/0`-+*-(,`),-)*/*([)`X[Y)-`(/,0..,*0*`(,[[`X)`X0[`X+`*[[[`/(0/`*)/,*..,)[`([+/,.,`([[(`**0,+-0./)`/-+[[[[[`X.`(0.`(/)`)[/`(0,`(./`(+.`(+0`(..`(+[`(+)`)[+`(*(`(0/`(0(`(,+`(.(`(+*`)[.`(*.`(-.";}else if(_$$s===29){_$bo+=-5;}else if(_$$s===30){_$_8(106);}else{_$d8= !_$fP;}}}else if(_$$s<48){if(_$$s<36){if(_$$s===32){_$bi=_$gX(_$hC);}else if(_$$s===33){_$d8= !_$$m;}else if(_$$s===34){_$iL=_$jI.length;}else{ !_$d8?_$bo+=-35:0;}}else if(_$$s<40){if(_$$s===36){ !_$d8?_$bo+=38:0;}else if(_$$s===37){_$fB.scj=[];}else if(_$$s===38){ !_$d8?_$bo+=-25:0;}else{_$d8=_$_f<_$$5;}}else if(_$$s<44){if(_$$s===40){_$bi=[1,0,0];}else if(_$$s===41){_$_8(95,_$_c);}else if(_$$s===42){_$_f=0;}else{_$a8[0]="b~ookx`mtladq`inhm`bg~qBncd@s`>`hmcdwNe`qd~cxRs~sd`(`etmbshnm`rokhbd`trdq@fdms`fds@ssqhatsd`mncdSxod`m~ld`qdronmrdSdws`]`~ccDudmsKhrsdmdq`rsxkd`:`s~qfds`kdmfsg`rs~str`rsqhmf`qntmc`snRsqhmf`*<`Z`~oodmcBghkc`+`gssor9`rqb`ancx`z`rtalhs`bnnjhd`rbqhos`<`#`nmrtalhs`~ar`s~fM~ld`rkhbd`nmbkhbj`knb~shnm`oqnsnsxod`f`qdok~bd`rds@ssqhatsd`otrg`9`rokhs`nodm`~bshnm`sdrs`gqde`bqd~sdDkdldms`nmkn~c`~`l~sbg`enql`sxod`[`&`b~kk`ghccdm`\"`naidbs`nmoqnfqdrr`jdxBncd`gd~cdqr`|`rpqs`DudmsS~qfds`dudms`nmdqqnq`rtarsq`fds`eqnl`~rxmb`fdsShld`cnbtldmsDkdldms` eqnl `332`o~sgm~ld`knb~kRsnq~fd`sdws`sno`@bshudWNaidbs`nmqd~cxrs~sdbg~mfd`ono`qdlnudBghkc`atssnm`qdlnudDudmsKhrsdmdq`du~k`oqnsnbnk`o~qdmsMncd`bnmrsqtbsnq`mncdM~ld`fdsDkdldmsAxHc`nmshldnts`hmmdqGSLK`dwsdqm~k`b~mOk~xSxod`bkhbj`q~mcnl`i~u~rbqhos9`nmkn~crs~qs`.`rdmc`bnmb~s`gsso9`fdsDkdldmsrAxS~fM~ld`)`GSLKEnqlDkdldms`tmcdehmdc`hmots`eknnq`shldRs~lo`qdronmrdSxod`u~ktd`DjbO`chu`WLKGssoQdptdrs`7/`-`rd~qbg`qdronmrd`heq~ld`l~w`uhrhahkhsx`rtarsqhmf`gnrsm~ld`uhcdn`#~bshnm`c~s~r,sr`hlonqs`rgnvLnc~kCh~knf`onqs`odqenql~mbd`qdronmrdWLK`#rqb`bnmsdms` ~r `snKnvdqB~rd`ldsgnc`/`rsqhmfhex`{`jdxcnvm`g~rNvmOqnodqsx`i~u~rbqhos9 unhc[/(:`%`oee/`GSLKFdmdqhbDkdldms`h`noshnmr`Qdronmrd,Sxod`l~sbgLdch~`~rrhfm`~tchn`bkd~qHmsdqu~k`..`nm~anqs`bknmdMncd`sgdm`=`nmrtbbdrr`LhbqnLdrrdmfdq`a~rd`rdsHmsdqu~k`hmcdwdcCA`;`lntrdlnud`bknrd`#gqde`lds~`rs~strSdws`fdsBnmsdws`mnv`rs~bj`o~qrd`qdrtks`nmkn~cdmc`rds`cnbtldms`#nmrtalhs`dwdb`L~sg`dmbsxod`bdhk`b~mu~r`bsk`rsnoOqno~f~shnm`edsbg`l`eq~ldr`lntrdto`c~s~`gnrs`FdsU~qh~akd`~v~hs`Dkdldms`rdsHsdl`etmbshnm `[\\q\\m>({[\\q>\\m(`$_XUSW`kn~c`Ldch~Rsqd~lSq~bj`$_mc`l~sbgdr`shld`hmsdqm~k`: Rdbtqd`vhcsg`lnmsg`ehkkRsxkd`hl~fd`,`cde~tks `oqdkn~c`$a_b~kkG~mckdq`oqdudmsCde~tks`$_sr`enmsr`rdke`oea1_/`gdhfgs`~ssqhatsdr`onrs`k__`irnm`lntrdcnvm`ntsdqGSLK`~ss~bgDudms`bnlohkdRg~cdq`ldch~Cduhbdr`q`b~mchc~sd`}`cdrbqhoshnm`hrM~M`Gd~cdqr`ghrsnqx`rdsShldnts`khmj`___SR___`fdsHsdl`sntbgdmc`bg~q@s`dmtldq~sdCduhbdr`WLKGssoQdptdrsDudmsS~qfds`oe~/`Qdptdrs`~oodmc`Etmbshnm`NudqqhcdLhldSxod`o~qrdEqnlRsqhmf`qh`O`~ccdcMncdr`__#bk~rrSxod`mtkk`fdsRntqbdr`bqxosn`neerdsGdhfgs`mtladqhmfRxrsdl`nvmdqDkdldms`$MVD4MyQjXiglXyL3`neerdsTmhenql`x`bkd~q`*`Tmdwodbsdc snjdm `vqhsd`q~chn`snToodqB~rd`udqsdwOnr@ssqha`dqqnq`'`ads~`rqbDkdldms`a`snFLSRsqhmf`c~x`qva/`shldYnmd`bghkcKhrs`mtlHsdlr`~kog~`sdws.ok~hm`naidbsRsnqd`oec/`#rd~qbg`o~qdmsDkdldms`qv~/`Tmdwodbsdc sdlok~sd rsqhmf dmchmf`1`oea/`sntbglnud`Znaidbs @qq~x]`eqnlBg~qBncd`(+ dwodbsdc `dmbnchmf`ehkkSdws`sntbgrs~qs`knb~kd`27`~anqs`ldrr~fd`fdsQdronmrdGd~cdq`b~ostqd`;chu=HD7;.chu=`qdstqm:`oed/`qdstqmU~ktd`neerdsX`GSLKNaidbsDkdldms`bgdbjanw`e~/,`xd~q`2id@KdRr~5`[^\\r)({[\\r)$(`#u~ktd`f~ll~`bg~qfhmfShld`~ookhb~shnm.w,vvv,enql,tqkdmbncdc`0`jdxto`rg~cdqRntqbd`eq~ld`bqd~sdRg~cdq`fdsRg~cdqOqdbhrhnmEnql~s`rdsQdptdrsGd~cdq`nudqqhcdLhldSxod`fdsNvmOqnodqsxCdrbqhosnq`~bnr`ucEl`knb~kCdrbqhoshnm`snC~s~TQK`$0_CHU`Z/,8~,e@,E]`bnms~hmr`_`drb~od`: dwohqdr<`~mbgnq`~ookhb~shnm.wlk`oeb/`$a_ok~senql`#hmmdqGSLK`Lhbqnrnes-WLKGSSO`naidbsRsnqdM~ldr`neerdsVhcsg`qtm`qdlnudHsdl`fdsAntmchmfBkhdmsQdbs`bqdcdmsh~kr`b~kdmc~q`EQ@FLDMS_RG@CDQ`dwdbRbqhos`#ntsdqGSLK`@QQ@X_ATEEDQ`a~ssdqx`sq~mr~bshnm`rdrrhnmRsnq~fd`~ssqhatsdM~ld`g~rg`o~qrdHms`#mncdU~ktd`~ss~bgRg~cdq`@i~w qdronmrd ancx cdbqxoshnm e~hkdc , `[sghr(:`UDQSDW_RG@CDQ`rbqnkk`eq~bshnm~kRdbnmcChfhsr`$alE/~WYkQlkUxTGI`CNLO~qrdq`neerdsW`#nmbkhbj`$a_rdsto`hsdlRhyd`$`qdlnud@ssqhatsd`qvb/`ltksho~qs.enql,c~s~`SJ_U@Q`k~xdqX`Okd~rd dm~akd bnnjhd hm xntq aqnvrdq adenqd xnt bnmshmtd-`fhmd`cq~v@qq~xr`dqhE`SJ_ETMBSHNM`hsrfnmm~e~hk`trdOqnfq~l`gr~ke,du~vjbngr,w.mnhs~bhkoo~`Lhbqnrnes-WLKGSSO-0-/`c__sa|~neran_o}nelp_bj`bghkcqdm`[;NAIDBS(`qdstqm mdv ~[`~ccAdg~uhnq`KNV_HMS`$_XVST`ehm~kkx`Jdxan~qc`sdws.i~u~rbqhos`vhl~w`bdkktk~q`LDCHTL_HMS`SJ_HE`[Z/,8]z0+2|[\\-Z/,8]z0+2|(z2|{ [[Z/,8~,e]z0+3|9(z6+6|Z/,8~,e]z0+3|{[Z/,8~,e]z0+3|9(z0+6|9{[Z/,8~,e]z0+3|9(z0+5|9Z/,8~,e]z0+3|{[Z/,8~,e]z0+3|9(z0+4|[9Z/,8~,e]z0+3|(z0+1|{[Z/,8~,e]z0+3|9(z0+3|[9Z/,8~,e]z0+3|(z0+2|{[Z/,8~,e]z0+3|9(z0+2|[9Z/,8~,e]z0+3|(z0+3|{[Z/,8~,e]z0+3|9(z0+1|[9Z/,8~,e]z0+3|(z0+4|{Z/,8~,e]z0+3|9[[9Z/,8~,e]z0+3|(z0+5|({9[[9Z/,8~,e]z0+3|(z0+6|{9({99[eeee[9/z0+3|(z/+0|9(z/+0|[[14Z/,4]{[1Z/,3]{0z/+0|Z/,8](z/+0|Z/,8](\\-(z2+2|[14Z/,4]{[1Z/,3]{0z/+0|Z/,8](z/+0|Z/,8]({[Z/,8~,e]z0+3|9(z0+3|9[[14Z/,4]{[1Z/,3]{0z/+0|Z/,8](z/+0|Z/,8](\\-(z2+2|[14Z/,4]{[1Z/,3]{0z/+0|Z/,8](z/+0|Z/,8](( (`mds~rqoqj+dm_r__+m_oro@cdSmsd+wVddnqanAdvqr`kdudk`~kk`dRnLEakhEkqnSlnn+knRnfLtdr`tqdR`ptdqxRdkdbsnq`[;\\.NAIDBS(`cduhbdlnshnm`SJ_ONRSEHW_NO`,qudk~~tds`k~xdqW`b~kkdq`sFMdsdQwHdCp`mnmd`32615e626266505b5a`dkrd ` N`__qbdV+a__BfVqad`Y7WGIIX-alE/~WYkQlkUxTGI[(`zhwdq 2dfklqh :qlT(rromd}}T;hugdqdT-hoyhwlfd 3hxh 19 5ur LN 9klqTwdkrpdT1, 8pduw_- whvw 7hjxoduT).35urFoljkwT-hoyhwlfd 19 ML 1ljkw *{whqghgT-hoyh2_.qgldT8*(7rerwr1ljkw [rogT47 2rkdqw| :qlfrgh 7hjxoduT)urlg 8dqv 9kdlT0dqqdgd 8dqjdp 23T))( :fkhqTforfnKIJO_yJGJT8dpvxqj0dqqdgd7hjxoduT2. 1Z39.3, [rogT8dpvxqj8dqv3xpL1 1ljkwTyhugdqdT-hoyhwlfd3hxh9klqT8*(+dooedfnT8dpvxqj*prmlT9hoxjx 8dqjdp 23T(duurlv ,rwklf 8(T+o|ph 1ljkw 7rerwr 1ljkwT8r2ZF)ljlw 1ljkwT8r2( 8dqv 7hjxoduT->=l>xdq/TvvwTvdpvxqjFvdqvFqxpM9Tjp_phqjphqjT1rklw 0dqqdgdTwlphv qhz urpdqTvdpvxqjFvdqvFqxpM1TvhuliFprqrvsdfhT8dpvxqj8dqv3xpFL9 9klqT(roru48:.F=9klqT)urlg 3dvnk 8kliw ZowT8dpvxqj9hoxjx7hjxoduT[hqjdol 498T2. 1dq9lqj_,[ 4xwvlgh >8T+?2ldr<x_,[JQILITkhoyhFqhxhFuhjxoduT889 2hglxpT(rxulhu 3hzT0kphu 2rqgxonlul [rogT-hoyhwlfd 19 KL :owud 1ljkw *{whqghgT-hoyhwlfd 19 KN :owud 1ljkwT7rerwr 2hglxpT)urlg 8dqv [rogTjrxg|TvdqvFvhuliFfrqghqvhgFoljkwT8+lqghuTqrwrFvdqvFfmnFphglxpTplxlT27rfn| 57( [rogTZqgurlg(orfn 7hjxoduT8dpvxqj8dqv3xpFM1 1ljkwTvdqvFvhuliFwklqTZd5dqj>dhuTfdvxdoT[3 2rkdqw|49 [rogT{FvvwT3rwr8dqv2|dqpdu?dzj|lT-hoyhwlfd 19 LL 9klq *{whqghgTZvkoh|8fulsw29 ZowT3rwr 8dqv )hydqdjdul :.T7rerwr (rqghqvhg [rogT7rerwr 2hglxp .wdolfTplxlh{T3rwr 8dqv ,xupxnkl :.T889 ;lhwqdphvh 1ljkwT1,_4ul|dTk|friihhT{FvvwFxowudoljkwT)+-hlZ<PFZT+??<=[949_:qlfrghT)hydqdjdul 8dqjdp 23 [rogTvdqvFvhuliFprqrvsdfhT5dgdxn [rrn [rogT1,F+?>lqj[l0dl8kxF8JNF;KGKT1,F+?>lqj[l0dl8kxF8JNF;KGLT-hoyhwlfd3hxh19 5ur LN 9kT2lfurvriw -lpdod|dT8dpvxqj8dqv+dooedfnT889 2hglxp .wdolfTZqgurlg*prmlT8dpvxqj8dqv3xpFL7T.9( 8wrqh 8huliTvdqvFvhuliFvpdoofdsvT{FvvwFphglxpT1,_8lqkdohvhT7rerwr 9klq .wdolfTfhqwxu|FjrwklfT(orfnrsldT1xplqrxv_8dqvT+orulgldq 8fulsw ZowT3rwr 8dqv ,xupxnkl [rogT19->8?0 [rogT,8_9kdlT8dpvxqj3hr3xp_L9_KTZudelfTkdqvFvdqvFqrupdoT1rklw 9hoxjxT->6l-hlFNI8 1ljkwT1lqgvh| iru 8dpvxqjTZ7 (u|vwdokhl )[T8dpvxqj 8dqv 2hglxpTvdpvxqjFvdqvFqxpMNTkdqvFvdqvFerogT1xplqrxv_8fulswT889 (rqghqvhgT8dpvxqj)hydqdjdul7hjxoduTZqmdo 2dod|dodp 23T8dpvxqj9kdlAwhvwBT+?1dq9lqj-hlF2F,[JQILIT-heuhz 498T,8MN_ZudeAZqgurlg48BT8dpvxqj 8dqv 1ljkwT(krfr frrn|TkhoyhFqhxhFwklqT53 2rkdqw|49 2hglxpT1,F+?0d9rqjF2JRF;KGMT)urlg 8huliT8dpvxqj8lqkdod7hjxoduTkhoyhwlfdT1,F+?0d9rqjF2JRF;KGKT3rwr 8dqv )hydqdjdul :. [rogT889 1ljkwT)+5*prmlTzhdwkhuirqwqhz 7hjxoduT7rerwr3xpL7T).35urFphglxpT8dpvxqj 8dqv 3xpNNT889 -hdy| .wdolfT1,orfnM 7hjxodu_IQINT,hrujldTqrwrFvdqvFfmnT9hoxjx 8dqjdp 23 [rogT2.:. *= 3rupdoT->6l-hlFPN8 [rogT3rwr8dqv2|dqpdu?dzj|l [rogT|xqrvsurFeodfnTkhoyhFqhxhFqrupdoT1xplqrxv_8huliT92 2rkdqw|49 3rupdoT8dpvxqj8dqv3xpFL1y 1ljkwT8dpvxqj 8dqv 3xpMNT8pduw,rwklf 2hglxpTjhrujldTfdvxdoFirqwFw|shT8dpvxqj 8dqv [rogTvpdooFfdslwdovT2+lqdqfh 57( [rogT+?1dq9lqj-hl_,[JQILIT8dpvxqjZuphqldqT7rerwr [rogTfhqwxu|FjrwklfFerogT{FvvwFkhdy|T889 1ljkw .wdolfT9kdu1rqT{FvvwFoljkwT)lqero 7hjxoduT8dpvxqj[hqjdol7hjxoduT03 2rkdqw|498pdoo 2hglxpTk|sxuhT8dpvxqj9dplo7hjxoduT2dod|dodp 8dqjdp 23T3rwr 8dqv 0dqqdgd :.TkhoyhFqhxhT-hoyhwlfd 19 NN 7rpdqT3rwr 8dqv 0dqqdgd [rogT8dqs|dT8dpvxqj5xqmdel7hjxoduTvdpvxqjFvdqvFqxpM1yT1,_0dqqdgdT8dpvxqj 8dqv 7hjxoduT?dzj|lF4qhT)urlg 8huli [rog .wdolfT+?0Z9/<Tfrxulhu qhzT8dpvxqj*prml7hjxoduT2.:. *= [rogTZqgurlg *prmlT3rwr 3dvnk Zudelf :.T1() (rpT+xwxud 2hglxp [9T;lyrFh{wudfwT[dqjod 8dqjdp 23 [rogTkdqvFvdqvFuhjxoduT83xpFL7T83xpFL9TkdqvFvdqvT889 :owud 1ljkwT7rerwr 7hjxoduT7rerwr 1ljkwT-dqxpdqTqhzojjrwklfT)+-hlZ<NFZTkdqvFvdqvFoljkwT5odwh ,rwklfT83xpFL1T-hoyhwlfd 19 MN 1ljkwT2|dqpdu 8dqjdp ?dzj|l [rogTojFvdqvFvhuliFoljkwT2.:. *= 1ljkwT7rerwr 9klqT8r2Z [rogT5dgdxnT8dpvxqj 8dqvT8sdflrxv_8pdoo(dsTvdqvFvhuliT); 2rkdqw|49 2hglxpT8wdeoh_8odsTprqdfrT+o|phF1ljkwTi}}|vFgrvs|T8fuhhq8dqvTforfnKIJOT7rerwr (rqghqvhg [rog .wdolfTZuldoT03 2rkdqw| 2hglxpT2rwr|d12dux <L prqrT-dqgvhw (rqghqvhgT7rerwr .wdolfT-9( -dqgT889 :owud 1ljkw .wdolfT889 ;lhwqdphvh 7rpdqT3rwr 3dvnk Zudelf :. [rogTfkqi}{kFphglxpT83xp(rqgFL9Tfhqwxu|FjrwklfFuhjxoduTghidxow_urerwrFoljkwT3rwr 8dqv 2|dqpduT2|dqpdu 8dqjdp 23TZssoh (roru *prmlTzhdwkhuirqw7hjT8dpvxqj2dod|dodp7hjxoduTduldoT)urlg 8huli [rogT(5rL 57( [rogT2. 1Z39.3,T8dpvxqj0ruhdqF7hjxoduTwhvwMN 7hjxoduTvslulw_wlphT)hydqdjdul 8dqjdp 23T8fuhhq8huliT7rerwrTfxuvlyhFirqwFw|shT89-hlwl_ylyrTfkqi}{kT8dpvxqj (orfn+rqw LZT7rerwr (rqghqvhg 7hjxoduTvdpvxqjFqhrFqxpL7T,/ 2rkdqw|49 2hglxpT(kxokr 3hxh 1rfnTurerwrFqxpL1TkhoyhFqhxhFxowud1ljkwh{whqghgT8dpvxqj4ul|d7hjxoduT8dpvxqj8dqv3xpFM1y 1ljkwT2>lqj-hl_JQILI_(KF[rogT)+58kdr3y<NF,[T7rerwr [odfnTkhoyhFqhxhFxowudoljkwTjp_{lkhlT1,orfnM 1ljkw_IQINT,xmdudwl 8dqjdp 23T2dod|dodp 8dqjdp 23 [rogTurerwrFqxpL7T89=lkhl_ylyrT+??kxq>xdq_,[JQILITqrwrFvdqvFfmnFoljkwTfrorurvT3rwr 8dqv ,xupxnklT3rwr 8dqv 8|perovT7rerwr 1ljkw .wdolfT1rklw 9dploTfxuvlyhTghidxow_urerwrT[kdvklwd(rpsoh{8dqv [rogT1,_3xpehu_7rerwr 9klqTprqrvsdfhgFzlwkrxwFvhulivT-hoyhwlfd 19 LN 9klqTvdpvxqjFvdqvFqxpL1;T).35urT/rprokdulTvdqvFvhuliFoljkwTkhoyhFqhxhFeodfnT1rklw [hqjdolT2|dqpdu 8dqjdp ?dzj|lT)urlg 8huli .wdolfT7rerwr [rog .wdolfT3dqxp,rwklfT8rq| 2reloh :) ,rwklf 7hjxoduT,hrujld [rog .wdolfTvdpvxqjFvdqvFqxpL1yT|xqrvFwklqTvdpvxqjFqhrFqxpL9FfrqgT3rwr 8dqv 2|dqpdu :. [rogTojvhuliT+?>rx-hlF7F,[JQILIT1rklw 5xqmdelTedvnhuyloohTvdpvxqjFvdqvFqxpM9yTvdpvxqjFvdqvFwklqT1, *prmlTZqmdol3hz1lslT8dpvxqj8dqv3xpFM9 9klqT8dpvxqj0ruhdqF[rogTplxlh{FoljkwT3rwr 8dqv 0dqqdgdT7rerwr 3rupdo .wdolfT,hrujld .wdolfTvdqvFvhuliFphglxpT8pduw ?dzj|lT7rerwr (rqghqvhg .wdolfT3rwr 8dqv 0dqqdgd :. [rogT)+5 8f 8dqv -hxhLI_JILT1,_3xpehu_7rerwr [rogT5dgdxn [rrnT{FvvwFfrqghqvhgT8xqvklqhF:fkhqT7rerwr [odfn .wdolfT7lqjr (roru *prmlT)hydqdjdul 498T8pduw ?dzj|l 5urT+?1dq9lqj-hlF2F,[0TZqgurlg(orfnF1dujh 7hjxoduTsursruwlrqdoo|FvsdfhgFzlwkrxwFvhulivT(xwlyh 2rqrTwlphvT1, 8pduw_- whvw [rogT).35urF1ljkwTvdqvFvhuliFeodfnT1rklw )hydqdjdulTsursruwlrqdoo|FvsdfhgFzlwkFvhulivTvdpvxqjFvdqvFqxpL1T2>rxqj 57( 2hglxpT)+,rwklf5<NF[.,N-0F843>TkdqvFvdqvFphglxpT889 -hdy|T1,F+??kxq>xdqF2IKF;KGKT2|dqpdu:3hz 7hjxoduT3rwr 3dvnk Zudelf [rogT8dpvxqj,xmdudwkl7hjxoduTidqwdv|TkhoyhFqhxhFoljkwT-hoyhwlfd 3hxh 498 [rogTqrwrFvdqvFfmnFerogTvdpvxqjFvdqvFqxpL7T1lqgvh| 8dpvxqjTvdpvxqjFvdqvFqxpL9T8fuhhq8huli2rqrT*9uxps 2|dqpdu_?<TkhoyhFqhxhFwklqh{whqghgT3rwr 3dvnk ZudelfT1,_,xmdudwlT8pduw_2rqrvsdfhgT9dplo 8dqjdp 23T1, *prml 3rqZ2*T7rerwr (rqghqvhg 1ljkw .wdolfTjp_mlqjndlT+?1dq9lqj0dq-hl_,[JQILITojwudyhoTsdodwlqrT,hrujld [rogT)urlg 8dqvT1,_5xqmdelT8pduw,rwklf [rogT8dpvxqj 8dqv 9klqT889 (rqghqvhg [rogT(rplfv_3duurzTfrxulhuT4ul|d 8dqjdp 23TkhoyhFqhxhFoljkwh{whqghgT+?1dq9lqj-hlF7F,[JQILITZ7 (u|vwdokhl-08(8 )[TvhuliT79<8>xh7rxg,r,IyJF7hjxoduT2ldr<x_suhyT+?>J0T1,_3xpehu_7rerwr 7hjxoduTZqgurlg(orfnT8r2Z 7hjxoduT->6l-hlFMI8 1ljkw{TojFvdqvFvhuliT)dqflqj 8fulsw [rogTghidxowTvhfFurerwrFoljkwT(roru48:.F7hjxoduTwhvw 7hjxoduT9dplo 8dqjdp 23 [rogT+?>lqj[l=lqj8kxF8JOT7rerwr3xpL1 1ljkwTprqrvsdfhgFzlwkFvhulivTvdpvxqjFvdqvFqxpLNT(rro md}}T8dpvxqj3hr3xpFL1T89=lqjndlT8fuhhq8dqv2rqrT)+5<d<d<NF,[T8dpvxqj8dqv3xpFL1 1ljkwT[dqjod 8dqjdp 23T,xupxnkl 8dqjdp 23T8*(7rerwr1ljkwTk|irq{udlqT2>lqj-hl,[JQILI(F[rogTvdpvxqjFvdqvFoljkwT-hoyhwlfd 19 ON 2hglxpT)urlg 8dqv +dooedfnT7rerwr 9hvwJ [rogT3rwr 8dqv 2|dqpdu [rogTvdqvFvhuliFfrqghqvhgFfxvwrpT8dpvxqj3hr3xpFL9T8dpvxqj 8dqv 3xpLNTprqrvsdfhT91 2rkdqw| 2hglxpTkhoyhFqhxhFphglxpT19->8?0T7rerwr (rqghqvhg fxvwrph [rogT2|dqpduLT)urlg 8dqv )hydqdjdulT8kdr3y_suhyTvdpvxqjFqhrFqxpL1T+?1dq9lqj-hlF*1F,[0T|xqrvTvdpvxqjFqhrFqxpL9T9lphv 3hz 7rpdqTkhoyhFqhxhFerogTqrwrFvdqvFfmnFuhjxoduT3rwr 8dqv ,xupxnkl :. [rogT).35urFeodfnT+?1dq9lqj-hlF*1F,[JQILIT889 ;lhwqdphvh 2hglxpT7rerwr (rqghqvhg 1ljkwT889 ;lhwqdphvh [rogTZ7 )/F00T)urlg 8dqv 8*2(T3rwr 8dqv 2|dqpdu :.T(rplqj 8rrqT2>xss| 57( 2hglxpT7rvhpdu|T1rklw ,xmdudwlT7rerwr (rqghqvhg fxvwrp [rogT+?1dq9lqj-hl8F7F,[T-hoyhwlfd 3hxh 498T0dlwl_suhyT7rerwrF[lj(orfnT+?>[08/<T-dqgvhw (rqghqvhg [rogT8dpvxqj,hrujldqT)dqflqj 8fulswTvdqvFvhuliFfrqghqvhgTkdqvFvdqvFwklqT8dpvxqj8dqv3xpFM9y 9klqT1rklw 4gldT[kdvklwd(rpsoh{8dqv`xit5ty;wfhp`: R~ldRhsd<Mnmd`^\\r*{\\r*$`mdgr`DRNKB_VNCMHV_QDRVNQA_MNQSBDKD`_$qb`SJ_HM`__oqnsn__`s~`sdwsA~rdkhmd`]=;h=;.h=;!Zdmche],,=`afrntmc` `knqsmnB 1F qdx~kOk~`Fds@kkQdronmrdGd~cdqr`b~mbdkAtaakd`\\z[-*>(\\|`#~ssqhatsdr`cdatffdq`P_S__OG_`GHFG_HMS`ECO-ECOnqb@`gsso9..`6/615e53645263426451`|z(d[gbs~b|:dl~mqhc__ mq`c`kn`lr`CduhbdNqhdms~shnmDudms`umh~`OecsBkq`J@_KK`cduhbdHc`;DLADC hc<`oktfhmr`EO-C`#qdlnud@ssqhatsd`q~amnhs`#bnnjhd`K-@D`Y7WGIIX-MVD4MyQjXiglXyL3[(`L~`#fds@ssqhatsd`fdsO~q~ldsdq`6654515a58636558625851585b5863685257505d5654`5b505d566450565462`rdkdbsdc`Lntrd`545550645b634263506364621b3e515~5452631d6254634/615e635e63686/543e551b63505e51615e666254614e3465545d631b6654515a58634154606454626335585b5442686263545c1b5e5d5e6/5461505354635052575453655854665257505d56541b4/50635721331d6/615e635e63686/541d5053534/5063571b425e646152543164555554611d6/615e635e63686/541d5257505d565443686/541b665450635754613161585356541b5257615e5c541d5262581b6/506262665e61534e5c505d505654614e545d50515b54531b535e52645c545d631d515e53681d671c5c621c505252545b546150635e615a54681b54676354615d505b1d3053533550655e615863541b425e565e643b5e56585d4463585b621b425e646152543164555554611b62575e663c5e53505b3358505b5e561b535e52645c545d631d62545b545263585e5d1d63686/5433546350585b1b4245364/50636354615d345b545c545d631d4245364e443d38434e43484/344e3e313~343243313e443d33383d36313e471b535e52645c545d631d5e5d62545b545263585e5d5257505d56541b535e52645c545d631d515e53681d6263685b541d5150525a56615e645d53315b545d533c5e53541b535e52645c545d631d535e52645c545d63345b545c545d631d5e5d615462586~541b32505d65506241545d535461585d56325e5d6354676321331d6/615e635e63686/541d6654515a5863365463385c5056543350635037331b44324654513467631b323330433042545263585e5d1d6/615e635e63686/541d61545c5e65541b315b5e51335e665d5b5e505332505b5b5150525a1b4e46473~421b535e52645c545d631d5c6232506/623b5e525a4650615d585d563e55551b3242423257506162546341645b541b535e52645c545d631d6252615e5b5b585d56345b545c545d631d6263685b541d555e5d6345506158505d633d645c546158521b35645d5263585e5d1d6/615e635e63686/541d51585d531b5257615e5c541d506/6/1d385d6263505b5b42635063541b58623d5e53544657586354626/5052541b3e515~5452631d6254505b1b535e52645c545d631d53545550645b63325750616254631b4e4e55586154555e674e4e1b5e5d5c5462625056541b4e4e625e565e644e6254526461544e585d6/64631b325b5e62543465545d631d6/615e635e63686/541d585d5863325b5e62543465545d631b5654633c50635257545332424241645b54621b3d5e63585558525063585e5d1b37433c3b3561505c54425463345b545c545d631d6/615e635e63686/541d5750624/5e585d63546132506/636461541b535e52645c545d631d515e53681d5e5d5c5e646254545d6354611b3e555562526154545d32505d65506241545d535461585d56325e5d6354676321331b5257615e5c541b3e515~5452631d6/615e635e63686/541d4e4e535455585d544254636354614e4e1b535e52645c545d631d55585b5432615450635453335063541b6654515a5863306453585e325e5d635467631d6/615e635e63686/541d525b5e62541b3654634/54615543546263621b3c54535850325e5d63615e5b5b54611b54676354615d505b1d38624254506152574/615e6558535461385d6263505b5b54531b43546763436150525a3b5862631d6/615e635e63686/541d565463436150525a316838531b535e52645c545d631d62545b545263585e5d1b535e52645c545d631d515e53681d6263685b541d5b585d54316154505a1b535e52645c545d631d515e53681d6263685b541d63546763305b58565d3b5062631b42526154545d3e6158545d635063585e5d1b535e52645c545d631d515e53681d6263685b541d5c585d46585363571b426/5454525742685d6357546258624463635461505d52541b5e5d5461615e611b4654513a5863355b5056621b4154505354613c5e535430616358525b544/5056541b4e4e5e6/5461501b4/5461555e615c505d52544/50585d6343585c585d561b6/5461555e615c505d52541b535e52645c545d631d515e53681d6263685b541d5c624354676342586~5430535~6462631b535e52645c545d631d515e53681d5e5d6/5056541b4245363661506/57585262345b545c545d631d6/615e635e63686/541d5c5e6~415460645462634/5e585d6354613b5e525a1b325b58525a335063501b3c54535850345d5261686/6354533465545d631b4e4e134e6058575e5e22252/4e134e4e1b535e52645c545d631d5e5d5c5e6462545c5e65541b3154555e6154385d6263505b5b4/615e5c6/633465545d631d6/615e635e63686/541d3a3448444/1b37433c3b3561505c54425463345b545c545d631d6/615e635e63686/541d6654515a58634154606454626335645b5b42526154545d1b54676354615d505b`fds@kkQdronmrdGd~cdqr`SJ_SQX`enqD~bg`[;NAIDBS(_CHU`avrdqsdn`mnhsodbwD~u~I`Z\\q\\m\\s]`car_~dbqagwnh_smqd~edb`gnudq{nm,cdl~mc{mnmd{~mx`hmotsZsxod<\"rtalhs\"]`tqk[#cde~tks#trdqc~s~(`b~rd `fdsRtoonqsdcDwsdmrhnmr`ruhh`Zm~shud bncd]`cduhbdnqhdms~shnm`345d63586368`yG`mnt~nsnboldkds`LVkOx~qdN-WB`Qd~`SJ_PTDRSHNM_L@QJ`@i~w qdronmrd ancx hr mns dmbqxosdc+ qdronmrd kdmfsg9 `LR`dwodqhldms~k,vdafk`537`Rmnk~s~j`#~ccDudmsKhrsdmdq`SJ_DNE`Tmdwodbsdc snjdm9 `01-32`cdehmdOqnodqsx`neerdsKdes`gOqnuhcdq`u~q btq_dkd < sghr:`z__ql`GSLKDladcDkdldms`g~mckdq`!`dFFsmdqdk~HL+CdFLschH+KrfnmhcdK+fnmh@+stnghqdyF+sd~AdrrTqdmHneQ+sd~Kmtgb`z\\rZ)m\\h~usbdn \\c]d)\\|r`Tmdwodbsdc bg~q~bsdq9 `#cds~bgDudms`mfdkmdufgd~ __vy|u~q}u-osqfsxNuOmo`~~hunkoS`onors~sd`wddo`bk~rr `lnsm~go_+lnsm~gOkk~b`]\\dcnb duhs~mZ\\`016-/-/-0`qlnb`aa71ji`SJ_DWONQS`nbrto`u~q rtalhs<etmbshnm[(zenq[u~q s<btq_dkd:s!<<cnbtldms&&[!s-s~fM~ld{{\"enql\"!<<s-s~fM~ld-snKnvdqB~rd[((:(s<s-o~qdmsDkdldms:s!<<cnbtldms&&s-rtalhs[(|:`655862`ebRdqgo~`rbqddmX`d~i}H~nnzb~`bg~qrds`#qdok~bdBghkc`83`qdronmrdAncx`Bntms`lqnes~ko`rlhGccmd`SJ_SDLOK@SD_GD@C`HQTsmdltbnc+KQT+qdqqdedq+dtk~Udcnm+shlatrmn+KLSGqdstn+rdstahqss~+knbnsnqo+gr~g+sqno+dl~msrng+srng+dl~mgs~o+dtk~u+jbhkbmn+gbq~dr+bqr+mnhsb~+KLSGqdmmh+edqg+mnhs~bnk`_$ca`ahmcAteedq`lbezv`#nqhfhm`\\q\\m>{Z\\t1/17\\t1/18]`SJ_CDE@TKS`bqndc+qr_kdmdth+l~bkkdRdkhmlt`.9trdq_enmsr`gnn`dfm~gbxshkhahrhuynl`Lrwlk1-WLKGSSO-2-/`~arnktsd`__Yxla8oRY4_@_n`FdqshNmf~hqkkT`@anqs`Lrwlk2-WLKGSSO`tmrghes`ukwtwz.mx|p`qnns`63585e5d3e51625461655461`enqlDmbsxod`.[\\c*(Z/`42575e525a66506554355b5062571d42575e525a66506554355b506257`#snRsqhmf`rdkdbs,`bkhdmsX`ln`SJ_DWSDMCR`bxfI*`~ants9`bnnjhd chr~akdc`#~ss~bgDudms`.[\\c*(`%g~l`dsgdqmds`[~mx,onhmsdq`'~kdqs+ bnmehql+ oqnlos chr~akdc enq'+ cnbtldms\\-knb~shnm\\-gqde`srm~~cnkdm`[bnknq,f~lts`~rxmb `vdafk`/-/-/-/`cadv`#knb~shnm`OQ.`pqbjklCnDwsgVIhG@o0rUXJT2QELPv7HFeON81auKMi,6yWA~Rmt/SB5fx_3Yd4c}!?$%^&)[(*<;=->.9:z|Z]{ `jgjci|bx`Thms7@qq~x`ehkdM~ld`cdehmdOqnodqshdr`aR`kd`#oqnsnbnk`32505b5b`=m~or.;hhhkklllllllllll=\"wo3009dyhr,smne:hhkkll9xkhl~e,smne\"<dkxsr \"gy\"<fm~k m~or;`togrnMhshe~bhsmn`[~mx,gnudq`bkhdms dqqnq`rb`bqd~sdDudms`snEhwdc`p`61545d5354614/615e525462623853`~qftldmsr`tmlh`585d6354613465545d63`#cnbtldmsTQH`SJ_B@RD`cnBk`#rdsHmsdqu~k`#rsnoOqno~f~shnm`tmhenql1e`b~kka~bj`0163`qdstqm ~Za][`|             ] |\"1/2809lnb-dkfnnf-k-3mtsr9mtsr\" 9 \"kqt\"z +|\"1/2809lnb-dkfnnf-k-2mtsr9mtsr\" 9 \"kqt\"z +|\"1/2809lnb-dkfnnf-k-1mtsr9mtsr\" 9 \"kqt\"z +|\"1/2809lnb-dkfnnf-k-0mtsr9mtsr\" 9 \"kqt\"z +|\"1/2809lnb-dkfnnf-k-mtsr9mtsr\" 9 \"kqt\"z +|\"dc-cmtkgbr-mtsr9mtsr\" 9 \"kqt\"z +|\"dr-lnbdkdswhq-mtsr9mtsr\" 9 \"kqt\"z +|\"fqn-kdsoh-mtsr9mtsr\" 9 \"kqt\"z +|\"lnb-ohr~dch-mtsr9mtsr\" 9 \"kqt\"z +|\"sdm-sdmcve-mtsr9mtsr\" 9 \"kqt\"z +|\"sdm-~fhjd-mtsr9mtsr\" 9 \"kqt\"z +|\"lnb-dmngoohr-0/mtsr9mtsr\" 9 \"kqt\"z Z `adenqdtmkn~c`SJ_VGHKD`cakbkhbj`576`Lrwlk1-RdqudqWLKGSSO-5-/`he[`#rtalhs`_rdke`5b506262`oqbsods5h~bsccw}|`bg~qfhmf`DD_ONGJN`Naidbs-HmidbsdcRbqhos-du~kt~sd`qnn,s~gllqddgc~r,~gnc,vht`xbmdqqtbmnBdq~vcq~g`Oqnlhrd`nodmdq`qdu`w`sdws.dbl~rbqhos`q[kte+q `#onqs`ahS:~bhsdukdgOEC`shldnts`dq`nedqhe__`}x__B_firefox_4eader/ode`vdajhsBnmmdbshnm`rteehwdr`tmdrb~od`;!,,Zhe fs HD ` cn `dchr`qn`SJ_@RRHFM`dm~akdUdqsdw@ssqha@qq~x`~,y]`Tmdmbknrdc rsqhmf-`hmrs~mbdne`lmdatq~`tsdqzxqs`tbBo`$ae78~/05$`sgqnv `nlhs`5650635e61`tmhenqlNeerds`!mdv etmbshnm[(zdu~k[\"sghr-~<0\"(|[(-~`ots`ONRS`gssor9..`dkw~omxfh~efk`or_hngjncdl+ynm@lhs~nhRm~ssqhSdll+ynmHdcdwCc+AnlQypddtsrm@lhs~nhEm~qdl`snnakq~`(([|://0 = ~ , ([ds~C vdm mqtsdq :qdfftadc :([ds~C vdm < ~ `RS@SHB_CQ@V`qdeqdrg`rvhsbg[`xO~hq`sbtcnqo`_ak~mj`ateedqC~s~`neerdsSno`mnhs~lqnemHsmdhkb`GHFG_EKN@S`Lrwlk-WLKGSSO`xhfuyhmf9jkwjxmGhfuyhmf_wjkwjxmGhmjhp3tlnsGijhw~uy*fqqgfhp`\\aZ^=])=[Z\\r\\R])>(;\\.`__dvcahqdu_qudk~~tds`QdfDwo`qcuh`SJ_KHSDQ@K`Lrwlk1-WLKGSSO`d~qb`~hqxs`qdedqqdq`qdhehsmdch_og`SJ_SDLOK@SD_S@HK`Ekn~s21@qq~x`05`aDm`csa|gepNamqaopBehaOuopai`fkna~kRsnq~fd`vtptl=bwlz`udqsdw@ssqhaOnhmsdq`5b5e5d41645d425261586/63`#06d`ka~q`dm~akd_`rqdo`3\\-Z/,2]`?cdatffdq`sqd~`nhc `w_`Z:&]`nm~`pqbjklCnDwsgVIhG@o0rUXJT2QELPv7HFeON81auKMi-6yWA~Rmt/SB5fx_3Yd4cz|{} !#$%[()*+,:<>?Z]^`dfm~gbxshkhahrhu`dksq`cdc~nKdf~OsdRm~bRoo~+qdkcm~Gc~nKm~bRoo~+smdldb~kodQdfm~gBds~sRxc~dQmNm~bRoo~+smdldb~kodQcmdRm~bRoo~+oTxdJm~bRoo~+mvnCxdJm~bRoo~+stNrtbnEm~bRoo~+jbhkBm~bRoo~`dQk~hUdc-ndQk~hU`QmddcOqnqdbrrcH`cf`chro~sbgDudms`Z\\\\\\\"\\t////,\\t//0e\\t//6e,\\t//8e\\t//~c\\t/5//,\\t/5/3\\t/6/e\\t06a3\\t06a4\\t1//b,\\t1//e\\t1/17,\\t1/1e\\t1/5/,\\t1/5e\\tedee\\teee/,\\teeee]`!hlonqs~ms: uhrhahkhsx9 uhrhakd !hlonqs~ms: vhcsg9 0//% !hlonqs~ms: y,hmcdw9 1036372535 !hlonqs~ms:`~bbdkdq~shnmHmbktchmfFq~uhsx`SJ_@RXMB`SJ_RTODQ`Lrwlk1-RdqudqWLKGSSO-3-/`@bshudW Bnmsqnk [21,ahs(`Qdronmrd`rqfa{o2{qdb1/1/{~mx`~ookhb~shnm.i~u~rbqhos`uhcdn.nff: bncdbr<\"sgdnq~\"{uhcdn.lo3: bncdbr<\"~ub0-31D/0D\"{uhcdn.vdal: bncdbr<\"uo7+ unqahr\"{uhcdn.lo3: bncdbr<\"lo3u-1/-7+ lo3~-3/-1\"{uhcdn.lo3: bncdbr<\"lo3u-1/-13/+ lo3~-3/-1\"{uhcdn.w,l~sqnrj~: bncdbr<\"sgdnq~+ unqahr\"`bgdbjdc`SJ_NODM_AQ@BD`VadLWnKLffrT_HMTP_D`bqd~sdNeedq`qdronmrdTQK`kk~arq`udqsdwOnr@qq~x`A`mdwsRhakhmf`42585c3754582a42585c42645d2a3d42585c42645d2a35505d56425e5d562a3a505843582a35505d56425e5d563631212220212a3a505843583631212220212a3c5852615e625e55631/48503754582a3758615056585d5e1/42505d621/36312a424337545863581/3b585657632a424337545863582a42433a505863582a4243425e5d562a424335505d56625e5d562a3b5842642a485e644864505d2a424347585754582a42434~575e5d56625e5d562a354~42576443582a354~48505e63582a424332505868645d2a424337646/5e2a42433b5863582a424347585d565a50582a424347585d6654582a`u~q fds@ssqhatsd<etmbshnm[m~ld(zqdstqm btq_dkd-fds@ssqhatsd[m~ld(:|:`SJ_VHSG`SJ_NODM_AQ@BJDS`gschVkh~u~`cnbtldms,eq~fldms`ori-mhfnk.mb-unf-shhl-qdsmdbt..9rossg`@i~w qdronmrd ancx qdok~x+ dwodbsdc RM9 `bqd~sdC~s~Bg~mmdk`36505c546/5053` dwsdmcr `qdok~bdBghkc`BnkkdbsF~qa~fd`hccmd`tmdwodbsdc mtladq dmchmf-`SJ_RDLH_BNKNM`dq~lsgf`Rdmc`0651`hrEhmhsd`CduhbdLnshnmDudms`lntrdkd~ud`~ookhb~shnm.dbl~rbqhos`65`mnhrdi+db~eqdsmH~u~ImnbHdu~E`enms` mdv-s~qfds`etmbshnm bkd~qHmsdqu~k[( z Zm~shud bncd] |`vhsg[`sPdV`.S6@xSqwnVwFc`66`54611c5465505b64506354`Ek~rg`qsdqt mxsdoen_ kfank~aNdisb!  <t\"cmedmhcd \"&&s oxnd ehvcmvn!  <t\"cmedmhcd \"&&_ kfank~aNdisb<  <hvcmvn`ryalatzy`#rdsShldnts`SJ_QDSTQM`fm~c`zuhwxuq w|shri __ordg8fulsw VV \"ixqfwlrq\" && w|shri __gdwh_forfn VV \"ixqfwlrq\"`~bbdkdq~shnm`z6xlfn9lphG6xlfn9lph`..lgks`d_kRhdtmHlC_QDd_`gssor9\\\\`9 \"rqduqdRdbh\" z`sdjbn`x yt ymj ijknsji uwt}~ mfsiqjw`dbm~q~doo@ynL` hm `\\tEDEE`udqrhnm`z|2Z_,~/y8,z]11_|`SJ_BNKNM`i~u~rbqhos\" `rdsShld`}rimental`xkrtnqd`Vd`cdq`iarbgdld9..`fdsNvmOqnodqsxM~ldr`tqk`SJ_BKNRD_AQ@BJDS`sdws~qd~`#nodm`dwonqs `SJ_MTKKHRG`sedKkh~u~`$a_nmM~shudQdronmrd`rkdmdth,ludk~~tds`EKN@S`kjnrb`qdchqdbsdc`[^\\.)({[\\.)$(`62526154545d`bqd~sdAteedq`c~s~9`snJd`-\\(*c\\[ DHRL`////`#qdlnudBghkc`$*]y,~Z_|11z]8,/y,~Z_|2z]y,~Z^`#~rrhfm`gsso9\\\\`KNV_EKN@S`qfa~[13/+00/+42+/-3(`RDMC`qdckhtAan`q~mfdLhm`chr~akdc`fds@ssqhaKnb~shnm`lrHmcdwdcCA`mqbb@q}u`SJ_BKNRD_O@QDM`kdBrgrlqdn`#gnrs`clt@okk`mnhrqdUoo~`^[>9\\cz0+2|[>9\\-{$((z3|`Rjx-oCdddbsnsmh`+ tqk9 `wDn~adhKxehsnM+n~adhKxehsnM+ECOJrmhmTn~adhK+rrdqcc@srnGsdRn~AdhK+srdtpdQcmdRn~AdhK+mnhsbdkdRqdaldldQn~adhK+qbNdf~lHmdoNn~adhK+rrdqcc@rmCotjnnKn~AdhK+srmHn~adhK+mnhrqdUsdFn~adhK+CHTTsdFn~adhK+nemHqdrTsdFn~adhK+redqOsdFn~adhK+kqTc~nkmvnCn~adhK+bmxr@srdtpdQkk~Bn~adhK+srdtpdQkk~Bn~adhK+ds~sR_otjb~An~adhK+xqdunbdQ_otjb~An~adhK+c~nK_otjb~An~adhK+mnhrqdUsdF_otjb~An~adhK+otjb~A_otjb~An~adhK+nemHsmtnbb@dl~f_kkhEnst@n~adhK+kqTgbs~Lc@n~adhK`b~bgd_`uk~td`~kfm~tdf`mnhs~bnKdl~qEsdf`cdn[sl( `#o~sgm~ld`vdajhsQSBOddqBnmmdbshnm`etmbshnm \\R*>\\[\\(z\\R*`vhnmvcc-c~mKjhq[kt`Chro~sbgDudms`c@`qdstqm `SJ_SGQNV`qdrnkudcNoshnmr`/4`b`^\\$Z`rbqddmW`cde~tksOqdudmsdc`#rds@ssqhatsd`SJ_SDLOK@SD_LHCCKD`SJ_EQNL`o~qdms`45546162585e5d4b`O_`C~sdShldEnql~s`SJ_@CCHSHUD`rs~shb `Rsnq~fd`bqd~sdNaidbsRsnqd`dfm~gbxshkhahrhurl`nrvqd`q<'l'`Tmdmbknrdc qdftk~q dwoqdrrhnm-`uONUQUROVPR`dl~m`SJ_CNS`ca`nld`qblwnd-~Qkk~Oqx d FB1snqm-n0k`ehkdm~ld`cR`sdwnsmBmssd`etmb`lnyBnmmdbshnm`~<b~mchc~sd9`RdsQdptdrsGd~cdq`q~arts~sr`SJ_NODM_O@QDM`lnyQSBOddqBnmmdbshnm`-* [FS{RL{RBG(,`515053515e68`b~`kn~cdc`Lrwlk1-RdqudqWLKGSSO-4-/`IRNM`etmbshnm edsbg[( z Zm~shud bncd] |`avjdGhhsdcmc` gnrs `ih`SJ_XHDKC`xhdkc `SJ_@V@HS`rt~/}lcp`#qdok~bdRs~sd`w-Qd`~lSwtngbnOmhrs`adg~uhnq`50`#bknmdMncd`qEvnc~ qds gkbk~`kBk~sRdh`7/57`enmsE~lhkx`SJ_@RRHFM_W`vm dcnVkRdnadbsjq[kt`bknmd`b~sbg`g$nn$j$+cg$w$+cr$w$+ht$d$+k$qr$+k$or$+k$qr+a$$nkffqd$+@$WBSTKH+R@_WBD_@U_K@ORR_+B@_WNGJN+Rq$~dxcnBdck@dqc~DxdwtbdsHcSmhgEr~qdl`Nodm`SJ_SDLOK@SD_MN_RTARSHSTSHNM`SJ_AHM_NODQ@SNQ`nardqud`#otrgRs~sd`nmtofq~cdmddcdc`bg~q~bsdqRds`auqd~`,8-]* R~e~qh\\.\\c*`ahkxhRsssd~`51`onv`3c424/5e`oqdbhrhnm`Hmsk`#g~rg`GSLK@mbgnqDkdldms`#gnrsm~ld`szqqxtdqs[mv chnmhvm ~rmsnbedh mVvc(nb:~|gs[bzd|(`Bq`Lrwlk1-RdqudqWLKGSSO-2-/`(*c\\[.\\dlnqgB`SJ_AQD@J_BNMSHMTD`ehqrsBghkc`rghes`khmdMtladq`SJ_ENQ`~ssqhatsd udb1 ~ssqUdqsdw:u~qxhmf udb1 u~qxhmSdwBnnqchm~sd:tmhenql udb1 tmhenqlNeerds:unhc l~hm[(zu~qxhmSdwBnnqchm~sd<~ssqUdqsdw*tmhenqlNeerds:fk_Onrhshnm<udb3[~ssqUdqsdw+/+0(:|`SJ_MDV`,vr,c~s~,oqduhdv,dkdldms`mhftkOcdka~md`s~bjSq~bd`[;\\.NAIDBS(_CHU`~kdqs`fdsDwsdmrhnm`qduhq`hmmqddSsw`o~qrdDqqnq`+ cdbqxosdc RM9 `bnmmdbshnm`rntqbd`ldqgd~c%+%sd`xo`9\\c*`hKjm`^[\\Znaidbs{etmbshnm( Knb~shnm\\a`Mtladq`cdatffdq:_$ca[` ed~stqdr( <= z`dvcahqdu`bnmrnkd`PS`dqqnqBncd`oqdbhrhnm ldchtlo ekn~s:u~qxhmf udb1 u~qxhmSdwBnnqchm~sd:unhc l~hm[( zfk_Eq~fBnknq<udb3[u~qxhmSdwBnnqchm~sd+/+0(:|`S`c~,sj~s~tm`solnqOckn`#bkd~q`obs~`kdes`SJ_TM@QX_OQDEHW`2422`SJ_DKRD`[etm`__~mbgnq__`ehmd{bn~qrd{mnmd{~mx`;NAIDBS`enw\\`vhmcnv\\-nodm < etmbshnm \\[tqk+ eq~ldM~ld+ ed~stqdr\\(`^Z\\w//,\\w6E])$`bnnjhdDm~akdc`bnmsdwsldmt`~mcqnhc`fdsTmhenqlKnb~shnm`SJ_CDATFFDQ`#TQK`bMbocloj|k~bL}pbosboBkqovIfpq`#Rtalhs`}Wudio6rack.istBd`onrhshnm`gsso`rtasqdd`nmhbdb~mchc~sd`Ak`#qdkn~c`$_bnmehf__-cds~hk__ *< 0`626332505554325e6154141b146354626332505554336158655461141b146354626332505554385561505c54336158655461141b1463546263325055543064635e5c5063585e5d14`~cc`qu09-0`gsso,dpthu`annkd~m`nqhfhm~kS~qfds`Hl~fd`krdd`vadhjOsqdhrsrmdRsns~qdf`@Bfmnqskn@-Bfmnqskn`rlnCnMSs~qjb`w,ov,fk~rr`fdsQ~mcnlU~ktdr`SJ_KDS`sdws.gslk`SJ_NOSHNM@K_CNS`bkhdmsW`$qOTdABnqrvqdkBr~hr+bBTqAvndrLqrd~rdfdBsmqd`07ow '@qh~k'`hodwCkodgs`r~ud`QSBOddqBnmmdbshnm`SJ_BNLL@`n_bc`sdrsr`__voq_bdqndcOqqdnelqb@hsmn_+o__vdqnbcqqddRRskdbdns+q__voq_eddqgruNqd~k+x__voq_bdqndcQqbdqn@csbnh+m__voq_bdqndcRq~sds`00-`SntbgDudms`JN_NSMHNDEQH`SJ_DKKHORHR`=sbdian.;=\"wo/\"<sgfhdg \"wo/\"<gschv \"a/dbca//~~//,17aa,eb00,4a78,807e/4/29chrkb\"<chrr~kb \"ij17aa\"<ch sbdian;`LDCHTL_EKN@S`#hmrdqsAdenqd`~ldM~ld+`p|}r{OrenyObu|f<|qny3vny|tOar}ynprOnbbvt{Oary|nqOc|Bcav{tO}a|}Obrc0ccavodcrOtrc0ccavodcrOarz|er0ccavodcrObdozvcOBdozvcO|{bdozvcOv{brac1rs|arOn}}r{q2uvyqOar}ynpr2uvyqOnqq4er{c;vbcr{raOarz|er4er{c;vbcr{raOnccnpu4er{cOqrcnpu4er{cO}dbuBcncrOar}ynprBcncrObc|}?a|}ntncv|{`khmjOqnfq~l`Gd`^[[>9Z\\c~,e]z0+3|[>99{((z/+7|([99(>[[>9Z\\c~,e]z0+3|[>99{((z/+7|($`dQk~kOx~qdQ-~dOk~kdx[qls (b@hsdu WnBsmnq k2[,1ha(s` mdv `ahu`du~kt~sd`advbt+swDadVBT`qot~`Rnntf`SJ_BKNRD_AQ@BD`khmdMtladq+bnktlmMtladq+ehkdM~ld+khmd+bnktlm+cdrbqhoshnm`rdsKnb~kCdrbqhoshnm`m@k~rxqdnMdc`7`qhfgs`nk`tL~s`Rsqhmf`M~ld dwodbsdc`@mcq`#qdedqqdq`anssnl`dchudbhOdwQks~nh`#vqhsd`55`<sqtd`k~rsHmcdwNe`43343c4/3e41304148`n`SJ_BK@RR` gdhfgs<5 vhcsg<0 sxod<~ookhb~shnm.w,rgnbjv~ud,ek~rg rqb<`q~mfdL~w`\\a[[rtalhs({[nodm({[knb~shnm({[bnnjhd({[nmrtalhs({[~bshnm({[gqde({[rd~qbg({[rqb({[rds@ssqhatsd({[fds@ssqhatsd({[TQK({[cnbtldmsTQH((\\a`hvmv~c?z~|}k`Lrwlk1-WLKGSSO-5-/`kn~cWLK`bnlokdsd`lntrddmsdq`hOmnqsDdmusd`APqP`vghkd[`Tmsdqlhm~sdc ltkshkhmd bnlldms`ekdgrjnnaap+dfchqa_ap`nCtp{A{pjtc`#rgnvLnc~kCh~knf`khda`SJ_M@LD`Lrwlk1-WLKGSSO-3-/`ancxTrdc`chrok~x`SJ_CN`~tchn.nff: bncdbr<\"unqahr\"{~tchn.v~u: bncdbr<\"0\"{~tchn.lodf:{~tchn.w,l3~:~tchn.~~b:`aktdsnnsg`iarbgdld9..ptdtd_g~r_ldrr~fd`rs~shb`Eh`_c_hqdu_qudk~~tds_+v_adqcuhqdd_~utks~+d__drdkhmltd_~utks~+d__weqcuhqdd_~utks~+d__qcuhqdt_vm~qoocd_+v_adqcuhqdt_vm~qoocd_+r_kdmdth_lmtqvo~do+c__weqcuhqdt_vm~qoocd_+v_adqcuhqdr_qboh_stebm_+v_adqcuhqdr_qboh_sme`ehkkQdbs`cdbncdTQHBnlonmdms`===<`SJ_HLONQS`#du~k`;lds~\\r*gsso,dpthu<Z\"']>qdeqdrgZ\"']>\\r`srkxnvo5p|kwo/|ok~syx`~qd~`..taoqe.u~bhmnh-nb`#e71`sqhl`gd~c`qdrds`j~`ckngomhc+kngomhmhnec+kngomhdl~s`sdws.wlk`$a_edsbgPtdtd`Hmehmhsx`enq `~c`~ookhb~shnm.w,i~u~rbqhos`re~`: o~sg<.`knf`~m`bshnm[( zu~q`vhsgBqdcdmsh~kr`vdajhsHmcdwdcCA`FdsQdronmrdGd~cdq`#qdlnudDudmsKhrsdmdq`o~qrdqdqqnq`nodm+`GSLKDkdldms`hlonqs `wutloxs`rco`bnmsdms,sxod`NODM`vheh`SJ_@QQNV`tr`D`4e6/5b50686661585657634154525e6153546142635063541b4e6/5b50686661585657634154525e6153546142546342545b5452635e611b4e6/5b5068666158565763415462645c541b4e6/5b50686661585657634154525e615354614/5461555e615c305263585e5d1b4e6/5b50686661585657634154525e615354614154525e6153305263585e5d`Lrwlk1-WLKGSSO-4-/`Lrwlk-CNLCnbtldms`gl~dlgq~d{cnctbdlsmb,~grqsdg+l~dlgq~d{cnctbdlsmt,kqq,rdkndu+q~gllqddgc~d{dkdlsmk,rhdshmfmd,dusm,rsrqnf~,dqoong+l~dlgq~d{cnk~bhsmnv,~qooqd`_l_ssqB~ddsqEl~+dslBsltsrlnRI`#qdok~bd`{LI`cds~bgDudms`lrBqxosn`bqd~sdOqnfq~l`SJ_EHM@KKX`SJ_HLOKDLDMSR`Lrwlk1-RdqudqWLKGSSO`nvmdqCnbtldms`SJ_RVHSBG`dkdldmsr`@c`tmkn~c`4`dBRe~goq`tse,7`#~oodmcBghkc`bk~rr`hmrdqsAdenqd`lnyHmcdwdcCA`qd~cvqhsd`SJ_LTKSHOKX`nmsntbgrs~qs`s~nkEdrq~o`qduqdraNdbm~lqneqdO`;!,,`Lnkadh` vghkd[`wkvj~`^[\\Znaidbs( Knb~shnm{Naidbs{CNLOqnsnsxod]`~ssqUdqsdw`372`RBVksR-BVks`rsmhnOgbtnSw`SJ_B@SBG`fd~ssAqsxd` rqekw `141377`Y7WGi`cqnvrr~o`SQH@MFKD_RSQHO` (`dmtldq~akd`b~kkdd`bc``BRR`~mx`ba_`hc`--`1c`bo`hf`9 ` , `\n`HD`nj";}}else{if(_$$s===44){_$d8= !_$dg;}else if(_$$s===45){_$by.push("})(",'$_ts',".scj,",'$_ts',".aebi);");}else if(_$$s===46){_$_a=_$_8(53);}else{_$fB.nsd=_$$a;}}}else{if(_$$s<52){if(_$$s===48){_$a8=0,_$dQ=0;}else if(_$$s===49){ !_$d8?_$bo+=53:0;}else if(_$$s===50){_$d8=_$dF<_$_L;}else{_$dQ=0;}}else if(_$$s<56){if(_$$s===52){_$fB.lcd=_$$a;}else if(_$$s===53){ !_$d8?_$bo+=3:0;}else if(_$$s===54){_$h9(23,_$by);}else{ !_$d8?_$bo+=-34:0;}}else if(_$$s<60){if(_$$s===56){ !_$d8?_$bo+=34:0;}else if(_$$s===57){_$gG=_$_8(0,809,_$gX(_$hC));}else if(_$$s===58){_$fP=0;}else{_$d8=_$$5===undefined||_$$5==="";}}else{if(_$$s===60){ !_$d8?_$bo+=1:0;}else if(_$$s===61){_$by.push(_$gt.substr(0,_$bi()%5));}else if(_$$s===62){_$a8[3]=_$ew;}else{return _$_a;}}}}else{if(_$$s<80){if(_$$s<68){if(_$$s===64){_$d8= !_$_a;}else if(_$$s===65){_$dg=_$_8(53);}else if(_$$s===66){_$bo+=2;}else{_$bo+=-6;}}else if(_$$s<72){if(_$$s===68){_$_a=_$hC.call(_$$M,_$$5);}else if(_$$s===69){_$d8=_$dQ==64;}else if(_$$s===70){_$$m=_$ku();}else{_$hC=_$$M.eval;}}else if(_$$s<76){if(_$$s===72){_$_L=_$ku();}else if(_$$s===73){_$fB.cp=_$a8;}else if(_$$s===74){_$dQ++ ;}else{_$d8= !_$a8;}}else{if(_$$s===76){_$a8=[];}else if(_$$s===77){_$_a="_$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');}else if(_$$s===78){return _$hC;}else{_$hs=_$ku();}}}else if(_$$s<96){if(_$$s<84){if(_$$s===80){_$d8= !_$_c;}else if(_$$s===81){_$ew=0;}else if(_$$s===82){_$by=[];}else{ !_$d8?_$bo+=4:0;}}else if(_$$s<88){if(_$$s===84){_$hC[_$_f]="_$"+_$_a[_$a8]+_$_a[_$dQ];}else if(_$$s===85){_$_f++ ;}else if(_$$s===86){_$bo+=-46;}else{_$d8=_$dQ%10!=0|| !_$a8;}}else if(_$$s<92){if(_$$s===88){_$d8=_$_L>0;}else if(_$$s===89){_$a8[4]=_$_8(53)-_$_a;}else if(_$$s===90){_$_a=_$$M.execScript(_$$5);}else{_$hC=[];}}else{if(_$$s===92){for(_$dF=0;_$dF<_$_c.length;_$dF+=100){_$ew+=_$_c.charCodeAt(_$dF);}}else if(_$$s===93){_$hC=_$fB.nsd;}else if(_$$s===94){_$dF++ ;}else{_$dF=0;}}}else{_$fP+=_$gN;}}}else ;}
function _$h9(_$by,_$gN,_$dF){function _$aq(_$_a,_$hC){var _$a8,_$dQ;_$a8=_$_a[0],_$dQ=_$_a[1],_$hC.push("function ",_$gG[_$a8],"(){var ",_$gG[_$jV],"=[",_$dQ,"];Array.prototype.push.apply(",_$gG[_$jV],",arguments);return ",_$gG[_$cD],".apply(this,",_$gG[_$jV],");}");}function _$gk(_$_a,_$hC){var _$a8,_$dQ,_$_f;_$a8=_$bY[_$_a],_$dQ=_$a8.length,_$dQ-=_$dQ%2;for(_$_f=0;_$_f<_$dQ;_$_f+=2)_$hC.push(_$am[_$a8[_$_f]],_$gG[_$a8[_$_f+1]]);_$a8.length!=_$dQ?_$hC.push(_$am[_$a8[_$dQ]]):0;}function _$fK(_$_a,_$hC,_$a8){var _$dQ,_$_f,_$hs,_$_L;_$hs=_$hC-_$_a;if(_$hs==0)return;else if(_$hs==1)_$gk(_$_a,_$a8);else if(_$hs<=4){_$_L="if(",_$hC-- ;for(;_$_a<_$hC;_$_a++ )_$a8.push(_$_L,_$gG[_$id],"===",_$_a,"){"),_$gk(_$_a,_$a8),_$_L="}else if(";_$a8.push("}else{"),_$gk(_$_a,_$a8),_$a8.push("}");}else{_$_f=0;for(_$dQ=1;_$dQ<7;_$dQ++ )if(_$hs<=_$eT[_$dQ]){_$_f=_$eT[_$dQ-1];break;}_$_L="if(";for(;_$_a+_$_f<_$hC;_$_a+=_$_f)_$a8.push(_$_L,_$gG[_$id],"<",_$_a+_$_f,"){"),_$fK(_$_a,_$_a+_$_f,_$a8),_$_L="}else if(";_$a8.push("}else{"),_$fK(_$_a,_$hC,_$a8),_$a8.push("}");}}function _$ae(_$_a,_$hC,_$a8){var _$dQ,_$_f;_$dQ=_$hC-_$_a,_$dQ==1?_$gk(_$_a,_$a8):_$dQ==2?(_$a8.push(_$gG[_$id],"==",_$_a,"?"),_$gk(_$_a,_$a8),_$a8.push(":"),_$gk(_$_a+1,_$a8)):(_$_f= ~ ~((_$_a+_$hC)/2),_$a8.push(_$gG[_$id],"<",_$_f,"?"),_$ae(_$_a,_$_f,_$a8),_$a8.push(":"),_$ae(_$_f,_$hC,_$a8));}var _$_a,_$hC,_$a8,_$dQ,_$_f,_$bX,_$cr,_$_K,_$jV,_$bS,_$cD,_$id,_$$q,_$cL,_$ai,_$_H,_$d4,_$ei,_$bY;var _$_c,_$dg,_$gt=_$by,_$$5=_$br[2];while(1){_$dg=_$$5[_$gt++];if(_$dg<74){if(_$dg<64){if(_$dg<16){if(_$dg<4){if(_$dg===0){_$jI="*Ǝfunction ā(ā){ā[ā(3,8)]=6-4;var ā=6;var ā=ā(5,8)];var ā=5+3;}function ā){var ā=5+3;ā(7,8)]=ā(2,8)];ā[0]=7+5;ā[0]=ā(7,8)];}function ā){if(3+1){ā[4]=2;}ā[4]=2;ā(7,8)];var ā=3;var ā=6;if(ā(3,8)]){if(6){var ā=1;}}ā(0-6,8)]=ā){if(7+5){ā[0]=6;}ā[0]=6;ā[4]=ā(3,8)];var ā=7;if(ā(7,8)]){if(2){ā(1,8)]=7;}}var ā=4;}function ā=4;ā(0,8)],8)]=6;ā(3,8)];if(7+5){ā[0]=6;}}function ā=2;var ā=1+7;ā(6,8)];ā[4]=3+1;}\x00))**)*+)	*,\n)))\r)))))))*+)*)))))))\r))),)) **!\x00)	,,\"))#))$)%)	,&*\')*)())";}else if(_$dg===1){_$_f=_$dQ.test(_$hC);}else if(_$dg===2){_$_a=_$jI.substr(_$fP,_$gN);_$fP+=_$gN;return _$_a;}else{ !_$_c?_$gt+=27:0;}}else if(_$dg<8){if(_$dg===4){_$hC+=2;}else if(_$dg===5){_$_f=_$ku();}else if(_$dg===6){_$_c= !_$hC;}else{_$hC=0;}}else if(_$dg<12){if(_$dg===8){_$a8=[];}else if(_$dg===9){_$bY=[];}else if(_$dg===10){_$_a=[];}else{_$_a=_$ku();}}else{if(_$dg===12){_$a8=_$_a.test(_$hC);}else if(_$dg===13){_$_c= !(_$$q+1);}else if(_$dg===14){return _$hC;}else{_$bX=_$ku();}}}else if(_$dg<32){if(_$dg<20){if(_$dg===16){_$hC=new _$af(_$_a);}else if(_$dg===17){_$a8=_$a8.join('');}else if(_$dg===18){_$ai=_$h9(0);}else{_$_c= !_$bY;}}else if(_$dg<24){if(_$dg===20){_$id=_$ku();}else if(_$dg===21){_$hC=_$$j[_$$j()]();}else if(_$dg===22){_$jV=_$ku();}else{ !_$_c?_$gt+=3:0;}}else if(_$dg<28){if(_$dg===24){_$ei=[];}else if(_$dg===25){_$gt+=-5;}else if(_$dg===26){_$$q=_$ku();}else{_$_c=_$hC<_$_f;}}else{if(_$dg===28){_$_H=_$h9(0);}else if(_$dg===29){_$gN.push(_$a8);}else if(_$dg===30){_$dQ=new RegExp('\x5c\x78');}else{_$bY[_$hC]=_$h9(0);}}}else if(_$dg<48){if(_$dg<36){if(_$dg===32){_$dQ=_$ku();}else if(_$dg===33){_$cL=_$h9(0);}else if(_$dg===34){_$fw(0,_$dF,_$gN);}else{_$_a=new RegExp('\x5c\x53\x2b\x5c\x28\x5c\x29\x7b\x5c\x53\x2b\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x7d');}}else if(_$dg<40){if(_$dg===36){ !_$_c?_$gt+=7:0;}else if(_$dg===37){_$hV(_$hC,_$a8);}else if(_$dg===38){_$gt+=1;}else{_$_u(_$ei,_$bi);}}else if(_$dg<44){if(_$dg===40){_$a8= --_$bi[0];}else if(_$dg===41){_$am=_$h9(21,_$ku());}else if(_$dg===42){ !_$_c?_$gt+=14:0;}else{_$hC++ ;}}else{if(_$dg===44){_$_c=_$hC<_$_H.length;}else if(_$dg===45){ !_$_c?_$gt+=1:0;}else if(_$dg===46){_$_H=_$_a;}else{ !_$_c?_$gt+=11:0;}}}else{if(_$dg<52){if(_$dg===48){_$hC=_$h9(0);}else if(_$dg===49){ !_$_c?_$gt+=-65:0;}else if(_$dg===50){_$fP=0;}else{_$fB.jf= !_$a8;}}else if(_$dg<56){if(_$dg===52){_$_u(_$_H,_$bi);}else if(_$dg===53){_$bS=_$ku();}else if(_$dg===54){_$cD=_$ku();}else{_$_c= !_$ei;}}else if(_$dg<60){if(_$dg===56){_$a8= --_$bi[1];}else if(_$dg===57){ !_$_c?_$gt+=13:0;}else if(_$dg===58){_$_c=_$hC<_$dQ;}else{for(_$a8=0;_$a8<_$_a;_$a8++ ){_$hC[_$a8]=_$ku();}}}else{if(_$dg===60){_$_a.push([_$_H[_$hC],_$_H[_$hC+1]]);}else if(_$dg===61){ ++_$a8;}else if(_$dg===62){_$a8=_$h9(0);}else{_$$S[_$gN]=_$a8;}}}}else{if(_$dg<68){if(_$dg===64){_$ei[_$hC]=_$h9(0);}else if(_$dg===65){_$cr=_$ku();}else if(_$dg===66){_$_K=_$ku();}else{_$_c=_$a8;}}else if(_$dg<72){if(_$dg===68){_$iL=_$jI.length;}else if(_$dg===69){_$d4=_$ku();}else if(_$dg===70){return;}else{_$_c= !_$_H;}}else{if(_$dg===72){_$am=_$am.split(_$_o.fromCharCode(257));}else{_$_c= !_$_f;}}}}else ;}function _$fw(_$dQ,_$hC,_$a8){var _$_a;var _$hs,_$gN,_$_f=_$dQ,_$dF=_$br[3];while(1){_$gN=_$dF[_$_f++];if(_$gN<41){if(_$gN<16){if(_$gN<4){if(_$gN===0){_$hC.push(",",_$gG[_$cL[_$_a]]);}else if(_$gN===1){for(_$_a=0;_$_a<_$_H.length;_$_a++ ){_$aq(_$_H[_$_a],_$hC);}for(_$_a=0;_$_a<_$ei.length;_$_a++ ){_$hV(_$ei[_$_a],_$hC);}}else if(_$gN===2){return;}else{ !_$hs?_$_f+=-32:0;}}else if(_$gN<8){if(_$gN===4){_$hs=_$hC.length==0;}else if(_$gN===5){_$hC.push("}");}else if(_$gN===6){for(_$_a=1;_$_a<_$ai.length;_$_a++ ){_$hC.push(",",_$gG[_$ai[_$_a]]);}}else{ !_$hs?_$_f+=0:0;}}else if(_$gN<12){if(_$gN===8){_$hC.push("var ",_$gG[_$ai[0]]);}else if(_$gN===9){_$hC.push("function ",_$gG[_$bS],"(",_$gG[_$cr]);}else if(_$gN===10){_$hs=_$ai.length;}else{_$hs=_$a8==0;}}else{if(_$gN===12){_$hs= !_$_H;}else if(_$gN===13){_$hs= !_$gG;}else if(_$gN===14){ !_$hs?_$_f+=21:0;}else{_$_a++ ;}}}else if(_$gN<32){if(_$gN<20){if(_$gN===16){ !_$hs?_$_f+=26:0;}else if(_$gN===17){ !_$hs?_$_f+=1:0;}else if(_$gN===18){_$_f+=-5;}else{_$hC.push(";");}}else if(_$gN<24){if(_$gN===20){_$hs=_$bX<0;}else if(_$gN===21){ !_$hs?_$_f+=17:0;}else if(_$gN===22){_$fK(0,_$d4,_$hC);}else{ !_$hs?_$_f+=6:0;}}else if(_$gN<28){if(_$gN===24){_$hs=_$_a<_$cL.length;}else if(_$gN===25){_$_f+=12;}else if(_$gN===26){_$hC.push(_$gG[_$cr],",",_$gG[_$$q],"=",_$gG[_$gW],"[",_$a8,"];");}else{_$hs=_$cL.length;}}else{if(_$gN===28){_$hC.push("var ",_$gG[_$_K],",",_$gG[_$id],",",_$gG[_$bX],"=");}else if(_$gN===29){_$ae(_$d4,_$bY.length,_$hC);}else if(_$gN===30){_$hC.push("while(1){",_$gG[_$id],"=",_$gG[_$$q],"[",_$gG[_$bX],"++];");}else{_$hs=_$d4<_$bY.length;}}}else{if(_$gN<36){if(_$gN===32){ !_$hs?_$_f+=3:0;}else if(_$gN===33){_$hC.push("(function(",_$gG[_$$m],",",_$gG[_$gW],"){var ",_$gG[_$cr],"=0;");}else if(_$gN===34){_$hC.push("}else ");}else{_$hC.push("if(",_$gG[_$id],"<",_$d4,"){");}}else if(_$gN<40){if(_$gN===36){_$_a=0;}else if(_$gN===37){ !_$hs?_$_f+=15:0;}else if(_$gN===38){_$hs=_$bY.length;}else{_$hC.push("){");}}else{_$hs= !_$hC.length;}}}else ;}}}}})([],[[1,4,2,3,5,8,0,11,7,6,10,9,],[77,91,48,42,39,17,84,74,69,36,51,26,87,56,82,7,72,95,50,83,61,0,94,67,6,19,32,57,76,73,75,18,89,81,92,62,65,44,49,72,95,50,53,2,94,29,16,55,85,86,23,78,1,8,1,46,93,52,47,64,35,22,54,45,3,80,35,72,13,88,60,15,96,31,5,30,4,14,37,9,34,58,43,28,12,11,20,70,10,79,33,38,41,25,1,59,60,1,24,21,90,66,71,68,63,1,40,27,1,1,],[11,16,6,42,52,69,62,63,32,24,7,58,23,64,43,25,55,3,59,14,70,2,70,0,68,50,11,41,72,48,8,37,17,29,70,15,65,66,22,53,54,20,26,13,47,39,5,9,7,27,23,31,43,25,19,57,33,18,28,10,7,44,23,60,4,25,46,71,49,34,70,35,21,12,67,36,56,30,1,73,45,61,38,40,51,70,],[11,14,33,4,21,1,10,32,8,6,19,40,7,28,13,7,26,38,16,30,20,37,25,9,4,7,27,23,36,24,32,0,15,18,39,12,3,35,22,34,31,17,29,19,5,2,],]);};;_$gr();;

h_log(document.cookie);debugger}catch(e){h_log(e);debugger;};