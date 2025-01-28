const {VM} = require('vm2')

const vm = new VM()
const code = `
debugger;
a= 1;
try{
    a[0][0];
} catch (e) {
    debugger;
}
`
console.log(vm.run(code))
