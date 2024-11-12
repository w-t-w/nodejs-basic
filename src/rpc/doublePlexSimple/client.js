const net = require("net");

const HOST_NAME = '127.0.0.1';
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

let index = Math.floor(Math.random() * lesson_length),
    seq = 0,
    id = LESSON_ID[index];

const socket = new net.Socket({});

socket.connect({
    host: HOST_NAME,
    port: PORT,
});

socket.write(encode(id));

setInterval(function () {
    index = Math.floor(Math.random() * lesson_length);
    id = LESSON_ID[index];
    socket.write(encode(id));
}, 100);

socket.on("data", function (buffer) {
    const {seq, data} = decode(buffer);
    console.log(`包头为 ${seq} 的包所对应的课程名称 为 ${data}`);
});

function decode(buffer) {
    const seq = buffer.readInt32BE();
    const body = buffer.slice(4);
    return {
        seq,
        data: body.toString()
    };
}

function encode(id) {
    const header = Buffer.alloc(4);
    header.writeInt32BE(seq);
    const body = Buffer.alloc(4);
    body.writeInt32BE(id);
    console.log(`包头为 ${seq} 的包所对应的课程 ID 为 ${id}`);
    seq++;
    return Buffer.concat([header, body]);
}

