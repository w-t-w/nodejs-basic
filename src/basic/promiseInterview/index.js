// interview(1)
//     .then(function () {
//         return interview(2);
//     })
//     .then(function () {
//         return interview(3);
//     })
//     .then(function () {
//         console.log("smile!");
//     })
//     .catch(function (error) {
//         console.error(`cry at ${error.round} round!`);
//     });
//
// function interview(round) {
//     return new Promise(function (resolve, reject) {
//         const timer = setTimeout(function () {
//             const random = Math.random();
//             if (random < 0.8) {
//                 resolve("success!");
//             } else {
//                 const error = new Error("failed!");
//                 error.round = round;
//                 reject(error);
//             }
//             clearTimeout(timer);
//         }, 800);
//     });
// }

console.log("Promise - 面试课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
