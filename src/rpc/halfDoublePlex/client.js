const net = require("net");

const socket = new net.Socket({});

const HOST_NAME = "127.0.0.1";
const PORT = 4000;

const LESSON_ID = [
    "136797",
    "136798",
    "136799",
    "136800",
    "136801",
    "136803",
    "136804",
    "136806",
    "136807",
    "136808",
    "136809",
    "141994",
    "143517",
    "143557",
    "143564",
    "143644",
    "146470",
    "146569",
    "146582"
];
const lesson_length = LESSON_ID.length;

socket.connect({
    host: HOST_NAME,
    port: PORT,
});

let index = Math.floor(Math.random() * lesson_length),
    id = LESSON_ID[index];

socket.write(encode(id));

socket.on("data", function (buffer) {
    const result = buffer.toString();
    console.log(`课程 ID ${id} 所对应的课程名称为 ${result}`);

    index = Math.floor(Math.random() * lesson_length);
    id = LESSON_ID[index];
    socket.write(encode(id));
});

function encode(id) {
    const buffer = Buffer.alloc(4);
    buffer.writeInt32BE(id);
    return buffer;
}
