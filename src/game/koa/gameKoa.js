const Koa = require("koa");

const game = require("./game");

const playerWonCode = 1;

const resultConfig = {
    "-1": "你输了!",
    0: "平局!",
    1: "你赢了!"
};

let playerWonCount = 0,
    sameCount = 0,
    playerLastAction = null;

const gameKoa = new Koa();

gameKoa.use(async function (ctx, next) {
    const {response} = ctx;

    if (playerWonCount >= 3 || sameCount === 9) {
        response.status = 500;
        response.body = "你太厉害了!我不跟你玩儿了!";
        return false;
    }

    if (sameCount >= 3) {
        sameCount = 9;
        response.status = 400;
        response.body = "你作弊!";
        return false;
    }

    await next();

    if (ctx.playerWon) playerWonCount++;
});

gameKoa.use(async function (ctx) {
    await new Promise(function (resolve) {
        const timer = setTimeout(function () {
            const {request, response} = ctx;

            const {query: {action}} = request;

            if (playerLastAction && playerLastAction === action) {
                sameCount++;
            } else {
                sameCount = 0;
            }
            playerLastAction = action;

            const result = game(action);

            if (result === playerWonCode)
                ctx.playerWon = true;

            response.status = 200;
            response.body = resultConfig[result];
            resolve();
            clearTimeout(timer);
        }, 500);
    });
});

module.exports = gameKoa;
