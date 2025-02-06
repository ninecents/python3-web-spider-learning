// https://www.python-spider.com/challenge/new/js

let parse = require("@babel/parser").parse;
let generate = require("@babel/generator").default;
let traverse = require("@babel/traverse").default;
const types = require("@babel/types");
let fs = require("fs");
const { str_decode } = require("./str_decode");

function main(ast) {
  // return console.log("===", str_decode("0x1f5", "aA59"));

  // StringLiteral
  // 字符串 rawValue 转换
  traverse(ast, {
    StringLiteral: function (path) {
      if (path.type === "StringLiteral") {
        // console.log(path.toString());
        if (path.node.extra?.rawValue) {
          path.replaceInline({
            type: "StringLiteral",
            value: path.node.extra.rawValue,
          });
        }
      }
    },
  });

  // 替换关键函数：$dbsm_0x548e
  traverse(ast, {
    CallExpression: {
      exit: function (path) {
        if (
          path.get("callee").node.name === "$dbsm_0x548e" &&
          path.get("arguments.0").node.type === "StringLiteral"
        ) {
          let str = path.get("arguments.0").node.value;
          let key = path.get("arguments.1").node.value;
          path.replaceInline({
            type: "StringLiteral",
            value: str_decode(str, key),
          });
        }
      },
    },
  });

  // 合并字符串
  traverse(ast, {
    BinaryExpression: function (path) {
      let left = path.get("left").node.value;
      let right = path.get("right").node.value;
      if (
        path.get("left").isStringLiteral() &&
        path.get("right").isStringLiteral()
      ) {
        path.replaceInline(types.valueToNode(left + right));
      }
    },
  });
  return;

  // 第一步 先将对象放入内存. 先看对象 a
  memory = {};
  traverse(ast, {
    VariableDeclarator: function (path) {
      if (["a", "b", "e", "f"].indexOf(path.get("id").node.name) !== -1) {
        // 或者 path.get("id.name").node === "a"
        if (path.get("init").type === "ObjectExpression") {
          eval(path.toString());
          memory[path.get("id").node.name] = path;
        }
      }
    },
  });
  // 第二步 还原对象a里面容易还原的部分，即字符串
  traverse(ast, {
    MemberExpression: function (path) {
      if (
        ["a", "b", "e", "f"].indexOf(path.get("object.name").node) !== -1 &&
        path.get("property").type === "StringLiteral"
      ) {
        // console.log(path.toString())
        let result = eval(path.toString());
        if (typeof result === "string") {
          path.replaceInline({ type: "StringLiteral", value: result });
        }
      }
    },
  });
  return;

  // 第三步 还原控制流平坦化 part 1 取控制流里面的代码内容
  // 取控制流规则
  var b = "4|2|1|6|3|7|5|8|0"["split"]("|");
  var control = [];
  traverse(ast, {
    SwitchCase: function (path) {
      // control.push(path.get("consequent.0").toString())
      control[path.get("test.value").node] = path
        .get("consequent.0")
        .toString();
    },
  });
  // 第三步 还原控制流平坦化 part 2 替换while
  traverse(ast, {
    WhileStatement: function (path) {
      let new_jscode = "";
      for (let i of b) {
        new_jscode += control[i];
      }
      path.replaceInline(parse(new_jscode));
    },
  });

  // 第四步 还原对象a里面的函数
  traverse(ast, {
    CallExpression: {
      exit: function (path) {
        if (
          path.get("callee.object").node &&
          ["a", "b", "e", "f"].indexOf(path.get("callee.object").node.name) !==
            -1
        ) {
          //    第一种是函数执行， 第二种是操作符计算
          for (let i of memory[path.get("callee.object").node.name].get(
            "init.properties"
          )) {
            if (
              path.get("callee").node &&
              path.get("callee.property").node &&
              i.node.key.value === path.get("callee.property").node.value
            ) {
              // 操作符
              if (
                i.get("value.body.body.0.argument").type === "BinaryExpression"
              ) {
                let operator = i.get("value.body.body.0.argument").node
                  .operator;
                let left = path.get("arguments.0").node;
                let right = path.get("arguments.1").node;
                path.replaceInline(
                  types.binaryExpression(operator, left, right)
                );
              }
              // 函数
              else if (
                i.get("value.body.body.0.argument").type === "CallExpression"
              ) {
                // console.log(path.toString())
                let function_path = path.get("arguments.0").node;
                let function_arguments = path.node.arguments.slice(1);
                // console.log(function_arguments.length)
                path.replaceInline(
                  types.callExpression(function_path, function_arguments)
                );
                // console.log(i.get("value.body.body.0.argument").toString())
              }
            }
          }
          // babel
        }
      },
    },
  });

  // 第五步，删除无效代码
  traverse(ast, {
    VariableDeclarator: function (path) {
      if (["a", "b", "e", "f"].indexOf(path.get("id").node.name) !== -1) {
        // 或者 path.get("id.name").node === "a"
        if (path.get("init").type === "ObjectExpression") {
          // eval(path.toString())
          // memory[path.get("id").node.name] = path
          path.remove();
        }
      }
    },
  });

  traverse(ast, {
    StringLiteral: function (path) {
      if (path.node.extra) {
        // delete path.node.extra.raw
        path.node.extra.raw = "'" + path.node.value + "'";
        // path.node.extra = void 0
      }
    },
  });

  traverse(ast, {
    MemberExpression: function (path) {
      path.node.computed = false;
      path.node.property.type = "Identifier";
      path.node.property.name = path.node.property.value;
    },
  });

  // 三次加餐
  traverse(ast, {
    FunctionDeclaration: function (path) {
      if (path.node.id.name === "_$oc") {
        path.remove();
      }
    },
  });
}

console.log("================== start");
let js_code = fs.readFileSync("./data/input.js", "utf-8");
let ast = parse(js_code);
main(ast);
let decode_code = generate(ast, { comments: false }).code;
fs.writeFileSync("./data/output-step1-no-str.js", decode_code);
console.log("================== finish");
