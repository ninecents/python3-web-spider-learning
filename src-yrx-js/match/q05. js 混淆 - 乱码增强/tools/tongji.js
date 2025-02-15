const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// 读取 JavaScript 文件内容
const code = fs.readFileSync('./files/output-step2.js', 'utf-8');

// 解析 JavaScript 代码
const ast = parser.parse(code, {
  sourceType: 'module',
  plugins: ['jsx', 'flow']
});

// 初始化变量和函数名计数器
const variableCounts = {};
const functionCounts = {};

// 定义节点访问器函数
const visitor = {
  enter(path) {
  // Identifier(path) {
    const name = path.node.name;
    if (path.parent.type === 'VariableDeclarator') {
      // 统计变量名
      if (!variableCounts[name]) {
        variableCounts[name] = 0;
      }
      variableCounts[name]++;
    } else if (path.parent.type === 'FunctionDeclaration' || path.parent.type === 'FunctionExpression') {
      // 统计函数名
      if (!functionCounts[name]) {
        functionCounts[name] = 0;
      }
      functionCounts[name]++;
    }
  }
};

// 访问解析后的 AST
traverse(ast, visitor);

// 打印变量和函数名的出现次数
console.log("Variable Counts:", variableCounts);
console.log("Function Counts:", functionCounts);

// 排序展示，
console.log("Variable Counts:");
Object.keys(variableCounts).sort((a, b) => variableCounts[b] - variableCounts[a]).forEach(name => {
  if (variableCounts[name] > 5) {
    console.log(`${name}: ${variableCounts[name]}`);
  }
});
console.log("Function Counts:");
Object.keys(functionCounts).sort((a, b) => functionCounts[b] - functionCounts[a]).forEach(name => {
  if (functionCounts[name] > 5) {
    console.log(`${name}: ${functionCounts[name]}`);
  }
});