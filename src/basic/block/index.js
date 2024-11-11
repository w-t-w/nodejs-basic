const glob = require("glob");

const NODE_DIR = process.cwd();

console.time("glob");
const result = glob.sync(`${NODE_DIR}/**/*`);
console.log(result);
console.timeEnd("glob");
console.log(100 + 102);
