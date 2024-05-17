const lib = require('./lib.js');
// import {sum,sub,mul,div} from './lib.js'
const fs = require('fs');
const t1 = performance.now();
fs.readFile('demo.txt', 'utf-8', (err, txt) => {
  console.log(txt);
});
const t2 = performance.now();
console.log(t2-t1);
console.log(lib.sum(2, 3));
console.log(lib.sub(2, 3));
console.log(lib.mul(2, 3));
console.log(lib.div(2, 3));