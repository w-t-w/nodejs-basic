const argv = process.argv,
    length = argv.length;

const gameSelection = ["scissor", "rock", "paper"],
    selectionLength = gameSelection.length;

const playerAction = argv[length - 1];

if (!gameSelection.includes(playerAction)) {
    console.error("玩家输入的剪刀、石头与布猜拳手势不符合规范!请重新输入!");
    process.exit(0);
}

let position = 0;

const computerRandom = Math.floor(Math.random() * selectionLength);

position = computerRandom + 1;
if (position === selectionLength) position = 0;

const computerAction = gameSelection[computerRandom];

console.log(`玩家: ${playerAction}, 电脑: ${computerAction}`);

if (computerAction === playerAction) {
    console.log("平局!");
} else if (gameSelection[position] === playerAction) {
    console.log("玩家赢!电脑输!");
} else {
    console.log("电脑赢!玩家输!");
}
