const glob = require("glob");

const NODE_DIR = process.cwd();

console.log(NODE_DIR);
console.time("glob");
glob(`${NODE_DIR}/**/*`, function (error, patterns) {
    console.log(patterns);
});
console.timeEnd("glob");
console.log(100 + 101);
