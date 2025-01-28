
// 框架的入口

const {VM} = require("vm2");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`
<!doctype html>
<html dir="ltr" lang="zh"
     >
  <head>
    <meta charset="utf-8">
    <title>新标签页</title>
    <style>
      html {
        --ntp-focus-shadow-color: rgba(var(--google-blue-600-rgb), .4);
        --ntp-theme-text-color: var(--google-grey-800);
        background-attachment: fixed;
        background-color: rgba(255,255,255,1);
        background-position: -64px;
        background-repeat: no-repeat;
        height: 100%;
        overflow: auto;
      }

      @media (prefers-color-scheme: dark) {
        html {
          --ntp-focus-shadow-color: rgba(var(--google-blue-300-rgb), .5);
          --ntp-theme-text-color: white;
        }
      }

      html[has-custom-background] {
        background-image: -webkit-image-set(
            url(chrome://theme/IDR_THEME_NTP_BACKGROUND?) 1x,
            url(chrome://theme/IDR_THEME_NTP_BACKGROUND@2x?) 2x);
      }

      body {
        align-items: center;
        display: flex;
        height: 100vh;
        justify-content: center;
        margin: 0;
      }

      cr-most-visited {
        --most-visited-focus-shadow: 0 0 0 2px var(--ntp-focus-shadow-color);
        --most-visited-text-color: var(--ntp-theme-text-color);
        --most-visited-text-shadow: none;
      }

      html[has-custom-background] cr-most-visited {
        --most-visited-text-shadow: 0 0 16px rgba(0, 0, 0, .3);
      }
    </style>
  </head>
  <body>
    <script type="module" src="strings.m.js"></script>
    <cr-most-visited></cr-most-visited>
    <script type="module" src="new_tab_page_third_party.js"></script>
    <link rel="stylesheet" href="chrome://resources/css/text_defaults_md.css">
  </body>
</html>
`);


const vm = new VM({
    sandbox: {
        h_log: console.log,
        _jsdom_document:dom.window.document,
    }
});

let code = "debugger;" // 便于调试
// 加载框架代码
code += fs.readFileSync("./env/init.js", "utf-8")
code += fs.readFileSync("./env/public/eventTarget.js", "utf-8")
code += fs.readFileSync("./env/bom/navigator.js", "utf-8")
code += fs.readFileSync("./env/bom/location.js", "utf-8")

code += fs.readFileSync("./env/dom/dom.js", "utf-8")
code += fs.readFileSync("./env/dom/document.js", "utf-8")
code += fs.readFileSync("./env/bom/window.js", "utf-8")

code = `(function(){${code}})();`
code += fs.readFileSync("./work/work.js", "utf-8")

// 可留可不留
code = `try{${code};debugger}catch(e){h_log(e);debugger;};`

console.log(vm.run(code));