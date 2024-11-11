console.log("hello world!");

exports.name = "WTW";
exports.age = 31;
exports.gender = "male";
exports.foo = function (a, b) {
    return a + b;
};
exports.geekBang = () => {
    console.log("Hello GeekBang!");
};

const timer = setTimeout(function () {
    console.log('exports result:', exports);
    clearTimeout(timer);
}, 1000);

module.exports = {
    hobby: "basketball",
    game: "black myth wuKong!"
};
