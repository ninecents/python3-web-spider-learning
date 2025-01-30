
// 框架的入口

const {VM} = require("vm2");
const fs = require("fs");


const vm = new VM({
  sandbox: {
    // h_log: console.log,
    _h_log: console.log,
    // h_log: () => {
    //   console.log('[mylog]', arguments)
    // },
    // h_log: 自增日志index，闭包实现
    // h_log: () => {
    //   let index = 1;
    //   console.log(`[log:${index}] `, ...arguments)
    //   return () => {
    //     index += 1;
    //     console.log(`[log:${index}] `, ...arguments)
    //   }
    // },
    // _jsdom_document:dom.window.document,
  }
});

let code = ";" // 便于调试
// 加载框架代码
code += fs.readFileSync("./env/init.js", "utf-8")
code += fs.readFileSync("./env/public/eventTarget.js", "utf-8")

code += fs.readFileSync("./env/dom/dom.js", "utf-8")
code += fs.readFileSync("./env/dom/document.js", "utf-8")
code += fs.readFileSync("./env/dom/html_xxx_element.js", "utf-8")

code += fs.readFileSync("./env/bom/navigator.js", "utf-8")
code += fs.readFileSync("./env/bom/location.js", "utf-8")
code += fs.readFileSync("./env/bom/MutationObserver.js", "utf-8")
code += fs.readFileSync("./env/bom/window.js", "utf-8")


code = `(function(){${code}})();`
code += fs.readFileSync("./work/work.js", "utf-8")

// 可留可不留
code = `try{${code};debugger}catch(e){h_log(e);debugger;};`
let __tmp_file_path = "./work/__tmp.js";
fs.writeFileSync(__tmp_file_path, code);

vm.runFile(__tmp_file_path);
console.log('====================== finish ======================');