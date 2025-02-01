// 导包
let parse = require("@babel/parser").parse;
let generate = require("@babel/generator").default;
let traverse = require("@babel/traverse").default;

function enter_exit() {
  let a = `let a =  -0x1 * 0x21ea + -0x53b + -0x101 * -0x27`;
  let ast = parse(a);
  traverse(ast, {
    BinaryExpression: {
      enter: function (path) {
        console.log('enter', path.toString());
      },
      exit: function (path) {
        console.log('exit', path.toString());
      },
    },
  });
}

function main() {
  return enter_exit()

  let a = `let a =  -0x1 * 0x21ea + -0x53b + -0x101 * -0x27`;

  let ast = parse(a);
  // traverse(ast, {
  //   NumericLiteral: function (path) {
  //     debugger;
  //     console.log('=======================================')
  //     console.log('path.node', path.node);
  //     console.log('path.toString()', path.toString());
  //     console.log('path.parentPath.toString()', path.parentPath.toString());
  //     // console.log(path.parent);
  //     // console.log(path.container);
  //     console.log(path.type);
  //     console.log(path.node.type);
  //     console.log(path.key);
  //     if (path.node.extra?.rawValue) {
  //       path.replaceInline({ type: "NumericLiteral", value: path.node.extra.rawValue })
  //     }
  //   },
  // });
  // console.log(generate(ast).code)
  // return

  traverse(ast, {
    BinaryExpression: function (path) {
      if (path.parentPath.type === "VariableDeclarator") {
        console.log(path.toString());
        let { confident, value } = path.evaluate();
        path.replaceInline({ type: "NumericLiteral", value: value });
        console.log(confident, value);
      }
    },
  });
  return
  traverse(ast, {
    BinaryExpression: {
      exit: function (path) {
        console.log(path.toString());
        let { confident, value } = path.evaluate();
        path.replaceInline({ type: "NumericLiteral", value: value });
        console.log(confident, value);
      },
    },
  });
}

main()
