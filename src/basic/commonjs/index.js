console.log("start require!");
const lib = require("./lib");
console.log("end require!");
console.log(lib);
const foo_result = lib.foo && lib.foo(1, 100);
console.log(foo_result);
lib.test = "GeekBang Test!!!";
console.log(lib);
const timer = setTimeout(function () {
    lib.timing = "It's time to go to bed!!!";
    console.log(lib);
    clearTimeout(timer);
}, 600);
