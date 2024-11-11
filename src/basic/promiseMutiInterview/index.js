// Promise.all([interview("tencent", "geekBang")])
//     .then(function () {
//         console.log("smile!");
//     })
//     .catch(function (error) {
//         console.error(`cry at ${error.name} company!`);
//     });
//
// function interview(name) {
//     return new Promise(function (resolve, reject) {
//         const timer = setTimeout(function () {
//             const random = Math.random();
//             if (random < 0.8) {
//                 resolve("success!");
//             } else {
//                 const error = new Error("failed!");
//                 error.name = name;
//                 reject(error);
//             }
//             clearTimeout(timer);
//         }, 800);
//     });
// }

console.log("Promise - 多公司面试课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
