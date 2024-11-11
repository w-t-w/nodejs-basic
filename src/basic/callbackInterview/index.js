// callbackInterview(1, function (error) {
//     if (error) return console.error(`cry at ${error.round} round!`);
//
//     callbackInterview(2, function (error) {
//         if (error) return console.error(`cry at ${error.round} round!`);
//
//         callbackInterview(3, function (error) {
//             if (error) return console.error(`cry at ${error.round} round!`);
//
//             console.log("smile!");
//         })
//     })
// })
//
// function callbackInterview(round, callback) {
//     const timer = setTimeout(function () {
//         const random = Math.random();
//         if (random < 0.8) {
//             callback(null, "success!");
//         } else {
//             const error = new Error("failed!");
//             error.round = round;
//             callback(error);
//         }
//         clearTimeout(timer);
//     }, 800);
// }
console.log("callback 回调函数 - 面试课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
